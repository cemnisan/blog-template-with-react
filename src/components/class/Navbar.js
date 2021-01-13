import React, { Component } from 'react'
import svg from '../image/NORDICROSE.svg'

class Navbar extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid mt-3">
                    <a className="navbar-brand fw-bold mx-5" href="/">
                        <img src={svg} alt ="..." className="navbar-svg"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mx-5">
                            {
                                resumeData.navbar.map(item =>{     
                                    return(
                                        <li className="nav-item">
                                            <a className="nav-link active fw-bold fs-5" aria-current="page" href="/">{item}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;