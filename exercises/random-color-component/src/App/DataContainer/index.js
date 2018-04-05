import React, { Component } from 'react';
import axios from 'axios';

const colorUrl = "http://www.colr.org/json/color/random";

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      backgroundColor: "white",
      height: "100vh",
      width: "100%",
    }
  }

  componentDidMount() {
    axios.get(colorUrl)
      .then(response => {
        const { colors } = response.data;
        console.log(response.data);
        const newColor = colors.map(randColor => ("#" + randColor.hex));
        console.log(newColor);
        const finalColor = newColor.toString();
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