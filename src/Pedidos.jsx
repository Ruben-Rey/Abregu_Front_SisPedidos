import React from 'react';

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
          <tr key={index}>
            <td>{item.fac_fecha}</td>
            <td>{item.numero_boleta}</td>
            <td>{item.cli_nombre}</td>
            <td>{item.cli_celular}</td>
            <td>{item.cli_direccion}</td>
            <td>{item.productos}</td>
            <td>{item.pro_cantidad}</td>
            <td>{item.precio_x_unidad}</td>
            <td>{item.pro_precio}</td>
            <td>{item.fac_fecha_entrega}</td>
            <td>{item.fac_descripcion}</td>
            <td>{item.fac_total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
