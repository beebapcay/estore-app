import React from 'react';
import { Factory, Heading } from 'native-base';

const Header = (props: any) => {
  return (
    <Heading {...props} fontSize={22} color="heading" fontWeight={'bold'}>
      {props.children}
    </Heading>
  );
};

export default Factory(Header);
