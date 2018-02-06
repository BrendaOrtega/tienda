import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import './Compra.css';


const columns = [{
  title: 'Producto',
  dataIndex: 'imagen',
}, {
  title: 'Nombre',
  dataIndex: 'name',
}, {
  title: 'Descripción',
  dataIndex: 'desc',
},{
  title: 'Precio',
  dataIndex: 'precio',

}];
const data = [{
  key: '1',
  imagen: <img  id="img" src="http://www.pranahealthfood.com.au/wp-content/uploads/2014/05/Revive_225GM.jpg" alt=""/>,
  name: 'REVIVE',
  desc: "REVIVE is based on the wisdom of David Wolfe",
  precio: '$200.00',
}];

class Compra extends React.Component {

  render() {

    return (
      <div className="table-compra-actual">

  <Table id="compra-actual" columns={columns} dataSource={data} size="small" />

</div>



    );
  }
}
export default Compra;
