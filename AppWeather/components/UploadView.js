import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { Button, Text } from 'react-native-elements';

import styleText from '../Styles/Text'
import styleBtn from '../Styles/Button'
import Body from '../Layout/Body'
import Content from '../Layout/Content'

class UploadView extends Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
    }

    browse() {
      DocumentPicker.show({
      },(error,res) => {
        console.log(
          res.uri,
          res.type, // mime type
          res.fileName,
          res.fileSize
        );
      });
    }

    render() {
      return (
        <Body title="Bienvenue dans AppWeather">
          <Button
            raised
            onPress={this.browse}
            icon={{name: 'cloud', size: 16}}
            buttonStyle={styleBtn.btnPrimary}
            textStyle={styleBtn.btnPrimaryText}
            title={`Upload`}
          />
          <Content>
            <Text h4>Historique</Text>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData}</Text>}
            />
          </Content>
        </Body>
      );
    }
}

export default UploadView;
