# Enso V1 contest details
- $118,750 USDT main award pot
- $6,250 USDT gas optimization award pot
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code4rena.com/contests/2022-05-enso-finance-contest/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts May 05, 2022 00:00 UTC
- Ends May 18, 2022 23:59 UTC


## Contact us ☎️
1. You can contact us inside of the [code4rena discord](https://discord.gg/gaAMjhX5)
2. Or you can join our new private discord for only code4rena wardens where you will be allocated a private channel to be able to speak directly with the whole team - instead of sending a DM then waiting for a response... instead you get the whole team available. - [join in this link](https://discord.gg/rHYTxt34Uy)



# Resources
- *Tests located in:* [tests](https://github.com/code-423n4/2022-05-enso/tree/main/test)
- *Helpers located in:* [lib](https://github.com/code-423n4/2022-05-enso/tree/main/lib/)
- *Docs located at:* [docs.enso.finance](https://docs.enso.finance/docs/smart-contracts/core/overview)
- *Live application overview:* [youtube link](https://www.youtube.com/watch?v=OlDbX2twCMQ)
- *Live application access:* join the private discord, send your address, we will whitelist you
- *Website:* [enso.finance](https://www.enso.finance/)
- *Public discord:* [enso-finance](https://discord.gg/enso-finance)


## Contracts
All solidity files are included in scope, apart from [contracts/test](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/test/).
|Contract | Dir          | Loc  | Purpose |
| -----------| ----------|-----| -----|
|[PlatformProxyAdmin](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/PlatformProxyAdmin.sol) | [contracts/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/) | 101 | ProxyAdmin managing upgradeability of StrategyController and StrategyProxyFactory. 
| [Strategy](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/Strategy.sol) | ^^ |869 | Comprised of positions along with their data, global thresholds and fees. Is StrategyToken.
| [StrategyController](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyController.sol) | ^^ | 784 | Powerhouse contract giving main entrypoint for users to deposit into and withdraw against strategies, for managers to rebalance and restructure their strategies as well as other admin actions. 
| [StrategyControllerStorage](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyControllerStorage.sol) | ^^ | 784 | Storage for StrategyController. 
| [StrategyProxyAdmin](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyProxyAdmin.sol) | ^^ | 70 | Enables managers of strategies to upgrade their strategy to the latest implementation held by StrategyProxyFactory. 
| [StrategyProxyFactory](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyProxyFactory.sol) | ^^ | 297 | Entrypoint for users to create strategies. Exposes administrative functions to update base strategy implementation, add items and estimators to registry, and other admin actions. 
| [StrategyProxyFactoryStorage](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyProxyFactoryStorage.sol) | ^^ | 18 | Storage for StrategyProxyFactory 
| [StrategyToken](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyToken.sol) | ^^ | 322 | ERC20 token representing share of positions in Strategy.
| [StrategyTokenStorage](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyTokenStorage.sol) | ^^ | 40 | Storage for StrategyToken. 
| [Whitelist](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/Whitelist.sol) | ^^ | 23 | Maintains ledger of accounts approved for actions in the StrategyController and Strategy. Accounts referenced are typically routers or adapters. 
| [BaseAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/BaseAdapter.sol) | [contracts/adapters/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/) | 21 | Abstract contract defining virtual swap function for decendants to override. 
| [AaveV2DebtAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/borrow/AaveV2DebtAdapter.sol) | [adapters/borrow/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/borrow/) | 66 | Borrows and repays assets from AaveV2. 
| [BalancerAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/BalancerAdapter.sol) | [/contracts/adapters/exchanges/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/exchanges/) | 239 | Exchanges tokenIn for tokenOut across Balancer V1. 
| [CurveAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/CurveAdapter.sol) | ^^ | 239 | Exchanges tokenIn for tokenOut across a Curve pool. 
| [KyberSwapAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/KyberSwapAdapter.sol) | ^^ | 62 | Exchanges tokenIn for tokenOut across KyberSwap. 
| [SynthetixAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/SynthetixAdapter.sol) | ^^ | 58 | Exchanges tokenIn for tokenOut across Synthetix. 
| [UniswapV2Adapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/UniswapV2Adapter.sol) | ^^ | 79 | Exchanges tokenIn for tokenOut across a UniswapV2Pair. 
| [UniswapV3Adapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/UniswapV3Adapter.sol) | ^^ | 54 | Exchanges tokenIn for tokenOut for a registered fee across UniswapV3. 
| [AaveV2Adapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/AaveV2Adapter.sol) | [contracts/adapters/lending/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/lending/) | 79 | Lends and recovers assets through AaveV2. 
| [CompoundAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/CompoundAdapter.sol) | [contracts/adapters/lending/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/lending/) | 83 | Lends and recovers assets through Compound. 
| [CurveLPAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/liquidity/CurveLPAdapter.sol) | [contracts/adapters/lending/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/lending/) | 156 | Deposits and withdraws into Curve liquidity pools for liquidity token. 
| [MetaStrategyAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/strategy/MetaStrategyAdapter.sol) | [contracts/adapters/liquidity/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/strategy/) | 61 | Deposits and withdraws assets in exchange for stategy token. 
| [CurveGuageAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/vaults/CurveGuageAdapter.sol) | [contracts/adapters/vaults/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/vaults/) | 60 | Deposits and withdraws into CurveGuage vaults. 
| [YEarnV2Adapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/vaults/YEarnV2Adapter.sol) | ^^ | 71 | Deposits and withdraws into YEarnV2 vaults. 
| [AddressUtils](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/AddressUtils.sol) | [contracts/helpers/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/helpers/) | 10 | ..
| [GasCostProvider](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/GasCostProvider.sol) | ^^ | 17 | ..
| [Multicall](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/Multicall.sol) | ^^ | 32 | ..
| [RevertDebug](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/RevertDebug.sol) | ^^ | 26 | ..
| [StringUtils](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/StringUtils.sol) | ^^ | 17 | ..
| [StrategyControllerPaused](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/implementations/recovery/StrategyControllerPaused.sol) | [contracts/implementations/recovery](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/implementations/recovery) | 294 | Emergency implementation of StrategyController to be put in place as a pausing mechanism. 
| [InterfacesFolder](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/interfaces) | [contracts/interfaces/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/interfaces/) | 1254 | 
| [Math](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/libraries/Math.sol) | [contracts/libraries/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/libraries/) | 74 | Math library exposing `sqrt` and nuanced arithmetic functions. 
| [SafeERC20](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/libraries/SafeERC20.sol) | ^^ | 82 | Fork of OpenZeppelin's SafeERC20 library, providing "safe" wrappers to standard ERC20 functions. 
| [StrategyLibrary](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/libraries/StrategyLibrary.sol) | ^^ | 117 | Library exposing common calculations and validations such as `getExpectedTokenValue`, and `checkBalance`.
| [UniswapV2Library](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/libraries/UniswapV2Library.sol) | ^^ | 132 | Consolidating some common UniswapV2 library functions such as `sortTokens`, `pairFor`, `getAmountIn`, `getAmountOut`, etc. 
| [EnsoOracle](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/EnsoOracle.sol) | [contracts/oracles](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/) | 90 | Core oracle estimating strategies' value as the sum of specific oracle estimates on its contituents. 
| [AaveV2DebtEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/AaveV2DebtEstimator.sol) | [contracts/oracles/estimators](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/estimators/) | 23 | Oracle estimating a debt token by estimating a balance of its underlying asset. 
| [AaveV2Estimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/AaveV2Estimator.sol) | [contracts/oracles/estimators](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/estimators/) | 23 | Oracle estimating a debt token by estimating a balance of its underlying asset. 
| [BasicEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/BasicEstimator.sol) | ^^ | 27 | Oracle estimating a token using a set protocol oracle. 
| [CompoundEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/CompoundEstimator.sol) | ^^ | 27 | Oracle estimating a debt token by estimating a balance of its underlying asset. 
| [CurveGaugeEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/CurveGaugeEstimator.sol) | ^^ | 23 | Oracle estimating a token by estimating a balance of its lp token. 
| [CurveLPEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/CurveLPEstimator.sol) | ^^ | 93 | Oracle estimating an lp token by estimating a balance of its pool tokens. 
| [EmergencyEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/EmergencyEstimator.sol) | ^^ | 31 | Oracle giving coarse estimate as a stop-gap when other estimators are unavailable. 
| [StrategyEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/StrategyEstimator.sol) | ^^ | 29 | Oracle estimating strategy token by considering the estimates of the strategy's positions. 
| [YEarnV2Estimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/YEarnV2Estimator.sol) | ^^ | 27 | Oracle estimating a vault by estimating share in its token. 
| [ChainlinkOracle](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/protocols/ChainlinkOracle.sol) | [contracts/oracles/protocols/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/protocols/) | 27 | Oracle consulting the chainlink price feed. 
| [ProtocolOracle](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/protocols/ProtocolOracle.sol) | ^^ | 36 | Base contract for protocol oracles to provide consultations on the estimate of a token. 
| [UniswapV3Oracle](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/protocols/UniswapV3Oracle.sol) | ^^ | 54 | A protocol oracle consulting quotes from uniswap v3. 
| [ChainlinkRegistry](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/registries/ChainlinkRegistry.sol) | [contracts/oracles/registries](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/registries) | 49 | Registry of tokens to be estimated by the ChainlinkOracle. 
| [CurveDepositZapRegistry](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/registries/CurveDepositZapRegistry.sol) | ^^| 24 | .. 
| [TokenRegistry](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/registries/TokenRegistry.sol) | ^^| 42 | Registry of tokens with their item and estimator categories dictating how they'll be estimated. 
| [UniswapV3Registry](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/registries/UniswapV3Registry.sol) | ^^| 96 | Registry of tokens to be estimated by the UniswapV3Oracle. 
| [BatchDepositRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/BatchDepositRouter.sol) | [contracts/routers/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/routers/) | 59 | Router enabling batching of `deposit` and `withdraw` into positions, but does not support `rebalance` or `restructure`. 
| [FullRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/FullRouter.sol) | ^^ | 757 | Router extending functionality of LoopRouter to include routing through debt items. 
| [LoopRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/LoopRouter.sol) | ^^ | 226 | Router implementing `deposit`, `withdraw`, `rebalance`, and `restructure` of strategy items. 
| [MulticallRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/MulticallRouter.sol) | ^^ | 125 | Generic Router enabling powerful custom routing into positions. 
| [StrategyRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/StrategyRouter.sol) | ^^ | 182 | Base router defining `_buyPath` and `_sellPath` as well as virtual functions for router decendants for routing into asset positions. 



## Info
Social trading application whereby `anyone` can create a strategy, and can have others invest into this strategy.  The creator manages the strategy, and if `social` is enabled then others can invest into this strategy.  If `restructure` enabled then manager can change the structure:
  1. First structure: WETH 50%/DAI 50%
  2. Second structure: WETH 50%/USDC 50%

`timelock` when the creator wants to change the structure they propose the structure, and then will need to wait `x` hours `timelock` until they can execute on the structure - this is to prevent against deploying own token then restructuring and misusing investor funds.

Difference choices of exchanges:
  - Curve
  - UniV2
  - UniV3
  - Curve
  - Kyber
  - Synthetix

Users can nest multiple calls together, e.g.
  1. UniSwap ETH > DAI
  2. Compound DAI > cDAI


### Access Control

Users of these contracts can be divided into three groups: owner, managers, and users.

#### Owner
The contract owner has the ability to upgrade the StrategyController and StrategyProxyFactory. The owner also has the ability register the tokens in TokenRegistry, UniswapV3Registry, ChainlinkRegistry, and CurveDepositZapRegistry. These registries are used the Oracles and Adapters to estimate values or facilitate swaps. Finally, the owner is able to update the contract addresses that are stored on the StrategyProxyFactory such as oracle, whitelist, or strategy implementation.

#### Manager
A manager controls many of the core functions for a strategy. They are able to rebalance or restructure a strategy. They can update values like the rebalance threshold, rebalance/restructure slippage, and timelock. However, restructuring or updating values requires them to wait out the timelock period before they can finalize their changes, this is to give users time to exit if they are dissatisfied with proposed changes.

While the owner of the contracts is able to deploy a new Strategy implementation on the platform, only the manager is able to upgrade their strategy to the new version.

#### User
A user may invest in a strategy. They have the ability to deposit into a strategy or withdraw (either by trading their tokens for ETH/WETH or withdrawing the tokens directly) from a strategy. Since all strategies are ERC-20 compatible, the user is free to transfer their strategy tokens to whomever they like.

### Architecture Choice

#### Strategy
The Strategy contract is an ERC-20 token that stores other ERC-20 tokens and holds in its state any data related to the strategy composition. It has several functions that can only be called by the StrategyController, such as approving tokens held by the Strategy to be used by other contracts.

#### StrategyController
This contract has special privileges over the Strategy contracts. Most functions are only available to the manager of the strategy that is being called. With the StrategyController, a manager may rebalance or restructure a strategy by trading tokens via a Router contract. A Router is given temporary approval over a strategy's tokens. At the end of a transaction, the EnsoOracle is consulted to ensure there is no value loss to the strategy.

#### Routers
The routers are used to handle all trading logic for strategies. They are given approval over the strategy tokens and can deposit, withdraw, and swap tokens in order to achieve the expected outcome of the function being called. Routers will use the current estimated values of a strategy's tokens and compare it to a strategy's expected values based on each token's percentage stored in the Strategy contract. When swapping tokens, the router does a delegate call to the `swap` function of an adapter for the particular exchange or protocol. The router relies on `tradeData` that is stored in the Strategy contract to determine which adapters to use for swapping. Some trades can use multiple adapters and tokens to get into the correct position.

#### Adapters
Adapters are used to give a common interface to all exchanges or protocols that are supported by Enso. They implement the `swap` function which gets called by a router. The `swap` function only supports exchanging one token for another token.

#### Oracle
The oracle is used to estimate the value of a strategy. It does this by querying the strategy for the tokens that it holds and estimating each token balance in ETH. It relies on the TokenRegistry to determine which protocol a token belongs to and using a protocol-specific estimator to determine the token value. For basic tokens that are not part of a DeFi protocol, we rely on our UniswapV3Oracle or ChainlinkOracle to determine the token value.

# Potential areas for concern

### Oracle

The oracle guards against slippage and strategy value manipulation. As such, it needs to be secure against attacks that manipulate the estimated price of tokens. A major area of concern is the use of Uniswap V3 as the oracle for many of the tokens. Is there any possibility of manipulating the price via a sandwich attack using flash loans? Our main focus has been protecting against MEV and within-block price manipulation, but what about manipulation across multiple blocks? There are many markets that may not be as efficient as we like and a price could be manipulated over several blocks, or several minutes or hours. How much liquidity does a market needs in order to make such attacks untenable? What is the optimal time period the TWAP should use to determine the average price?

### FullRouter

The FullRouter provides much of the trading logic for swapping into and out of basic tokens, Synthetix tokens, and Aave V2 debt tokens. However, it does rely on data provided by the manager during strategy creation. In particular, in order for tokens to be put into a leveraged position, the manager must set which tokens are leveraged inside the debt token's `tradeData.cache` which holds `bytes` data that gets interpreted inside the FullRouter. This `bytes` data contains a tuple array where each tuple holds the leveraged item's token address and the percentage of the expected value that is bought with debt. The nature of these debt arrangements can be very complex and it is worth looking at where the FullRouter might fail to trade into the proper positions. Furthermore, if a manager has misconfigured the `tradeData` is there a scenario where a user who attempts to deposit into such a strategy risks losing funds or does such a deposit simply revert.

### MulticallRouter

The MulticallRouter allows users to do all the normal operations (deposit, withdraw, rebalance, restructure), but by passing an array of arbitrary calls. This allows a user to use strategy funds as they please, as long as the transaction doesn't cause the strategy to get imbalanced or lose value. However, since it is a shared contract, there could be additional risks to using this contract. For example, giving an ERC20 approval to this contract would allow anyone calling this contract to transfer funds from you. While we account for this risk with how the StrategyController interacts with the router, there may be additional risks that we are unaware of.

### Adapters

Adapters are the main point of interaction between Enso strategies and the wider DeFI ecosystem. Incorrect implementation of an adapter could potentially lead to loss of user or strategy funds. Our routers are designed to call the adapters via a delegate call. This can make reasoning around adapters difficult as all calls within a `swap` function are being made by the router. Of concern is if an adapter does not utilize the entire `amount` that is passed in it's parameters. In such a scenario, left over funds could be trapped in the router.

## Preparing local environment

### Install
`yarn install`

### Compile
`yarn build`

### Test
should update [.env_example](https://github.com/code-423n4/2022-05-enso/blob/main/.env_example) for tests to run from mainnet fork before testing  
`yarn test`
