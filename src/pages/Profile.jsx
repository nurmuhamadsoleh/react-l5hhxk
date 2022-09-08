import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Profile = () => {
  const [query] = useSearchParams();
  let fullname = query.get('fullname');
  let alamat = query.get('alamat');
  //cara akses url : /profile?fullname=soleh&alamat=jakarta
  // sessionStorage.getItem('profile', JSON.stringify)
  //   fullname : fullname,
  //   alamat : alamat,
  // })
  return (
    <div>
      {/* denga query lebih clean code */}
      <h3>Profile</h3>
      <p>Nama Lengkap : {fullname}</p>
      <p>Alamat : {alamat}</p>
    </div>
  );
};
export default Profile;
