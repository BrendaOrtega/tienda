import React, { Component } from 'react';
import ModalEdit from './EditarDatos/ModalEdit';
import {Icon } from 'antd';
import { Card } from 'antd';
import {Link, NavLink} from 'react-router-dom';
import './Perfil.css';


class PerfilPersonal extends Component {

    render() {
        return (
            <div className="data_perfil">
                <img className="avatar" src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?_nc_eui2=v1%3AAeED7IAgN5W6iob7dLe7dKZyRyFdiDDl6zNxod8bVN1nhh35K8YivQHs9DGVM-4mqAIKdoDt_X6PbVw-IvXFDPAW6jMEbe-y6ratQTNaDMhO9w&oh=d170399609c433765582b29b25c85fcf&oe=5B160CB1"/>
                <div className="data_box">
                    <Card title="Montserrat Plata" bordered={false} style={{width: 200, top: '5px'}}>
                        <p>Email: monse@gmail.com</p>
                        <p>Nombre: Montserrat Plata</p>
                        <p>Usuario:P12345</p>
                        <br/>
                        <p> <ModalEdit/></p>
                    </Card>
                </div>
            </div>
        );
    }

}

export default PerfilPersonal;
