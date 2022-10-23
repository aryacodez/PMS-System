import React from 'react';
import './navbar.scss';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='items'>
          <div className='item'>
            <LanguageRoundedIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeRoundedIcon className='icon'/>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
