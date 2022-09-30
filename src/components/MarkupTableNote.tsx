import { Children } from 'react';
import styles from './Notes.module.css';

import INote from './noteInterface.tsx'


interface IProps {
  note: INote;
  children: React.ReactNode
}

const MarkupTableNote = ({ note, children }:IProps) => {
  const { id, name, created, category, content, dates } = note;
  const { itemContent } = styles;

  return (
    <tr id={id} key={id}>
      <td>{name} </td>
      <td>{created}</td>
      <td>{category}</td>
      <td className={itemContent}>{content}</td>
      <td>{dates}</td>
      <td id="btn-list">{children}</td>
    </tr>
  );
};

export default MarkupTableNote;
