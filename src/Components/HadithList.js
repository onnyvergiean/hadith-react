import React, { useState, useEffect } from 'react';

import hadithURL from '../API/hadith';
import Spinner from '../Elements/Spinner';
import HadithItem from './HadithItem';
import CardListHadith from '../UI/CardListHadith';
import '../Assets/Hadith.css';
import Heading from './Heading';
import { Helmet } from 'react-helmet';

export default function HadithList() {
  const [hadith, setHadith] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchHadith = async () => {
        const response = await hadithURL.get(`/books`);
        setHadith(response.data.data);
        setLoading(false);
      };
      fetchHadith();
    } catch (error) {
      console.log(error);
    }
  }, []);

  let listHadith = '';

  if (loading) {
    listHadith = <Spinner />;
  } else {
    listHadith = hadith.map((i) => (
      <HadithItem id={i.id} name={i.name} available={i.available} key={i.id} />
    ));
  }

  return (
    <>
      <Helmet>
        <title>Hadith Apps</title>
      </Helmet>
      <Heading />
      <CardListHadith>{listHadith}</CardListHadith>
    </>
  );
}
