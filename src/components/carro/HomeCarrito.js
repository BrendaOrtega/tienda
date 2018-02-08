import React, { Component } from 'react';
import './Carrito.css';
import TableHome from './tables/TableHome.js';



class HomeCarrito extends React.Component {

  render() {
    return (


                      <div className="carrito">

                          <div className="home-pago">
                                <h2> Carrito</h2>
                                    </div>

                                    <div>
                                        <TableHome/>


                                    </div>
<br/>
<hr className="hr-carrito"/>
                                          </div>



    );
  }
}

export default HomeCarrito;
