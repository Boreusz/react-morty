import React from 'react';
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import { FaGenderless } from 'react-icons/fa';
import { BsDash } from 'react-icons/bs';

const Gender = ({ gender }) => {
  let element;
  switch (gender) {
    case 'Male':
      element = <BiMaleSign className='character__icon' />;
      break;
    case 'Female':
      element = <BiFemaleSign className='character__icon' />;
      break;
    case 'Genderless':
      element = <FaGenderless className='character__icon' />;
      break;
    default:
      element = <BsDash className='character__icon' />;
  }

  return (
    <>
      {element}
      <span className='character__gender'>{gender}</span>
    </>
  );
};

export default Gender;
