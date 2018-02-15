import React, { Component } from 'react';
import User from './User.js';
import PerfilPersonal from './PerfilPersonal.js';
import TabsMenu from './TabsMenu.js';
import './Perfil.css';


class Perfil extends React.Component {
    componentDidMount () {
        window.scroll(0, 0)
    }

  render() {
    return (
      <div>
        <div >
            <User/>
            <div  className="perfil-completo" style={{background: 'white'}}>
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
