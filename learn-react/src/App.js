import "./App.css";
import Nav from "./Nav";
import Create from "./Create";
import Header from "./Header";
import { useState } from "react";
import Article from "./Article";
/** react에서 기본제공하는 함수 Hook */

function App() {
  // const _mode = useState("welcome");
  // const mode = _mode[0]; /** 0번 */
  // const setMode = _mode[1]; /** 함수 */
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html.." },
    { id: 2, title: "js", body: "js.." },
    { id: 3, title: "css", body: "css.." },
  ]);
  const [nextId, setNextId] = useState(topics.length + 1);

  let content = null;

  if (mode === "welcome") {
    content = <Article title="welcome" body="hello, web"></Article>;
  } else if (mode === "read") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { title: _title, body: _body };
          setTopics(newTopic);
        }}
      />
    );
  }

  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("welcome");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          //alert(id);
          setMode("read");
          setId(_id);
        }}
      />
      {content}
      <a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          setMode("CREATE");
        }}
      >
        Create
      </a>
    </div>
  );
}

export default App;
