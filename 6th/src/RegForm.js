import { Box, TextField, Button } from '@mui/material';
import {useState} from 'react';
import './RegForm.css';

export const RegForm = () => {
    const initial = {
        firstName: '',
        lastName: ''
    }
    const [formData, setFormData] = useState(initial)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(initial)
        console.log('chubaka', formData.firstName, formData.lastName)
    }
    return (
        < Box component="form" sx={{display:"flex", flexDirection:'column',alignItems:'center', justifyContent:'space-around',
            height:'80%', width:'50%', background:'white', boxShadow:'0 0 10px yellow', 
            borderRadius:'.5rem'
            }} onSubmit={handleSubmit}
        >
        < TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            variant="outlined"
            sx={{width:'70%'}}
        />
        <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            variant="outlined"
            sx={{width:'70%'}}
        />

        <Button type="submit" variant="contained" color="primary">
            Submit
        </Button>

        </Box>

        // <form className="RegForm" onSubmit={handleSubmit}>
        //     <input name="name" value={state.name} onChange={handleChange} type="text" placeholder='Enter Crypto Symbol'/>
        //     <button >GO</button>
        // </form>
    )
}