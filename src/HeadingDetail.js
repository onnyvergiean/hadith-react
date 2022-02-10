import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
export default function HeadingDetail(props) {
  const [hadithNumber, setHadithNumber] = useState("");

  const handleInput = (evt) => {
    setHadithNumber(evt.target.value);
    props.searchHadith(hadithNumber);
    console.log(evt.target.value);
  };
  const submitHandler = (evt) => {
    evt.preventDefault();
    props.searchHadith(hadithNumber);
  };
  return (
    <div className="container p-3">
      <div className="header d-flex justify-content-between">
        <Link to="/" style={{ textDecoration: "none" }}>
          <ArrowBackIosOutlinedIcon />
          <span className="ms-2">{props.nama}</span>
        </Link>
        <form onSubmit={submitHandler}>
          <div className="input-group ">
            <input
              value={hadithNumber}
              onChange={handleInput}
              className="form-control"
              placeholder="Masukkan No Hadith"
              style={{ height: 48 }}
            />

            <button
              className="btn btn-dark btn-lg"
              style={{ width: "100px", height: "100%" }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
