import React, { useEffect, useState } from "react";
import {
  useParams,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import HadithDetail from "./HadithDetail";
import HeadingDetail from "./HeadingDetail";
import Navigator from "./Navigator";
import Spinner from "./Spinner";
import "./HadithList.css";
import axios from "axios";

export default function GetHadithDetail(props) {
  const [detailHadith, setDetailHadith] = useState([]);
  const [hadithName, setHadithName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hadithAvailable, setHadithAvailable] = useState();
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
        setHadithAvailable(res.data.data.available);
        setIsLoading(false);
      };

      fetchData();
      setIsLoading(true);

      document.title = `${hadithName} - Hadith no ${hadithNumber}`;
    } catch (error) {
      console.log(error);
    }
  }, [hadithNumber, hadithName]);

  const search = (newNumber) => {
    setHadithNumber(newNumber);
    setIsLoading(false);
  };

  const nextHadith = () => {
    setHadithNumber((prevState) => prevState + 1);
    setIsLoading(true);
  };
  const backHadith = () => {
    setHadithNumber((prevState) => prevState - 1);
    setIsLoading(true);
  };

  if (isLoading) {
    return <Spinner />;
  } else if (detailHadith) {
    return (
      <>
        <div className="container p-3">
          <HeadingDetail
            searchHadith={search}
            nama={hadithName}
            available={hadithAvailable}
          />
          <Navigator
            number={hadithNumber}
            available={hadithAvailable}
            next={nextHadith}
            back={backHadith}
          />
          <HadithDetail arab={detailHadith.arab} id={detailHadith.id} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container p-3">
          <HeadingDetail
            searchHadith={search}
            nama={hadithName}
            available={hadithAvailable}
          />
          <Navigator
            number={hadithNumber}
            available={hadithAvailable}
            next={nextHadith}
            back={backHadith}
          />
          <div className="container p-3">
            <div className="row mt-3">
              <div className="col-12">
                <div className="border detail-hadith d-flex justify-content-center p-4">
                  <h1>Maaf data Hadith tersebut Kosong</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
