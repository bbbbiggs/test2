import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ipUrl } from "./util/util";

const StyledGetList = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  justify-content: center;

  ul {
    list-style: none;
    /* padding-left: 0px; */
    padding: 0;
  }
  li {
    display: grid;
    grid-template-columns: repeat(3, auto);
    overflow: hidden;
    border: 1px solid black;

    div:nth-child(1) {
      width: 50px;
    }
    div:nth-child(2) {
      width: 200px;
      word-break: keep-all;
    }
    div:nth-child(3) {
      width: 50px;
      cursor: pointer;
    }
  }
`;

const GetList = (data) => {
  const [list, setList] = useState([]);

  async function getList() {
    // console.log(111, ipUrl);
    const { data } = await ipUrl.get("/getList");
    setList(data);
  }

  async function remove(title) {
    const { data } = await ipUrl.post("/removeList", {
      title,
    });

    console.log(data);

    if (data === "remove done") {
      getList();
    }
  }
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  useEffect(() => {
    getList();
  }, [data.reload]);
  return (
    <StyledGetList>
      <ul>
        {list.map((ele, index) => {
          return (
            <li key={index}>
              <div>{ele.title}</div>
              <div>{ele.file}</div>
              <div onClick={() => remove(ele.title)}>삭제</div>
            </li>
          );
        })}
      </ul>
    </StyledGetList>
  );
};

export default GetList;
