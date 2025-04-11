# 🪙 USDT Subgraph

An on-chain data indexer for **Tether (USDT)** `Transfer` events on **Ethereum Mainnet**, powered by [The Graph](https://thegraph.com/). This subgraph lets you query historical USDT transfers with GraphQL — perfect for dashboards, analytics, or blockchain research.

---

## 📊 What It Does

This subgraph listens to the `Transfer(address indexed from, address indexed to, uint256 value)` event from the official USDT contract and stores each transaction in a structured format.

### ✅ Features

- Tracks all USDT transfers from block `#4634748` onward  
- Indexes sender, receiver, amount, and block number  
- Provides efficient querying via The Graph's GraphQL API  
- Built using AssemblyScript, `graph-ts`, and `graph-cli`

---

## 🧱 Entity Schema

```graphql
type Exchange @entity(immutable: true) {
  id: ID!
  block: BigInt!
  from: String!
  to: String!
  amount: BigInt!
}
```
### 🧠 Example Query
``` graphql
{
  exchanges(first: 5, orderBy: block, orderDirection: desc) {
    id
    from
    to
    amount
    block
  }
}
```
_Use this query in the Graph Explorer or in your frontend with Apollo, urql, etc__

## 🔧 Getting Started

<h3>1. Clone and Install<h3>

```bash
git clone https://github.com/josetic224/usdt-subgraph.git
cd usdt-subgraph
pnpm install
```
<h3>2. Generate Types & Build <h3>

```bash
yarn codegen
yarn build
```

<h3>3. Deploy(example) <h3>

``` bash
graph auth --product hosted-service YOUR_DEPLOY_KEY
graph deploy --product hosted-service YOUR_GITHUB_USERNAME/usdt-subgraph
```
Note: Replace `YOUR_DEPLOY_KEY` and `YOUR_GITHUB_USERNAME` with your actual values.
   
## 📁 Project Structure


| Path                  | Description                                           |
|-----------------------|-------------------------------------------------------|
| `subgraph.yaml`       | Main config file for The Graph — defines data sources |
| `schema.graphql`      | GraphQL entity definitions used for the subgraph      |
| `abis/TetherToken.json` | ABI of the USDT contract used for decoding events    |
| `src/tether-token.ts` | Mapping logic — handles `Transfer` events             |
| `package.json`        | Project dependencies and scripts                       |
| `node_modules/`       | Installed dependencies (auto-generated)               |
| `generated/`          | Auto-generated types from `graph codegen`    


## 📜 License
MIT License © 2025 Joseph Ochiagha

## 🙌 Acknowledgements

Built with 💛 using The Graph and Tether USDT.