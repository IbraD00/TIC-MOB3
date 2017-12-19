import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import styleText from '../Styles/Text'

class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          marginTop: 20
        }}
      >
        <Text h3 style={styleText.titleText}>{this.props.title}</Text>
        <View
          style={{
            flex: 1,
            marginTop: 20
          }}
        >
          {this.props.children}
        </View>
      </View>
    )
  }
}

export default Body;
