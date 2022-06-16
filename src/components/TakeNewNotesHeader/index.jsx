import React, { useState } from 'react';
import PropTypes from 'prop-types';
import plusIcon from '../../assets/svg/notecard/plus-icon.svg';
import IconButton from '../IconButton';
import './styles.css';

function TakeNewNotesHeader({ handleDisplayHeader }) {
  const handleNewList = () => {
    handleDisplayHeader();
  };
  const handleNewNote = () => {
    handleDisplayHeader();
  };

  return (
    <div className="newnote__header">
      <div
        role="button"
        className="newnote__take-a-note"
        tabIndex={0}
        style={{ padding: '0 1rem', userSelect: 'none' }}
        onClick={handleNewNote}
        onKeyDown={(e) => (e.code === 'Enter' ? handleNewNote() : null)}
      >
        <img className="icon-size" src={plusIcon} alt="" />
        <span>Take a note…</span>
      </div>
      <IconButton
        className="newnote__new-list icon-button icon-size"
        label="New list"
        handleClick={handleNewList}
      />
    </div>
  );
}

export default TakeNewNotesHeader;

TakeNewNotesHeader.propTypes = {
  handleDisplayHeader: PropTypes.func.isRequired,
};