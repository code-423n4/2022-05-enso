import hre from 'hardhat'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber, Contract } from 'ethers'
import { encodePriceSqrt, getDeadline, getMinTick, getMaxTick } from './utils'
import { createLink, linkBytecode } from './link'

import PlatformProxyAdmin from '../artifacts/contracts/PlatformProxyAdmin.sol/PlatformProxyAdmin.json'
import Strategy from '../artifacts/contracts/Strategy.sol/Strategy.json'
import StrategyController from '../artifacts/contracts/StrategyController.sol/StrategyController.json'
import StrategyProxyFactory from '../artifacts/contracts/StrategyProxyFactory.sol/StrategyProxyFactory.json'
import StrategyLibrary from '../artifacts/contracts/libraries/StrategyLibrary.sol/StrategyLibrary.json'
import EnsoOracle from '../artifacts/contracts/oracles/EnsoOracle.sol/EnsoOracle.json'
import UniswapNaiveOracle from '../artifacts/contracts/test/UniswapNaiveOracle.sol/UniswapNaiveOracle.json'
import UniswapV3Oracle from '../artifacts/contracts/oracles/protocols/UniswapV3Oracle.sol/UniswapV3Oracle.json'
import ChainlinkOracle from '../artifacts/contracts/oracles/protocols/ChainlinkOracle.sol/ChainlinkOracle.json'
import AaveV2Estimator from '../artifacts/contracts/oracles/estimators/AaveV2Estimator.sol/AaveV2Estimator.json'
import AaveV2DebtEstimator from '../artifacts/contracts/oracles/estimators/AaveV2DebtEstimator.sol/AaveV2DebtEstimator.json'
import BasicEstimator from '../artifacts/contracts/oracles/estimators/BasicEstimator.sol/BasicEstimator.json'
import CompoundEstimator from '../artifacts/contracts/oracles/estimators/CompoundEstimator.sol/CompoundEstimator.json'
import CurveLPEstimator from '../artifacts/contracts/oracles/estimators/CurveLPEstimator.sol/CurveLPEstimator.json'
import CurveGaugeEstimator from '../artifacts/contracts/oracles/estimators/CurveGaugeEstimator.sol/CurveGaugeEstimator.json'
import EmergencyEstimator from '../artifacts/contracts/oracles/estimators/EmergencyEstimator.sol/EmergencyEstimator.json'
import StrategyEstimator from '../artifacts/contracts/oracles/estimators/StrategyEstimator.sol/StrategyEstimator.json'
import YEarnV2Estimator from '../artifacts/contracts/oracles/estimators/YEarnV2Estimator.sol/YEarnV2Estimator.json'
import TokenRegistry from '../artifacts/contracts/oracles/registries/TokenRegistry.sol/TokenRegistry.json'
import CurveDepositZapRegistry from '../artifacts/contracts/oracles/registries/CurveDepositZapRegistry.sol/CurveDepositZapRegistry.json'
import UniswapV3Registry from '../artifacts/contracts/oracles/registries/UniswapV3Registry.sol/UniswapV3Registry.json'
import ChainlinkRegistry from '../artifacts/contracts/oracles/registries/ChainlinkRegistry.sol/ChainlinkRegistry.json'
import Whitelist from '../artifacts/contracts/Whitelist.sol/Whitelist.json'
import LoopRouter from '../artifacts/contracts/routers/LoopRouter.sol/LoopRouter.json'
import FullRouter from '../artifacts/contracts/routers/FullRouter.sol/FullRouter.json'
import BatchDepositRouter from '../artifacts/contracts/routers/BatchDepositRouter.sol/BatchDepositRouter.json'
import MulticallRouter from '../artifacts/contracts/routers/MulticallRouter.sol/MulticallRouter.json'
import UniswapV2Adapter from '../artifacts/contracts/adapters/exchanges/UniswapV2Adapter.sol/UniswapV2Adapter.json'
import UniswapV3Adapter from '../artifacts/contracts/adapters/exchanges/UniswapV3Adapter.sol/UniswapV3Adapter.json'
import KyberSwapAdapter from '../artifacts/contracts/adapters/exchanges/KyberSwapAdapter.sol/KyberSwapAdapter.json'
import MetaStrategyAdapter from '../artifacts/contracts/adapters/strategy/MetaStrategyAdapter.sol/MetaStrategyAdapter.json'
import AaveV2Adapter from '../artifacts/contracts/adapters/lending/AaveV2Adapter.sol/AaveV2Adapter.json'
import AaveV2DebtAdapter from '../artifacts/contracts/adapters/borrow/AaveV2DebtAdapter.sol/AaveV2DebtAdapter.json'
import CompoundAdapter from '../artifacts/contracts/adapters/lending/CompoundAdapter.sol/CompoundAdapter.json'
import CurveAdapter from '../artifacts/contracts/adapters/exchanges/CurveAdapter.sol/CurveAdapter.json'
import CurveLPAdapter from '../artifacts/contracts/adapters/liquidity/CurveLPAdapter.sol/CurveLPAdapter.json'
import CurveGaugeAdapter from '../artifacts/contracts/adapters/vaults/CurveGaugeAdapter.sol/CurveGaugeAdapter.json'
import SynthetixAdapter from '../artifacts/contracts/adapters/exchanges/SynthetixAdapter.sol/SynthetixAdapter.json'
import YEarnV2Adapter from '../artifacts/contracts/adapters/vaults/YEarnV2Adapter.sol/YEarnV2Adapter.json'
import BalancerAdapter from '../artifacts/contracts/adapters/exchanges/BalancerAdapter.sol/BalancerAdapter.json'
import BalancerFactory from '../artifacts/contracts/test/Balancer.sol/Balancer.json'
import BalancerRegistry from '../artifacts/contracts/test/BalancerRegistry.sol/BalancerRegistry.json'
import SushiswapFactory from '../artifacts/contracts/test/SushiswapFactory.sol/UniswapV2Factory.json'
import SushiswapPair from '../artifacts/contracts/test/SushiswapFactory.sol/UniswapV2Pair.json'
import BPool from '../artifacts/@balancer-labs/core/contracts/BPool.sol/BPool.json'

import ERC20 from '@uniswap/v2-periphery/build/ERC20.json'
import WETH9 from '@uniswap/v2-periphery/build/WETH9.json'
import UniswapV2Factory from '@uniswap/v2-core/build/UniswapV2Factory.json'
import UniswapV2Pair from '@uniswap/v2-core/build/UniswapV2Pair.json'
import UniswapV3Factory from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'
import NFTDescriptor from '@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json'
import NonfungiblePositionManager from '@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'
import { ESTIMATOR_CATEGORY, ITEM_CATEGORY, MAINNET_ADDRESSES, ORACLE_TIME_WINDOW, UNI_V3_FEE } from './constants'
const { ethers, waffle } = hre
const { constants, getContractFactory } = ethers
const { WeiPerEther, AddressZero } = constants

export type Oracles = {
	ensoOracle: Contract
	protocols: {
		uniswapOracle: Contract
		chainlinkOracle: Contract
	}
	registries: {
		tokenRegistry: Contract
		curveDepositZapRegistry: Contract
		uniswapV3Registry: Contract
		chainlinkRegistry: Contract
	}
}

export type Administration = {
	whitelist: Contract
	platformProxyAdmin: Contract
}
export class Platform {
	strategyFactory: Contract
	controller: Contract
	oracles: Oracles
	administration: Administration
	library: Contract

	public constructor(
		strategyFactory: Contract,
		controller: Contract,
		oracles: Oracles,
		administration: Administration,
		library: Contract
	) {
		this.strategyFactory = strategyFactory
		this.controller = controller
		this.oracles = oracles
		this.administration = administration
		this.library = library
	}

	print() {
		console.log('Enso Platform: ')
		console.log('  Factory: ', this.strategyFactory.address)
		console.log('  Controller: ', this.controller.address)
		console.log('  Whitelist: ', this.administration.whitelist.address)
		console.log('  Oracle: ', this.oracles.ensoOracle.address)
		console.log('  TokenRegistry: ', this.oracles.registries.tokenRegistry.address)
	}
}

export async function deployTokens(owner: SignerWithAddress, numTokens: number, value: BigNumber): Promise<Contract[]> {
	const tokens: Contract[] = []
	for (let i = 0; i < numTokens; i++) {
		if (i === 0) {
			const token = await waffle.deployContract(owner, WETH9)
			await token.deposit({ value: value })
			tokens.push(token)
		} else {
			const token = await waffle.deployContract(owner, ERC20, [WeiPerEther.mul(10000)])
			tokens.push(token)
		}
	}
	return tokens
}

export async function deployBalancer(owner: SignerWithAddress, tokens: Contract[]): Promise<[Contract, Contract]> {
	const balancerFactory = await waffle.deployContract(owner, BalancerFactory, [])
	await balancerFactory.deployed()

	const balancerRegistry = await waffle.deployContract(owner, BalancerRegistry, [balancerFactory.address])
	await balancerRegistry.deployed()

	for (let i = 0; i < tokens.length; i++) {
		if (i !== 0) {
			const tx = await balancerFactory.newBPool()
			const receipt = await tx.wait()
			if (
				receipt.events === undefined ||
				receipt.events[0].args === undefined ||
				receipt.events[0].args.pool === undefined
			) {
				throw new Error('deployBalancer() -> Failed to find pool arg in newBPool() event')
			}
			const poolAddress = receipt.events[0].args.pool
			const pool = new Contract(poolAddress, BPool.abi, owner)
			await tokens[0].approve(poolAddress, WeiPerEther.mul(100))
			await tokens[i].approve(poolAddress, WeiPerEther.mul(100))
			await pool.bind(tokens[0].address, WeiPerEther.mul(100), WeiPerEther.mul(5))
			await pool.bind(tokens[i].address, WeiPerEther.mul(100), WeiPerEther.mul(5))
			await pool.finalize()
			await balancerRegistry.addPoolPair(poolAddress, tokens[0].address, tokens[i].address)
			await balancerRegistry.sortPools([tokens[0].address, tokens[i].address], BigNumber.from(3))
		}
	}
	return [balancerFactory, balancerRegistry]
}

export async function deployBalancerAdapter(owner: SignerWithAddress, balancerRegistry: Contract, weth: Contract) {
	const adapter = await waffle.deployContract(owner, BalancerAdapter, [balancerRegistry.address, weth.address])
	await adapter.deployed()
	return adapter
}

export async function deployUniswapV2(owner: SignerWithAddress, tokens: Contract[]): Promise<Contract> {
	const uniswapV2Factory = await waffle.deployContract(owner, UniswapV2Factory, [owner.address])
	await uniswapV2Factory.deployed()
	const liquidityAmount = WeiPerEther.mul(100)
	//console.log('Uniswap factory: ', uniswapV2Factory.address)
	for (let i = 1; i < tokens.length; i++) {
		//tokens[0] is used as the trading pair (WETH)
		await uniswapV2Factory.createPair(tokens[0].address, tokens[i].address)
		const pairAddress = await uniswapV2Factory.getPair(tokens[0].address, tokens[i].address)
		const pair = new Contract(pairAddress, JSON.stringify(UniswapV2Pair.abi), owner)

		// Add liquidity
		await tokens[0].connect(owner).transfer(pairAddress, liquidityAmount)
		await tokens[i].connect(owner).transfer(pairAddress, liquidityAmount)
		await pair.connect(owner).mint(owner.address)
	}
	return uniswapV2Factory
}
export async function deployUniswapV3(owner: SignerWithAddress, tokens: Contract[]) {
	const uniswapV3Factory = await waffle.deployContract(owner, UniswapV3Factory)
	await uniswapV3Factory.deployed()

	const nftDesciptor = await waffle.deployContract(owner, NFTDescriptor, [])
	const UniswapNFTDescriptor = await getContractFactory('NonfungibleTokenPositionDescriptor', {
		libraries: {
			NFTDescriptor: nftDesciptor.address,
		},
	})
	const uniswapNFTDescriptor = await UniswapNFTDescriptor.connect(owner).deploy(tokens[0].address)
	await uniswapNFTDescriptor.deployed()
	//const uniswapNFTDescriptor = await waffle.deployContract(owner, NonfungibleTokenPositionDescriptor, [tokens[0].address])
	const uniswapNFTManager = await waffle.deployContract(owner, NonfungiblePositionManager, [
		uniswapV3Factory.address,
		tokens[0].address,
		uniswapNFTDescriptor.address,
	])

	await tokens[0].connect(owner).approve(uniswapNFTManager.address, constants.MaxUint256)
	for (let i = 1; i < tokens.length; i++) {
		const aNum = ethers.BigNumber.from(tokens[0].address)
		const bNum = ethers.BigNumber.from(tokens[i].address)
		const flipper = aNum.lt(bNum)

		//tokens[0] is used as the trading pair (WETH)
		await uniswapNFTManager.createAndInitializePoolIfNecessary(
			flipper ? tokens[0].address : tokens[i].address,
			flipper ? tokens[i].address : tokens[0].address,
			UNI_V3_FEE,
			encodePriceSqrt(1, 1)
		)
		// Add liquidity
		await tokens[i].connect(owner).approve(uniswapNFTManager.address, constants.MaxUint256)

		await uniswapNFTManager.mint({
			token0: flipper ? tokens[0].address : tokens[i].address,
			token1: flipper ? tokens[i].address : tokens[0].address,
			tickLower: getMinTick(60),
			tickUpper: getMaxTick(60),
			fee: UNI_V3_FEE,
			recipient: owner.address,
			amount0Desired: WeiPerEther.mul(100),
			amount1Desired: WeiPerEther.mul(100),
			amount0Min: 0,
			amount1Min: 0,
			deadline: getDeadline(240),
		})
	}

	return [uniswapV3Factory, uniswapNFTManager]
}

export async function deploySushiswap(owner: SignerWithAddress, tokens: Contract[]): Promise<Contract> {
	const sushiswapFactory = await waffle.deployContract(owner, SushiswapFactory, [owner.address])
	await sushiswapFactory.deployed()
	for (let i = 1; i < tokens.length; i++) {
		//tokens[0] is used as the trading pair (WETH)
		await sushiswapFactory.createPair(tokens[0].address, tokens[i].address)
		const pairAddress = await sushiswapFactory.getPair(tokens[0].address, tokens[i].address)
		const pair = new Contract(pairAddress, JSON.stringify(SushiswapPair.abi), owner)
		// Add liquidity
		await tokens[0].connect(owner).transfer(pairAddress, WeiPerEther.mul(100))
		await tokens[i].connect(owner).transfer(pairAddress, WeiPerEther.mul(100))
		await pair.connect(owner).mint(owner.address)
	}
	return sushiswapFactory
}

export async function deployPlatform(
	owner: SignerWithAddress,
	uniswapOracleFactory: Contract,
	uniswapV3Factory: Contract,
	weth: Contract,
	susd?: Contract,
	feePool?: string
): Promise<Platform> {
	// Libraries
	const strategyLibrary = await waffle.deployContract(owner, StrategyLibrary, [])
	await strategyLibrary.deployed()
	const strategyLibraryLink = createLink(StrategyLibrary, strategyLibrary.address)

	// Setup Oracle infrastructure - registries, estimators, protocol oracles
	const tokenRegistry = await waffle.deployContract(owner, TokenRegistry, [])
	await tokenRegistry.deployed()
	const curveDepositZapRegistry = await waffle.deployContract(owner, CurveDepositZapRegistry, [])
	await curveDepositZapRegistry.deployed()
	const uniswapV3Registry = await waffle.deployContract(owner, UniswapV3Registry, [
		ORACLE_TIME_WINDOW,
		uniswapV3Factory.address,
		weth.address,
	])
	await uniswapV3Registry.deployed()
	const chainlinkRegistry = await waffle.deployContract(owner, ChainlinkRegistry, [])
	await chainlinkRegistry.deployed()

	let uniswapOracle
	if (uniswapOracleFactory.address == uniswapV3Factory.address) {
		uniswapOracle = await waffle.deployContract(owner, UniswapV3Oracle, [uniswapV3Registry.address, weth.address])
	} else {
		uniswapOracle = await waffle.deployContract(owner, UniswapNaiveOracle, [
			uniswapOracleFactory.address,
			weth.address,
		])
	}
	await uniswapOracle.deployed()

	/* TODO switch to this approach once we setup registry script
	let uniswapOracle: Contract, uniswapV3Registry: Contract;
	if (uniswapFactory.address === MAINNET_ADDRESSES.UNISWAP_V3_FACTORY) {
		uniswapV3Registry = await waffle.deployContract(owner, UniswapV3Registry, [ORACLE_TIME_WINDOW, uniswapFactory.address, weth.address])
		await uniswapV3Registry.deployed()
		uniswapOracle = await waffle.deployContract(owner, UniswapV3Oracle, [uniswapV3Registry.address, weth.address])
	} else {
		uniswapOracle = await waffle.deployContract(owner, UniswapNaiveOracle, [uniswapFactory.address, weth.address])
	}
	await uniswapOracle.deployed()
	*/

	const chainlinkOracle = await waffle.deployContract(owner, ChainlinkOracle, [
		chainlinkRegistry.address,
		weth.address,
	])
	await chainlinkOracle.deployed()
	const ensoOracle = await waffle.deployContract(owner, EnsoOracle, [
		tokenRegistry.address,
		weth.address,
		susd?.address || AddressZero,
	])
	await ensoOracle.deployed()

	const defaultEstimator = await waffle.deployContract(owner, BasicEstimator, [uniswapOracle.address])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.DEFAULT_ORACLE, defaultEstimator.address)
	const chainlinkEstimator = await waffle.deployContract(owner, BasicEstimator, [chainlinkOracle.address])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.CHAINLINK_ORACLE, chainlinkEstimator.address)
	const strategyEstimator = await waffle.deployContract(owner, StrategyEstimator, [])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.STRATEGY, strategyEstimator.address)
	const emergencyEstimator = await waffle.deployContract(owner, EmergencyEstimator, [])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.BLOCKED, emergencyEstimator.address)
	const aaveV2Estimator = await waffle.deployContract(owner, AaveV2Estimator, [])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.AAVE_V2, aaveV2Estimator.address)
	const aaveV2DebtEstimator = await waffle.deployContract(owner, AaveV2DebtEstimator, [])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.AAVE_V2_DEBT, aaveV2DebtEstimator.address)
	const compoundEstimator = await waffle.deployContract(owner, CompoundEstimator, [])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.COMPOUND, compoundEstimator.address)
	const curveLPEstimator = await waffle.deployContract(owner, CurveLPEstimator, [])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.CURVE_LP, curveLPEstimator.address)
	const curveGaugeEstimator = await waffle.deployContract(owner, CurveGaugeEstimator, [])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.CURVE_GAUGE, curveGaugeEstimator.address)
	const yearnV2Estimator = await waffle.deployContract(owner, YEarnV2Estimator, [])
	await tokenRegistry.connect(owner).addEstimator(ESTIMATOR_CATEGORY.YEARN_V2, yearnV2Estimator.address)

	await tokenRegistry.connect(owner).addItem(ITEM_CATEGORY.RESERVE, ESTIMATOR_CATEGORY.DEFAULT_ORACLE, weth.address)
	if (susd)
		await tokenRegistry
			.connect(owner)
			.addItem(ITEM_CATEGORY.RESERVE, ESTIMATOR_CATEGORY.CHAINLINK_ORACLE, susd.address)

	// Whitelist
	const whitelist = await waffle.deployContract(owner, Whitelist, [])
	await whitelist.deployed()

	// Deploy Platfrom Admin and get controller and factory addresses
	const platformProxyAdmin = await waffle.deployContract(owner, PlatformProxyAdmin, [])
	await platformProxyAdmin.deployed()
	const controllerAddress = await platformProxyAdmin.controller()
	const factoryAddress = await platformProxyAdmin.factory()

	// Controller Implementation
	const controllerImplementation = await waffle.deployContract(
		owner,
		linkBytecode(StrategyController, [strategyLibraryLink]),
		[factoryAddress]
	)
	await controllerImplementation.deployed()

	// Factory Implementation
	const factoryImplementation = await waffle.deployContract(owner, StrategyProxyFactory, [controllerAddress])
	await factoryImplementation.deployed()

	// Strategy Implementation
	const strategyImplementation = await waffle.deployContract(owner, Strategy, [
		factoryAddress,
		controllerAddress,
		MAINNET_ADDRESSES.SYNTHETIX_ADDRESS_PROVIDER,
		MAINNET_ADDRESSES.AAVE_ADDRESS_PROVIDER,
	])
	await strategyImplementation.deployed()

	await platformProxyAdmin
		.connect(owner)
		.initialize(
			controllerImplementation.address,
			factoryImplementation.address,
			strategyImplementation.address,
			ensoOracle.address,
			tokenRegistry.address,
			whitelist.address,
			feePool || owner.address
		)

	// Factory
	const factory = new Contract(factoryAddress, StrategyProxyFactory.abi, owner)

	// Strategy Controller
	const controller = new Contract(controllerAddress, StrategyController.abi, owner)

	await tokenRegistry.connect(owner).transferOwnership(factoryAddress)

	const oracles: Oracles = {
		ensoOracle,
		protocols: {
			uniswapOracle,
			chainlinkOracle,
		},
		registries: {
			tokenRegistry,
			curveDepositZapRegistry,
			uniswapV3Registry,
			chainlinkRegistry,
		},
	}

	const administration: Administration = {
		whitelist,
		platformProxyAdmin,
	}

	return new Platform(factory, controller, oracles, administration, strategyLibrary)
}

export async function deployUniswapV2Adapter(
	owner: SignerWithAddress,
	uniswapV2Factory: Contract,
	weth: Contract
): Promise<Contract> {
	const adapter = await waffle.deployContract(owner, UniswapV2Adapter, [uniswapV2Factory.address, weth.address])
	await adapter.deployed()
	return adapter
}

export async function deployUniswapV3Adapter(
	owner: SignerWithAddress,
	uniswapRegistry: Contract,
	uniswapRouter: Contract,
	weth: Contract
): Promise<Contract> {
	const adapter = await waffle.deployContract(owner, UniswapV3Adapter, [
		uniswapRegistry.address,
		uniswapRouter.address,
		weth.address,
	])
	await adapter.deployed()
	return adapter
}

export async function deployMetaStrategyAdapter(
	owner: SignerWithAddress,
	controller: Contract,
	router: Contract,
	weth: Contract
) {
	const adapter = await waffle.deployContract(owner, MetaStrategyAdapter, [
		controller.address,
		router.address,
		weth.address,
	])
	await adapter.deployed()
	return adapter
}

export async function deployAaveV2Adapter(
	owner: SignerWithAddress,
	addressProvider: Contract,
	strategyController: Contract,
	weth: Contract
) {
	const adapter = await waffle.deployContract(owner, AaveV2Adapter, [
		addressProvider.address,
		strategyController.address,
		weth.address,
	])
	await adapter.deployed()
	return adapter
}

export async function deployAaveV2DebtAdapter(owner: SignerWithAddress, addressProvider: Contract, weth: Contract) {
	const adapter = await waffle.deployContract(owner, AaveV2DebtAdapter, [addressProvider.address, weth.address])
	await adapter.deployed()
	return adapter
}

export async function deployCompoundAdapter(owner: SignerWithAddress, comptroller: Contract, weth: Contract) {
	const adapter = await waffle.deployContract(owner, CompoundAdapter, [comptroller.address, weth.address])
	await adapter.deployed()
	return adapter
}

export async function deployYEarnAdapter(owner: SignerWithAddress, weth: Contract) {
	const adapter = await waffle.deployContract(owner, YEarnV2Adapter, [weth.address])
	await adapter.deployed()
	return adapter
}

export async function deployCurveAdapter(owner: SignerWithAddress, curveAddressProvider: Contract, weth: Contract) {
	const adapter = await waffle.deployContract(owner, CurveAdapter, [curveAddressProvider.address, weth.address])
	await adapter.deployed()
	return adapter
}

export async function deployCurveLPAdapter(
	owner: SignerWithAddress,
	curveAddressProvider: Contract,
	curveDepositZapRegistry: Contract,
	weth: Contract
) {
	const adapter = await waffle.deployContract(owner, CurveLPAdapter, [
		curveAddressProvider.address,
		curveDepositZapRegistry.address,
		weth.address,
	])
	await adapter.deployed()
	return adapter
}

export async function deployCurveGaugeAdapter(
	owner: SignerWithAddress,
	curveAddressProvider: Contract,
	weth: Contract
) {
	const adapter = await waffle.deployContract(owner, CurveGaugeAdapter, [curveAddressProvider.address, weth.address])
	await adapter.deployed()
	return adapter
}

export async function deploySynthetixAdapter(owner: SignerWithAddress, resolver: Contract, weth: Contract) {
	const adapter = await waffle.deployContract(owner, SynthetixAdapter, [resolver.address, weth.address])
	await adapter.deployed()
	return adapter
}

export async function deployKyberSwapAdapter(
	owner: SignerWithAddress,
	kyberFactory: Contract,
	kyberRouter: Contract,
	weth: Contract
) {
	const adapter = await waffle.deployContract(owner, KyberSwapAdapter, [kyberFactory.address, kyberRouter.address, weth.address])
	await adapter.deployed()
	return adapter
}

export async function deployLoopRouter(
	owner: SignerWithAddress,
	controller: Contract,
	library: Contract,
) {
	const router = await waffle.deployContract(
		owner,
		linkBytecode(LoopRouter, [createLink(StrategyLibrary, library.address)]),
		[controller.address]
	)
	await router.deployed()

	return router
}

export async function deployFullRouter(
	owner: SignerWithAddress,
	addressProvider: Contract,
	controller: Contract,
	library: Contract
) {
	const router = await waffle.deployContract(
		owner,
		linkBytecode(FullRouter, [createLink(StrategyLibrary, library.address)]),
		[addressProvider.address, controller.address]
	)
	await router.deployed()

	return router
}

export async function deployBatchDepositRouter(owner: SignerWithAddress, controller: Contract, library: Contract) {
	const router = await waffle.deployContract(
		owner,
		linkBytecode(BatchDepositRouter, [createLink(StrategyLibrary, library.address)]),
		[controller.address]
	)
	await router.deployed()

	return router
}

export async function deployMulticallRouter(owner: SignerWithAddress, controller: Contract) {
	const router = await waffle.deployContract(owner, MulticallRouter, [controller.address])
	await router.deployed()

	return router
}
