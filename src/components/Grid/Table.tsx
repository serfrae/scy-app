import React,{useState} from 'react';
import {Table, TableBody, TableFooter, TablePagination} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import renderTableCell from './rendercell';
import useStyles from "./styles";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import noDataIcon from '../../assets/icon/nodata.svg';
import navIcon from '../../assets/icon/nav.svg';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  type Order = 'asc' | 'desc';
  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  } 
export function Row({row={},columns=[],index=0,accordion = false}){
     const classes = useStyles();
    let cols = columns.filter((col:any) => !col[2] || col[2].type !== 'collapse')
    .map((col:any) => ({
      field: col[0],
      fieldName: col[1],
      isAction: false,
      headerClassName: classes.headerCell,
      cellClassName: classes.headerCell,
      ...((!!col[2] && !!col[2].options) ? col[2].options : {})
    }));
	const[currentIndex,setCurrentIndex] = useState(-1);
	const setCurrentIndexToggle = (cellIndex:any)=>{
		let crntIndex:any = cellIndex === currentIndex ? -1 : cellIndex;
		setCurrentIndex(crntIndex)
	}
    return(
      <><TableRow key={index}>
          {
          cols.map((col,index) => (
				
              <TableCell className={`cellrow ${col.cellClassName}${(col.number !== 'undefined' && col.number === true) ? ((row[col.fieldName] <= 1)?' lessvalue ':' greatervalue') : '' }`} key={`cellrow.(${col.field}${index})`} >
                {(col.type !== 'undefined' && col.type === 'link') ?   <Link to={row['link']}> {renderTableCell({value: row[col.fieldName]})}</Link> :  <>{(col.hideZero !== 'undefined' && col.hideZero === true && (row[col.fieldName] === '0' || row[col.fieldName] === 0)) ? '': renderTableCell({value: row[col.fieldName]})}</> }
              </TableCell>
				
          ))
          }
		 {accordion === true &&
			<TableCell className={`cellrow ${index}`} key={`cellrow.(${index}`} >
					<ExpandMoreIcon className={currentIndex === index ? classes.expandOpenIcon : classes.expandIcon} onClick={()=>{setCurrentIndexToggle(index)}}/>
			</TableCell>  
		 }
      </TableRow> 
	  { accordion === true &&
		 <TableRow className={currentIndex === index ? `accordioncls open cellrow ${index}` : `accordioncls cellrow ${index}`} key={`collrow.(${index}`}>
				<TableCell className={`cellrow ${index}`} key={`colllcell.(${index}`} colSpan={(cols.length + 1)}>
					{ (row && row.hasOwnProperty('accordionData')) ? row['accordionData'] : ''}
				</TableCell>
		 </TableRow>	
		  
	  }	
	  
	  </>     
    );
}

export default function TableGrid({columns=[],rows=[],tablePagination =true, moreLinkText = "",link="",accordion=false}){
    
  const classes = useStyles();
  const history = useHistory();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleRequest = ()=>{
      history.push(link);
  }
  let cols = columns.filter((col:any) => !col[2] || col[2].type !== 'collapse')
    .map((col:any) => ({
      field: col[0],
      fieldName: col[1],
      isAction: false,
      headerClassName: classes.headerCell,
      cellClassName: classes.headerCell,
      ...((!!col[2] && !!col[2].options) ? col[2].options : {})
    }));
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      }; 
   const changeOrderData = (name="",type="")=>{
        let orderType:Order = (type === 'asc') ? 'desc':'asc';
        setOrderBy(name);
        setOrder(orderType);
   }
   
   return (
    <div className={classes.treeTable}>
      <Table className="tree-table" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {cols.map((col:any, index:any)=>(
                <TableCell className={col.headerClassName} key={index}>
                  { col.field} {(col.order !== 'undefined' && col.order === true) && <span onClick={()=>{changeOrderData(col.fieldName,order)}}><ArrowDropUpIcon className={order === "asc" ?  "disabled ":'' }/> <ArrowDropDownIcon className={order === "desc" ?  "disabled down":'down' }/> </span>}
                </TableCell>
                ))
            }
			{accordion === true && 
				<TableCell className={'headerClassName'} key={(cols.length+1)}>
				
				</TableCell>
			
			}
          </TableRow>
        </TableHead>
          { rows.length > 0 ?  <TableBody>
           
          {stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              return( <Row
                  row={row}
                  columns={columns}
                  index ={index}
                  key={index}
				  accordion ={accordion}
              />)
          })}   
            
          </TableBody>  
           :
           <TableBody><TableRow> <TableCell className={classes.nodata} key={'0'} colSpan={columns.length} align="center">
             <div className="nodata"><img src={noDataIcon} alt=""/><p>No Data</p> </div> 
            </TableCell></TableRow></TableBody>
          }
          {(moreLinkText &&  rows.length > 0)!== "" &&
           <TableFooter>
              <TableRow>
              <TableCell className={classes.viewAll} key={'0'} colSpan={columns.length} align="center">
                   <div className="view-all"  onClick={handleRequest}><p>{moreLinkText} <img src={navIcon} alt=""/></p> </div> 
               </TableCell>
               </TableRow>
            </TableFooter>    
          }  
          </Table>  
          {tablePagination === true &&     
          <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
          }
    </div>
  );
}
