import { Box } from "@mui/material"
import { RegForm } from "./RegForm"

export const Register = () => {
    return (
        <Box sx={{height:'100vh', width:'100%', background:'orange',
            display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'
        }}>
            <h2 className="regform-title" >Register</h2>
            <RegForm />
        </Box>
    )
}