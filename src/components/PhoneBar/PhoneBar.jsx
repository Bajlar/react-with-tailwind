import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  useEffect( () => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data))

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      const loadData = data.data.data;
      // console.log(loadData);
      const phonesData = loadData.map(phone => {
        const parts = phone.slug.split('-')
        // console.log(parts);
        const price = parseInt(parts[1]);
        // console.log(price);
        const phoneInfo = {
          name: phone.phone_name,
          price: price
        }
        return phoneInfo;
      })
      // console.log(phonesData);
      setPhones(phonesData)
    });
  }, []);

  return (
    <div className='w-3/4 mx-auto mt-4 grid grid-cols-1'>
      <BarChart
        width={1000}
        height={300}
        data={phones}
      >
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default PhoneBar;