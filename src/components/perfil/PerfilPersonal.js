import React, { Component } from 'react';
import ModalEdit from './EditarDatos/ModalEdit';
import {Icon } from 'antd';
import { Card } from 'antd';
import {Link, NavLink} from 'react-router-dom';
import './Perfil.css';
import user from '../../assets/user.png';


export const PerfilPersonal = ({photoURL, displayName, email, isLogged}) => {


    return (
        <div className="data_perfil">
            <img  className="avatar" src={photoURL ? photoURL : user} alt="user"/>

            <div className="data_box">
                <Card title="Tus datos" bordered={false} style={{width: 200, top: '5px'}}>
                    <h2>{displayName}</h2>
                    <p>{email}</p>
                    <br/>
                    <p><ModalEdit/></p>
                </Card>
            </div>
        </div>
    );
}

