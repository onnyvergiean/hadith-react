import React, { useEffect, useState } from 'react';
import {
  useParams,
  createSearchParams,
  useSearchParams,
} from 'react-router-dom';
import HadithDetailItem from './HadithDetailItem';
import HeadingDetail from './HeadingDetail';
import HadithDetailNav from './HadithDetailNav';
import Spinner from '../Elements/Spinner';
import hadithURL from '../API/hadith';
import '../Assets/Hadith.css';
import { Helmet } from 'react-helmet';

export default function HadithDetail() {
  const [detailHadith, setDetailHadith] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  let { id } = useParams();
  let hadithId = searchParams.get('no');
  const [hadithNumber, setHadithNumber] = useState(Number(hadithId) || 1);

  useEffect(() => {
    const fetchData = async () => {
      let res = await hadithURL.get(`/books/${id}/${hadithNumber}`);
      setSearchParams(createSearchParams({ no: hadithNumber }));
      setDetailHadith(res.data.data);
      setIsLoading(false);
    };
    fetchData();
    setIsLoading(true);
  }, [id, hadithNumber]);

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
  } else if (detailHadith.hasOwnProperty('contents')) {
    return (
      <>
        <Helmet>
          <title>{`${detailHadith.name} No ${hadithNumber}`}</title>
        </Helmet>
        <div className="container p-3">
          <HeadingDetail
            searchHadith={search}
            nama={detailHadith.name}
            available={detailHadith.available}
          />
          <HadithDetailNav
            number={hadithNumber}
            available={detailHadith.available}
            id={detailHadith.id}
            hadithNumber
            next={nextHadith}
            back={backHadith}
          />
          <HadithDetailItem
            arab={detailHadith.contents.arab}
            id={detailHadith.contents.id}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        {' '}
        <Helmet>
          <title>{`${detailHadith.name} No ${hadithNumber}`}</title>
        </Helmet>
        <div className="container p-3">
          <HeadingDetail
            searchHadith={search}
            nama={detailHadith.name}
            available={detailHadith.available}
          />
          <HadithDetailNav
            number={hadithNumber}
            available={detailHadith.available}
            id={detailHadith.id}
            hadithNumber
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
