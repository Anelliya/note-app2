// import Button from './Button';
import styles from './Notes.module.css';
import INote from './noteInterface.tsx'


interface IProps{
  note: INote;
  children:  React.ReactNode
}

const MarkupArchivedNotes = ({ note, children }: IProps) => {
  const { itemContent } = styles;
  const { id, name, created, category, content, dates } = note;

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

export default MarkupArchivedNotes;
