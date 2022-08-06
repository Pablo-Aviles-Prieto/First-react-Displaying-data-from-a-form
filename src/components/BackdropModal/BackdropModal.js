import styled from 'styled-components';
import { Button } from '../Button/Button.js';

const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  width: 30rem;
  z-index: 10;
  position: fixed;
  top: 20vh;
  left: calc(50% - 15rem);
  overflow: hidden;
  font-family: sans-serif;

  & p {
    margin: 2.2rem 0;
    padding-left: 16px;
  }

  @media (min-width: 729px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const ButtonContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const HeaderModal = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

export const BackdropModal = ({ onCloseModal, errorMessage }) => {
  return (
    <div>
      <Backdrop onClick={onCloseModal} />
      <Modal>
        <HeaderModal>
          <h2>{errorMessage.title}</h2>
        </HeaderModal>
        <p>{errorMessage.text}</p>
        <ButtonContainer>
          <Button type='button' text='Okay' onClick={onCloseModal} />
        </ButtonContainer>
      </Modal>
    </div>
  );
};
