import React from "react";
import "./Comments.css";
const Comments = ({ comment,who }) => {
  return (
    <div className="comments">
      <h4>by : {who}</h4>
      <h6>{comment}</h6>
    </div>
  );
};

export default Comments;
