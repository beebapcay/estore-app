import React from 'react';
import { Factory, Heading } from 'native-base';

const Header: React.FC = ({ children, ...props }) => {
  return (
    <Heading {...props} fontSize={20} color="heading" fontWeight={'bold'}>
      {children}
    </Heading>
  );
};

export default Factory(Header);
