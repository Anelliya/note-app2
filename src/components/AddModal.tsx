import { useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap/';
import { useState } from 'react';
import React from 'react';

import { addNote } from '../redux/notesSlice';

interface Props{
  show: boolean;
  handleToggleModal: () => void;

}

const AddModal = ({ show, handleToggleModal }:Props) => {
  const [setDisabled, toggleSetDisabled] = useState(true);

  const [name, setName] = useState('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('Task');

  const dispatch = useDispatch();

  const submitData = () => {
    if (name.length > 1 && content.length > 1) {
      dispatch(addNote({ name, category, content }));
    }
    handleToggleModal();
    setName('');
    setContent('');
    setCategory('Task');
  };

  const hanbleDataUpdate = (e: React.ChangeEvent<HTMLInputElement>):void => {

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

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control type="input" name="name" onInput={hanbleDataUpdate} />

          <Form.Label htmlFor="categoty">Category</Form.Label>
          <Form.Select
            aria-label="category"
            name="category"
            onInput={()=> hanbleDataUpdate}
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
            onChange={hanbleDataUpdate}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleToggleModal}
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

export default AddModal;
