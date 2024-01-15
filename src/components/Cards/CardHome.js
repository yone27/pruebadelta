import React from "react";
import { Link } from 'react-router-dom';

const CardHome = ({data}) => {
  return (
        <div className="ag-courses_item">
          <Link to={data.url} className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">{data.title}</div>

            <div className="ag-courses-item_date-box">
              <span className="ag-courses-item_date">{data.description}</span>
            </div>
          </Link>
    </div>
  );
};

export default CardHome;
