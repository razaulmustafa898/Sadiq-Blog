import React from 'react';
import Card_Name_link from '../Card_Name_link';

const Card_Name_link1 = ({id, name, link_name}) => {

  return (
    <>
      <Card_Name_link  cards_heading={name} see_all_cards={link_name} links={id} />
    </>
  )
}

export default Card_Name_link1;