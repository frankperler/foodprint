import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { supplierTypes } from '../../../types/supplier-types';
import './star.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: -1,
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }),
);

interface Props {
  supplier: supplierTypes
}

export const SupplStarRating: React.FunctionComponent<Props> = ({ supplier }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="star-rating-read" value={supplier.sup_eco_score} precision={0.1} readOnly />
    </div>
  );
}