/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
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


class TableView extends Component {
  render() {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];

    return (
      <View>
        <Table style={styles.tableview}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
        </Table>
      </View>
    );
  }
}

class Chart extends Component {
    render(){
        return(
            <Text style={styles.description}>ChartView</Text>
        );
    }
}
class Tab extends Component {
    render(){
        return(
            <TableView/>
        );
    }
}

class List extends Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
    }

    render() {
      return (
        <ListView
            style={styles.tab}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      );
    }
}

class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'list'
        };
      }

    render(){
        return(
            <TabBarIOS
                selectedTab={this.state.selectedTab}
                style={styles.Tab}>

              <TabBarIOS.Item
                selected={this.state.selectedTab === 'list'}
                systemIcon='featured'
                onPress={() => {
                    this.setState({
                        selectedTab: 'list',
                    });
                }}>
                  <List/>
              </TabBarIOS.Item>

              <TabBarIOS.Item
                selected={this.state.selectedTab === 'tab'}
                systemIcon='most-viewed'
                onPress={() => {
                      this.setState({
                          selectedTab: 'tab',
                      });
                }}>
                <Tab/>
              </TabBarIOS.Item>

              <TabBarIOS.Item
                selected={this.state.selectedTab === 'chart'}
                systemIcon='recents'
                onPress={() => {
                      this.setState({
                          selectedTab: 'chart',
                      });
                }}>
                <Chart/>
              </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}

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

export default class App extends Component<{}> {

  render() {
    return (
        //<List />
        //<View><Picker /></View>
        <TabBar />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  description: {
      fontSize: 20,
      textAlign: 'center',
      color: '#000',
      justifyContent: 'center',
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '30%'
  },
  tab: {
      flex: 1,
      flexDirection: 'column',
  },
  chart: {
      width: 200,
      height: 200,
    },
    table: { width: 360, flexDirection: 'row' },
    head: { backgroundColor: '#333', height: 40 },
    headText: { color: '#fff', textAlign: 'center' },
    titleText: { marginLeft: 6 },
    list: { height: 28, backgroundColor: '#f0f0f0' },
    listText: { textAlign: 'right', marginRight: 6 },
    tableview: { paddingTop: '30%'}
});
