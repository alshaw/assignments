import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuotes } from "../../redux/quotes.js";
// import DataLoader from "../DataLoader";
import SingleQuote from "./SingleQuote";

class QuoteList extends Component {
  componentDidMount() {
    this.props.getQuotes();
  }
  render() {
    const { data, loading, errMsg } = this.props;
    const quoteComponents = data.map((quote, i) => (
      <SingleQuote key={quote.name + i} quote={quote}/>
    ));
    if (loading) {
      return <h1>Loading</h1>;
    } else if (errMsg) {
      return <div>{errMsg}</div>;
    } else {
      return <div>{quoteComponents}</div>;
    }
  }
}
const mapStateToProps = state => {
  return state.quotes;
};

export default connect(mapStateToProps, { getQuotes })(QuoteList);
