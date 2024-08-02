import React from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" id="searchTxt" type="search" placeholder="Search"
                            aria-label="Search" />
                        <button className="btn btn-outline-success" type="button">Search</button>
                    </form> */}
                    <div className="d-flex">
                        <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{width:"20px",height:"20px", cursor:"pointer"}}></div>
                        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{width:"20px",height:"20px", cursor:"pointer"}}></div>
                        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{width:"20px",height:"20px", cursor:"pointer"}}></div>
                        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{width:"20px",height:"20px", cursor:"pointer"}}></div>
                        <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{width:"20px",height:"20px", cursor:"pointer",border:"1px solid black"}}></div>
                        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{width:"20px",height:"20px", cursor:"pointer",border:"1px solid white"}}></div>
                    </div>
                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                        <input type="checkbox" onClick={()=>{props.toggleMode(null)}} className="form-check-input" />
                        <label className='form-check-label' htmlFor="">Toggle Mode</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: propTypes.string.isRequired,
    aboutText: propTypes.string.isRequired
}

// if a prop is marked as required then it throws error if that prop is not present and also default prop is not present

Navbar.defaultProps = {
    title: "set title here",
    aboutText: "About"
}