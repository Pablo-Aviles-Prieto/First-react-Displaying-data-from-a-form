import { useState } from 'react';
import { NewForm } from './components/NewForm/NewForm.js';
import { UsersList } from './components/UsersList/UsersList.js';
import { BackdropModal } from './components/BackdropModal/BackdropModal.js';
import styled from 'styled-components';
import './styles.css';

const UserListDiv = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
  background: white;
  padding: 1.4rem 2rem;
  border-radius: 7px;

  & ul {
    padding: 0;
  }

  & li {
    cursor: pointer;
    border: 1px solid black;
    margin: 0.5rem 0;
    padding: 0.65rem;
  }
`;

const MainContentDiv = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(93, 91, 101);
`;

const FormDiv = styled.div`
  border-radius: 7px;
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
  background-color: white;
  padding: 1.5rem 0;
`;

export const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [modalBackdrop, setModalBackdrop] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const addUserHandler = (users) => {
    setUsersData((prevs) => [...prevs, users]);
  };

  const removeUserHandler = (id) => {
    const newArr = usersData.filter((user) => user.id !== id);
    setUsersData(newArr);
  };

  const openCloseModalHandler = (title, text) => {
    return (
      !text || !title
        ? setModalBackdrop((prev) => !prev)
        : setModalBackdrop((prev) => !prev),
      setErrorMessage({ title: title, text: text })
    );
  };

  return (
    <MainContentDiv>
      <FormDiv>
        <NewForm
          onAddUser={addUserHandler}
          onOpenModal={openCloseModalHandler}
        />
      </FormDiv>
      <UserListDiv>
        {usersData.length === 0 && <p>Not users added yet!</p>}
        <ul>
          {usersData.length > 0 &&
            usersData.map((user) => (
              <UsersList
                user={user}
                key={user.id}
                onRemoveUser={removeUserHandler}
              />
            ))}
        </ul>
      </UserListDiv>
      {modalBackdrop && (
        <BackdropModal
          errorMessage={errorMessage}
          onCloseModal={openCloseModalHandler}
        />
      )}
    </MainContentDiv>
  );
};
