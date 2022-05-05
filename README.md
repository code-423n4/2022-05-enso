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


## Resources 
- *Tests located in:* [tests](https://github.com/code-423n4/2022-05-enso/tree/main/test/)
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
| [StrategyController](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyController.sol) | ^^ | 784 | ..
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
| [EnsoOracle](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/EnsoOracle.sol) | [contracts/oracles](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/) | 90 | ..
| [AaveV2DebtEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/AaveV2DebtEstimator.sol) | [contracts/oracles/estimators](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/estimators/) | 23 | ..
| [BasicEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/BasicEstimator.sol) | ^^ | 27 | ..
| [CompoundEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/CompoundEstimator.sol) | ^^ | 27 | ..
| [CurveGaugeEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/CurveGaugeEstimator.sol) | ^^ | 23 | ..
| [CurveLPEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/CurveLPEstimator.sol) | ^^ | 93 | ..
| [EmergencyEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/EmergencyEstimator.sol) | ^^ | 31 | ..
| [StrategyEstimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/StrategyEstimator.sol) | ^^ | 29 | ..
| [YEarnV2Estimator](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/estimators/YEarnV2Estimator.sol) | ^^ | 27 | ..
| [ChainlinkOracle](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/protocols/ChainlinkOracle.sol) | [contracts/oracles/protocols/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/protocols/) | 27 | ..
| [ProtocolOracle](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/protocols/ProtocolOracle.sol) | ^^ | 36 | ..
| [UniswapV3Oracle](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/protocols/UniswapV3Oracle.sol) | ^^ | 54 | ..
| [ChainlinkRegistry](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/registries/ChainlinkRegistry.sol) | [contracts/oracles/registries](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/registries) | 49 | ..
| [CurveDepositZapRegistry](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/registries/CurveDepositZapRegistry.sol) | ^^| 24 | ..
| [TokenRegistry](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/registries/TokenRegistry.sol) | ^^| 42 | ..
| [UniswapV3Registry](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/oracles/registries/UniswapV3Registry.sol) | ^^| 96 | ..
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

### Access Control

### Architecture Choice



## Potential areas for concern

### Oracle

### FullRouter?



## FAQ

### 


## Preparing local environment
