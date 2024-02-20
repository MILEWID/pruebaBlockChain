import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractAbi from './contractPres.json';

const App = () => {
   const [result, setResult] = useState('');
   const [contractInstance, setContractInstance] = useState(null);




    const conectarContrato = async () => {
      try {
        if (typeof window.ethereum === 'undefined') {
          console.error('Please install MetaMask!');
          return;
        }

         const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ');

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("hola acounts",accounts)       
        const currentAccount = accounts[0];
        console.log("hola1",currentAccount)

      
        const signer = new ethers.Wallet('0x27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ', provider);
       // const signer = provider.getSigner(currentAccount);
        console.log("hola3",signer)

        const contractAddress = '0xEEE268680f5020C06e00980898ebdA1415a05DA2';

        if (!Array.isArray(contractAbi)) {
          console.error('The contract ABI is not an array:', contractAbi);
          return;
        }

        const instance = new ethers.Contract(contractAddress, contractAbi, signer);
        setContractInstance(instance);

        const manejarEventoAprobacion = (aprobado) => {
          setResult(aprobado ? '¡Préstamo Aprobado!' : 'Préstamo No Aprobado');
        };

        instance.on("PrestamoAprobado", manejarEventoAprobacion);

        return () => instance.off("PrestamoAprobado", manejarEventoAprobacion);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    };

   


  const enviarTransaccion = async () => {
    if (!contractInstance) {
      console.error('Contract instance is not initialized.');
      return;
    }

    try {
      const transaccion = await contractInstance.recibirDatosPrestamo(1000, 25, 2000, 5, 750);
      console.log('Transaction sent:', transaccion);
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <button onClick={conectarContrato}>conectar a MetaMask</button>
      <button onClick={enviarTransaccion}>Enviar Transacción</button>
      <p>{result}</p> 
      <p>aqui</p>
    </div>
  );
};

export default App;