import { Container, Grid, Paper,Typography} from "@material-ui/core";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/footer';
import useStyles from "../dashboard/styles";
const Liquidity = (props: any) => {
	const classes = useStyles();
	return (
		<div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
         <Grid className={classes.welcomeContent}>
         <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Typography className={classes.commingsoonTitle}>Coming Soon</Typography>
            </Paper>
			</Grid>
			</Grid>
         </Container>
         <Footer {...props}/>
      </div>
	)
}
export default Liquidity;