import React from 'react';

interface Props {
  appTitle: string;
}

const Header: React.FC<Props> = ({ appTitle }) => {
  return (
    <header>
      <h1>{appTitle}</h1>
    </header>
  );
};

export default Header;
