import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button.js';

const Form = styled.form`
  margin: auto;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${({ invalid }) => (invalid ? 'red' : 'black')};
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
    background-color: ${({ invalid }) => (invalid ? '#ffd7d7' : 'transparent')};
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

export const NewForm = ({ onAddUser, onOpenModal }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [userageInput, setUserageInput] = useState('');
  const [validInput, setValidInput] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (usernameInput.trim().length === 0 || userageInput.trim().length === 0) {
      onOpenModal(
        'Invalid inputs!',
        'Please enter a valid name and age (non-empty values).'
      );
      setValidInput(false);
      return;
    }

    if (+userageInput < 0 || +userageInput > 110) {
      onOpenModal(
        'Invalid inserted age!',
        'Please enter a valid age between 0 and 110.'
      );
      setValidInput(false);
      return;
    }

    const newUser = {
      id: Math.random(),
      user: usernameInput,
      age: +userageInput,
    };

    onAddUser(newUser);

    setUsernameInput('');
    setUserageInput('');
    setValidInput(true);
  };

  const userInputHandler = (e) => {
    setUsernameInput(e.target.value);
  };

  const ageInputHandler = (e) => {
    setUserageInput(e.target.value);
  };

  return (
    <Form onSubmit={formSubmitHandler} invalid={!validInput}>
      <label htmlFor='username'>Username</label>
      <input
        id='username'
        type='text'
        onChange={userInputHandler}
        value={usernameInput}
      />
      <label htmlFor='age'>Age (Years)</label>
      <input
        id='age'
        type='number'
        onChange={ageInputHandler}
        value={userageInput}
      />
      <Button type='submit' text='Add User' />
    </Form>
  );
};
