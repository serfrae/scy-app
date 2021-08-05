import React, { useState,useEffect } from "react";
import useStyles from "./styles"; 
import { RouteComponentProps } from "react-router-dom";
export default function  PoolName ({
	image='',
	name=''
}){
   const classes = useStyles();
   return (
     <div className={classes.poolname}><img src={image} className="coinIcons" alt=""/> {name}</div>
  );
};


