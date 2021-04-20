import React from 'react';
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import { FaGenderless } from 'react-icons/fa';
import { BsDash } from 'react-icons/bs';

const Gender = ({ gender }) => {
  let element;
  switch (gender) {
    case 'Male':
      element = <BiMaleSign className=' character__gender' />;
      break;
    case 'Female':
      element = <BiFemaleSign className=' character__gender' />;
      break;
    case 'Genderless':
      element = <FaGenderless className=' character__gender' />;
      break;
    default:
      element = <BsDash className=' character__gender' />;
  }

  return (
    <>
      {element}
    </>
  );
};

export default Gender;
