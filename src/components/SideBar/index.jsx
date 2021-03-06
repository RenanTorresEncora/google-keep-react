import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import SideBarItem from './SideBarItem';
import lampIcon from '../../assets/svg/lamp-icon.svg';
import boxIcon from '../../assets/svg/box-icon.svg';
import trashIcon from '../../assets/svg/trash-icon.svg';
import { SideBarContainer, StyledSideBar } from './styles';
import { NotesContext } from '../contexts/NotesProvider';

const SideBar = ({ expand }) => {
  const { sidebarSelected, handleSidebarChange } = useContext(NotesContext);
  return (
    <SideBarContainer expand={expand}>
      <StyledSideBar expand={expand}>
        <SideBarItem
          active={sidebarSelected === 'NOTES'}
          icon={lampIcon}
          label="Notes"
          click={handleSidebarChange}
          expand={expand}
        />
        <SideBarItem
          active={sidebarSelected === 'ARCHIVE'}
          icon={boxIcon}
          label="Archive"
          click={handleSidebarChange}
          expand={expand}
        />
        <SideBarItem
          active={sidebarSelected === 'TRASH'}
          icon={trashIcon}
          label="Trash"
          click={handleSidebarChange}
          expand={expand}
        />
      </StyledSideBar>
    </SideBarContainer>
  );
};

SideBar.propTypes = {
  expand: PropTypes.bool.isRequired,
};

export default SideBar;
