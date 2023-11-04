import React, {useContext, useEffect, useRef, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert, Platform} from 'react-native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { CustomInput } from '../../components/auth/login/CustomInput';
import { CustomButton } from '../../components/general/components/CustomButton';
import { authenticateUser } from "../../services/payone";

import { i18n } from '../../config/localization/i18n.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {AppContext} from "../../config/context/AppContext";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

export const LoginScreen = () => {

    const {
        theme,
        accessToken,
        setAccessToken } = useContext(AppContext);

    const loginDisabledHandler = () => !(username && password && hasResponse);
    const passwordRef = useRef(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hasResponse, setHasResponse] = useState(true);
    const [protection, setProtection] = useState(true);
    // FA ICON
    const [icon, setIcon] = useState(<FontAwesomeIcon icon={faEye} color={`${theme.passwordIconColor}`} size={wp('6%')} />);
    const nav = useNavigation();
    const screen = 'screens.login';

    const validateInput = (username, password) => (!username || !password) ? false : true;

    return (
        <View
            style={[styles.layout, { backgroundColor: theme.screenBgColor }]}>
                <Text style={[styles.title, { color: theme.primaryContentColor }]}>{i18n.t(`${screen}.title`)}</Text>
                <CustomInput
                    value={username}
                    onSubmitHandler={() => passwordRef.current.focus()}
                    placeholder={i18n.t(`${screen}.email_placeholder`)}
                    onChangeText={(text) => setUsername(text)}
                    enterKey='next' />

                <CustomInput
                    customRef={passwordRef}
                    value={password}
                    icon={
                        <TouchableOpacity
                            onPress={() => {
                            setProtection(!protection);
                            setIcon(!protection ?
                                <FontAwesomeIcon icon={faEye} color={theme.passwordIconColor} size={wp('6%')}/> :
                                <FontAwesomeIcon icon={faEyeSlash} color={theme.passwordIconColor} size={wp('6%')} />);}}>
                            {icon}
                        </TouchableOpacity>
                    }
                    secureTextEntry={protection}
                    placeholder={i18n.t(`${screen}.password_placeholder`)}
                    onChangeText={(text) => setPassword(text)}
                    enterKey='done' />

                <CustomButton
                    text={i18n.t(`${screen}.button_text`)}
                    textColor={theme.mainBtnTextColor}
                    bgColor={theme.mainBtnBgColor}
                    borderColor={theme.mainBtnBorderColor}
                    isDisabled={loginDisabledHandler()}
                    onPress={async () => {
                        setHasResponse(false);
                        console.log(`Username: ${username}`);
                        console.log(`Password: ${password}`);

                        if(!validateInput(username, password)){
                            Alert.alert(i18n.t(`${screen}.invalid_credentials_title`), i18n.t(`${screen}.invalid_credentials_message`));
                            return;
                        }

                        const response = await authenticateUser(username, password);
                        setHasResponse(true);
                        if(response && response.status === 200){
                            setAccessToken(response.data.access_token);
                            console.log('LOGIN SUCCESSFUL (token saved)! Proceed to OTP!');
                            nav.navigate('Otp');
                        }

                        // DEBUG
                        // setAccessToken('123123');
                        // nav.navigate('Otp');
                    }}
                />
            <View style={{ flex: 0.45 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: wp('5%'),
    },
    title: {
        fontWeight: 'bold',
        marginVertical: hp('3%'),
        fontSize: wp('8%')
    }
});