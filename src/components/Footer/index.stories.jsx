import React from 'react';
import { Footer } from './index';
import { Icon } from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export default {
  title: 'Components/Footer',
};

export const Overview = () => {
  return (
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
  );
};
