# Enso V1 contest details
- $118,750 USDT main award pot
- $6,250 USDT gas optimization award pot
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code4rena.com/contests/2022-05-enso-finance-contest/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts May 05, 2022 00:00 UTC
- Ends May 18, 2022 23:59 UTC


# Glossary



# Resources
- *Tests located in:* [tests](https://github.com/code-423n4/2022-05-enso/tree/main/test)
- *Helpers located in:* [lib](https://github.com/code-423n4/2022-05-enso/tree/main/lib/)
- *Docs located at:* [docs.enso.finance](https://docs.enso.finance/docs/smart-contracts/core/overview)
- *Live application:* *Will be live 22:00 UTC on 5/05/22, will update README when live - DM @Connor | Enso#0001 for whitelisted access*
- *Website:* [enso.finance](https://www.enso.finance/)
- *Public discord:* [enso-finance](https://discord.gg/enso-finance)


# Contracts
All solidity files are included in scope, apart from [contracts/test](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/test/).
 - [tests](https://github.com/code-423n4/2022-05-enso/tree/main/test/)
 - [contracts](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/)
   - [adapters](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/adapters/)
   - [helpers](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/helpers/)
   - [implementations](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/implementations/)
   - [interfaces](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/interfaces/)
   - [libraries](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/libraries/)
   - [oracles](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/oracles/)
   - [routers](https://github.com/code-423n4/2022-05-enso/tree/main/contracts/routers/)




# Potential areas for concern

### Oracle

The oracle guards against slippage and strategy value manipulation. As such, it needs to be secure against attacks that manipulate the estimated price of tokens. A major area of concern is the use of Uniswap V3 as the oracle for many of the tokens. Is there any possibility of manipulating the price via a sandwich attack using flash loans? Our main focus has been protecting against MEV and within-block price manipulation, but what about manipulation across multiple blocks? There are many markets that may not be as efficient as we like and a price could be manipulated over several blocks, or several minutes or hours. How much liquidity does a market needs in order to make such attacks untenable? What is the optimal time period the TWAP should use to determine the average price?

### FullRouter

The FullRouter provides much of the trading logic for swapping into and out of basic tokens, Synthetix tokens, and Aave V2 debt tokens. However, it does rely on data provided by the manager during strategy creation. In particular, in order for tokens to be put into a leveraged position, the manager must set which tokens are leveraged inside the debt token's `tradeData.cache` which holds `bytes` data that gets interpreted inside the FullRouter. This `bytes` data contains a tuple array where each tuple holds the leveraged item's token address and the percentage of the expected value that is bought with debt. The nature of these debt arrangements can be very complex and it is worth looking at where the FullRouter might fail to trade into the proper positions. Furthermore, if a manager has misconfigured the `tradeData` is there a scenario where a user who attempts to deposit into such a strategy risks losing funds or does such a deposit simply revert.

### MulticallRouter

The MulticallRouter allows users to do all the normal operations (deposit, withdraw, rebalance, restructure), but by passing an array of arbitrary calls. This allows a user to use strategy funds as they please, as long as the transaction doesn't cause the strategy to get imbalanced or lose value. However, since it is a shared contract, there could be additional risks to using this contract. For example, giving an ERC20 approval to this contract would allow anyone calling this contract to transfer funds from you. While we account for this risk with how the StrategyController interacts with the router, there may be additional risks that we are unaware of.

### Adapters

Adapters are the main point of interaction between Enso strategies and the wider DeFI ecosystem. Incorrect implementation of an adapter could potentially lead to loss of user or strategy funds. Our routers are designed to call the adapters via a delegate call. This can make reasoning around adapters difficult as all calls within a `swap` function are being made by the router. Of concern is if an adapter does not utilize the entire `amount` that is passed in it's parameters. In such a scenario, left over funds could be trapped in the router.
