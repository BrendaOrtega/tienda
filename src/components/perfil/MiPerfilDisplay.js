import React, { Component } from 'react';
import { Card } from 'antd';
import './Perfil.css';
import user from '../../assets/user.png';
import { Tabs, Icon } from 'antd';
import { Button, Radio } from 'antd';

const TabPane = Tabs.TabPane;


export const MiPerfilDisplay = ({}) => {
    return (
        <div className="perfil">
            <span style={{display:"flex"}}>
                <h3>Mis direcciones</h3>
                <span className="btn_plus">
                    <Button type="primary" shape="circle" icon="plus"  />
                </span>
            </span>
            <br/>
            <Card title="Dirección 1" extra={<a href="#">Editar</a>} style={{ width: 300 }}>
                <p>BRENDA GONZALEZ ORTEGA</p>
                <p>VENUSTIANO CARRANZA 114</p>
                <p>Cuautepec de Hinojosa Centro, 43740</p>
                <p>Hidalgo, México</p>
                <p>Teléfono: 77 5760 9276</p>
            </Card>
        </div>
    ); }  