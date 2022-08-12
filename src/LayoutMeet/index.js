import avatar2 from '../../image/avatar-2.jpeg';
import avatar1 from '../../image/avatar-1.jpg';
import image from '../../image/foto.jpg';

export const LayoutMeet = () => {
  return /*html*/ `
    <div class="header">
      <img src=${image} class="image-header" />
      <p class="name-header">Alejandra Diavanera Is presenting</p>
    </div>
    <div class="container">
      <div class="shared-screen"></div>
      <div class="windows-avatars">
        <div class="avatar-container">
          <img src=${avatar1} class="avatar-image" />
          <p class="element-avatar text-avatar">Alejandra Diavanera</p>
        </div>
        <div class="avatar-container">
          <div class="element-avatar avatar-button-microphone">
            <i class="fas fa-microphone-slash"></i>
          </div>
          <img src=${avatar2} class="avatar-image" />
          <p class="element-avatar text-avatar">You</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="hour">2:19 PM &nbsp | &nbsp mbm-tuvb-ohm</div>
      <div class="buttons">
        <div class="btn button-inactive">
          <i class="fas fa-microphone-slash"></i>
        </div>
        <div class="btn button-inactive">
          <i class="fas fa-video-slash"></i>
        </div>
        <div class="btn">
          <i class="far fa-closed-captioning"></i>
        </div>
        <div class="btn">
          <i class="far fa-hand-paper"></i>
        </div>
        <div class="btn">
          <i class="fab fa-chromecast"></i>
        </div>
        <div class="btn">
          <i class="fas fa-ellipsis-v"></i>
        </div>
        <div class="btn button-inactive">
          <i class="fas fa-phone-slash"></i>
        </div>
      </div>
      <div class="icons">
        <i class="fas fa-info-circle"></i>
        <div class="friends-container">
          <div class="friends-number">3</div>
          <i class="fas fa-user-friends"></i>
        </div>
        <i class="fas fa-comment-dots"></i>
        <i class="fas fa-shapes"></i>
        <i class="fas fa-shield-alt"></i>
      </div>
    </div>
    `;
};
