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
  faEllipsisV,
  faInfoCircle,
  faUser,
  faPhoneFlip,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../../components/Avatar';
import { Paragraph } from '../../components/Paragraph';

export const MainLayout = ({ children = '' }) => {
  return (
    <div>
      <Header>
        <Avatar palette="primary" image={avatar1} />
        <Paragraph className="name-header">
          Alejandra Diavanera Is presenting
        </Paragraph>
      </Header>
      {children}
      <Footer>
        <Paragraph id="text-footer">2:19 PM | mbm-tuvb-ohm</Paragraph>
        <div className="buttons">
          <Button icon={faMicrophoneSlash} />
          <Button icon={faVideoSlash} />
          <Button palette="primary" icon={faArrowUpRightFromSquare} />
          <Button palette="primary" icon={faEllipsisV} />
          <Button id="call-ended" icon={faPhoneFlip} />
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
    </div>
  );
};
