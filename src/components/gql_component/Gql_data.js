import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Button } from '@mui/material';

const USER_QUERY = gql`
  query getUsers{
    getAllUser {
        _id
        name
        email
      }
  }
`;

const ADD_USER = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const Gql_data = () => {
  const { loading, data } = useQuery(USER_QUERY);
  const [addUser, { upadateData}] = useMutation(ADD_USER);

  if (loading) return <p>Loading...</p>;
 
  return (
    <div>
        <Button onClick={addUser()}>Add User</Button>
      <h2>User List</h2>
      <ul>
        {data.getAllUser.map(user => (
          <li key={user._id}>
            {user.name} by <b>{user.email}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gql_data;