import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, TextField, Backdrop, Fade } from '@material-ui/core';
import { IAppState } from '../../redux/store';
import { closeModal } from '../../redux/actions/modalActions';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
});

const ModalComp: React.FC<{}> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: IAppState) => { return state.modal.isOpen });

  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <div className={classes.paper}>
            <TextField id="standard-basic" label="Standard" />
          </div>
        </Fade>
      </Modal>
    </div>
  )
};

export default ModalComp
  ;
