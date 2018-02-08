import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Direccion.css';
import '../Carrito.css';




class DireccionPago extends React.Component {

  render() {
    return (


<div>
  <div className="home-pago">
        <h2> Carrito</h2>
            </div>
            <h3 id="titulo-direccion"> Dirección del envío</h3>
<div className="pago-form-todo">


<div className="container">
  <form>
    <ul className="flex-outer">
      <li>
        <label for="first-name">Nombre/Quien recibe:</label>
        <input type="text" id="first-name" placeholder="Nombre"/>
      </li>
      <li>
        <label for="last-name">País</label>
        <input type="text" id="last-name" placeholder="País"/>
      </li>
      <li>
        <label for="estado">Estado</label>
        <input type="text" id="estado" placeholder="Estado"/>
      </li>
      <li>
        <label for="estado">Municipio</label>
        <input type="text" id="Municipio" placeholder="Municipio"/>
      </li>
      <li>
        <label for="numero">Número interior</label>
        <input type="number" id="phone" placeholder="Int."/>
      </li>
      <li>
        <label for="numero">Número exterior</label>
        <input type="number" id="phone" placeholder="Ext."/>
      </li>
      <li>
        <label for="codigo">Código Postal</label>
        <input type="number" id="phone" placeholder="C.P"/>
      </li>
      <li>
        <label for="message">Descripción</label>
        <textarea rows="refe" id="message" placeholder="Referencias"></textarea>
      </li>

      <li className="btn-direccion" >
        <NavLink to="/checkout"> <button type="submit">ACEPTAR</button>  </NavLink>

      </li>
    </ul>
  </form>
</div>
</div>
<br/>
<hr className="hr-carrito"/>
</div>


    );
  }
}

export default DireccionPago;
