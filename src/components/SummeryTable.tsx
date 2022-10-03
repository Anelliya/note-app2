import React from 'react'

interface IProps {
  children: React.ReactNode
}

const SummeryTable = ({ children }:IProps) => {
  return (
    <>
      <div className="container text-center text-2xl">
        <h3>Summery</h3>
      </div>
      {children}
    </>
  );
};

export default SummeryTable;
