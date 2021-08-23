import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { restaurantTypes } from '../../../types/restaurant-types';
import { EcoLeaf } from '../../profile/profile-styled-components/profile.style';
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
      marginTop: "0.8em"
    },
  }),
);
interface Props {
  restaurant: restaurantTypes
}

export const RestEcoRating: React.FunctionComponent<Props> = ({ restaurant }: Props) => {
  const classes = useStyles();

  const ecoScore: number = restaurant.rest_eco_score;
  const roundedEcoScore: number = Math.round(ecoScore / 0.5) * 0.5

  return (
    <div className={classes.root}>
      {(
          () => { 
          switch(roundedEcoScore) {
          case 0:
            return <div><EcoLeaf src="/images/eco_unfilled.svg" /><EcoLeaf src="/images/eco_unfilled.svg" /><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div>
          case 0.5:
            return <div><EcoLeaf src="/images/eco_half_leaf.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div> 
          case 1.0:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div> 
          case 1.5:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_half_leaf.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div>
          case 2.0:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div>
          case 2.5:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_half_leaf.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div>
          case 3.0:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div>
          case 3.5:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_half_leaf.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div>
          case 4.0:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div>
          case 4.5:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_half_leaf.svg"/></div>
          case 5.0:
            return <div><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/><EcoLeaf src="/images/eco_full_leaf.svg"/></div>
          default:
            return <div><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/><EcoLeaf src="/images/eco_unfilled.svg"/></div>
          }
        })
      ()}
    </div>
  );
}