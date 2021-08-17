import React, { useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { restaurantContext } from '../../../contexts/restaurants-contexts';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }),
);

export const StarRating: React.FunctionComponent = ({ restaurant }) => {
  const classes = useStyles();
  const { stateRestaurant, dispatchRestaurant } = useContext(restaurantContext)

  return (
    <div className={classes.root}>
      <Rating name="star-rating-read" defaultValue={restaurant.rest_eco_score} precision={0.1} readOnly />
    </div>
  );
}