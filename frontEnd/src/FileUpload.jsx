import React, { useState } from "react";
import axios from "axios";
import GetList from "./GetList";

const FileUpload = () => {
  async function saveClick() {
    console.log(english, korea);
    if (english !== "" && korea !== "") {
      const { data } = await axios.post(
        "http://localhost:8000/saveClick",
        { english, korea },
        { withCredentials: true }
      );
      setEnglish("");
      setKorea("");
      if (data === "create done") {
        setReload(!reload);
      }
    } else {
      alert("빈칸 있음~");
    }
  }
  const [english, setEnglish] = useState("");
  const [korea, setKorea] = useState("");
  const [reload, setReload] = useState(false);

  return (
    <div>
      <input
        type="text"
        onChange={(a) => setEnglish(a.target.value)}
        placeholder="영어단어"
        value={english}
      />
      <br />
      <input
        type="text"
        onChange={(a) => setKorea(a.target.value)}
        placeholder="뜻"
        value={korea}
      />
      <br />
      <button onClick={() => saveClick()}>저장</button>

      <hr />
      <GetList reload={reload} />
    </div>
  );
};

export default FileUpload;
