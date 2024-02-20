// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import contractAbi from './contractPres.json';

// const App = () => {
//    const [result, setResult] = useState('');
//    const [contractInstance, setContractInstance] = useState(null);




//     const conectarContrato = async () => {
//       try {
//         if (typeof window.ethereum === 'undefined') {
//           console.error('Please install MetaMask!');
//           return;
//         }

//          const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ');

      
//         const signer = new ethers.Wallet('b8ab8db711170a4fb1fdc6e9c65680651b5231ebbf539613b931ae39e865dcdb', provider);


//         const contractAddress = '0xEEE268680f5020C06e00980898ebdA1415a05DA2';

//         if (!Array.isArray(contractAbi)) {
//           console.error('The contract ABI is not an array:', contractAbi);
//           return;
//         }

//         const instance = new ethers.Contract(contractAddress, contractAbi, signer);
//         setContractInstance(instance);
//         console.log('hola instancia');
// /////

//         // const manejarEventoAprobacion = (aprobado) => {
//         //   setResult(aprobado ? '¡Préstamo Aprobado!' : 'Préstamo No Aprobado');
//         //   console.log('¡Préstamo Aprobado!', aprobado);
//         // };
//         // console.log("manejar evento aprobado ",result)

//         // instance.on("PrestamoAprobado", manejarEventoAprobacion);

//         // return () => instance.off("PrestamoAprobado", manejarEventoAprobacion);
//       } catch (error) {
//         console.error('Error connecting to MetaMask:', error);
//       }
//     };

//     const solicitudPrestamo = async () => {
//       const manejarEventoAprobacion = (aprobado) => {
//         setResult(aprobado ? '¡Préstamo Aprobado!' : 'Préstamo No Aprobado');
//         console.log('¡Préstamo Aprobado!', aprobado);
//       };
//       console.log("manejar evento aprobado ",result)

//       contractInstance.on("PrestamoAprobado", manejarEventoAprobacion);

//       return () => contractInstance.off("PrestamoAprobado", manejarEventoAprobacion);
//     }


//   const enviarTransaccion = async () => {

//     solicitudPrestamo();

//     if (!contractInstance) {
//       console.error('Contract instance is not initialized.');
//       return;
//     }

//     try {
//       const transaccion = await contractInstance.recibirDatosPrestamo(1000, 25, 2000, 5, 750);
//       console.log('Transaction enviada:', transaccion);
      
//     } catch (error) {
//       console.error('Error sending transaction:', error);
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//        <button onClick={conectarContrato}>conectar a MetaMask</button>
//       <button onClick={enviarTransaccion}>Enviar Transacción</button>
//       <p>{result}</p> 
//       <p>aqui</p>
//     </div>
//   );
// };

// export default App;




// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import contractAbi from './contractPres.json';

// const App = () => {
//    const [result, setResult] = useState('');
//    const [contractInstance, setContractInstance] = useState(null);

//    const manejarEventoAprobacion = (aprobado) => {
//      setResult(aprobado ? '¡Préstamo Aprobado!' : 'Préstamo No Aprobado');
//      console.log('¡Préstamo Aprobado!', aprobado);
//    };

//    const conectarContrato = async () => {
//      try {
//        if (typeof window.ethereum === 'undefined') {
//          console.error('Please install MetaMask!');
//          return;
//        }

//        const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ');
//        const signer = new ethers.Wallet('b8ab8db711170a4fb1fdc6e9c65680651b5231ebbf539613b931ae39e865dcdb', provider);

//        const contractAddress = '0xEEE268680f5020C06e00980898ebdA1415a05DA2';

//        if (!Array.isArray(contractAbi)) {
//          console.error('The contract ABI is not an array:', contractAbi);
//          return;
//        }

//        const instance = new ethers.Contract(contractAddress, contractAbi, signer);
//        setContractInstance(instance);
//      } catch (error) {
//        console.error('Error connecting to MetaMask:', error);
//      }
//    };

//    const solicitudPrestamo = () => {
//      contractInstance.on("PrestamoAprobado", manejarEventoAprobacion);
//      return () => contractInstance.off("PrestamoAprobado", manejarEventoAprobacion);
//    }

//    const enviarTransaccion = async () => {
//      solicitudPrestamo();

//      if (!contractInstance) {
//        console.error('Contract instance is not initialized.');
//        return;
//      }

//      try {
//        const transaccion = await contractInstance.recibirDatosPrestamo(1000, 25, 2000, 5, 750);
//        console.log('Transaction sent:', transaccion);
//      } catch (error) {
//        console.error('Error sending transaction:', error);
//      }
//    };

//    return (
//      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//        <button onClick={conectarContrato}>conectar a MetaMask</button>
//        <button onClick={enviarTransaccion}>Enviar Transacción</button>
//        <p>{result}</p> 
//        <p>aqui</p>
//      </div>
//    );
// };

// export default App;


/////ESTE FUNCIONA

// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import contractAbi from './contractPres.json';

// const App = () => {
//    const [result, setResult] = useState('');
//    const [contractInstance, setContractInstance] = useState(null);

//    const manejarEventoAprobacion =  (aprobado) => {
//      setResult(aprobado ? '¡Préstamo Aprobado!' : 'Préstamo No Aprobado');
//      console.log('¡Préstamo Aprobado!', aprobado);
//    };

//    const conectarContrato = async () => {
//      try {
//        if (typeof window.ethereum === 'undefined') {
//          console.error('Please install MetaMask!');
//          return;
//        }

//        const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ');
//        const signer = new ethers.Wallet('b8ab8db711170a4fb1fdc6e9c65680651b5231ebbf539613b931ae39e865dcdb', provider);

//        const contractAddress = '0xEEE268680f5020C06e00980898ebdA1415a05DA2';

//        if (!Array.isArray(contractAbi)) {
//          console.error('The contract ABI is not an array:', contractAbi);
//          return;
//        }

//        const instance = new ethers.Contract(contractAddress, contractAbi, signer);
//        setContractInstance(instance);
//      } catch (error) {
//        console.error('Error connecting to MetaMask:', error);
//      }
//    };

//    const solicitudPrestamo = () => {
//      console.log('Subscribing to PrestamoAprobado event...');
//      contractInstance.on("PrestamoAprobado", manejarEventoAprobacion);
//      console.log("manejar evento aprobado ",result)
//      return () => {
//        console.log('Unsubscribing from PrestamoAprobado event...');
//        contractInstance.off("PrestamoAprobado", manejarEventoAprobacion);
//      };
//    }

//    const enviarTransaccion = async () => {

//      const unsubscribe = solicitudPrestamo();

//      if (!contractInstance) {
//        console.error('Contract instance is not initialized.');
//        return;
//      }

//      try {
//        console.log('Sending transaction...');
//        const transaccion = await contractInstance.recibirDatosPrestamo(1000, 25, 2000, 5, 750);



//        console.log('Transaction sent:', transaccion);


//        contractInstance.on("PrestamoAprobado", (aprobado, montoAprobado) => {
//         console.log(`Préstamo Aprobado: ${aprobado} con un monto de ${montoAprobado}`);
//         // Aquí puedes actualizar el estado de tu componente o manejar la lógica de la UI
//     });
      

//      } catch (error) {
//        console.error('Error sending transaction:', error);
//      } finally {
//        unsubscribe();
//      }
//    };

//    return (
//      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//        <button onClick={conectarContrato}>Conectar a MetaMask</button>
//        <button onClick={enviarTransaccion}>Enviar Transacción</button>
//        <p>{result}</p> 
//        <p>Aquí</p>
//      </div>
//    );
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import contractAbi from './contractPres.json';

// const App = () => {
//   const [result, setResult] = useState('');
//   const [contractInstance, setContractInstance] = useState(null);

//   useEffect(() => {
//     const conectarContrato = async () => {
//       try {
//         if (typeof window.ethereum === 'undefined') {
//           console.error('Please install MetaMask!');
//           return;
//         }

//         const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ');
//         const signer = new ethers.Wallet('b8ab8db711170a4fb1fdc6e9c65680651b5231ebbf539613b931ae39e865dcdb', provider);

//         const contractAddress = '0xEEE268680f5020C06e00980898ebdA1415a05DA2';

//         if (!Array.isArray(contractAbi)) {
//           console.error('The contract ABI is not an array:', contractAbi);
//           return;
//         }

//         const instance = new ethers.Contract(contractAddress, contractAbi, signer);
//         setContractInstance(instance);
//         // Configuración de suscripción al evento
//         contractInstance.events.PrestamoAprobado.on("PrestamoAprobado", (aprobado, montoAprobado) => {
//           setResult(aprobado ? `¡Préstamo Aprobado! Monto:${montoAprobado.toString()}`: 'Préstamo No Aprobado');
//         });

        
//       } catch (error) {
//         console.error('Error connecting to MetaMask:', error);
//       }
//     };

//     conectarContrato();
//   }, []); // Asegura que se ejecute solo una vez al montar el componente

//   const enviarTransaccion = async () => {
//     if (!contractInstance) {
//       console.error('Contract instance is not initialized.');
//       return;
//     }

//     try {
//       console.log('Sending transaction...');
//       const transaccion = await contractInstance.recibirDatosPrestamo(1000, 25, 2000, 5, 750);
//       console.log('Transaction sent:', transaccion);
//     } catch (error) {
//       console.error('Error sending transaction:', error);
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <button onClick={enviarTransaccion}>Enviar Transacción</button>
//       <p>{result}</p> 
//       <p>Aquí</p>
//     </div>
//   );
// };

// export default App;

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

        // const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ');

        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // console.log("hola acounts",accounts)
        // const currentAccount = accounts[0];
        // console.log("hola1",currentAccount)
        // const signer = provider.getSigner(currentAccount);
        // console.log("hola",signer)

        // const contractAddress = '0xEEE268680f5020C06e00980898ebdA1415a05DA2';


        const provider = new ethers.WebSocketProvider('wss://eth-sepolia.g.alchemy.com/v2/27Byo4JHf5OZYCJVrw0XRdjoi3Vq8JzQ');
       const signer = new ethers.Wallet('b8ab8db711170a4fb1fdc6e9c65680651b5231ebbf539613b931ae39e865dcdb', provider);

       const contractAddress = '0xEEE268680f5020C06e00980898ebdA1415a05DA2';

        if (!Array.isArray(contractAbi)) {
          console.error('The contract ABI is not an array:', contractAbi);
          return;
        }

        const instance = new ethers.Contract(contractAddress, contractAbi, signer);
        setContractInstance(instance);

        const manejarEventoAprobacion = (aprobado, montoAprobado) => {
          setResult(aprobado ? '¡Préstamo Aprobado!' : 'Préstamo No Aprobado');
          // console.log("manejar evento aprobado ",aprobado)
          console.log(`Préstamo Aprobado: ${aprobado} con un monto de ${montoAprobado}`);
        };

          instance.on("PrestamoAprobado", (aprobado, montoAprobado) => {
            console.log(`Préstamo Aprobado`);
          console.log(`Préstamo Aprobado: ${aprobado} con un monto de ${montoAprobado}`);
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
