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
- *Tests located in:* [tests](/test/)
- *Helpers located in:* [lib](/lib/)
- *Docs located at:* [docs.enso.finance](https://docs.enso.finance/docs/smart-contracts/core/overview)
- *Live application:* *Will be live 22:00 UTC on 5/05/22, will update README when live - DM @Connor | Enso#0001 for whitelisted access*
- *Website:* [enso.finance](https://www.enso.finance/)
- *Public discord:* [enso-finance](https://discord.gg/enso-finance)


# Contracts
All solidity files are included in scope, apart from [contracts/test](/contracts/test/).
 - [tests](/test/)
 - [contracts](/contracts/)
   - [adapters](/contracts/adapters/)
   - [helpers](/contracts/helpers/)
   - [implementations](/contracts/implementations/)
   - [interfaces](/contracts/interfaces/)
   - [libraries](/contracts/libraries/)
   - [oracles](/contracts/oracles/)
   - [routers](/contracts/routers/)




# Potential areas for concern

### Oracle

### FullRouter?



# Preparing local environment



# ✨ So you want to sponsor a contest

This `README.md` contains a set of checklists for our contest collaboration.

Your contest will use two repos: 
- **a _contest_ repo** (this one), which is used for scoping your contest and for providing information to contestants (wardens)
- **a _findings_ repo**, where issues are submitted. 

Ultimately, when we launch the contest, this contest repo will be made public and will contain the smart contracts to be reviewed and all the information needed for contest participants. The findings repo will be made public after the contest is over and your team has mitigated the identified issues.

Some of the checklists in this doc are for **C4 (🐺)** and some of them are for **you as the contest sponsor (⭐️)**.



---

# Contest setup

## ⭐️ Sponsor: Provide contest details

Under "SPONSORS ADD INFO HERE" heading below, include the following:

- [ ] Name of each contract and:
  - [ ] source lines of code (excluding blank lines and comments) in each
  - [ ] external contracts called in each
  - [ ] libraries used in each
- [ ] Describe any novel or unique curve logic or mathematical models implemented in the contracts
- [ ] Does the token conform to the ERC-20 standard? In what specific ways does it differ?
- [ ] Describe anything else that adds any special logic that makes your approach unique
- [ ] Identify any areas of specific concern in reviewing the code
- [ ] Add all of the code to this repo that you want reviewed
- [ ] Create a PR to this repo with the above changes.

---

# Contest prep

## ⭐️ Sponsor: Contest prep
- [ ] Make sure your code is thoroughly commented using the [NatSpec format](https://docs.soliditylang.org/en/v0.5.10/natspec-format.html#natspec-format).
- [ ] Modify the bottom of this `README.md` file to describe how your code is supposed to work with links to any relevent documentation and any other criteria/details that the C4 Wardens should keep in mind when reviewing. ([Here's a well-constructed example.](https://github.com/code-423n4/2021-06-gro/blob/main/README.md))





