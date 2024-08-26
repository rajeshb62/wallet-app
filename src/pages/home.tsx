// import { ContractComponent } from './contract';
// import { useContract } from '../hooks/useContract';

// export function Home() {
//   const { contract, deploy, wait } = useContract();

//   if (!contract) {
//     return (
//       <form onSubmit={deploy}>
//         <button type="submit" disabled={wait}>
//           Deploy dummy contract
//         </button>
//       </form>
//     );
//   }

//   return <ContractComponent contract={contract} />;
// }

import { ContractComponent } from './contract';
import { useContract } from '../hooks/useContract';

import React from 'react';
import AztecIntegration from '../AztecIntegration'; // Change this line
import { CreateAccount } from './CreateAccount';



export const Home: React.FC = () => {
  return (
    <div className="App">
      <h1>Aztec Wallet</h1>
      <CreateAccount />
      <AztecIntegration />
    </div>
  );
};

