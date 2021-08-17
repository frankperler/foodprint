import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { restaurantTypes } from '../../../types/restaurant-types';

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
interface Props {
  restaurant: restaurantTypes
}

export const StarRating: React.FunctionComponent<Props> = ({ restaurant }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="star-rating-read" defaultValue={restaurant.rest_eco_score} precision={0.1} readOnly />
    </div>
  );
}