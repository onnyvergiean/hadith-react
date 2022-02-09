import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function HadithDetail() {
  const [detailHadith, setDetailHadith] = useState([]);
  let { id, number } = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        let res = await axios.get(
          `https://api.hadith.sutanlab.id/books/${id}/${number}`
        );
        console.log(res);
        setDetailHadith(res.data.data.contents);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (detailHadith) {
    console.log(detailHadith);
    return (
      <div className="container p-3">
        <div className="row mt-3">
          <div className="col-12">
            <div className="border detail-hadith d-flex justify-content-center p-4">
              {detailHadith.arab}
              {detailHadith.id}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container p-3">
        <div className="row mt-3">
          <div className="col-12">
            <div className="border detail-hadith d-flex justify-content-center p-4">
              <h1>Maaf data Hadith tersebut Kosong</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
