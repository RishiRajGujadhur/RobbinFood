import { connect } from "react-redux";
import Chart from "./homepage_chart";

const msp = state => {
  // debugger
  return {
    charts: state.entities.charts,
    prev: state.entities.charts.prev
  };
};

export default connect(
  msp,
  null
)(Chart);
