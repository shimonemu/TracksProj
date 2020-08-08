import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);


    return (

        <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText="Sign In to your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Go back to sign up!"
            />
        </SafeAreaView>
    );

};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250

    }
});

export default SigninScreen; 