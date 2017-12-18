import React, { Component } from 'react';
import List from './components/List'
import TableView from './components/TableView'
import SimpleChart from './components/Chart'
// import Newchart from './components/Newchart'
import { TabBarIOS } from 'react-native';

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
        selectedTab={this.state.selectedTab}
      >
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
          <TableView/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'chart'}
          systemIcon='recents'
          onPress={() => {
            this.setState({
              selectedTab: 'chart',
            });
          }}>
          <SimpleChart/>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

export default Main;
