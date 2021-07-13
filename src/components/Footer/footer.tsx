import React from 'react';
import {AppBar,Button} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withRouter, RouteComponentProps } from "react-router-dom";
import useStyles from "../Header/styles";

const Footer = ({ history } : RouteComponentProps) => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar className={classes.footer} position="static">
        <Toolbar className={classes.footerinner}>
          
          <Typography className={classes.fttitle} variant="h6" noWrap>
             © 2021 Muon.
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           <Button color="inherit"> Help center</Button>
           <Button color="inherit"> Terms of use</Button>
           <Button color="inherit">Privacy policy</Button>
          </div>
          
        </Toolbar>
      </AppBar>
   
    </div>
  );
}

export default withRouter(Footer);