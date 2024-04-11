import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig} from 'wagmi'
import { mainnet, polygon, avalanche } from "wagmi/chains";
import {publicProvider} from 'wagmi/providers/public'
import type { AppProps } from 'next/app'

// const { chains, provider } = configureChains(
//   [mainnet, polygon, avalanche],
//   [publicProvider()],
// );

// const {connectors} =  getDefaultWallets({
//   appName: 'Eriks Portfolio',
//   chains,
// })

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />

  ); 
}
