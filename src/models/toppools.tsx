import chartIcon from '../assets/icon/Chart.svg';
import chartredIcon from '../assets/icon/Vector.svg';
import ethereumIcon from '../assets/icon/ethereum.svg';
import zcashIcon from '../assets/icon/zcash.svg';
import dashDashIcon from '../assets/icon/dash-dash.svg';
import vertcoinIcon from '../assets/icon/vertcoin.svg';
import digibyteIcon from '../assets/icon/digibyte.svg';
import litecoinIcon from '../assets/icon/litecoin.svg';
import ethereumClassicIcon from '../assets/icon/ethereum-classic.svg';
import bitcoinIcon from '../assets/icon/bitcoin.svg';

 export const toppoolscolumns:any = [
    ['Name','name',{
       options:{
             order:true,
         } 
     
    }],
    ['Volume','volume'],
    ['Top assets','topassets'],
    ['All time','alltime',{
       options:{
             order:true,
             number:true,
         } 
     
    }
    ],
    ['24h','hours',{
       options:{
             order:true,
             number:true,
         } 
     
    }],
    ['Last 7 days','lastdays'],
	
 ];
 export const toppoolsrows:any = [
    {
          "name":'Fund name',
          "volume":'$5,425,960.21',
          "topassets":
            <>
               <img src={ethereumIcon} className="coinIcons" alt=""/>
               <img src={zcashIcon} className="coinIcons" alt=""/>
               <img src={dashDashIcon} className="coinIcons" alt=""/>
               <img src={vertcoinIcon} className="coinIcons" alt=""/>
               <img src={digibyteIcon} className="coinIcons" alt=""/>
               <img src={litecoinIcon} className="coinIcons" alt=""/>
               <img src={ethereumClassicIcon} className="coinIcons" alt=""/>
               <img src={bitcoinIcon} className="coinIcons" alt=""/>
               <span className="moreValue">+3</span>
            </>,
          "alltime":'12.27',
          "hours":2.65,
          "lastdays":<img src={chartIcon} alt=""/>,
		 
    },
    {
       "name":'Tund name',
       "volume":'$5,425,960.21',
       "topassets":
            <>
               <img src={vertcoinIcon} className="coinIcons" alt=""/>
               <img src={digibyteIcon} className="coinIcons" alt=""/>
               <img src={litecoinIcon} className="coinIcons" alt=""/>
               <img src={ethereumClassicIcon} className="coinIcons" alt=""/>
            </>,
       "alltime":'.26',
       "hours":.65,
       "lastdays":<img src={chartredIcon} alt=""/>,
	    "accordionData":111
   },
   {
      "name":'Fund name',
      "volume":'$5,425,960.21',
      "topassets":
            <>
               <img src={litecoinIcon} className="coinIcons" alt=""/>
               <img src={ethereumClassicIcon} className="coinIcons" alt=""/>
               <img src={bitcoinIcon} className="coinIcons" alt=""/>
            </>,
      "alltime":'10.01',
      "hours":2.65,
      "lastdays":<img src={chartIcon} alt=""/>,
	  "accordionData":111
   },
   {
      "name":'Tund name',
      "volume":'$5,425,960.21',
      "topassets":
         <>
            <img src={ethereumIcon} className="coinIcons" alt=""/>
            <img src={zcashIcon} className="coinIcons" alt=""/>
            <img src={dashDashIcon} className="coinIcons" alt=""/>
            <img src={vertcoinIcon} className="coinIcons" alt=""/>
            <img src={digibyteIcon} className="coinIcons" alt=""/>
            <img src={litecoinIcon} className="coinIcons" alt=""/>
            <img src={ethereumClassicIcon} className="coinIcons" alt=""/>
            <img src={bitcoinIcon} className="coinIcons" alt=""/>
            <span className="moreValue">+3</span>
         </>,
      "alltime":'.12',
      "hours":.65,
      "lastdays":<img src={chartredIcon} alt=""/>,
	  "accordionData":111
   }
 ];
