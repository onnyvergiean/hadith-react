import React from 'react';

export default function CardListHadith(props) {
  return (
    <div className="container mt-4">
      <div className="row text-center justify-content-center">
        {props.children}
      </div>
    </div>
  );
}
