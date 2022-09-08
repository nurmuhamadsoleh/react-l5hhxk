import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* default method get */}
      <form action="/profile" method="get">
        <label htmlFor="fullname">Nama Lengkap :</label>
        <input type="text" id="fullname" name="fullname" />
        <label htmlFor="alamat">Alamat :</label>
        <input type="text" id="alamat" name="alamat" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default HomePage;
