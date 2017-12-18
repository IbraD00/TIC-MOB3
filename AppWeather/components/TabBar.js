import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TabBarIOS } from 'react-native';


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
