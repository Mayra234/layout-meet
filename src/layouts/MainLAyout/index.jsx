import React from 'react';
import './index.css';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import avatar1 from '../../assets/image/avatar-1.jpg';
import { Icon } from '../../components/Icon';
import {
  faCommentDots,
  faShapes,
  faShieldAlt,
  faMicrophoneSlash,
  faVideoSlash,
  faClosedCaptioning,
  faHandPaper,
  faEllipsisV,
  faPhoneSlash,
  faInfoCircle,
  faUser,
  faPrescription,
} from '@fortawesome/free-solid-svg-icons';
import avatar2 from '../../assets/image/avatar-2.jpeg';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../../components/Avatar';
import { Paragraph } from '../../components/Paragraph';

export const MainLayout = ({ children = '' }) => {
  return (
    <>
      <Header>
        <Avatar palette="primary" image={avatar1} />
        <Paragraph className="name-header">
          Alejandra Diavanera Is presenting
        </Paragraph>
      </Header>
      {children}
      <Footer>
        <Paragraph>
          2:19 PM {'&'}nbsp | {'&'}nbsp mbm-tuvb-ohm
        </Paragraph>
        <div className="buttons">
          <Button icon={faMicrophoneSlash} />
          <Button icon={faVideoSlash} />
          <Button palette="primary" icon={faClosedCaptioning} />
          <Button palette="primary" icon={faHandPaper} />
          <Button palette="primary" icon={faPrescription} />
          <Button palette="primary" icon={faEllipsisV} />
          <Button icon={faPhoneSlash} />
        </div>
        <div className="icons">
          <Icon icon={faInfoCircle} />
          <div className="friends-container">
            <div className="friends-number">3</div>
            <Icon icon={faUser} />
          </div>
          <Icon icon={faCommentDots} />
          <Icon icon={faShapes} />
          <Icon icon={faShieldAlt} />
        </div>
      </Footer>
    </>
  );
};
