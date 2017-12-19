import React, { Component } from 'react';
import UploadView from './components/UploadView'
import TableView from './components/TableView'
import ChartLine from './components/ChartLine'
import ChartBar from './components/ChartBar'
// import Newchart from './components/Newchart'
import { Header } from 'react-native-elements';
import { TabBarIOS, View, ScrollView } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'list'
    };
  }
  render() {
    return(
        <TabBarIOS
          barStyle="black"
          tintColor="white"
          selectedTab={this.state.selectedTab}
        >
          <TabBarIOS.Item
            title="Upload"
            systemIcon='featured'
            selected={this.state.selectedTab === 'list'}
            onPress={() => {
              this.setState({
                selectedTab: 'list',
              });
            }}>
            <UploadView/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            selected={this.state.selectedTab === 'tab'}
            title="Upload"
            systemIcon='most-viewed'
            onPress={() => {
              this.setState({
                selectedTab: 'tab',
              });
            }}>
            <TableView/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            selected={this.state.selectedTab === 'chart'}
            systemIcon='recents'
            title="Upload"
            onPress={() => {
              this.setState({
                selectedTab: 'chart',
              });
            }}>
            <View>
                <ScrollView>
                    <ChartLine/>
                    <ChartBar/>
                </ScrollView>
            </View>

          </TabBarIOS.Item>

        </TabBarIOS>
    );
  }
}

export default Main;
