import React from "react";

const Subcontent = (props) =>{
    const style ={
        height: '200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '10px'
    }
    const yellow ={
        height: '200px',
        width: '100px',
        backgroundColor: 'yellow',
        border: 'solid black 2px',
        
    }
    return(
        <div style={style}>
            <div style={yellow}></div>
            <div style={yellow}></div>
            <div style={yellow}></div>
        </div>
    )
}

export default Subcontent