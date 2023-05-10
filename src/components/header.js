import Button from '@mui/material/Button';
import './header.css'
import DenseTable from './table';
const Header=()=>{
    return(
    <>
        <div className="header-container">
            <div>
            <h1 className="heading">0% of time planned vs.event</h1>
            </div>
            <div>
            <Button variant="contained" className="mr-4" color="success"> DOWNLOAD</Button>
            <Button variant="contained" className="ml-3 mr-4" color="warning"> SAVE</Button>
            </div>
        </div>
        <DenseTable/>
        </>
       
    )
}

export default Header