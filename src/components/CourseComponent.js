import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourseComponent.css";
const CourseComponent = ({ image, index, title, price }) => {
  const navi = useNavigate();
  return (
    <div
      className="course"
      onClick={() => navi(`/coursedetails/${index}`)}
    >
      <div className="card">
        <div className="price_image card-img-top">
          <img src={image} className="myimage" alt="image" />
          <div className="price">{price} LE</div>
        </div>
        <div className="card-body cardbodyy">
          <h5 className="card-title desc">{title}</h5>
            <hr />
          <div className="buy">
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
