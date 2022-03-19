import React from "react";

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let temp = props.topics[i];
    lis.push(
      <li key={temp.id}>
        <a
          id={temp.id}
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {temp.title}
        </a>
      </li>
    );
  }
  return <ol>{lis}</ol>;
}

export default Nav;
