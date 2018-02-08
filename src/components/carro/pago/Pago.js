import React, { Component } from 'react';
import FormPago from './FormPago';
import '../Carrito.css';




class Pago extends React.Component {

  render() {
    return (
                            <div>
                              <div className="home-pago">
                                    <h2> Carrito</h2>
                                        </div>
                              <h3 id="pago-home"> Datos de la tarjeta</h3>
                                <br/>
                                  <FormPago/>


                                  <hr className="hr-carrito"/>
                                    </div>



    );
  }
}

export default Pago;
