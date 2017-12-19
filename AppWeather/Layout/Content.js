import React, { Component } from 'react';
import { View } from 'react-native';

class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 20
        }}
      >
        {this.props.children}
      </View>
    )
  }
}

export default Content;
