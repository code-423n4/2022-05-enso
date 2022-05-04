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
|[PlatformProxyAdmin](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/PlatformProxyAdmin.sol) | [contracts/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/) | 101 | ...
| [Strategy](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/Strategy.sol) | ^^ |869 | ..
| [StrategyController](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyController.sol) | ^^ | 784 | ..
| [StrategyControllerStorage](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyControllerStorage.sol) | ^^ | 784 | ..
| [StrategyProxyAdmin](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyProxyAdmin.sol) | ^^ | 70 | ..
| [StrategyProxyFactory](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyProxyFactory.sol) | ^^ | 297 | ..
| [StrategyProxyFactoryStorage](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyProxyFactoryStorage.sol) | ^^ | 18 | ..
| [StrategyToken](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyToken.sol) | ^^ | 322 | ..
| [StrategyTokenStorage](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/StrategyTokenStorage.sol) | ^^ | 40 | ..
| [Whitelist](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/Whitelist.sol) | ^^ | 23 | ..
| [BaseAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/BaseAdapter.sol) | [contracts/adapters/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/) | 21 | ..
| [AaveV2DebtAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/borrow/AaveV2DebtAdapter.sol) | [adapters/borrow/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/borrow/) | 66 | ..
| [BalancerAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/BalancerAdapter.sol) | [/contracts/adapters/exchanges/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/exchanges/) | 239 | ..
| [CurveAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/CurveAdapter.sol) | ^^ | 239 | ..
| [KyberSwapAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/KyberSwapAdapter.sol) | ^^ | 62 | ..
| [SynthetixAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/SynthetixAdapter.sol) | ^^ | 58 | ..
| [UniswapV2Adapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/UniswapV2Adapter.sol) | ^^ | 79 | ..
| [UniswapV3Adapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/UniswapV3Adapter.sol) | ^^ | 54 | ..
| [AaveV2Adapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/AaveV2Adapter.sol) | [contracts/adapters/lending/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/lending/) | 79 | ..
| [CompoundAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/exchanges/CompoundAdapter.sol) | [contracts/adapters/lending/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/lending/) | 83 | ..
| [CurveLPAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/liquidity/CurveLPAdapter.sol) | [contracts/adapters/lending/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/lending/) | 156 | ..
| [CurveLPAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/liquidity/CurveLPAdapter.sol) | [contracts/adapters/liquidity/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/liquidity/) | 156 | ..
| [MetaStrategyAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/strategy/MetaStrategyAdapter.sol) | [contracts/adapters/liquidity/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/strategy/) | 61 | ..
| [MetaStrategyAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/strategy/MetaStrategyAdapter.sol) | [contracts/adapters/strategy/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/strategy/) | 61 | ..
| [CurveGuageAdapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/vaults/CurveGuageAdapter.sol) | [contracts/adapters/vaults/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/vaults/) | 60 | ..
| [YEarnV2Adapter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/adapters/vaults/YEarnV2Adapter.sol) | ^^ | 71 | ..
| [AddressUtils](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/AddressUtils.sol) | [contracts/helpers/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/helpers/) | 10 | ..
| [GasCostProvider](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/GasCostProvider.sol) | ^^ | 17 | ..
| [Multicall](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/Multicall.sol) | ^^ | 32 | ..
| [RevertDebug](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/RevertDebug.sol) | ^^ | 26 | ..
| [StringUtils](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/StringUtils.sol) | ^^ | 17 | ..
| [StringUtils](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/helpers/StringUtils.sol) | ^^ | 17 | ..
| [StrategyControllerPaused](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/implementations/recovery/StrategyControllerPaused.sol) | [contracts/implementations/recovery](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/implementations/recovery) | 294 | ..
| [InterfacesFolder](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/interfaces) | [contracts/interfaces/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/interfaces/) | 1254 | ..
| [Math](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/libraries/Math.sol) | [contracts/libraries/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/libraries/) | 74 | ..
| [SafeERC20](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/libraries/SafeERC20.sol) | ^^ | 82 | ..
| [StrategyLibrary](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/libraries/StrategyLibrary.sol) | ^^ | 117 | ..
| [UniswapV2Library](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/libraries/UniswapV2Library.sol) | ^^ | 132 | ..
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
| [BatchDepositRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/BatchDepositRouter.sol) | [contracts/routers/](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/routers/) | 59 | ..
| [FullRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/FullRouter.sol) | ^^ | 757 | ..
| [LoopRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/LoopRouter.sol) | ^^ | 226 | ..
| [MulticallRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/MulticallRouter.sol) | ^^ | 125 | ..
| [StrategyRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/StrategyRouter.sol) | ^^ | 182 | ..
| [StrategyRouter](https://github.com/code-423n4/2022-05-enso/blob/main/contracts/routers/StrategyRouter.sol) | ^^ | 182 | ..



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

### Architecture Choice



## Potential areas for concern

### Oracle

### FullRouter?



## FAQ

### 


## Preparing local environment
