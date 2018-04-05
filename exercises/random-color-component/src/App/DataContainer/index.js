import React, { Component } from 'react';
import axios from 'axios';

const colorUrl = "http://www.colr.org/json/color/random";

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      backgroundColor: "white"
    }
  }

  componentDidMount() {
    axios.get(colorUrl)
      .then(response => {
        const { colors } = response.data;
        console.log(response.data.colors);
        const indivColor = colors.map(newColor => ("#" + newColor.hex));
        const finalColor = indivColor.toString();
        console.log(finalColor);
        this.setState({
          backgroundColor: finalColor
        })
      })
  }
  render() {
    // const { colors } = this.state;
    return (
       <div style={this.state}></div>
    )
  }
}

export default DataContainer;