// tests/CreateAccount.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CreateAccount } from './CreateAccount';
import { createAccount } from '../services/aztecService';

jest.mock('../services/aztecService');

describe('CreateAccount', () => {
  it('renders create account button', () => {
    render(<CreateAccount />);
    expect(screen.getByText('Create Account')).toBeInTheDocument();
  });

  it('displays loading state when creating account', async () => {
    (createAccount as jest.Mock).mockImplementation(() => new Promise(() => {}));
    render(<CreateAccount />);
    fireEvent.click(screen.getByText('Create Account'));
    expect(screen.getByText('Creating...')).toBeInTheDocument();
  });

  it('displays account info after successful creation', async () => {
    const mockAccount = { address: '0x123', privateKey: 'privateKey123' };
    (createAccount as jest.Mock).mockResolvedValue(mockAccount);
    render(<CreateAccount />);
    fireEvent.click(screen.getByText('Create Account'));
    await waitFor(() => {
      expect(screen.getByText(`Address: ${mockAccount.address}`)).toBeInTheDocument();
      expect(screen.getByText(`Private Key: ${mockAccount.privateKey}`)).toBeInTheDocument();
    });
  });

  it('displays error message on account creation failure', async () => {
    (createAccount as jest.Mock).mockRejectedValue(new Error('Creation failed'));
    render(<CreateAccount />);
    fireEvent.click(screen.getByText('Create Account'));
    await waitFor(() => {
      expect(screen.getByText('Failed to create account. Please try again.')).toBeInTheDocument();
    });
  });
});