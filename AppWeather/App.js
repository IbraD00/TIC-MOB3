/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
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
  StatusBar,
  Navigator
} from 'react-native';

//var list = require('./components/List');
class Welcome extends Component {
    render(){
        return(
            <Text style={styles.description}>Welcome</Text>
        );
    }
}

class More extends Component {
    render(){
        return(
            <Text style={styles.description}>More</Text>
        );
    }
}

class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'welcome'
        };
      }

    render(){
        return(
            <TabBarIOS
                selectedTab={this.state.selectedTab}
                style={styles.Tab}>
              <TabBarIOS.Item
                selected={this.state.selectedTab === 'welcome'}
                systemIcon='downloads'
                onPress={() => {
                    this.setState({
                        selectedTab: 'welcome',
                    });
                }}>
                  <Welcome/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                selected={this.state.selectedTab === 'more'}
                systemIcon='most-viewed'
                onPress={() => {
                      this.setState({
                          selectedTab: 'more',
                      });
                }}>
                <More/>
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
justifyContent: 'center',
alignItems: 'center',
  }
});
