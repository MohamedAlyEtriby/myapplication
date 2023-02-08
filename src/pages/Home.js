import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import CourseComponent from "../components/CourseComponent";
const Home = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setloading] = useState(true);
  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://test.plan-b-eg.com/api/Courses/GetAllCourses?lang=en&limit=12&page=1"
      )
      .then((response) => {
        setMyData(response.data);
        setloading(false);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="HomeBack">
      {!loading ? (
        <div className="container">
          <div className="mygrid">
            {myData.map((data, index) => {
              return (
                <CourseComponent
                  image={data.photo}
                  index={data.id}
                  title={data.name}
                  price={data.price}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
