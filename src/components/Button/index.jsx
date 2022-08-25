import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

export const Button = ({
  icon = '',
  id = '',
  className = '',
  palette = 'secondary',
  type = 'button',
  onClick = () => {},
  ...props
}) => {
  const [style, setStyle] = useState(props.style);

  const changePalette = () => {
    if (palette === 'primary') {
      setStyle((prevStyle) => ({ ...prevStyle, background: '#3c4043' }));
    } else if (palette === 'secondary') {
      setStyle((prevStyle) => ({ ...prevStyle, background: '#e84332' }));
    }
  };

  useEffect(() => {
    changePalette();
  }, [palette]);

  return (
    <button
      id={id}
      style={style}
      onClick={onClick}
      palette={palette}
      type={type}
      className={'btn ' + className}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
