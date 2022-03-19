import React from "react";

function Create(props) {
  return (
    <article>
      <h3> 크레에이트</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
          <br />
          <textarea name="body" placeholder="입력하세요"></textarea>
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>
    </article>
  );
}

export default Create;
