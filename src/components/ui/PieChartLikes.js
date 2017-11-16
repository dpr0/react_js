import React     from 'react';
import c3        from 'c3';
import PropTypes from 'prop-types';

class PieChartLikes extends React.Component {
  componentDidMount() {
    this.pieChart = c3.generate({
      bindto: this.refs.pieChart,
      data: {
        columns: this.props.postsLikes,
        type : 'pie',
      }
    });
  }

  componentWillUnmount() {
    this.pieChart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.pieChart.load({columns: newProps.postsLikes});
  }

  render() {
    return (
      <div ref="pieChart" />
    );
  }
}
PieChartLikes.defaultProps = {};
PieChartLikes.propTypes = {
  postsLikes: PropTypes.array,
};

export default PieChartLikes;
