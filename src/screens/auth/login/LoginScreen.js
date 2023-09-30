import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { CustomInput } from '../../../components/auth/login/CustomInput';
import { CustomButton } from '../../../components/general/CustomButton';
import {authenticateUser} from "../../../services/authentication";
import {i18n} from '../../../localization/i18n.js';

export const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [protection, setProtection] = useState(true);
    const [icon, setIcon] = useState(<EyeIcon color='#6A707C'/>);
    const nav = useNavigation();

    const screen = 'login';

    const validateInput = (username, password) => {
        if(!username || !password){
            return false;
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.primary}>{i18n.t(`${screen}.title`)}</Text>

            <CustomInput
                placeholder={i18n.t(`${screen}.email_placeholder`)}
                onChangeText={(text) => setUsername(text)}
                enterKey='next'/>

            <CustomInput
                icon={
                    <TouchableOpacity
                        onPress={() => {
                        setProtection(!protection);
                        setIcon(!protection ? <EyeIcon color='#6A707C'/> : <EyeSlashIcon color='#6A707C'/>);}}>
                        {icon}
                    </TouchableOpacity>
                }
                secureTextEntry={protection}
                placeholder={i18n.t(`${screen}.password_placeholder`)}
                onChangeText={(text) => setPassword(text)}
                enterKey='done' />

            <CustomButton
                text={i18n.t(`${screen}.button_text`)}
                onPress={async () => {

                    // if(!validateInput(username, password)){
                    //     alert(i18n.t(`${screen}.invalid_credentials`));
                    //     return;
                    // }
                    //
                    // const response = await authenticateUser(username, password);
                    // if(response && response.status === 200){
                    //     console.log('LOGIN SUCCESSFUL! Proceed to OTP!');
                    //     nav.navigate('Otp');
                    // }
                    nav.navigate('Otp');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 8
    },
    primary: {
        fontWeight: 'bold',
        color: '#293462',
        paddingBottom: 20,
        fontSize: 30,
        padding: 10
    }
});
