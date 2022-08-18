import React from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import avatar1 from '../../../image/avatar-1.jpg';
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
import avatar2 from '../../../image/avatar-2.jpeg';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

export const MainLayout = () => {
  return (
    <>
      <Header>
        <img src={avatar1} className="image-header" />
        <p className="name-header">Alejandra Diavanera Is presenting</p>
      </Header>
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
      <Footer>
        <div className="hour">
          2:19 PM {'&'}nbsp | {'&'}nbsp mbm-tuvb-ohm
        </div>
        <div className="buttons">
          <div className="btn button-inactive">
            <Icon icon={faMicrophoneSlash} />
          </div>
          <div className="btn button-inactive">
            <Icon icon={faVideoSlash} />
          </div>
          <div className="btn">
            <Icon icon={faClosedCaptioning} />
          </div>
          <div className="btn">
            <Icon icon={faHandPaper} />
          </div>
          <div className="btn">
            <Icon icon={faPrescription} />
          </div>
          <div className="btn">
            <Icon icon={faEllipsisV} />
          </div>
          <div className="btn button-inactive">
            <Icon icon={faPhoneSlash} />
          </div>
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
