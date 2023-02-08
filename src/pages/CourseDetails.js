import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import "./CourseDetails.css";
const CourseDetails = () => {
  const { id } = useParams();
  const [myydata, setmydata] = useState({});
  const [myycomments, setmycomments] = useState([]);
  const [loading, setloading] = useState(true);
  const apiurL = "https://test.plan-b-eg.com/api/Courses/GetCourseDetails?";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMDg3MDgiLCJyb2xlIjpbIkNvbnN1bWVyIiwiNTI4MjciXSwibmJmIjoxNjc1ODQ4MjU3LCJleHAiOjE2NzU4NTU0NTcsImlhdCI6MTY3NTg0ODI1N30.bgSlaHU1fueXl8TlTBmj9dQnt4MHqTH4Wub-jCqaEKo";
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    axios
      .get(`${apiurL}courseId=${id}&lang=en`)
      .then((response) => {
        setmydata(response.data);
        setmycomments(response.data.comments);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="coursedetails">
      {!loading ? (
        <div style={{ height: "100%", width: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src={myydata.promo}
            title={myydata.title}
            className="videopromo"
          ></iframe>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Description :</h2>
                <p className="description">{myydata.desc}</p>
              </div>
              <div className="col-md-6 buydetails">
                <div className="buydetails1">
                  <img src={myydata.photo} alt="" className="photobuy" />
                  <div className="pricedetails">
                    <span>Total : Usd{(myydata.price / 30).toFixed(2)}</span>
                    <span>Total : EGP {myydata.price}</span>
                  </div>
                  <button className="btn btn-primary buycourse">BUY NOW</button>
                </div>
              </div>
            </div>
            <h2>Comments :</h2>
            <div className="row">
              {myycomments.slice(0, 10).map((com, index) => {
                return (
                  <div className="col-12 col-md-7" key={index}>
                    <Comments comment={com.comment} who={com.by} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default CourseDetails;
