import axios from "axios";
import React, { Component } from "react";
import HadithList from "./HadithList";

class Hadith extends Component {
  constructor(props) {
    super(props);
    this.state = { listhadith: [] };
  }
  async componentDidMount() {
    let res = await axios.get("https://api.hadith.sutanlab.id/books");
    this.setState({ listhadith: res.data.data });
  }
  render() {
    let listhadith = this.state.listhadith.map((i) => {
      return (
        <HadithList
          key={i.id}
          id={i.id}
          name={i.name}
          available={i.available}
        />
      );
    });
    return (
      <div className="container">
        <div className="row col-12 text-center justify-content-center col-12">
          {listhadith}
        </div>
      </div>
    );
  }
}

export default Hadith;
