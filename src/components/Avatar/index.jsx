import React, { useState, useEffect } from 'react';
import './index.css';

export const Avatar = ({
  image = '',
  className = '',
  palette = 'secondary',
  ...props
}) => {
  const [style, setStyle] = useState(props.style);

  const changePalette = () => {
    if (palette === 'primary') {
      setStyle((prevStyle) => ({
        ...prevStyle,
        maxWidth: '30px',
        maxHeight: '30px',
      }));
    } else if (palette === 'secondary') {
      setStyle((prevStyle) => ({
        ...prevStyle,
        maxWidth: '100px',
        maxHeight: '100px',
      }));
    }
  };

  useEffect(() => {
    changePalette();
  }, [palette]);

  return (
    <img
      palette={palette}
      style={style}
      src={image}
      className={'image ' + className}
    />
  );
};
