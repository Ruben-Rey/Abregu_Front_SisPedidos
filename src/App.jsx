import { useEffect, useState } from 'react'
import './App.css'
import Tabla from './Pedidos';

function App() {
  const [data, setData] = useState(null);
  
  useEffect(()=>{
    fetch('http://0.0.0.0:8000/pedidosAll/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setData(data);
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });

  }, []);

  return (
    <div>
      <h1>Detalle de la compra</h1>
      {data ? <Tabla data={data} /> : <p>Cargando datos...</p>}
    </div>
  );

}

export default App
