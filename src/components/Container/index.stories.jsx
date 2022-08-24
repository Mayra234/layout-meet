import React from 'react';
import { Container } from './index';
import { Avatar } from '../Avatar';
import { Paragraph } from '../Paragraph';
import avatar1 from '../../assets/image/avatar-1.jpg';
import avatar2 from '../../assets/image/avatar-2.jpeg';
import { Icon } from '../Icon';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { PersonContent } from '../PersonContent';

export default {
  title: 'Components/Container',
};

export const Overview = () => {
  return (
    <Container>
      <div className="shared-screen"></div>
      <div className="windows-avatars">
        <PersonContent>
          <Avatar image={avatar1} className="avatar-image" />
          <Paragraph className="element-avatar text-avatar">
            Alejandra Diavanera
          </Paragraph>
        </PersonContent>
        <PersonContent>
          <Icon
            icon={faMicrophone}
            className="element-avatar avatar-button-microphone"
          />
          <Avatar image={avatar2} className="avatar-image" />
          <Paragraph className="element-avatar text-avatar">
            Mauricio Rivera
          </Paragraph>
        </PersonContent>
      </div>
    </Container>
  );
};
