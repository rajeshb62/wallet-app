import React, { useEffect, useState } from 'react';
import { CompleteAddress, PXE, createPXEClient, waitForPXE } from "@aztec/aztec.js";

const AztecInfo: React.FC = () => {
  const [accounts, setAccounts] = useState<CompleteAddress[]>([]);
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const setupSandbox = async () => {
      try {
        const PXE_URL = process.env.PXE_URL || 'http://localhost:8080';
        const pxe = createPXEClient(PXE_URL);
        await waitForPXE(pxe);
        
        const fetchedAccounts = await pxe.getRegisteredAccounts();
        setAccounts(fetchedAccounts);
        
        const currentBlockNumber = await pxe.getBlockNumber();
        setBlockNumber(currentBlockNumber);

        // Log the accounts and block number
        console.log('Accounts:', fetchedAccounts.map(a => a.address.toString()).join(','));
        console.log('Block Number:', currentBlockNumber);
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
        setError(errorMessage);
        console.error(errorMessage);
      }
    };

    setupSandbox();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Aztec Information</h2>
      <h3>Accounts:</h3>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>{account.address.toString()}</li>
        ))}
      </ul>
      <h3>Current Block Number: {blockNumber}</h3>
    </div>
  );
};

export default AztecInfo;