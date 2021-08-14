import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
 
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { confidence } from '../../models/data-vizualization';
import useStyles from "./styles";

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}%`}
    />
  );
};


const CartGraphData = () => {
  const classes = useStyles();
  const format = () => tick => tick;
  const[chartData] = useState(confidence);
    return (
      <Paper className={classes.chart}>
        <Chart
          data={chartData}
          
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis
            labelComponent={ValueLabel}
          />

          <LineSeries
            name="TV news"
            valueField="tvNews"
            argumentField="year"
          />
          <LineSeries
            name="Church"
            valueField="church"
            argumentField="year"
          />
          <LineSeries
            name="Military"
            valueField="military"
            argumentField="year"
          />
          
          <Animation />
        </Chart>
      </Paper>
    );
}

export default CartGraphData;