import styled, { css } from 'styled-components';
import InputField from '../InputField';

export const StyledNotecard = styled.div`
  display: block;
  border-radius: 0.5rem;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  width: 267px;
  height: 100%;
  min-height: 3rem;
  margin-top: 0.625rem;
  position: relative;
  padding-bottom: 1rem;
  transition: box-shadow outline 100ms;
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
  }
`;

export const DoneButton = styled.button`
font-family: var(--ff-roboto);
font-size: 1rem;
  border-radius: 0.375rem;
  border: none;
  display: flex;
  right: 0.25rem;
  bottom: 0.25rem;
  justify-content: flex-end;
  background-color: transparent;
  font-weight: bold;
  outline: 0;
  position: absolute;
  padding: 0.25rem 0.5rem;
  transition: background-color, box-shadow, opacity, 100ms;
  &:hover,
  &:focus {
    background-color: var(--tc-gray-1);
    box-shadow: 0px 1px 1px rgb(0, 0, 0);
    opacity: 0.8;
  }
`;

export const StyledInputField = styled(InputField)`
  display: flex;
  flex: 0 1 100%;
  background-color: transparent;
  outline: 0px;
  border: none;
  resize: none;
  width: 100%;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

const DefaultStyles = css`
  border: 0;
  display: flex;
  flex: 1 0 auto;
  background-color: transparent;
  box-sizing: content-box;
  outline: none;
  resize: none;
  color: var(--c-black);
`;

export const Title = styled(StyledInputField)`
  span,
  textarea {
    ${DefaultStyles}
    padding: 1rem 3.5rem 0 1rem;
    font-family: var(--ff-google);
    font-size: 0.875rem;
    font-weight: 500;
    text-overflow: ellipsis;
    letter-spacing: 0.3px;
    color: var(--tc-dark-gray);
  }
`;

export const Description = styled(StyledInputField)`
  span,
  textarea {
    ${DefaultStyles}
    letter-spacing: 0.3px;
    padding: 0.625rem 1rem 0 1rem;
    font-family: var(--ff-roboto);
    font-weight: 400;
    font-size: 0.75rem;
    overflow: hidden;
    height: auto;
    color: var(--tc-gray-2);
  }
`;
