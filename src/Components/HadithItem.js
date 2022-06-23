import React from 'react';
import { Link } from 'react-router-dom';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
export default function HadithItem(props) {
  return (
    <div className="col-12 col-md-3 my-2">
      <div className="card-hadith">
        <Link
          to={`/${props.id}`}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <AutoStoriesOutlinedIcon style={{ height: 50, width: 50 }} />
          <h4 key={props.id}>{props.name}</h4>
          <p>Dengan Jumlah {props.available} Data</p>
        </Link>
      </div>
    </div>
  );
}
