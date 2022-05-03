//SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.6.0 <0.9.0;

interface ICurveDepositZapRegistry {
    function getZap(address token) external view returns (address);

    function getIndexType(address zap) external view returns (uint256);
}
