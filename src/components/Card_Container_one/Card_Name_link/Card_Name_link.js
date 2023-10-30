import React from 'react';
import Card_Name from './Card_Name';
import Card_Link from './Card_Link';

const Card_Name_link = () => {


  return (
    <>
      <div className="card_name_link flex  w-full container  justify-center  max-md:w-screen  mb-6  ">
        <Card_Name />
        <Card_Link />
      </div>
    </>
  )
}

export default Card_Name_link;
