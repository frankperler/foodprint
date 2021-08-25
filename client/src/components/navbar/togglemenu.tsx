import React, { useContext } from 'react';
import { withStyles, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoutIcon from '@material-ui/icons/Logout';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { userTypes } from '../../types';
import { userContext } from '../../contexts/user-context';

import Avatar from '@material-ui/core/Avatar';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

type Props = {
  clickLogOut: () => void
}

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#FF686B',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const UserButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: '#FF686B',
    '&:hover': {
      backgroundColor: '#FF686B',
    },
  },
}))(Button);


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    medium: {
      width: theme.spacing(6.4),
      height: theme.spacing(6.4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

export default function CustomizedMenus({ clickLogOut }: Props): JSX.Element {

  const classes = useStyles();
  const { stateUser, dispatchUser } = useContext(userContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {stateUser.user.user_picture ?
        <div onClick={handleClick} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
          <Avatar
            aria-controls="customized-menu"
            aria-haspopup="true"
            className={classes.medium}
            style={{ display: "inline-block", marginRight: "0.5em" }}
            src={stateUser.user.user_picture} />
          {stateUser.user.user_first_name + " " + stateUser.user.user_last_name}
          <ExpandMoreIcon fontSize="large"></ExpandMoreIcon>
        </div>
        :
        <UserButton
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <span>{stateUser.user.user_first_name + " " + stateUser.user.user_last_name}</span>
        </UserButton>
      }
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: "0.35em", marginLeft: "1.6em" }}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AccountBoxRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" onClick={clickLogOut} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}