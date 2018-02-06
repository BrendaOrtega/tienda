import React, { Component } from 'react';
import User from  './User';
import './Perfil.css';




class PerfilDirecciones extends React.Component {

  render() {
    return (


      <div >
<div className="form-perfil-direccion-titulo">
        <h3>Agregue su dirección particular</h3>
</div>
        <div className="form-perfil-direccion">


              <form className="form-direccion">
                <label for="fname">Nombre del Responsable</label>
                <input type="text" placeholder="Nombre" />
                <label >País</label>
                  <input type="text"  placeholder="País"/>


                  <label >Municipio</label>
                    <input type="text"  placeholder="Municipio"/>

                <label >Número interior</label>
                <input type="number" placeholder="Int."/>

                <label >Número exterior</label>
                <input type="number" placeholder="Ext."/>

                        <label >Código Postal</label>
                        <input type="number" placeholder="C.P."/>
<br/>
                   <button type="button">Agregar dirección</button>



              </form>
        </div>
       </div>
    );
  }
}

export default PerfilDirecciones;
