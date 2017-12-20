import React, { Component } from 'react';
import update from 'react-addons-update';
import _ from 'lodash';
import { If, Then } from 'react-if';
import { View, ListView, ScrollView, ActivityIndicator } from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { Button, Text, List, ListItem, Icon } from 'react-native-elements';

import styleText from '../Styles/Text';
import styleBtn from '../Styles/Button';
import Body from '../Layout/Body';
import Content from '../Layout/Content';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class UploadView extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      content: [],
      data: "",
      title: 'ibra',
      files: [{
        name: 'text.txt',
        type: 'text'
      }]
    };
    this.browse.bind(this);
  }

  browse() {
    let self = this;
    DocumentPicker.show({
      filetype: [
        DocumentPickerUtil.allFiles(),
        'public.content',
        'public.composite-content'
      ],
    }, (error, res) => {
      let index = _.findIndex(this.state.files, (o) => { return o.name === res.fileName });
      if (index === -1) {
        this.setState({
          loading: true,
        }, () => {
          fetch(res.uri)
          .then((response) => {
            if (response.status === 200) {
              console.log(response);
              self.setState({
                data: response._bodyText,
                values: [],
                files: _.concat(self.state.files, {
                  name: res.fileName,
                  type: res.type
                })
              }, () => {
                self.setState({
                  loading: false,
                }, () => {
                  let value = this.state.data;
                  let content = [];

                  for (let i = 1; i < 2; i++) {
                    data = value.split('\n')[i].split('\t');
                    for (let y = 0; y < data.length; y++) {
                      content[data[y]] = [];
                      for (let x = 2; x < data.length; x++) {
                        datax = value.split('\n')[x].split('\t');
                        content[data[y]].push(datax[y]);
                      }
                    }
                  }

                  console.log(content);

                  this.setState({
                    content
                  }, () => { });
                });
              });
            } else {
              self.setState({
                loading: false,
              });
            }
          });
        });
      }
    });
  }

  removeFile(index) {
    this.setState({
      loading: true,
      files: update(this.state.files, { $splice: [[index, 1]] })
    }, () => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { title, files, loading } = this.state;
    return (
      <Body title="Bienvenue dans AppWeather">
        <If condition={loading}>
          <Then>
            <ActivityIndicator size="large" color="#000" />
          </Then>
        </If>
        <Button
          raised
          onPress={this.browse.bind(this)}
          icon={{ name: 'cloud', size: 16 }}
          buttonStyle={styleBtn.btnPrimary}
          textStyle={styleBtn.btnPrimaryText}
          title={`Upload`}
        />
        <Content>
          <Text h4>Historique {title}</Text>
          <ScrollView>
            <List containerStyle={{ marginBottom: 20 }}>
              {
                files.map((item, index) => (
                  <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.type}
                    onPressRightIcon={() => this.removeFile(index)}
                    rightIcon={{ name: 'close' }}
                  />
                ))
              }
            </List>
          </ScrollView>
        </Content>
      </Body>
    );
  }
}

export default UploadView;
