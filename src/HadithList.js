import React, { Component } from "react";
import "./HadithList.css";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { Link } from "react-router-dom";
class HadithList extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="card-hadith">
          <div>
            <Link to={`hadith/${this.props.id}/1`}>
              <button type="button">
                <AutoStoriesOutlinedIcon style={{ height: 80, width: 80 }} />
                <h4 key={this.props.id}>{this.props.name}</h4>
                <p>Dengan Jumlah {this.props.available} Data</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HadithList;
