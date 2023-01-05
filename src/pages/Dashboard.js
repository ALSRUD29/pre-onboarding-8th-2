// data폴더로 이동해서 서버 먼저 열기 json-server --watch db.json --port 3001

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Dashboard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/cards`).then((res) => {
      console.log("axios", res.data);
      setCards(res.data);
    });
  }, [setCards]);
  console.log("카드", cards);

  const addCard = () => {
    axios
      .post(`http://localhost:3001/cards`, {
        title: "New Issue",
        desc: "",
        date: "",
        state: "",
        assignee: "",
      })
      .then((res) => {
        console.log("ss", res);
        axios.get(`http://localhost:3001/cards`).then((res) => {
          console.log("axios", res.data);
          setCards(res.data);
        });
      });
  };

  return (
    <Container>
      <Wrapper>
        <BoardWapper>
          {/* board1 */}
          <div>
            <h2>할 일</h2>
            <button
              onClick={() => {
                addCard();
              }}
            >
              add
            </button>
            {cards?.map((item) => (
              <Card setCards={setCards} key={item.id} card={item} />
            ))}
          </div>
          {/* board2 */}
          <h2>진행 중</h2>
          {/* board3 */}
          <h2>완료</h2>
        </BoardWapper>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  width: 80vw;
  height: 100vh;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: yellow;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  margin: 30px;
`;

const BoardWapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;
