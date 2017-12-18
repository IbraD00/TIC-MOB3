import React, { Component } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


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

const styles = StyleSheet.create(){
    table: { width: 360, flexDirection: 'row' },
    head: { backgroundColor: '#333', height: 40 },
    headText: { color: '#fff', textAlign: 'center' },
    titleText: { marginLeft: 6 },
    list: { height: 28, backgroundColor: '#f0f0f0' },
    listText: { textAlign: 'right', marginRight: 6 },
    tableview: { paddingTop: '30%'}
}
