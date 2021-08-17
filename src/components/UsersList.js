import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchUsers } from '../redux/actions/userActions';
import User from './User';

const Wrapper = styled.div`
  width: 400px;
  margin: 30px auto;
  padding: 25px 15px;

  h3 {
    font-size: 1.4rem;
    text-align: center;
    margin: 0;
  }
`;

const UsersList = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Wrapper className="card">
      {users &&
        users.map((user) => {
          return <User key={user.id} id={user.id} name={user.name} />;
        })}
    </Wrapper>
  );
};

export default UsersList;
