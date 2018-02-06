import React from 'react';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';
import logo_azul from '../../assets/logo_prana_azul.png';

export const HistoryDisplay = () => {

    return (
        <div id="history" className="history">

                <div className="" style={{display:"flex", marginBottom:"50px", marginTop:"50px"}}>
                    <Parallax
                        className="custom-class"
                        offsetXMax={40}
                        offsetxMin={-20}
                        slowerScrollRate
                        tag="figure"
                    >
                        <img  className="logo_history" src={logo_azul} alt=""/>
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        offsetXMax={-40}
                        offsetxMin={70}
                        slowerScrollRate
                        tag="figure"
                    >
                    <div className="card_history">
                        <h3>Prana</h3>
                        <br/>
                        <br/>
                        <p>Somos expertos en nutrición y en la generación de sistemas de cambio
                            en las personas


                        </p>
                    </div>
                    </Parallax>
                </div>
            <div className="" style={{display:"flex"}}>
                <Parallax
                    className="custom-class"
                    offsetXMax={170}
                    offsetxMin={-40}
                    slowerScrollRate
                    tag="figure"
                >
                    <img  className="coffe_img" src='https://images-na.ssl-images-amazon.com/images/I/61ZOyoMYhvL._SL1000_.jpg' alt=""/>
                </Parallax>
                <Parallax
                    className="custom-class"
                    offsetXMax={-170}
                    offsetxMin={40}
                    slowerScrollRate
                    tag="figure"
                >
                    <div className="card_history">
                        <h3>Prana</h3>
                        <br/>
                        <br/>
                        <p>
                            Somos promotores de la salud
                        </p>
                    </div>
                </Parallax>


            </div>



        </div>
    );
}
