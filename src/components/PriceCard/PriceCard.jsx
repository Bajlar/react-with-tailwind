import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
  // console.log(price);
  return (
    <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
      <h2 className='text-center'>
        <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
        <span className='text-white text-2xl font-medium'>/month</span>
      </h2>

      <h5 className='text-2xl font-bold center'>{price.name}</h5>
      <p className='font-bold text-white underline text-2xl'>features:</p>
      <div className="mb-4">
        {
          price.features.map((feature, index) => <Feature
          key={index}
            feature={feature}
          ></Feature>)
        }
      </div>
      <button className='w-full mt-auto bg-purple-400 py-2 rounded-md font-bold text-white'>Buy Now</button>
    </div>
  );
};

export default PriceCard;
