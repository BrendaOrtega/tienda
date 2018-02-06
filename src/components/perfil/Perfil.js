import React, { Component } from 'react';
import User from './User.js';
import PerfilPersonal from './PerfilPersonal.js';
import TabsMenu from './TabsMenu.js';
import './Perfil.css';


class Perfil extends React.Component {

  render() {
    return (

      <div>

      <div >
<div  className="perfil-completo" style={{background: 'white'}}>
          <User/>
          <PerfilPersonal/>

            <TabsMenu/>

</div>


<hr id="line"/>



      </div>
          </div>

    );
  }
}

export default Perfil;
