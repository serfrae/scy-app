import React from "react";
import useStyles from "./styles"; 
export  function  PoolName ({
	image='',
	name=''
}){
   const classes = useStyles();
   return (
     <div className={classes.poolname}>{image !== "" && <img src={image} className="coinIcons" alt=""/>} {name}</div>
  );
};


