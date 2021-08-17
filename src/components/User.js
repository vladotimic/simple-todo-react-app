import React from 'react';
import styled from 'styled-components';

import { DELETE_USER } from '../redux/contants';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div`
  border: solid 1px var(--bs-gray-300);
  border-radius: 4px;
  margin: 5px 0;
  padding: 7px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  }
`;

const User = ({ id, name }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h4>{name}</h4>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: DELETE_USER, payload: id })}
      >
        Delete
      </button>
    </Wrapper>
  );
};

export default User;
