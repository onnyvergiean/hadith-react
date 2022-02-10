import React, { useEffect, useState } from "react";
import {
  useParams,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import HadithDetail from "./HadithDetail";
import HeadingDetail from "./HeadingDetail";
import "./HadithList.css";
import axios from "axios";

export default function GetHadithDetail(props) {
  const [detailHadith, setDetailHadith] = useState([]);
  const [hadithName, setHadithName] = useState("");
  let { id } = useParams();
  const [hadithNumber, setHadithNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    try {
      const fetchData = async () => {
        let res = await axios.get(
          `https://api.hadith.sutanlab.id/books/${id}/${hadithNumber}`
        );
        setSearchParams(createSearchParams({ no: hadithNumber }));
        setDetailHadith(res.data.data.contents);
        setHadithName(res.data.data.name);
      };

      fetchData();

      document.title = `${hadithName} - Hadith no ${hadithNumber}`;
    } catch (error) {
      console.log(error);
    }
  }, [hadithNumber, hadithName]);

  const search = (newNumber) => {
    setHadithNumber(newNumber);
  };

  if (detailHadith) {
    return (
      <>
        <HeadingDetail searchHadith={search} nama={hadithName} />
        <HadithDetail arab={detailHadith.arab} id={detailHadith.id} />
      </>
    );
  } else {
    return (
      <>
        <HeadingDetail searchHadith={search} nama={hadithName} />
        <div className="container p-3">
          <div className="row mt-3">
            <div className="col-12">
              <div className="border detail-hadith d-flex justify-content-center p-4">
                <h1>Maaf data Hadith tersebut Kosong</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
