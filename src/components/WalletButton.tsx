import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/hooks/useWallet';

export const WalletButton = () => {
  const { account, connectWallet, disconnectWallet, isConnecting } = useWallet();

  if (account) {
    return (
      <Button variant="glass" onClick={disconnectWallet}>
        {account.substring(0, 6)}...{account.substring(38)}
      </Button>
    );
  }

  return (
    <Button variant="hero" onClick={connectWallet} disabled={isConnecting}>
      <Wallet className="w-4 h-4" />
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
};
