import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import wallet from "../images/wallet.png";
import { shortenAddress } from "../utils/StringUtils";

function Header() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    if (window.aptos) {
      try {
        const wallet = await window.aptos.connect();
        setAddress(wallet.address);
        setConnected(true);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      window.open("https://petra.app/", `_blank`);
      console.error("Petra wallet not installed!");
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav">
        <Link to="/">Products</Link>
        <Link to="/">Protocols</Link>
        <Link to="/">Tokens</Link>
        <Link to="/">Use Cases</Link>
        <button
          className="connect-wallet-btn"
          disabled={connected}
          onClick={connectWallet}
        >
          {connected ? (
            <div className="connected-wrapper">
              <img src={wallet} alt="wallet" /> &nbsp;
              <span>{shortenAddress(address)}</span>
            </div>
          ) : (
            "Connect wallet →"
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
