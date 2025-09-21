import React, { useState } from 'react';
import { Button, Input, Typography, Box, Modal } from '@mui/material';

import './Modal.css'

import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalComponent({handleOpen, handleClose, open}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Search posts

            <Button className='modal-close-btn' onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Typography>

          <div id="search-actions-wrap">
            <Input placeholder='Search posts by title...' id='posts-search-input'/>
            <Button variant='contained' sx={{marginTop: '10px'}}>Search</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalComponent;