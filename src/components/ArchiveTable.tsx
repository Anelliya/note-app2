import React from 'react'

interface IProps{
  children: React.ReactNode
}

const ArchiveTable:React.FC<IProps>  = ({ children }) => {
  return (
    <>
      <div className="container text-center">
        <h3>Archived</h3>
      </div>
      {children}
    </>
  );
};

export default ArchiveTable;
