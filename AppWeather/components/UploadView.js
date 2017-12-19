import React, { Component } from 'react';
import { View, ListView, ScrollView } from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { Button, Text, List, ListItem, Icon } from 'react-native-elements';

import styleText from '../Styles/Text'
import styleBtn from '../Styles/Button'
import Body from '../Layout/Body'
import Content from '../Layout/Content'
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
      console.log(this.state);
      DocumentPicker.show({
        filetype: [DocumentPickerUtil.allFiles(), 'public.content', 'public.composite-content'],
      },(error,res) => {
        this.setState({
          files: this.state.files.concat({
            name: res.fileName,
            type: res.type
          })
        })
        console.log('IIIICII');
        console.log(
          res.uri,
          res.type, // mime type
          res.fileName,
          res.fileSize
        );
      });
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
                        rightIcon={<Icon name='close' />}
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
