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

import React from 'react';
import AztecIntegration from '../AztecIntegration';
import AztecInfo from '../AztecInfo';


export const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <AztecIntegration />
    </div>
  );
};