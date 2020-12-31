import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, TextField, Backdrop, Fade, Button } from '@material-ui/core';
import { IAppState } from '../../redux/store';
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

const SuccessPage: React.FC<{}> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const isModalOpen = useSelector((state: IAppState) => { return state.modal.isOpen });
  const requestToken = useSelector((state: IAppState) => { return state.user.requestToken });
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    // history.push('/dashboard');
  });

  return (
    <div>
      <h1>Success!</h1>
    </div>
  )
};

export default SuccessPage;
