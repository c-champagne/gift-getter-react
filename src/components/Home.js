import React, { Component } from 'react'
import './Home.css';
class Home extends Component {


    render() {

        return (
            <div className="container-fluid h-100">
                <div className="row main h-100">
                    <div className="col-1 left">
                        <div className="row flex-column">
                            <div className="col logoBox">
                                <h1 id="logo">Gift Getter</h1>
                            </div>
                            <div className="col hRibbon">
                                
                            </div>
                            <div className="col side">
                                Side
                            </div>
                        </div>
                    </div>
                    <div className="col-10 main">
                        <div className="row h-100">
                            <div className="col-1 vRibbon">
                                
                            </div>
                            <div className="col">
                                <div className="row flex-column">
                                    <div className="col">
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                        <a class="navbar-brand" href="#">Navbar</a>
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNav">
                                            <ul class="navbar-nav">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Features</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Pricing</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link disabled" href="#">Disabled</a>
                                            </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    </div>
                                    <div className="col hRibbon">
                                        
                                    </div>
                                    <div className="col">
                                        Hello
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        )



    }



}

export default (Home);