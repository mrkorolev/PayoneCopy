import {faBitcoinSign, faLanguage, faTurkishLiraSign} from '@fortawesome/free-solid-svg-icons';
import {faEthereum, faHive} from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faBell, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faSignal, faQuestion, faT } from "@fortawesome/free-solid-svg-icons";
import {TronCustomIcon} from "../components/general/icons/TronCustomIcon";

// Separate into different files and move into 'config' directory

// Binance API Key
export const apiKey = 'hm2y1s1ZpmSmD6zi7nitfQxSIaq5TTkHcj1vfoCqHOBJx4cUHQHIVChQNgqu2lxG';

// System data:
export const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3Mjg0OTk2LCJpYXQiOjE2OTcyODEzOTYsImp0aSI6IjE0NzBhYjMxYWM2OTRlYzJiNzdjNzUwMGY0ZjE1MWRlIiwidXNlcl9pZCI6MjMsIjM2MDAiOjE2OTcyODQ5OTZ9.Kgk-tXkWr-0l8fHbrDcpHiLHBKy_2h3u2pJcrwNkPh4';
const  user1 = {
    username: 'nael.alyousefi@final.edu.tr',
    password: 'admin@1234'
}
const user2 = {
    username: 'arekanediz@gmail.com',
    password: 'admin@1234'
}
const user3 = {
    username: 'benoyt_smth@gmail.com',
    password: 'admin@1234'
}

// Currency data:
export const baseCurrencies = [
    {
        nameShort: 'TRY',
        nameLong: 'Turkish Lira',
        icon: faTurkishLiraSign
    },
    {
        nameShort: 'USD',
        nameLong: 'United States Dollar',
        icon: faDollarSign
    }
];

export const cryptoCurrencies = [
    {
        nameShort: 'ETH',
        nameLong: 'Ethereum',
        lastPrice: '---',
        priceChangePercent: '---',
        icon: faEthereum
    },
    {
        nameShort: 'BTC',
        nameLong: 'Bitcoin',
        lastPrice:'---',
        priceChangePercent: '---',
        icon: faBitcoinSign
    },
    {
        nameShort: 'TRX',
        nameLong: 'Tron',
        lastPrice:'---',
        priceChangePercent: '---',
    },
    {
        nameShort: 'USDT',
        nameLong: 'Dollars',
        lastPrice:'---',
        priceChangePercent: '---',
        icon: faDollarSign
    }
];

export const availableNetworks = [
    {
        networkCode: 'BTC',
        networkName: 'Bitcoin',
        icon: faBitcoinSign
    },
    {
        networkCode: 'ERC20',
        networkName: 'Ethereum',
        icon: faEthereum
    },
    {
        networkCode: 'TRC20',
        networkName: 'Tron'
    }
];


export const funcSettings = [
    {
        icon: faMoon,
        bgColor: '#5956D7'
    },
    {
        icon: faBell,
        bgColor: '#007CFC'
    },
    {
        icon: faLanguage,
        bgColor: 'purple'
    }

]

export const descSettings = [
    {
        icon: faFileLines,
        bgColor: '#D35554'
    },
    {
        icon: faSignal,
        bgColor: '#30CC53'
    },
    {
        icon: faQuestion,
        bgColor: '#FFD600'
    }
];
