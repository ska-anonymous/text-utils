import React from 'react';

export default function Alert(props){
    return (
        props.alert && 
        <div style={{position: "fixed",top: "40px", width:"100%"}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}: </strong>{props.alert.message}
        </div>
    )
}