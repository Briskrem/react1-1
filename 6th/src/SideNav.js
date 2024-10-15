import {Container, Box, Button, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';
import './SideNav.css';

export const SideNav = ({toggleActive, activeSideNav}) => {
    return (

        <Container>
            <Box sx={{height:'100vh', width: "100%", position: 'absolute', top:'0px', left : activeSideNav ? '0px': ' -1300px', 
                display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'flex-start', background:'gray',
                transition: '.4s ease'
            }}  >
                <Box sx={{height:'5rem', width:'100%', background:'limegreen',
                    display:'flex', alignItems:'center', justifyContent:'flex-end',
                    p:"0 4rem 0 0", m:'0 0 2rem 0'
                }}>
                    <Button variant='contained' color='error' size='large' onClick={toggleActive} >X</Button>
                </Box>
                <Box sx={{height:'35rem', width:'30%', background:'black',
                     display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around',
                     borderRadius:'.5rem', boxShadow:'0 0 10px limegreen'}}>
                    <NavLink onClick={toggleActive}  className={'navlink'} to={'/'} >HOME</NavLink>
                    <NavLink onClick={toggleActive}  className={'navlink'} to={'/search'} >SEARCH</NavLink>
                    <NavLink onClick={toggleActive}  className={'navlink'} to={'/'} >LOGIN</NavLink>
                    <NavLink onClick={toggleActive}  className={'navlink'} to={'/'} >LOGOUT</NavLink>
                    <NavLink onClick={toggleActive}  className={'navlink'} to={'/register'} >REGISTER</NavLink>
                </Box>
            </Box>
        </Container>
    )
}