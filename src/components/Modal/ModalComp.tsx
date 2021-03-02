import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, TextField, Backdrop, Fade, Button } from '@material-ui/core';
import { IAppState, store } from '../../redux/store';
import { closeModal } from '../../redux/actions/modalActions';
import { dispatchAuthenticateUser } from '../../redux/actions/modalActions';

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
  const history = useHistory();

  const isModalOpen = useSelector((state: IAppState) => { return state.modal.isOpen });
  const requestToken = useSelector((state: IAppState) => { return state.user.requestToken });
  const [name, setName] = React.useState('');

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const isSuccess = dispatchAuthenticateUser();
    if (isSuccess) {
      const tok = store.getState().user.requestToken;
      dispatch(closeModal());
    }
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
            <TextField
              id="standard-basic"
              label="Standard"
              onChange={(e) => { return handleUserNameChange(e); }}
              value={name}
            />
            <Button color="primary" variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
};

export default ModalComp;
