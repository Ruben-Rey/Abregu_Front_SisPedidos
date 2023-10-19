import React, { useState } from 'react';
import './App.css';

function Tabla({ data }) {

  return (
    <table>
      <thead>
        <tr>
            <th>Fecha</th>
            <th>Boleta</th>
            <th>Cliente</th>
            <th>Celular</th>
            <th>Dirección</th>
            <th>Productos</th>
            <th>Cantidad</th>
            <th>Precio por unidad</th>
            <th>Precio total</th>
            <th>Fecha de entrega</th>
            <th>Descripción</th>
            <th>Total</th>
          </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <FilaPedido key={index} pedido={item} />   
        ))}
      </tbody>
    </table>
  );
}

function FilaPedido({ pedido }) {

  /*botonPresionado var que registra el estado actual*/
  /*setBotonPresionado funcion que asigna el nuevo estado y actualiza el estado de botonPresionado*/

  const [botonPresionado, setBotonPresionado] = useState(false);

  return (
    <tr>
      <td>{pedido.fac_fecha}</td>
      <td>{pedido.numero_boleta}</td>
      <td>{pedido.cli_nombre}</td>
      <td>{pedido.cli_celular}</td>
      <td>{pedido.cli_direccion}</td>
      <td>{pedido.productos}</td>
      <td>{pedido.pro_cantidad}</td>
      <td>{pedido.precio_x_unidad}</td>
      <td>{pedido.pro_precio}</td>
      <td>{pedido.fac_fecha_entrega}</td>
      <td>{pedido.fac_descripcion}</td>
      <td>{pedido.fac_total}</td>
      <td>
        <button
          onClick={() => setBotonPresionado(!botonPresionado)}

          // Cambia el valor de la clase en funcion al valor del BotonPresionado
          className={botonPresionado ? 'boton-ejecutar-pressed' : 'boton-ejecutar'}
        >
          Ejecutar Pedido
        </button>
      </td>
    </tr>
  );
}



export default Tabla;
