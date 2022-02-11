import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
export default function HeadingDetail(props) {
  const [hadithNumber, setHadithNumber] = useState("");

  const handleInput = (evt) => {
    setHadithNumber(evt.target.valueAsNumber);
  };
  const submitHandler = (evt) => {
    evt.preventDefault();
    props.searchHadith(hadithNumber);
  };
  return (
    <div className="header d-flex justify-content-between">
      <Link to="/" style={{ textDecoration: "none" }}>
        <ArrowBackIosOutlinedIcon className="mb-1" />
        <span className="ms-2">{props.nama}</span>
      </Link>
      <form onSubmit={submitHandler}>
        <div className="input-group ">
          <input
            value={hadithNumber}
            onChange={handleInput}
            min="1"
            max={props.available}
            type="number"
            className="form-control"
            placeholder="Masukkan No Hadith"
            style={{ height: 48 }}
          />
        </div>
      </form>
    </div>
  );
}
