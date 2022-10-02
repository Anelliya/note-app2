import React from 'react';
import { useAppDispatch } from '../hook'

import { Modal, Button, Form } from 'react-bootstrap/';
import { useState } from 'react';

import { editNote } from '../redux/notesSlice';
import INote from '../noteInterface'

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
  

  const handleDataUpdate = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const currentName: string = e.currentTarget.name;
    const currentValue: string = e.currentTarget.value;
    const handlers = {
      'name': setName,
      'category': setCategory,
      'content': setContent
    };
    toggleSetDisabled(!(name.length > 1 && content.length >1));
    handlers[currentName as keyof Object](currentValue);
  };

  


  const submitData = () => {  
    if (currentNote.name !== name || currentNote.content !== content || currentNote.category !== category) {
      if (currentNote.name.length > 0 && currentNote.content.length > 0) {
        
        const { id } = currentNote;
        dispatch(editNote({ name, category, content, id }));
      }
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
            onInput={handleDataUpdate}
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
            onInput={handleDataUpdate}
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
