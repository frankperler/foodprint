import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoutIcon from '@material-ui/icons/Logout';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import { userTypes } from '../../types';

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
  stateUser: userTypes;
  clickLogOut: () => void;
  goToProfile: () => void;
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
    backgroundColor:'#FF686B',
    '&:hover': {
      backgroundColor: '#FF686B',
    },
  },
}))(Button);

export default function CustomizedMenus({stateUser, clickLogOut, goToProfile}: Props): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <UserButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {stateUser.user.user_first_name} {stateUser.user.user_last_name}
      </UserButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AccountBoxRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" onClick={goToProfile} />
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