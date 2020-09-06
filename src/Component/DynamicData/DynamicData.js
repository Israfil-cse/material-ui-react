//DynamicData means exact data, this element shows dynamically accurate post data when you click to see more buttons

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DynamicData.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    Width: 500,
    margin: 100,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const DynamicData = () => {

  // These elements are helpful for card
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // exact data load
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  // comment api data load
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url2)
      .then(res => res.json())
      .then(data => setComment(data))

  }, []);

  // photos api data load
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    const url3 = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url3)
      .then(res => res.json())
      .then(data => setPhoto(data))
  }, []);

  const { thumbnailUrl } = photo;
  const { title, body } = data;
  return (
    <div>
      <h2 className="public_post">Public Post :)</h2>
      <div className='userPost'>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
          </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`Id No:${id}`}
            subheader="Publish: September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Title: {title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Post details:</Typography>
              <Typography paragraph>
                {body}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div className="comment">
        <h2 className="public_comment">Comment :)</h2>
        <div>
          {
            comment.map(comment => <div className="comment_style">
              <h5 className="comment_title">{comment.name}</h5>
              <h5 className="comment_email">{comment.email}</h5>
              <h3 className="comment_body">{comment.body}</h3>
              <img className="comment_img" src={thumbnailUrl} alt="" />
            </div>)
          }
        </div>
      </div>

    </div>
  );
};

export default DynamicData;