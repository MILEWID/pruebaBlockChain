

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractAbi from './contractPres.json';

const App = () => {
  const [result, setResult] = useState('');
  const [contractInstance, setContractInstance] = useState(null);

  useEffect(() => {
    const conectarContrato = async () => {
   
      try {
        if (typeof window.ethereum === 'undefined') {
          console.error('Please install MetaMask!');
          return;
        }

        const provider = new ethers.WebSocketProvider('wss://eth-sepolia.g.alchemy.com/v2/27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ');
        const signer = new ethers.Wallet('b8ab8db711170a4fb1fdc6e9c65680651b5231ebbf539613b931ae39e865dcdb', provider);

        const contractAddress = '0x5E2c41C337410d3A4E6B3c9D41b1Bf5C900A97E9';

        if (!Array.isArray(contractAbi)) {
          console.error('The contract ABI is not an array:', contractAbi);
          return;
        }

        const instance = new ethers.Contract(contractAddress, contractAbi, signer);
        setContractInstance(instance);

        const manejarEventoAprobacion = (aprobado, montoAprobado) => {
          setResult(aprobado ? '¡Préstamo Aprobado!' : 'Préstamo No Aprobado');
          console.log(`Préstamo Aprobado: ${aprobado} con un monto de ${montoAprobado}`);
        };
        instance.on("PrestamoAprobado", (event)=>{
          console.log("algo");
          console.log("evento"+ event);
        });

        instance.on("PrestamoAprobado", manejarEventoAprobacion);

       return () => instance.off("PrestamoAprobado", manejarEventoAprobacion);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    };
    console.log("hola conectar contrato");
    conectarContrato();
  }, []);

  const enviarTransaccion = async () => {
    if (!contractInstance) {
      console.error('Contract instance is not initialized.');
      return;
    }

    try {
      const transaccion = await contractInstance.recibirDatosPrestamo(3000, 25, 1000, 5, 750);
      console.log('Transaction sent:', transaccion);
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={enviarTransaccion}>Enviar Transacción</button>
      <p>{result}</p>
      <p>aqui</p>
    </div>
  );
};

export default App;

