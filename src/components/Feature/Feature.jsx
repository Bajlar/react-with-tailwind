import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
  // console.log(feature);
  return (
    <div className='flex items-center'>
      <CheckCircleIcon className='h-4 w-4 text-green-500'></CheckCircleIcon>
      <span className='pl-2'>{feature}</span>
    </div>
  );
};

export default Feature;