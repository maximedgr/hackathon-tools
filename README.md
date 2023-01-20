# Must-Have Tools for Blockchain Hackathons

Welcome to this repository, which aims to provide a comprehensive list of the essential tools you will need to successfully develop projects during blockchain hackathons.

# Tool List  

## **Dev Requirement:**
- [Node.js](https://nodejs.org/en/download/) is an open-source, cross-platform JavaScript runtime environment.
- [NPM](https://docs.npmjs.com/) is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
- [YARN](https://classic.yarnpkg.com/) dependency managment.
- [Github](https://www.github.com/), you must have a GitHub account to track your dev journey. 
- [Git commands](https://git-scm.com/docs) you must be confident with the basic git commands to commit your work, create branch, merge... Example :
```
git add .
git commit -m "V1.0"
git push
```

## **Development Environment:** 
Setting up a proper development environment is crucial for hackathon success. This includes a code editor or IDE, as well as any necessary dependencies and software.  
- IDE : [Visual Studio Code](https://code.visualstudio.com/download). Don't forget to install extension to help you trough your development journey.
- Online Solidity IDE [Remix](https://remix.ethereum.org/)
- UNIX CMD [Git Bash](https://git-scm.com/downloads) - Very usefull if you are working on a Windows OS.
- [Docker](https://www.docker.com/)

## **Smart Contract Development:** 
For blockchain hackathons, it is likely that you will need to develop smart contracts. Tools such as Truffle, Ganache, and OpenZeppelin can be used to develop, test, and deploy smart contracts on various blockchain platforms.
- [Truffle](https://trufflesuite.com/) - Truffle takes care of managing your contract artifacts so you don't have to. Includes support for custom deployments, library linking and complex Ethereum applications.
```
npm install truffle -g
```
- [Truffle Contract Size](https://www.npmjs.com/package/truffle-contract-size). This Truffle plugin displays the contract size of all or a selection of your smart contracts in kilobytes.
```
npm install truffle-contract-size
```
- [Truffle plugin verify](https://www.npmjs.com/package/truffle-plugin-verify) very useful plugin to deploy and verify contract ABI on Etherscan etc.
- [Ganache](https://trufflesuite.com/ganache/) Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.
- [MetaMask](https://metamask.io/). Crypto Wallet.
- [OpenZeppelin Contract Wizzard](https://docs.openzeppelin.com/contracts/4.x/wizard) Not sure where to start? Use the interactive generator below to bootstrap your contract and learn about the components offered in OpenZeppelin Contracts.

## **Blockchain Test Networks:** 
It's important to test your smart contracts and other blockchain-related code on a test network before deploying to the main network. Tools such as Ganache, Rinkeby, and Ropsten can be used for this purpose.
- [Ganache](https://trufflesuite.com/ganache/) Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.
- [Chainlist](https://chainlist.org/) is a list of EVM networks. Users can use the information to connect their wallets and Web3 middleware providers to the appropriate Chain ID and Network ID to connect to the correct chain.
- [Ethereum Testnet Goerli](https://goerli.etherscan.io/)
- [Ethereum Test Sepolia](https://sepolia.etherscan.io/)
- [Polygon Testnet Mumbai](https://mumbai.polygonscan.com/)

## **Web Development:**
In the development of Dapp it is common to see developers using React and many libraries allowing the integration and use of smart contracts. Here is a list of tools and dependencies that can be used together:
- [React](https://en.reactjs.org/) A JavaScript library for building user interfaces.
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
```
npx create-react-app my-app
cd my-app
npm start
```  
- [Web3.js](https://github.com/web3/web3.js) Ethereum JavaScript API
- [Ethers](https://docs.ethers.org/)
- [RainbowKit](https://www.rainbowkit.com/) provides a fast, easy and highly customizable way for developers to add a great wallet experience to their application.  
You can scaffold a new RainbowKit + wagmi + Next.js app with one of the following commands, using your package manager of choice:
```
npm init @rainbow-me/rainbowkit@latest
# or
yarn create @rainbow-me/rainbowkit@latest
# or
pnpm create @rainbow-me/rainbowkit@latest
```
This will prompt you for a project name, generate a new directory containing a boilerplate project, and install all required dependencies.  
Alternatively, you can manually integrate RainbowKit into your existing project. [See docs](https://www.rainbowkit.com/docs/installation).
```
npm install @rainbow-me/rainbowkit wagmi ethers
```
- [Vercel](https://vercel.com/) allows you to deploy instantly, scale automatically, and serve personalized content. Link you front-end GitHub repo to host and test your project for free !


## **Blockchain Explorers:** 
Blockchain explorers are useful for viewing and interacting with the blockchain. Popular choices include Etherscan :
- [Etherscan - Ethreum Mainnet](https://etherscan.io/)
- [Polygonscan - Polygon Mainnet](https://polygonscan.com/)
- [Binance Blockchain Explorer](https://bscscan.com/)
- [Avalanche Blockchain Explorer](https://snowtrace.io/)
- [Gnosis Chain Explorer](https://blockscout.com/xdai/mainnet/)
- [Ethereum Testnet Goerli](https://goerli.etherscan.io/)
- [Ethereum Test Sepolia](https://sepolia.etherscan.io/)
- [Polygon Testnet Mumbai](https://mumbai.polygonscan.com/)

## **Blockchain Testnet faucet:**
- [Ethereum Goerli Faucet - Alchemy](https://goerlifaucet.com/)
- [Polygon Mumbai Faucet - Alchemy](https://mumbaifaucet.com/)
- [Gnosis Faucet](https://gnosisfaucet.com/)
- [Chainlink Faucet](https://faucets.chain.link/) Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract.

## **Helpfull tools:**
- [OpenAI](https://chat.openai.com/) 
- [GitHub Copilote](https://github.com/features/copilot) AI pair programmer, you can add this extension in VScode.
- [Grammarly](https://www.grammarly.com/) is a free writing app to make online writing clear and effective.


## **Presentation tools:**
- [Canva](https://www.canva.com/)
- [Loom](https://www.loom.com/screen-recorder) – Screen Recorder & Screen Capture
- [LucidChart](https://www.lucidchart.com/)
- [Figma](https://www.figma.com/) brings together powerful design features you already love and a more efficient workflow to boot. You can design a Website or App for your MVP presentation.

## **Communication and Collaboration:** 
Hackathons often involve working in teams, so it is important to have tools that enable effective communication and collaboration. Slack, Telegram, Google Drive, Github and Zoom are popular choices for this purpose.  

## **Project Management:** 
To stay organized and on track during a hackathon, it is important to use a project management tool.
- [Trello](https://trello.com/)
- [LucidChart](https://www.lucidchart.com/)

Note: The above list is not exhaustive and other tools may be useful depending on the specific requirements of your project. Feel free to contribute !  

# Conclusion
By having these tools in your toolbox, you will be well-equipped to handle the challenges of a blockchain hackathon and develop successful projects. Good luck and have fun!

