import { Button, Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = ({sidebarActive, toggleSideBar}) => {

    return (
        <div className="Sidebar" style={{ left: sidebarActive ? "-200px" :  "-1300px" }}>
            <Box sx={{ display:"flex",alignItems:"center", justifyContent:"flex-end", width:'100%' ,height:"40px",p:"0 4rem 0 0" ,bgcolor: "gray"}}>
                <Button variant='contained'color='error' size='small' onClick={toggleSideBar} >X</Button>
            </Box>
            
            {/* <div className='box1' > */}
            <Box sx={{height:'40rem', width:'50%', bgcolor:'gray', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', border:'1px solid black', borderRadius:'.4rem'}}>
                <Button>
                    <NavLink  onClick={toggleSideBar} to={'/'} >HOME</NavLink>
                </Button>
                <Button size='small'sx={{mt: 2}}>
                    <NavLink onClick={toggleSideBar} to={'/search'} >SEARCH</NavLink>
                </Button>
                <Button sx={{mt: 2}}>
                    <NavLink  >LOGIN</NavLink>
                </Button>
                <Button sx={{mt: 2}}>
                    <NavLink  >LOGOUT</NavLink>
                </Button>
                <Button sx={{mt: 4}} style={{background:'red', margin:'5rem 0 0 0'}}>
                    <NavLink  >REGISTER</NavLink>
                </Button>
            </Box>
            {/* </div> */}
            <div className='box2' >you</div>
        </div>
    )
}