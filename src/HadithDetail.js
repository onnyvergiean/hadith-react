import React, { useEffect } from "react";

export default function HadithDetail(props) {
  return (
    <div className="container p-3">
      <div className="row mt-3">
        <div className="col-12">
          <div className="border detail-hadith d-flex justify-content-center p-4">
            {props.arab}
            {props.id}
          </div>
        </div>
      </div>
    </div>
  );
}
