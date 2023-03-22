import React from 'react'
import Feed from '../Feed/Feed';
import { Route, Routes } from 'react-router-dom';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import UserHeader from './UserHeader';

const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  )
}

export default User;
