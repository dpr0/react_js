import d3 from 'd3';
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
                onclick: function (d, i) { console.log("onclick", d, i); }
            }
        })
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

class PieChartLikes extends React.Component {
    componentDidMount() {
        this.pieChart = c3.generate({
            bindto: this.refs.pieChart,
            data: {
                columns: this.props.postsLikes,
                type : 'pie',
                onclick: function (d, i) { console.log("onclick", d, i); }
            }
        })
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

export default [PieChart, PieChartLikes];
