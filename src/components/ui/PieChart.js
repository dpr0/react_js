import React from 'react';
import c3 from 'c3';
import formatedColumns from '../../helpers/pieChartHelper';

class PieChart extends React.Component {
  componentDidMount() {
    this.state = { columns: formatedColumns(this.props.posts) };
    this.pieChart = c3.generate({
      bindto: this.refs.pieChart,
      data: {
        columns: formatedColumns(this.props),
        type : 'pie',
      }
    });
  }

  componentWillUnmount() {
    this.pieChart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.pieChart.load({columns: formatedColumns(newProps)});
  }

  render() {
    return (
      <div ref="pieChart" />
    );
  }
}
PieChart.defaultProps = {};
PieChart.propTypes = {};

export default PieChart;
