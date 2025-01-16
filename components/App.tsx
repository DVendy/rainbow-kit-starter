'use client';

import { useAccount, useWalletClient } from "wagmi";

const App = () => {
    const account = useAccount();
    const { data: walletClient } = useWalletClient();

    return (
        <div className="">
            <div><b>Address :</b>{account.address}</div>
            <div><b>Wallet client</b></div>
            <div className="bg-slate-800 rounded p-4 overflow-scroll">{JSON.stringify(walletClient)}</div>
        </div>
    );
}

export default App;