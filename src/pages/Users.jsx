import React from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {
  let { username, phone, email } = useParams(); //{slug} object desctrung
  return (
    <div>
      <h3>User Profile</h3>
      <p>Nama :</p>
      <p>{username}</p>
      <p>No Tlpn :</p>
      <p>{phone}</p>
      <p>Email :</p>
      <p>{email}</p>
    </div>
  );
};
export default Users;
