import React from 'react';

export default function HadithDetailItem(props) {
  return (
    <div className="row mt-3">
      <div className="col-12">
        <div className="border detail-hadith d-flex justify-content-center p-4">
          <div>
            <p id="arabic-hadith">{props.arab}</p>
            <hr />
            <p id="idn-hadith">{props.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
