import React from 'react';

import styles from './Notes.module.css';
import { v4 as uuidv4 } from 'uuid';

type Labels = string;

interface Props {
  labels: Labels[];
}

const TableHeader = ({ labels }: Props) => {
  const { th, tableHead } = styles;

  return (
    <thead className={tableHead}>
      <tr>
        {labels.map(label => (
          <th scope="col" className={th} key={uuidv4()}>
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
