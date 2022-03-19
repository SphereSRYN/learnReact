import React from "react";

function Article(props) {
  return (
    <h4>
      {props.title}&nbsp;
      {props.body}
    </h4>
  );
}

export default Article;
