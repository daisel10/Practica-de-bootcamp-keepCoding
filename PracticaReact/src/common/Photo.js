import React from 'react';
import classNames from 'classnames';
import defaultPhoto from '../assets/default_profile.png';
import './css/Photo.css'

const Photo = ({ className, photo }) => (
  <img
    className={classNames('photo', className)}
    src={defaultPhoto}
    alt={photo}
    
  />
);

export default Photo;
