import React, { Component } from "react";
import ChartView from 'react-native-highcharts';

class ChartLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        LOCAL_WD_2MIN_AVG: []
      },
      conf: {},
      options: {}
    };
    this.initChart = this.initChart.bind(this);
  }
  componentWillReceiveProps() {
    console.log('hellllo');
    this.initChart();
  }
  componentDidMount() {
    console.log(this.props.data);
    this.initChart();
  }
  initChart() {
    var self = this;
    var Highcharts = 'Highcharts';
    var conf = {
      chart: {
        type: 'line',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {

            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
              var x = (new Date()).getTime(), // current time
              y = Math.random();
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },
      title: {
        text: 'Line graph'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
          Highcharts.numberFormat(this.y, 2);
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [],
      series: [{
        name: 'Random data',
        data: (function () {
          // generate an array of random data
          var data = [],
          time = (new Date()).getTime(),
          i;
          if (self.props.data['LOCAL_WD_2MIN_AVG'] !== undefined) {
            for (i = 0; i <= self.props.data['LOCAL_WD_2MIN_AVG'].length; i += 1) {
              data.push({
                x: self.props.data['LOCAL_WD_2MIN_AVG'][i],
                y: Math.random()
              });
            }
          }
          console.log('jhjkjk');
          console.log(data);
          return data;
        }())
      }]
    };
    console.log(conf.series);
    const options = {
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: ',',
        thousandsSep: '.'
      }
    };

    this.setState({
      options,
      conf
    }, () => {
      this.forceUpdate()
    })
  }

  render() {
    const { conf, options } = this.state;

    return (
      <ChartView style={{ height:300 }} config={conf} options={options}></ChartView>
    );
  }
}

export default ChartLine;
