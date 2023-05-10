import * as React from 'react';
import './header.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import HelpIcon from '@mui/icons-material/Help';
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  x:number,
  y:number,
  color:string,
) {
  return { name, calories, fat, carbs, protein,x,y ,color};
}

const rows = [
  createData('1 on 1 s', "N/A", 0, 0, 0,"0%","12-15%","first"),
  createData('Team meetings', "N/A", 0, 0, 0,"0%","18-20%","second"),
  createData('Co-selling', "N/A", 0, 0, 0,"0%","20%-22%","third"),
  createData('Call review', "N/A", 0, 0, 0,"0%","6%-10%","fourth"),
  createData('Internal meetings', "N/A", 0, 0, 0,"0%","10%-15%","fifth"),
  createData('External meetings', "N/A", 0, 0, 0,"0%","20%-25%","sixth"),
  createData('Block', "N/A", 0, 0, 0,"0%","4%-8%","seventh"),
  createData('Open calnder time', "N/A", 0, 0, 0,"0%","40%-50%","eighth"),



];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Event name (100g serving)</TableCell>
            <TableCell align="right">Frequency</TableCell>
            <TableCell align="right"># of interaction (per freq.)</TableCell>
            <TableCell align="right">Time per interaction (hrs)</TableCell>
            <TableCell align="right">Total time requires (hrs)</TableCell>
            <TableCell align="right">% of time planned </TableCell>
            <TableCell align="right">Best practise range</TableCell>
            <TableCell align="right"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='back'>
              <TableCell className='text-sty' component="th" scope="row">
              <div className='for-dots'> 
                <FiberManualRecordIcon className={`ml-2 ${row.color}`} sx={{ fontSize: "15px" }}/> {row.name} <HelpIcon className='ml-2' sx={{ fontSize: "10px" }}/>
                </div>
               
              </TableCell>
              <TableCell align="right">
                {row.calories} 
                </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.x}</TableCell>
              <TableCell align="right">{row.y}</TableCell>
              <TableCell align="right">
                <div className="d-flex">
                  <BorderColorIcon className='for-color ml-2'/>
                  <AddCircleOutlineIcon className='for-color ml-2'/>
                  <EditCalendarIcon className='for-color ml-2'/>
            
                </div>
              </TableCell>


            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}