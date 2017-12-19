import React, { Component } from 'react';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';


class Picker extends Component {
  render(){
    return(
      <Button
        onPress={() => {
          DocumentPicker.show({
            filetype: [DocumentPickerUtil.images()],
          },(error,res) => {
            // Android
            console.log(
              res.uri,
              res.type, // mime type
              res.fileName,
              res.fileSize
            );
          });
        }}
        title="Upload file"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
  );
}
}

export default Picker;
