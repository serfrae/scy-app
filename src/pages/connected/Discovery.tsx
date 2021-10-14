import  { useState,useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import useStyles from "../dashboard/styles";
import Typography from '@material-ui/core/Typography';
import TableGrid from '../../components/Grid/Table';
import Container from '@material-ui/core/Container';
import {graphdata,bardata,baroptions} from '../../models/connected';
import Graphs from '../../components/Grid/graphs';
import {toppoolscolumns,toppoolsrows,walletcolumns,walletrows} from '../../models/toppools';
import {PoolName} from '../pool/PoolName';
import {walletStatus} from '../../components/Header/walletStatus';


const Discovery = (props: RouteComponentProps) => {
   const classes = useStyles();
   
   const [apiGraphData,setApiGraphData] = useState(graphdata);
   const [tokenaccountsrows,setTokenaccountsrows] = useState([]);
   const [nftRows,setNftRows] = useState([]);
   const [addressRows,setAddressRows] = useState([]);
   const [walletConnect] = useState(walletStatus);
   
   //console.log("walletStatus1",walletConnect);


   const [paramToken,setParamToken] = useState("HSfwVfB7RUF1SKCd4yrz8KZp7TU262Y5BeZZN1tdCTVk");
   const [customeToken,setCustomeToken] = useState("");

   const [total,setTotal] = useState(0);

   
   const getCoinMarkets = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=sola-token,solana,usd-coin,impossible-finance,investin,bitcoin,ethereum,yearn-finance,chainlink,ripple,tether,sushi,aleph,swipe,hedget,cream-2,upbots,helium,frontier-token,akropolis,hxro,uniswap,serum,ftx-token,megaserum,usd-coin,tomochain,karma-dao,lua-token,math,keep-network,swag-finance,celsius-degree-token,reserve-rights-token,1inch,the-graph,compound-coin,pax-gold,strong,bonfida,kin,maps,oxygen,brz,tether,xmark,raydium,bitsong,3x-short-eos-token,3x-long-eos-token,3x-short-bnb-token,3x-long-bnb-token,3x-long-bitcoin-sv-token,3x-short-bitcoin-sv-token,3x-short-litecoin-token,3x-long-litecoin-token,3x-long-bitcoin-token,3x-short-bitcoin-token,3x-short-bitcoin-cash-token,3x-long-bitcoin-cash-token,3x-long-ethereum-token,3x-short-ethereum-token,3x-long-altcoin-index-token,3x-short-altcoin-index-token,3x-long-shitcoin-index-token,3x-short-shitcoin-index-token,3x-long-midcap-index-token,3x-short-midcap-index-token,3x-short-chainlink-token,3x-long-chainlink-token,3x-long-xrp-token,3x-short-xrp-token,1x-long-btc-implied-volatility-token,1x-short-btc-implied-volatility,aave,serum-ecosystem-token,holy-trinity,bilira,3x-long-dogecoin-token,perpetual-protocol,weth,ftx-token,true-usd,tokenlon,allianceblock,skale,unlend-finance,orion-protocol,sparkpoint,uma,smartkey,mirror-protocol,growth-defi,xdai-stake,yearn-finance,basic-attention-token,decentraland,xio,unilayer,unimex-network,1inch,armor,armor-nxm,defipulse-index,deltahub-community,kira-network,energy-web-token,cryptocurrency-top-10-tokens-index,audius,vesper-finance,keep3rv1,lead-token,uniswap,wrapped-bitcoin,union-protocol-governance-token,unisocks,idextools,hex,cream-2,yfimobi,zeroswap,wrapped-anatha,ramp,parsiq,smooth-love-potion,the-sandbox,concentrated-voting-power,republic-protocol,sora,funfair,pickle-finance,pax-gold,quant-network,oraichain-token,truefi,mcdex,nucypher,razor-network,chainlink,unfederalreserve,nusd,hegic,xfinance,dextf,iexec-rlc,cvault-finance,cyberfi,wise-token11,gnosis,poolz-finance,dai,sushi,fyooz,quiverx,unitrade,bird-money,axion,bridge-mutual,dynamite,bitberry-token,waxe,matic-network,robonomics-network,aave,ethlend,polkastarter,unibright,dia-data,frax,keep-network,reserve-rights-token,88mph,paid-network,swipe,request-network,whale,kleros,krown,apy-finance,ocean-protocol,shopping-io,binance-wrapped-btc,unistake,maker,harvest-finance,usd-coin,aragon,pundi-x,redfox-labs-2,meta,rubic,noia-network,celsius-degree-token,crowns,option-room,yield-optimization-platform,lgcy-network,rio-defi,mahadao,rocket-pool,nexo,saffron-finance,stabilize,balancer,band-protocol,swapfolio,loopring,perpetual-protocol,compound-governance-token,havven,dlp-duck-token,chain-games,the-graph,rootkit,trustswap,terra-virtua-kolect,omisego,wrapped-terra,bondly,dextrust,ampleforth,polkamarkets,curve-dao-token,degenerator,exnetwork-token,tether,yield,kyber-network,coti,injective-protocol,0x,superfarm,ankreth,surf-finance,renbtc,dmm-governance,hermez-network-token,rally-2,yfdai-finance,fractal,axie-infinity,enjincoin,yield-app,duckdaodime,rarible,amp-token,fsw-token,binance-usd,aave-dai-v1,aave-tusd-v1,aave-usdc-v1,aave-usdt-v1,aave-susd-v1,aave-bat-v1,aave-eth-v1,aave-link-v1,aave-knc-v1,aave-mkr-v1,aave-mana-v1,aave-zrx-v1,aave-snx-v1,aave-wbtc-v1,aave-busd-v1,aave-enj-v1,aave-ren-v1,ayfi,aave-usdt,aave-wbtc,aave-zrx,aave-bat,aave-busd,aave-dai,aave-enj,aave-knc,aave-link,aave-mana,aave-mkr,aave-ren,aave-snx,aave-susd,aave-tusd,aave-usdc,stake-dao,cope,cope,mango-market-caps,rope-token,media-network,step-finance,solanium,samoyedcoin,star-atlas,star-atlas-dao,synthetify-token,moonlana,solape-token,mercurial,lotto,bole-token,apyswap,solfarm,ardcoin,cheems,cato,boring-protocol,dexlab,grape-2,apexit-finance,black-label,orca,renbtc,renbch,rendoge,renzec,sail,aldrin,oxbull-solana,fabric,gu,liq-protocol,solrise-finance,cheesesoda-token,only1,terrausd,coin98,saber,huobi-btc,husd,port-finance,jpyc,mango-markets,solanasail-governance-token,sunny-aggregator,cyclos,million,shapeshift-fox-token,solminter,tether,usd-coin,renfil,bitspawn,agronomist,polyplay,binance-usd,weth,tether,usd-coin,multi-collateral-dai,celo-dollar,chronologic,solana,usd-coin,wrapped-terra,bitcoin,bitcoin,usd-coin,ftx-token,usdk,serum,bitcoin,bitcoin,usd-coin,solana,usdt`);
    const json = await response.json();

    let coinJsonArr:any = {};
    json.forEach(coin => {
      coinJsonArr[coin.name] = coin.current_price;
    });
    
    return coinJsonArr;
  }

function array_sum(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += parseFloat(array[i]);
  }
  return sum;
}
   function getTokenAccountsByOwnerByFunction(walletToken){
      getCoinMarkets().then((coinJsonArr)=>{
        
        
        fetch('https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json',{
        }).then(function(response){
          return response.json();
        })
        .then(function(solanatokens) {
          return solanatokens;
        }).then(function(solanatokens){
          //console.log(solanatokens.tokens)
          let solanatokensList = solanatokens.tokens;
          fetch('https://explorer-api.mainnet-beta.solana.com/', {
           method: 'post',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({
              "method": "getTokenAccountsByOwner",
              "jsonrpc": "2.0",
              "params": [
              walletToken,
              {
                  "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
              },
              {
                  "encoding": "jsonParsed",
                  "commitment": "processed"
              }
              ],
              "id": "0ffcf9e3-e6de-4a8a-915a-50afa151779e"
            }
           )
          }).then(response => response.json())
          .then(data => {
             console.log('getTokenAccountsByOwner',data);
             console.log('coinJsonArr',coinJsonArr);


           
             let apiGraphData_temp = {...apiGraphData};
             apiGraphData_temp.datasets[0].data =  [];
             apiGraphData_temp.labels =  [];
             let graphDataKey = 0;

             let temp_tokenaccountsrows:any = [];
             let nft_tokenaccountsrows:any = [];
             let address_tokenaccountsrows:any = [];
             
             if(data.hasOwnProperty('result')){
                data = data.result.value;
                for(var i = 0; i < data.length; i++ ){
                 let logo_url = 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/'+data[i].account.data.parsed.info.mint+'/logo.png';
                 
                 let amount = parseFloat(data[i].account.data.parsed.info.tokenAmount.amount);
                 let uiAmount = parseFloat(data[i].account.data.parsed.info.tokenAmount.uiAmount);
                 let mint =  data[i].account.data.parsed.info.mint;
                 let githubuserName = '';

                 if(mint){
                    let userdetails =  solanatokensList.find(token => token.address === mint);
                    //console.log(userdetails);
                    if(typeof userdetails != 'undefined')
                      githubuserName = userdetails.name;
                 }
          if(amount === 0 && uiAmount === 0){
             address_tokenaccountsrows.push({
              logo:  <PoolName image={logo_url} name=''></PoolName>,
              pubkey:data[i].pubkey,
              mint: githubuserName,
              amount: (amount > 0 ) ? amount.toFixed(2):'0.0',
              uiAmount: (uiAmount > 0 )?uiAmount.toFixed(2):'0.0',
            });
          }else if(amount === 1 && uiAmount === 1){
             nft_tokenaccountsrows.push({
              logo:  <PoolName image={logo_url} name=''></PoolName>,
              pubkey:data[i].pubkey,
              mint: githubuserName,
              amount: (amount > 0 ) ? amount.toFixed(2):'0.0',
              uiAmount: (uiAmount > 0 )?uiAmount.toFixed(2):'0.0',
            });
          }else{

             let price = 0;
			 let div = 1;
			 
			 let totalDecimal = parseInt(data[i].account.data.parsed.info.tokenAmount.decimals);
			 for(let j = 1; j<=parseInt(data[i].account.data.parsed.info.tokenAmount.decimals); j++){
				div *= 10;
			 }
			 if(githubuserName === "USDC" || githubuserName === "USDT" || githubuserName.includes("USD") || githubuserName.includes("usd")){ price = 1;}
             let temp_amount = ( amount / div);
             let temp_uiAmount:any = 0;
             console.log('githubuserNameOut',githubuserName);
             if(typeof coinJsonArr[githubuserName] !== 'undefined'){
              console.log('githubuserName',githubuserName);
              price = coinJsonArr[githubuserName]; //parseFloat(coinJsonArr[githubuserName]); 
              temp_uiAmount = price * temp_amount;
              temp_uiAmount = temp_uiAmount.toFixed(2);

              
             }
             temp_tokenaccountsrows.push({
              logo:  <PoolName image={logo_url} name=''></PoolName>,
              pubkey:data[i].pubkey,
              mint: githubuserName,
              price: price === 0 ? '-' : price,
              amount: price === 0 ? '-' : (temp_amount * price).toFixed(totalDecimal),
              uiAmount: temp_amount.toFixed(totalDecimal)
            });

	            if(githubuserName){
	            	apiGraphData_temp.datasets[0].data[graphDataKey] =  temp_amount.toFixed(totalDecimal);
	                apiGraphData_temp.labels[graphDataKey] =  githubuserName;
	                graphDataKey++;
	            }
              

          }
                 
                }
             }
             setTokenaccountsrows(temp_tokenaccountsrows);
             setNftRows(nft_tokenaccountsrows);
             setAddressRows(address_tokenaccountsrows);
             setApiGraphData(apiGraphData_temp);
             let totalGraph = array_sum(apiGraphData_temp.datasets[0].data);
             console.log(totalGraph);
             setTotal(totalGraph);
          })
        });
      })
      
   }

   function handleInputChange(e) {
   if(e.target.value){
     setParamToken(e.target.value);
     setCustomeToken(e.target.value);
   }else{
     setParamToken("HSfwVfB7RUF1SKCd4yrz8KZp7TU262Y5BeZZN1tdCTVk");
     setCustomeToken('');
   }
   //getTokenAccountsByOwnerByFunction();
  }

   const tokenaccountscoinscolumns:any = [
      ['LOGO','logo'],
      ['ACCOUNT ADDRESS','pubkey',{
         options:{
               order:true,
           } 
      }],
      ['MINT ADDRESS','mint',{
         options:{
               order:true,
           } 
       
      }],
     
      ['BALANCE','uiAmount',{
         options:{
               order:true,
               number:true,
         hideZero:false
           } 
       
      }
      ],
       ['Price','price'],
      ['USDT','amount',{
         options:{
               order:true,
               number:true,
         hideZero:false
           } 
       
      }]
    
   ];

   const tokenaccountscolumns:any = [
      ['LOGO','logo'],
      ['ACCOUNT ADDRESS','pubkey',{
         options:{
               order:true,
           } 
      }],
      ['MINT ADDRESS','mint',{
         options:{
               order:true,
           } 
       
      }],
      ['BALANCE','uiAmount',{
         options:{
               order:true,
               number:true,
			   hideZero:false
           } 
       
      }
      ],
      ['USDT','amount',{
         options:{
               order:true,
               number:true,
			   hideZero:false
           } 
       
      }]
    
   ];

   useEffect(function effectFunction()  {
      
      
      const data = "2FpraigffbG8JGDfvegY8xrF6dNQHdxYwde7rfubzeki";//localStorage.getItem('loggedInToken');
      console.log(data);
        //get balance
        fetch('https://api.mainnet-beta.solana.com/', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
          "jsonrpc":"2.0",
          "id":1,
           "method":"getBalance", 
           "params":[data]}
         )
        }).then(response => response.json())
        .then(data => {
           let apiGraphData_temp = {...apiGraphData};
           apiGraphData_temp.datasets[0].data[0] =  data.result.value;
           setApiGraphData(apiGraphData_temp);
        })

        //1. get getAccountInfo
        fetch('https://api.mainnet-beta.solana.com/', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
          "jsonrpc":"2.0",
          "id":1,
           "method":"getAccountInfo", 
           "params":[data]}
         )
        }).then(response => response.json())
        .then(data => {
           console.log('getAccountInfo',data.result);
           /*let apiGraphData_temp = {...apiGraphData};
           apiGraphData_temp.datasets[0].data[0] =  data.result.value;
           setApiGraphData(apiGraphData_temp); */
        })

        if(walletConnect){
        let tokenkey = localStorage.getItem('loggedInToken');
           //getTokenAccountsByOwnerByFunction(tokenkey?.toBase58());
           getTokenAccountsByOwnerByFunction(tokenkey);
        }else{
           getTokenAccountsByOwnerByFunction(paramToken);
        }
        

        //2. get getTokenAccountsByOwner
        
        //3. get getTokenAccountBalance
        fetch('https://api.mainnet-beta.solana.com/', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
          "jsonrpc":"2.0",
          "id":1,
           "method":"getTokenAccountBalance", 
           "params":[data]
           //"params": ["7fUAJdStEuGbc3sM84cKRL6yYaaSstyLSU4ve5oovLS7"]
           }
         )
        }).then(response => response.json())
        .then(data => {
           console.log('getTokenAccountBalance',data);
           /*let apiGraphData_temp = {...apiGraphData};
           apiGraphData_temp.datasets[0].data[0] =  data.result.value;
           setApiGraphData(apiGraphData_temp); */
        })

        //4. get getMultipleAccounts
        fetch('https://api.mainnet-beta.solana.com/', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
          "jsonrpc":"2.0",
          "id":1,
           "method":"getMultipleAccounts", 
           "params": [
              [
                "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
                "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"
              ],
              {
                "dataSlice": {
                  "offset": 0,
                  "length": 0
                }
              }
            ]
           }
         )
        }).then(response => response.json())
        .then(data => {
           console.log('getMultipleAccounts',data);
           /*let apiGraphData_temp = {...apiGraphData};
           apiGraphData_temp.datasets[0].data[0] =  data.result.value;
           setApiGraphData(apiGraphData_temp); */
        })

    }, []);
     useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${paramToken} times`;
    });
   
   return (
      <div className={classes.root} > 
         <Header {...props}/>
         {/* First Section*/}
         <Container fixed>
         <Grid className={classes.secondBox} container>
            <Grid item xs={8} className={classes.graphtitle}>
            <Typography className={classes.subtitle} style={{ marginTop:0, }}>
                   Discovery
               </Typography>
            <Paper className={classes.boxgrid}>
             <div className={classes.pullLeft}>
               <Typography className={classes.bttitle}>
                    My Portfolio
               </Typography>
             
               <Typography className={classes.valuefolio} variant="h2">
                        ${total} <small>12.27%</small>
                  </Typography>
               </div>
               
              
               <Graphs
                   data={bardata}
                   options={baroptions}
                   type={"Bar"}
                  />
              
            </Paper>     
            </Grid>
            
            <Grid item xs={4} className={classes.portfolio}>
                 <Paper className={classes.boxgrid}>
                 <Typography className={classes.prottitle} variant="h3">
                       Portfolio Allocation
                  </Typography>
                  <Graphs
                   type="Doughnut"
                   data={apiGraphData}
                  />
                  
              
                  </Paper>
            </Grid>
            </Grid>  
            <div className={classes.clearfix}></div>
              
 {/* Second Section*/}
       
         <Grid  container>
            <Grid item xs={12} >
          <TableGrid 
          columns ={walletcolumns}
          rows = {walletrows}
          tablePagination={false}
		  accordion={true}
		 />
		</Grid>
		</Grid>
        
        <Grid  container className="TableIndex">
          <Typography className={classes.subtitle} style={{ marginTop:0, }}>
                  Synchrony Index
               </Typography>
        <Grid item xs={12} >
           <TableGrid 
          columns ={toppoolscolumns}
          rows = {toppoolsrows}
          tablePagination={false}
		 />
        </Grid>
        </Grid>


         <Grid  container className="TableIndex SearchBox">
          <Typography className={classes.subtitle} style={{ marginTop:0, }}>
                  Token Accounts By Owner 
               </Typography>
               <div className="search_box">
               <input type="text" value={customeToken} onChange={(e) => {handleInputChange(e)}} className=""/>
               <button name="search" onClick={ (e) => { getTokenAccountsByOwnerByFunction(paramToken) }} >Search</button>
               </div>
        <Grid item xs={12} >
           <TableGrid 
          columns ={tokenaccountscoinscolumns}
          rows = {tokenaccountsrows}
          tablePagination={true}
     />
        </Grid>
        </Grid>
		
		{/* NFT */}
		{ nftRows.length > 0 &&
		<Grid  container className="TableIndex SearchBox">
          <Typography className={classes.subtitle} style={{ marginTop:0, }}>
                  NFT
          </Typography>
              
        <Grid item xs={12} >
           <TableGrid 
          columns ={tokenaccountscolumns}
          rows = {nftRows}
          tablePagination={true}
     />
        </Grid>
        </Grid>
		}
		
		{/* address */}
		{ addressRows.length > 0 && 
		<Grid  container className="TableIndex SearchBox">
          <Typography className={classes.subtitle} style={{ marginTop:0, }}>
                  Addresses
          </Typography>
              
        <Grid item xs={12} >
           <TableGrid 
          columns ={tokenaccountscolumns}
          rows = {addressRows}
          tablePagination={true}
     />
        </Grid>
        </Grid>
		}


         </Container>
         
      </div>
  );
};

export default Discovery;
