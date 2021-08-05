import React, { useState,useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import TableGrid from '../../components/Grid/Table';
import useStyles from "./styles"; 
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import {comparecolumns,compoolsrows} from '../../models/compare';
const CompareList = (props: RouteComponentProps) => {
   const classes = useStyles();
   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
         
       {/* Second Section*/}
        <Typography className={classes.subtitle} variant="h2">
        My basket
        </Typography>
         <div className={classes.tabinnercontent}>
          <div className={classes.compareTable}>
            <Grid container>
              <Grid item xs={6}>
               <Typography>
                  List
               </Typography>
              </Grid>
              <Grid  item xs={6} className={classes.compareBtnGroup}>
              <div className={classes.btnEditTB}>
               <Button variant="contained"><EditIcon/>Edit</Button>
               </div>
               <div className={classes.btnsBuilders}>
                          
                          <Button className="transparent_buil_btn" variant="contained" color="primary">Cancel</Button>
                          <Button className="buil_btn" variant="contained" color="primary">Save</Button>
                      </div>
              </Grid>
            </Grid>
          </div>
          </div>
		 <TableGrid 
          columns ={comparecolumns}
          rows = {compoolsrows}
          tablePagination={false}
		  
		  />
         </Container>
         <Footer {...props}/>
      </div>
  );
};

export default CompareList;
