// Multiple data means : you will see all post title in this component

import React from 'react';
import './MultipleData.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 400,
        margin: 10,
        
    },

});

const MultipleData = (props) => {
    // data Destructuring
    const data = props.data;
    const { title, id} = data;

    // card component class
    const classes = useStyles();
    return (

        <div className="multipleData_section">
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                       
                        <Link to={`/details/${id}`}>
                            <Button size="small" color="primary">
                            See More
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        
                         <Link to={`/details/${id}`}>
                            {/* <Button size="small" color="primary">
                            See More
                            </Button> */}
                        </Link>
                    </CardActions>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Title
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        
                    <Link to={`/details/${id}`}>
                        {/* <Button size="small" color="primary">
                            See More
                        </Button> */}
                    </Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default MultipleData;