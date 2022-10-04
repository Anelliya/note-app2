import NotesTable from '../components/NotesTable';
import TableList from '../components/TableList';
import MarkupNotesTable from '../components/MarkupNotesTable';
import TableHeader from '../components/TableHeader';
import { Button } from 'react-bootstrap-storybook';
import { BsPencilSquare } from 'react-icons/bs';
import { BiArchiveIn } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

export default {
  title: 'NotesTable',
  component: NotesTable,
  subcomponents: { TableHeader, TableList, MarkupNotesTable },
};

const defaultArgs = {
  note: {
    id: 'XWaQXcbk0',
    name: 'Shoping list',
    created: 'Tue April 20 2021',
    category: 'Task',
    content: 'Tomatos, bread ',
    dates: null,
    status: 'active',
  },
  tableLables: ['Name', 'Created', 'Category', 'Content', 'Dates', 'Actions'],
};

export const EmptyNotesTable = () => (
  <NotesTable>
    <TableHeader labels={defaultArgs.tableLables} />
    <TableList />
  </NotesTable>
);

export const NotesTableWithOneNote = () => (
  <NotesTable>
    <TableHeader labels={defaultArgs.tableLables} />
    <TableList>
      <MarkupNotesTable note={defaultArgs.note}>
        <Button
          variant="outline-secondary"
          id="edit-button"
          name="edit-button"
          target={1}
          children={<BsPencilSquare target={1} />}
          onClick={() => {}}
        />
        <Button
          variant="outline-secondary"
          id="to-archive-button"
          name="to-archive-button"
          target={1}
          onClick={() => {}}
          children={<BiArchiveIn target={1} />}
        />

        <Button
          variant="outline-secondary"
          id="delete-button"
          name="delete-button"
          target={1}
          onClick={() => {}}
          children={<MdDeleteForever target={1} />}
        />
      </MarkupNotesTable>
    </TableList>
  </NotesTable>
);
