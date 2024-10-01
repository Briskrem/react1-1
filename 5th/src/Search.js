import { Typography } from "@mui/material";
import "./Search.css";
import { useTransition } from "react";


export const Search = () => {
    return (
        <div className="Search" >
            <Typography sx={{bgcolor:'gray',width:{xs:"100px", md:'400px'}, ":hover":{bgcolor:'purple'}}}>SAMSONITE</Typography>
            Search
        </div>
    )
}