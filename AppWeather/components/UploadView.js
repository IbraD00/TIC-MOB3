import React, { Component } from 'react';
import update from 'react-addons-update';
import _ from 'lodash';

import { View, ListView, ScrollView } from 'react-native';
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
        title: 'ibra',
        files: [{
          name: 'text.txt',
          type: 'text'
        }]
      };
      this.browse.bind(this);
    }

    browse() {
      DocumentPicker.show({
        filetype: [DocumentPickerUtil.allFiles(), 'public.content', 'public.composite-content'],
      },(error,res) => {
        let index = _.findIndex(this.state.files, (o) => { return o.name === res.fileName });
        if (index === -1) {
          this.setState({
            files: _.concat(this.state.files, {
              name: res.fileName,
              type: res.type
            })
          }, () => {
            fetch(url).then(function(response) {
              console.log(response);
            }).then(function(data) {
              console.log(data);
            }).catch(function() {
              console.log("Booo");
            });
          })
          console.log('IIIICII');
          console.log(
            res.uri,
            res.type, // mime type
            res.fileName,
            res.fileSize
          );
        }
      });
    }

    removeFile(index) {
      this.setState({
        files: update(this.state.files, { $splice: [[index, 1]] })
      })
    }

    render() {
      const { title, files } = this.state;
      return (
        <Body title="Bienvenue dans AppWeather">
          <Button
            raised
            onPress={this.browse.bind(this)}
            icon={{name: 'cloud', size: 16}}
            buttonStyle={styleBtn.btnPrimary}
            textStyle={styleBtn.btnPrimaryText}
            title={`Upload`}
          />
          <Content>
            <Text h4>Historique</Text>
            <ScrollView>
                <List containerStyle={{marginBottom: 20}}>
                  {
                    files.map((item, index) => (
                      <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.type}
                        onPressRightIcon={() => this.removeFile(index)}
                        rightIcon={{name: 'close'}}
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
