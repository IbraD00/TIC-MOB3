import React, { Component } from 'react';
import UploadView from './components/UploadView'
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
        barStyle="black"
        tintColor="white"
        selectedTab={this.state.selectedTab}
      >
        <TabBarIOS.Item
          title="Upload"
          selected={this.state.selectedTab === 'list'}
          systemIcon='history'
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
          <SimpleChart/>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

export default Main;
