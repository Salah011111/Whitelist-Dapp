/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-21 16:56:15
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-21 16:57:34
 * @FilePath: \my-app\constants\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const WHITELIST_CONTRACT_ADDRESS = "0x8CB1C82380984DB0440DC24cdD603D087f255850";
export const abi = [
    {
        "inputs": [
            {
            "internalType": "uint8",
            "name": "_maxWhitelistedAddresses",
            "type": "uint8"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
        },
        {
        "inputs": [],
        "name": "addAddressToWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "maxWhitelistedAddresses",
        "outputs": [
            {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "numAddressesWhitelisted",
        "outputs": [
            {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "name": "whitelistedAddresses",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        }
    ];