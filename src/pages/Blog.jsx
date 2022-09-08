import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  //useParam menghasil sebauh Oject

  let { id } = useParams(); //{slug} object desctrung

  return (
    <div>
      <h1>Blog</h1>
      {/* untuk menjalankan function javascript */}
      <p>{id}</p>
    </div>
  );
};
export default Blog;
