import React from 'react';
import { Header } from './index';
import avatar1 from '../../assets/image/avatar-1.jpg';

export default {
  title: 'Components/Header',
};

export const Overview = () => {
  return (
    <Header>
      <img src={avatar1} className="image-header" />
      <p className="name-header">Alejandra Diavanera Is presenting</p>
    </Header>
  );
};
