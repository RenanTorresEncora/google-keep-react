import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function InputField({ text, placeHolder, className, handleChange, visible }) {
  const [showText, setShowText] = useState(visible);
  const textarea = useRef();

  const handleShowText = () => {
    setShowText((prevState) => !prevState);
  };

  useEffect(() => {
    if (!showText) {
      textarea.current.focus();
      textarea.current.setSelectionRange(
        textarea.current.value.length,
        textarea.current.value.length,
      );
    }
  }, [showText]);

  return (
    <div className={className}>
      {showText ? (
        <span
          role="textbox"
          tabIndex={0}
          onClick={handleShowText}
          onKeyDown={() => {}}
        >
          {text}
        </span>
      ) : (
        <textarea
          className={`${className}-textarea`}
          id={`${className}-textarea`}
          ref={textarea}
          rows="1"
          maxLength="999"
          placeholder={placeHolder}
          style={{ height: '1rem' }}
          value={text}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default InputField;
InputField.defaultProps = {
  visible: true,
};

InputField.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};