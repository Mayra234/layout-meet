import React from 'react';
import { Container } from './index';
import avatar1 from '../../../image/avatar-1.jpg';
import avatar2 from '../../../image/avatar-2.jpeg';
import { Icon } from '../Icon';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Container',
};

export const Overview = () => {
  return (
    <Container>
      <div className="shared-screen"></div>
      <div className="windows-avatars">
        <div className="avatar-container">
          <img src={avatar1} className="avatar-image" />
          <p className="element-avatar text-avatar">Alejandra Diavanera</p>
        </div>
        <div className="avatar-container">
          <div className="element-avatar avatar-button-microphone">
            <Icon icon={faMicrophone} />
          </div>
          <img src={avatar2} className="avatar-image" />
          <p className="element-avatar text-avatar">You</p>
        </div>
      </div>
    </Container>
  );
};
