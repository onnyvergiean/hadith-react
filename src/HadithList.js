import React, { Component } from "react";
import "./HadithList.css";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { Link } from "react-router-dom";

class HadithList extends Component {
  render() {
    return (
      <div className="col-12 col-md-3 my-2">
        <div className="card-hadith">
          <Link
            to={`hadith/${this.props.id}/1`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <AutoStoriesOutlinedIcon style={{ height: 50, width: 50 }} />
            <h4 key={this.props.id}>{this.props.name}</h4>
            <p>Dengan Jumlah {this.props.available} Data</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default HadithList;
