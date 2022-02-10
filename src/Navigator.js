import React from "react";
import "./HadithList.css";
export default function Navigator(props) {
  return (
    <div className="row mt-3 navigator">
      <div className="col-12 col-md-2 align-self-center">
        <button
          className={
            "btn btn-outline-success" + (props.number === 1 ? " disabled" : "")
          }
          id="backHadith"
          onClick={props.back}
        >
          Sebelumnya
        </button>
      </div>
      <div className="col-12 col-md-8 text-center align-self-center my-3">
        <div id="no-hadith">
          <h5>Hadith Nomor</h5>
          <h3>{props.number}</h3>
        </div>
      </div>
      <div className="col-12 col-md-2 align-self-center">
        <button
          className="btn btn-outline-success"
          id="nextHadith"
          onClick={props.next}
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
