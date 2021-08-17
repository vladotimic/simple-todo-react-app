import React, { useRef } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { ADD_USER } from '../redux/contants';

const Form = styled.form`
  width: 400px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    flex: 1 1 70%;
  }

  button {
    height: 100%;
    margin-left: 10px;
  }
`;

const UserForm = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_USER,
      payload: {
        id: new Date().getUTCMilliseconds(),
        name: inputRef.current.value,
      },
    });

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <Form>
      <div>
        <label htmlFor="todo" className="form-label">
          Add User:
        </label>
        <input
          ref={inputRef}
          type="text"
          name="todo"
          id="todo"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Add Todo
      </button>
    </Form>
  );
};

export default UserForm;
