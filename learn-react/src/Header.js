import React from "react";

function Header(props) {
  return (
    <header>
      <h2>
        <a
          id={props.n_name}
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {props.title}
        </a>
      </h2>
    </header>
  );
}

export default Header;
