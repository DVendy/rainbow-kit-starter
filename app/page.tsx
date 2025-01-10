'use client';

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWalletClient } from "wagmi";

export default function Home() {
  const account = useAccount();
  const { data: walletClient } = useWalletClient();

  return (
    <div className="container mx-auto py-10">
      <ConnectButton />

      {account.isConnected &&
        <div className="">
          <div><b>Address :</b>{account.address}</div>
          <div><b>Wallet client</b></div>
          <div className="bg-slate-800 rounded p-4 overflow-scroll">{JSON.stringify(walletClient)}</div>
        </div>
      }
    </div>
  );
}
