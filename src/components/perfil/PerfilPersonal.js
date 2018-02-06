import React, { Component } from 'react';
import {Icon } from 'antd';
import { Card } from 'antd';
import {Link, NavLink} from 'react-router-dom';
import './Perfil.css';

class PerfilPersonal extends Component {

    render() {
        return (
            <div className="back">
                <div style={{padding: '5px'}}>
                    <Card title="Montserrat Plata" bordered={false} style={{width: 200, top: '5px'}}>
                        <p>Email: monse@gmail.com</p>
                        <p>Nombre: Montserrat Plata</p>
                        <p>Usuario:P72727</p>
                        <br/>
                        <p><NavLink to="/editarperfil"> Modificar datos <Icon type="edit"/> </NavLink></p>
                    </Card>
                </div>
            </div>
        );
    }

}

export default PerfilPersonal;
