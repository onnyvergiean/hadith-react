import axios from "axios";
import React, { Component } from "react";
import HadithList from "./HadithList";
import Heading from "./Heading";
import Spinner from "./Spinner";
class Hadith extends Component {
  constructor(props) {
    super(props);
    this.state = { listhadith: [], isLoading: true };
  }
  async componentDidMount() {
    let res = await axios.get("https://api.hadith.sutanlab.id/books");
    this.setState({
      listhadith: res.data.data,
      isLoading: false,
    });
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
    let renderData = this.state.isLoading ? <Spinner /> : listhadith;
    return (
      <>
        <Heading />
        <div className="container mt-4">
          <div className="row text-center justify-content-center">
            {renderData}
          </div>
        </div>
      </>
    );
  }
}

export default Hadith;
