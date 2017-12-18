import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { View } from 'react-native';

class TableView extends Component {
  render() {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];

    return (
      <View>
        <Table>
          <Row data={tableHead}/>
          <Rows data={tableData}/>
        </Table>
      </View>
    );
  }
}

export default TableView;
