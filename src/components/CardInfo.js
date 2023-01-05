// CardInfo가 아니라 CardDetail or CardModal

import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const CardInfo = ({ setCards, onClose, card }) => {
  const [updatedTitle, setUpdatedTitle] = useState(card.title);
  const [updatedDesc, setUpdatedDesc] = useState(card.desc);
  const [updatedDate, setUpdatedDate] = useState(card.date);
  const [updatedAssignee, setUpdatedAssignee] = useState(card.assignee);

  const updateCard = (e) => {
    console.log(e.target.value);
    axios
      .put(`http://localhost:3001/cards/${e.target.value}`, {
        title: updatedTitle,
        desc: updatedDesc,
        date: updatedDate,
        state: "",
        assignee: updatedAssignee,
      })
      .then((res) => {
        console.log("수정", res);
        axios.get(`http://localhost:3001/cards`).then((res) => {
          console.log("axios", res.data);
          setCards(res.data);
          onClose();
        });
      });
  };

  const removeCard = (e) => {
    axios
      .delete(`http://localhost:3001/cards/${e.target.value}`)
      .then((res) => {
        console.log("ss", res);
        axios.get(`http://localhost:3001/cards`).then((res) => {
          console.log("axios", res.data);
          setCards(res.data);
        });
      });
  };

  return (
    <Modal onClose={onClose}>
      <ContentWrapper>
        <div>
          <div>제목</div>
          <input
            type={"text"}
            autoFocus
            defaultValue={card.title}
            text={card.title}
            placeholder="Enter Title"
            onChange={(e) => {
              setUpdatedTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <div>내용</div>
          <textarea
            type={"text"}
            defaultValue={card.desc}
            text={card.desc}
            placeholder="Enter description"
            onChange={(e) => {
              setUpdatedDesc(e.target.value);
            }}
          />
        </div>
        <div>
          <div>마감일</div>
          <input
            type={"datetime-local"}
            defaultValue={card.date}
            onChange={(e) => {
              setUpdatedDate(e.target.value);
            }}
          />
        </div>
        <div>
          <div>담당자</div>
          <input
            type={"text"}
            defaultValue={card.assignee}
            text={card.assignee}
            placeholder="Enter assignee"
            onChange={(e) => {
              setUpdatedAssignee(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={updateCard} value={card.id}>
            저장
          </button>
          <button onClick={removeCard} value={card.id}>
            삭제
          </button>
        </div>
      </ContentWrapper>
    </Modal>
  );
};

export default CardInfo;

const ContentWrapper = styled.section`
  margin: 2rem;
  > div {
    margin: 1rem;
  }
  > button {
    position: relative;
    left: 4rem;
    width: 8rem;
  }
`;
