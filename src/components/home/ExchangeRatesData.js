import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import { CoinExchangeRate } from './CoinExchangeRate';
import { cryptoCurrencies } from '../../constants/index';
import { endpoint24hrData } from "../../services/binanceApiCalls";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {AppContext} from "../../global/AppContext";

function modifyCurrentState(arr1, arr2){
    for(let key in arr1){
        for(let dataKey in arr2){
            let symbol = arr1[key].nameShort
            if(symbol.substring(0, 3) === arr2[dataKey].symbol.substring(0, 3)){
                arr1[key].lastPrice = arr2[dataKey].lastPrice;
                arr1[key].priceChangePercent = arr2[dataKey].priceChangePercent;
                break;
            }
        }
    }
}

const apiCallInterval = 2000;

export const ExchangeRatesData = () => {

    const { theme } = useContext(AppContext);
    const [apiData, setApiData] = useState(cryptoCurrencies);
    const [coinComponents, setCoinComponents] = useState(generateExchangeRates(apiData));

    function generateExchangeRates(data){
        return data.map(coinObject => ({
            key: coinObject.nameShort,
            nameShort: coinObject.nameShort,
            nameLong: coinObject.nameLong,
            lastPrice:
                coinObject.lastPrice === '---' ?
                    coinObject.lastPrice :
                    `${parseFloat(coinObject.lastPrice).toFixed(4)}`,
            priceChangePercent:
                coinObject.priceChangePercent === '---' ?
                    coinObject.priceChangePercent :
                    `${parseFloat(coinObject.priceChangePercent) >= 0 ? '+' : ''}${parseFloat(coinObject.priceChangePercent).toFixed(3)}`,
            coinIcon: coinObject.icon
        }));
    }

    // Modification of the observed object and it's conversion to Exchange Rates
    useEffect(() => {
        console.log("Rerender initiated...");
        const interval = setInterval(async () => {
            const jsonResponse = await endpoint24hrData(cryptoCurrencies);
            modifyCurrentState(cryptoCurrencies, jsonResponse);
            setApiData(cryptoCurrencies);
            setCoinComponents(generateExchangeRates(apiData));
        }, apiCallInterval);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View>
            <View style={styles.rowContainer}>

                {/* Add EHT and BTC here */}
                <CoinExchangeRate
                    nameShort={coinComponents[0].nameShort}
                    nameLong={coinComponents[0].nameLong}
                    lastPrice={coinComponents[0].lastPrice}
                    priceChangePercent={coinComponents[0].priceChangePercent}
                    coinIcon={coinComponents[0].coinIcon}
                    bgColor={theme.ethBgColor}
                    primaryColor={theme.exPrimaryColor}
                    secondaryColor={theme.exSecondaryColor}
                />

                <CoinExchangeRate
                    nameShort={coinComponents[1].nameShort}
                    nameLong={coinComponents[1].nameLong}
                    lastPrice={coinComponents[1].lastPrice}
                    priceChangePercent={coinComponents[1].priceChangePercent}
                    coinIcon={coinComponents[1].coinIcon}
                    bgColor={theme.btcBgColor}
                    primaryColor={theme.btcPrimaryColor}
                    secondaryColor={theme.btcSecondaryColor}
                />

            </View>
            <View style={styles.rowContainer}>

                {/* Add TRX and USDT here */}
                <CoinExchangeRate
                    nameShort={coinComponents[2].nameShort}
                    nameLong={coinComponents[2].nameLong}
                    lastPrice={coinComponents[2].lastPrice}
                    priceChangePercent={coinComponents[2].priceChangePercent}
                    coinIcon={coinComponents[2].coinIcon}
                    bgColor={theme.trxBgColor}
                    primaryColor={theme.exPrimaryColor}
                    secondaryColor={theme.exSecondaryColor}
                />

                <CoinExchangeRate
                    nameShort={coinComponents[3].nameShort}
                    nameLong={coinComponents[3].nameLong}
                    lastPrice={coinComponents[3].lastPrice}
                    priceChangePercent={coinComponents[3].priceChangePercent}
                    coinIcon={coinComponents[3].coinIcon}
                    bgColor={theme.usdBgColor}
                    primaryColor={theme.exPrimaryColor}
                    secondaryColor={theme.exSecondaryColor}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'row'
    }
});
