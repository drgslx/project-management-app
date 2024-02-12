import { useRef } from 'react';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAddProject, onCancel }) {

  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const startDate = useRef(); 

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    const enteredStartDate = startDate.current.value;
    // validation ...
    if (enteredTitle.trim() === '' || 
    enteredDescription.trim() === '' ||
    enteredDueDate.trim() === '' ||
    enteredDueDate.trim() === '' ) {
      modal.current.open();
      return      
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      startDate: enteredStartDate,
      dueDate: enteredDueDate,

    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption ="OK">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops!....Looks like you forgot to complete a field!</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value to every input</p>
      </Modal>
      <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input type="text" ref={description} label="Description" textarea />
        <Input type="date" ref={startDate} label="Start Date" />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
    
  );
}