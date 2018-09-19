import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { Toolbar, IconButton } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolBar: {
    margin: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, '0.15'),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, '0.25'),
    },
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing.unit * '9',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'inherit',
    zIndex: 1,
  },
  inputRoot: {
    color: '#fff',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * '10',
    width: '100%',
  },
})

const SearchBox = props => {
  const { setSearchWord, classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <form onSubmit={ev => setSearchWord(ev)} autoComplete="off">
            <div className={classes.search}>
              <IconButton
                type="submit"
                className={classes.searchIcon}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputLabel>
                <Input
                  placeholder="Search..."
                  disableUnderline
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  name="inputText"
                  required
                />
              </InputLabel>
            </div>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(SearchBox)
