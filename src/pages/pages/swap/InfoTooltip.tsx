import React from "react";
import useStyles from "../dashboard/styles";
import {Typography,TextField} from "@material-ui/core";
import copyIcon from '../../assets/icon/copy.svg';
const InfoTooltip = (props: any) => {
	const classes = useStyles();
 	return (
		<div className={classes.InfoTooltipBox}>
			<Typography className={classes.InfoHead} variant="h4">Addresses</Typography>
			<div className={classes.Infoinputgroup}>
				<label>ETH</label>
				<TextField placeholder="4k3Dyjzvzp8eMZWUXbBCjEvwS"  />
				<span><img src={copyIcon} alt="" /></span>
			</div>
			<div className={classes.Infoinputgroup}>
				<label>DIGIBYTE</label>
				<TextField placeholder="4k3Dyjzvzp8eMZWUXbBCjEvwS"/>
				<span><img src={copyIcon} alt=""/></span>
			</div>
		</div>
		)
}
export default InfoTooltip;