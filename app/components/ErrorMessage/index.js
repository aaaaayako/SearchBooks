import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import ErrorIcon from '@material-ui/icons/Error'

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
    backgroundColor: '#d32f2f',
    color: '#fff',
    fontSize: 12,
  },
  icon: {
    margin: 'theme.spacing.unit * 2',
    fontSize: 20,
    opacity: 0.9,
    marginRight: '20px',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

const ErrorText = props => {
  const { classes, message } = props
  return (
    <span id="client-snackbar" className={classes.message}>
      <ErrorIcon className={classes.icon} />
      {message}
    </span>
  )
}

const ErrorMessage = ({ errorMessage = '', classes }) => (
  <SnackbarContent
    className={classes.snackbar}
    message={<ErrorText classes={classes} message={errorMessage} />}
  />
)

export default withStyles(styles)(ErrorMessage)
