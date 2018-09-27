import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  content: {
    width: 180,
  },
  title: {
    maxHeight: 100,
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
    fontSize: '18px',
    fontWeight: 'bold',
  },
  cover: {
    width: 180,
    height: 200,
  },
})

const Book = props => {
  const {
    imageLinks,
    title,
    authors,
    publisher,
    publishedDate,
    classes,
  } = props
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="headline" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1">{authors}</Typography>
        <Typography variant="body1">{publisher}</Typography>
        <Typography variant="caption" color="textSecondary">
          {publishedDate}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.cover}
        image={
          imageLinks !== undefined
            ? imageLinks.thumbnail
            : './assets/img/noimage.png'
        }
      />
    </Card>
  )
}

export default withStyles(styles)(Book)
