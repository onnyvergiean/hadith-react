import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HadithDetail from "./HadithDetail";
import axios from "axios";

export default function GetHadithDetail(props) {
  const [detailHadith, setDetailHadith] = useState([]);
  const [hadithName, setHadithName] = useState("");
  let { id, number } = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        let res = await axios.get(
          `https://api.hadith.sutanlab.id/books/${id}/${number}`
        );
        setHadithName(res.data.data.name);
        setDetailHadith(res.data.data.contents);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
    document.title = `${hadithName} - Hadith no ${number}`;
  }, [hadithName]);

  if (detailHadith) {
    return <HadithDetail arab={detailHadith.arab} id={detailHadith.id} />;
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
