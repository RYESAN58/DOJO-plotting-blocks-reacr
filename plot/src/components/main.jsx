import React from "react";
import Subcontent from "./subcontent";
import Advertisement from "./advertisement";

const Main = (props) =>{
    const style = {
        border: '2px solid black',
        backgroundColor: '#FDBCB4',
        height: '300px',
        margin: '30px',
        width: '550px',
        display: 'flex',
        flexDirection: 'column'
    }
    return(
        <div style={style}>
            <Subcontent/>
            <Advertisement/>
        </div>
    )
}

export default Main