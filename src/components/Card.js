import { useState } from "react";
import styled from "styled-components";
import CardInfo from "./CardInfo";

const Card = ({ setCards, card }) => {
  const { title, desc, date, assignee } = card;
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          cardId={card.id}
          card={card}
          setCards={setCards}
        />
      )}
      <div key={card.id} onClick={() => setShowModal(true)}>
        <div>{title}</div>
        <div>{desc && <p>{desc}</p>}</div>
        <div>{date && <p>{date}</p>}</div>
        <div>{assignee && <p>{assignee}</p>}</div>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background-color: white;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  cursor: pointer;
`;
