import React from 'react';
import { Table } from 'react-bootstrap';

import styles from './Notes.module.css';

const { table } = styles;

type Props = {
  children: React.ReactNode
}

function NotesTable({ children }:Props) {
  return (
    <>
      <Table className={table} hover>
        {children}
      </Table>
    </>
  );
}

export default NotesTable;
