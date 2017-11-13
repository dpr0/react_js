import React           from 'react';
import c3              from 'c3';
import formatedColumns from '../../helpers/pieChartHelper';
import PropTypes       from 'prop-types';

class PieChart extends React.Component {
  componentDidMount() {
    this.state = { columns: formatedColumns(this.props) };
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
PieChart.propTypes = {
  posts: PropTypes.object,
};

export default PieChart;
