import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Direccion from './Direccion.js';



class ModalDireccion extends React.Component {

      state = { visible: false }
   showModal = () => {
     this.setState({
       visible: true,
     });
   }
   handleOk = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }
   handleCancel = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }
   render() {
     return (
       <div>
         <Button type="dashed" onClick={this.showModal}>Agregar nueva dirección</Button>
         <Modal
           title="Detalle"
           visible={this.state.visible}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
           okText="Aceptar"
           cancelText="Cancelar"
         >

              <Direccion/>

         </Modal>
       </div>
     );
   }
 }


export default ModalDireccion;
