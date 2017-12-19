import React, { Component } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { List, ListItem } from 'react-native-elements'
import { View, StyleSheet, ScrollView } from 'react-native';

import Body from '../Layout/Body';

class TableView extends Component {
  render() {
    const tableHead = [
        ['Air Temperature'],
        ['Rel Humidity'],
        ['Air Pressure'],
        ['Local WS'],
    ];
    const tableTitle = ['Min', 'H Min', 'Moy', 'Max', 'H Max'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
    ];

    return (
        <Body title="Table Weather">
            <ScrollView>
                <View>
                  <List containerStyle={{marginBottom: 20, margin: 10}}>
                      {
                          tableHead.map((item, i) => (
                              <ListItem
                                  key={i}
                                  hideChevron
                                  title={
                                  <Table>
                                      <Row data={item} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.textTitle}/>
                                      <TableWrapper style={{flexDirection: 'row'}}>
                                        <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                                        <Rows data={tableData} flexArr={[2, 1, 1]}  style={styles.row}/>
                                      </TableWrapper>
                                  </Table>}
                              />
                          ))
                      }
                  </List>
              </View>
          </ScrollView>
        </Body>
    );
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#222222' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  textTitle: {color: '#ffffff', textAlign: 'center'},

  row: { height: 28},
  text: { textAlign: 'center' }
})

export default TableView;
