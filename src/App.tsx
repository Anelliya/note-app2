import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector, useAppDispatch } from './hook.tsx'

import { useState } from 'react';
import { deleteNote, toggleNoteStatus } from './redux/notesSlice.ts';
import {
  getActiveNotes,
  getArchivedNotes,
  getSummary,
} from './redux/selectors';


import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { BiArchiveIn } from 'react-icons/bi';
import { BiArchiveOut } from 'react-icons/bi';
import { Table } from 'react-bootstrap';


import NotesTable from './components/NotesTable.tsx';
import ArchiveTable from './components/ArchiveTable.tsx';
import MainHeader from './components/MainHeader.tsx';
import SummeryTable from './components/SummeryTable.tsx';
import AddModal from './components/AddModal.tsx';
import EditModal from './components/EditModal.tsx';
import TableHeader from './components/TableHeader.tsx';
import TableList from './components/TableList.tsx';

import styles from './components/Notes.module.css';

import MarkupTableNote from './components/MarkupTableNote.tsx';
import MarkupSummery from './components/MarkupSummery.tsx';

import INote from './noteInterface.tsx'


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentNote, setCurrentNote] = useState<INote|null |undefined>(null);

  const activeNotes: INote[] = useAppSelector((notes: INote[]) => getActiveNotes(notes));
  const archivedNotes: INote[] = useAppSelector((notes: INote[])=> getArchivedNotes(notes));
  const summary = useAppSelector((notes: INote[]) => getSummary(notes));

  const dispatch = useAppDispatch();

  const handleToggleModal:()=>void = () => {
    setShowModal(!showModal);
  };

  const handleToggleEditModal:()=>void = () => {
    setShowEditModal(!showEditModal);
  };

  const onEditBtnClick = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleToggleEditModal();
    const currentNoteId: string | null = e.currentTarget.getAttribute('target');
    
    const note: INote | undefined = activeNotes?.find((note: INote) => note.id === currentNoteId)
    
    setCurrentNote(note);
  };

  const onChangeStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const id:string | null= e.currentTarget.getAttribute('target');

    const listOfStatus:{[key: string]: string} ={
      'to-archive-button': 'archived',
      'to-active-button': 'active',
    };

    const status = listOfStatus[e.currentTarget.id]
    dispatch(toggleNoteStatus({ id, status }));
  };

  const onDelete = (e : React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    //const t = target as HTMLButtonElement;
    const targetNoteId: string | null = e.currentTarget.getAttribute('target');
    targetNoteId && dispatch(deleteNote(targetNoteId));
  };

  const tableHeaderForNotesTable = [
    'Name',
    'Created',
    'Category',
    'Content',
    'Dates',
    'Actions',
  ];

  const tableHeaderForSummeryTable = ['Note Category', 'Active', 'Archived'];

  const { table } = styles;

  return (
    <>
      <MainHeader  />
      <Container container-xl="true">
        <NotesTable>
          <TableHeader labels={tableHeaderForNotesTable} />
          <TableList>
            {activeNotes.map(note => (
              <MarkupTableNote note={note}>
                <Button
                  variant="outline-secondary"
                  id="edit-button"
                  name="edit-button"
                  target={note.id}
                  children={<BsPencilSquare target={note.id} />}
                  onClick={onEditBtnClick}
                />
                <Button
                  variant="outline-secondary"
                  id="to-archive-button"
                  name="to-archive-button"
                  target={note.id}
                  onClick={onChangeStatus}
                  children={<BiArchiveIn target={note.id} />}
                />
                <Button
                  variant="outline-secondary"
                  id="delete-button"
                  name="delete-button"
                  target={note.id}
                  onClick={onDelete}
                  children={<MdDeleteForever target={note.id} />}
                />
              </MarkupTableNote>
            ))}
          </TableList>
        </NotesTable>
        <Button
          className={styles.btn}
          id="create-note-btn"
          variant="primary"
          onClick={handleToggleModal}
        >
          Create Note
        </Button>
        <ArchiveTable>
          <Table className={table} hover>
            <TableHeader labels={tableHeaderForNotesTable} />
            <TableList >
              {archivedNotes.map(note => (
                <MarkupTableNote note={note}>
                  <Button
                    className="btn btn-outline-secondary"
                    variant="outline-secondary"
                    id="to-active-button"
                    target={note.id}
                    children={<BiArchiveOut target={note.id} />}
                    onClick={onChangeStatus}
                  />
                </MarkupTableNote>
              ))}
            </TableList>
          </Table>
        </ArchiveTable>
        <SummeryTable>
          <Table hover>
            <TableHeader labels={tableHeaderForSummeryTable} />
            <TableList>
              <MarkupSummery summary={summary} />
            </TableList>
          </Table>
        </SummeryTable>

        {showModal && (
          <AddModal show={showModal} handleToggleModal={handleToggleModal} />
        )}

        {showEditModal && (
          <EditModal
            handleToggleEditModal={handleToggleEditModal}
            show={showEditModal}
            currentNote={currentNote}
          />
        )}
      </Container>
    </>
  );
}

export default App;
