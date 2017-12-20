import React, { Component } from 'react';
import { TabBarIOS, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

import UploadView from './components/UploadView';
import TableView from './components/TableView';
import ChartLine from './components/ChartLine';
import ChartBar from './components/ChartBar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'list',
      data: {}
    };
  }
  updateData(data) {
    this.setState({
      data: data
    }, () => {
      this.forceUpdate();
      console.log('GOOd');
      console.log(data['LOCAL_WS_10MIN_MNM']);
    })
  }
  render() {
    const { data } = this.state;
    return (
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
            <UploadView updateData={(data) => this.updateData(data)}/>
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
            <TableView data={data} />
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
                    <ChartLine data={this.state.data}/>
                    <ChartBar/>
                </ScrollView>
            </View>

          </TabBarIOS.Item>

        </TabBarIOS>
    );
  }
}

export default Main;
