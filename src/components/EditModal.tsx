import React from 'react';
// import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hook.tsx'

import { Modal, Button, Form } from 'react-bootstrap/';
import { useState } from 'react';

import { editNote } from '../redux/notesSlice.ts';
import INote from './noteInterface.tsx'

interface Props{
  handleToggleEditModal: () => void,
  show: boolean,
  currentNote: INote,
   
}

const EditModal = ({ handleToggleEditModal, show, currentNote }: Props) => {
  const [setDisabled, toggleSetDisabled] = useState<boolean>(true);
  const [name, setName] = useState<string>(currentNote.name);
  const [content, setContent] = useState(currentNote.content);
  const [category, setCategory] = useState(currentNote.category);
  const dispatch = useAppDispatch();
  

  const handleDataUpdate = ({ currentTarget }: React.SyntheticEvent<HTMLInputElement>): void => {
    
    name && content ? toggleSetDisabled(false) : toggleSetDisabled(true);
    currentTarget.name === 'name' && setName(currentTarget.value);
    currentTarget.name === 'category' && setCategory(currentTarget.value);
    currentTarget.name === 'content' && setContent(currentTarget.value);
  };


  const submitData = () => {
    if (currentNote.name !== name || currentNote.content !== content || currentNote.category !== category) {
      const { id } = currentNote;
      dispatch(editNote({ name, category, content, id }));
    }
    handleToggleEditModal();
    
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Edit Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="input"
            name="name"
            value={name}
            onChange={handleDataUpdate}
          />

          <Form.Label htmlFor="categoty">Category</Form.Label>
          <Form.Select
            aria-label="category"
            name="category"
            value={category}
            onChange={handleDataUpdate}
          >
            <option>Task</option>
            <option>Random Thought</option>
            <option>Idea</option>
          </Form.Select>

          <Form.Label htmlFor="content">Content</Form.Label>
          <Form.Control
            aria-label="content"
            type="textarea"
            style={{ height: '100px' }}
            name="content"
            value={content}
            onChange={handleDataUpdate}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleToggleEditModal}
          type="button"
          className="btn  btn-outline-dark save-btn"
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={submitData}
          type="button"
          className="btn  btn-outline-dark save-btn"
          id="save-btn"
          data-dismiss="modal"
          disabled={setDisabled}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditModal;
