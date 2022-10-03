import React from 'react';

import INote from '../noteInterface'


interface IProps {
  note: INote;
  children: React.ReactNode
}

const MarkupNotesTable = ({ note, children }:IProps) => {
  const { id, name, created, category, content, dates } = note;

  return (
    <tr id={id} key={id}>
      <td
        className='itemContent'
      >{name} </td>
      <td>{created}</td>
      <td>{category}</td>
      <td className='itemContent'>{content}</td>
      <td className='itemContent'>{dates}</td>
      <td id="btn-list">{children}</td>
    </tr>
  );
};

export default MarkupNotesTable;
