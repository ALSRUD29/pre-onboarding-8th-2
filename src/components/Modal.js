import styled from "styled-components";

const Modal = (props) => {
  return (
    <Container onClick={() => (props.onClose ? props.onClose() : "")}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        {props.children}
      </ModalContent>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.46);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const ModalContent = styled.div`
  overflow-y: auto;
  max-height: 95vh;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
`;
