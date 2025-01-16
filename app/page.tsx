'use client';

import App from "@/components/App";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWalletClient } from "wagmi";

export default function Home() {
  const account = useAccount();

  return (
    <div className="container mx-auto py-10">
      <ConnectButton />

      {account.isConnected && <App />}
    </div>
  );
}
