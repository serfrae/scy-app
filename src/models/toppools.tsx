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
import {PoolData} from '../pages/pool/pooldata';
import {WalletData} from '../pages/pool/WalletData';
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
          "name":'Synchrony Fund',
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
		   "accordionData":<PoolData />
		 
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
	    "accordionData":<PoolData />
   },
   {
      "name":'Synchrony Fund',
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
	  "accordionData":<PoolData />
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
	  "accordionData":<PoolData />
   }
 ];
export const walletcolumns:any = [
    ['Nick name','name',{
       options:{
             order:true,
         } 
     
    }],
    ['Wallet Address','wallet_address'],
    ['Net Worth','networth'],
    ['Number of Assets','assets',{
       options:{
             order:true,
             number:true,
         } 
     
    }
    ],
    ['Performance','performance',{
       options:{
             order:true,
             number:true,
         } 
     
    }],
   
	
 ];
 
  export const walletrows:any = [
    {
          "name":'Wallet Name',
          "wallet_address":'Address',
          "assets":
            <>
               <img src={ethereumIcon} className="coinIcons" alt=""/>
               <img src={zcashIcon} className="coinIcons" alt=""/>
               <img src={dashDashIcon} className="coinIcons" alt=""/>
               <span className="moreValue">+3</span>
            </>,
          "networth":12.27,
          "performance":2.65,
           "accordionData":<WalletData />
		 
    }
	];
   export const dataColumn:any = [
      ['Ranking','id'],
      ['Name','name'],
      ['Category','category',{
         options:{
               order:true,
              
           } 
       
      }
      ],
      ['Market Cap','market_cap',{
         options:{
               order:true,
              
           } 
       
      }],
      ['Performance 24H','price_24_h',{
        options:{
           number:true
        }
     }
     ],
  
     ['Twitter Followers','twitter_followers']
     
   ];
   
  export const allColumnPool:any = [
      ['Name','name',{
         options:{
               order:true,
              
               
      },  
       
      }],
      ['Liquidity','liquidity'],
      ['Fees (24hr)','fee_24h',{
         options:{
               order:true,
               number:true,
               hideZero:true,
           } 
       
      }],
   ];