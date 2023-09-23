import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ClipboardDocumentCheckIcon, ArrowsRightLeftIcon } from 'react-native-heroicons/solid';
import * as Clipboard from 'expo-clipboard';
import { QrCode } from '../../../components/transaction/qr/QrCode';
import { TransactionDetail } from '../../../components/transaction/qr/TransactionDetail';


export const QrScreen = ({ route }) => {
    const [wallet, setWallet] = useState('');
    const [network, setNetwork] = useState('');
    const { walletData, networkData } = route.params;

    useEffect(() => {
        setWallet(walletData);
        setNetwork(networkData);
    }, []);
    return (
        <View style={styles.layout}>
            <QrCode
                wallet={wallet}
                warning='Send only BTC to this deposit address. This address does not support deposit of non-fungible token, please go to NFT page to deposit NFT.' />
            
            <View style={{ width: Dimensions.get('window').width, height: 2, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: ''  }} />
            <TransactionDetail
                parameter={'Wallet Address'} 
                value={wallet}
                icon={<ClipboardDocumentCheckIcon color='#293462' />}
                onPressHandler={async () => {
                    await Clipboard.setStringAsync(wallet);
                    console.log('Clipboard set to: ' + wallet);
                }}
                disabled={false} />

            <TransactionDetail
                parameter={'Network'} 
                value={network}
                icon={<ArrowsRightLeftIcon color='#293462'/>}
                disabled={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    qr: {
        width: 300,
        height: 300,
        borderColor: '#293462',
        borderWidth: 3,
        borderRadius: 20,
        margin: 20,
        alignSelf: 'center'
    },
    qrButton: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    qrButtonContainer: {
        backgroundColor: '#293462',
        borderRadius: 10,
        flex: 1,
        margin: 10,
        paddingVertical: 20,
        paddingHorizontal: 30
    }
});