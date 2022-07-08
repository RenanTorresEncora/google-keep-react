import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import NoteItemModel from '../../models/NoteItemModel';
import BasicNotecard from '../BasicNotecard';
import ToDoItemsContainer from '../ToDoItemsContainer';
import InputField from '../InputField';
import Button from '../Button';
import db from '../../models/DBManager';
import { NotesContext } from '../contexts/NotesProvider';

export default function Notecard({ noteItem }) {
  const { id, color, noteTitle, noteDescription, isToDoList } = noteItem;
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);
  const [noteData, setNoteData] = useState({
    noteTitle,
    noteDescription,
  });
  const { handleUpdate } = useContext(NotesContext);
  const handleDataChange = (data) => {
    setDoneBtnVisible(false);
    db.updateNote(id, data);
    handleUpdate();
  };
  const toDoItemsEl = (
    <ToDoItemsContainer
      toDoItems={noteItem.toDoItems}
      handleDataChange={(data) => handleDataChange({ toDoItems: data })}
    />
  );
  const noteDescriptionEl = (
    <InputField
      text={noteData.noteDescription}
      className="notecard__desc"
      placeHolder="Take a note..."
      handleChange={(value) => {
        setNoteData({ ...noteData, noteDescription: value });
        setDoneBtnVisible(true);
      }}
    />
  );
  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${noteTitle}`}
      data-note-id={id}
      data-color={color}
    >
      <BasicNotecard
        noteItem={noteItem}
        handleDataChange={handleDataChange}
        sendNoteData={(data) => {
          setNoteData({ ...noteData, ...data });
          setDoneBtnVisible(true);
        }}
        typeOfNoteEl={isToDoList ? toDoItemsEl : noteDescriptionEl}
      />
      {doneBtnVisible && (
        <Button
          className="notecard__done-button"
          handleClick={() => handleDataChange(noteData)}
          label="Done"
          btnText="Done"
        />
      )}
    </div>
  );
}
Notecard.propTypes = {
  noteItem: PropTypes.instanceOf(NoteItemModel).isRequired,
};
