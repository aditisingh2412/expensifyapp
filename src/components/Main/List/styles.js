import { makeStyles } from '@material-ui/core/styles';
import {red, brown, yellow } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: '#993300',
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: '#ffcc00',
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));