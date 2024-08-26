// src/pages/CreateAccount.tsx
import React, { useState } from 'react';
import { createAccount } from '../services/aztecService';

export const CreateAccount: React.FC = () => {
  const [account, setAccount] = useState<{ address: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateAccount = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newAccount = await createAccount();
      setAccount(newAccount);
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-account">
      <h2>Create New Account</h2>
      <button onClick={handleCreateAccount} disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Account'}
      </button>
      {error && <p className="error">{error}</p>}
      {account && (
        <div className="account-info">
          <h3>New Account Created</h3>
          <p>Address: {account.address}</p>
        </div>
      )}
    </div>
  );
};