import React, { Component } from "react";
import "./HadithList.css";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
class HadithList extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="card-hadith">
          <div>
            <AutoStoriesOutlinedIcon style={{ height: 80, width: 80 }} />
            <h4 key={this.props.id}>{this.props.name}</h4>
            <p>Dengan Jumlah {this.props.available} Data</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HadithList;
