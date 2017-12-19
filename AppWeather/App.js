import React, { Component } from 'react';
import Main from './Main'
import { View } from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

  }
  render() {
    return (
      <Main />
    );
  }
}
