/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Main from './Main'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ListView,
  AppRegistry,
  TabBarIOS,
  ScrollView,
} from 'react-native';

export default class App extends Component<{}> {

  render() {
    return (
        <Main />
    );
  }
}
