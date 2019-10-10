import React from "react";
import WatchListsContainer from '../watchlists/watchlist_container'
import { Link } from "react-router-dom";
import TopNewsContainer from '../news/top_news_container'
import ChartContainer from  './homepage_chart_container'
class PostLogHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { prev: null, ownedStocks: [], watchedStocks: [], profileCharts: { "1d": [] } };

  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUserId);
  }

  componentWillReceiveProps(nextProps) {
    // if (Object.entries(this.props.stocks).length === 0 && this.props.stocks.constructor === Object) { //Code to see if an object is empty taken from https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    //   this.props.getSearch();
    // }
    // this.props.getNews();
    if (nextProps.ownedStocks) {
      
      // let symbols = nextProps.ownedStocks.map(stock => stock.symbol);
      let symbols = Object.keys(nextProps.ownedStocks)
      const watchSymbols = Object.keys(nextProps.watchLists).map(key => nextProps.watchLists[key].symbol);
    symbols = symbols.concat(watchSymbols, ["AAPL"]);
    symbols = [...new Set(symbols.concat(["AAPL"]))];
    nextProps.getStockDisplay(symbols, nextProps.ownedStocks, new Set(watchSymbols))
      .then(nextProps.getStockHistoricalCharts(symbols, nextProps.transactions));
    }
  }
  render() {
    return (
      <div className="postlog-home-container">
        <main id="main-page">
          <div>
            <ChartContainer name={"DemoUser"} />
            <TopNewsContainer />
          </div>
          <div id="side-column">
            <div className="fixed">
              <WatchListsContainer  />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default PostLogHome;
