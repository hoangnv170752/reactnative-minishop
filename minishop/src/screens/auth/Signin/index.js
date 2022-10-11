import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { useState } from "react";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const onSignUp = () => {
        navigation.navigate('Signup');
    }
    const onBack = () => {
        navigation.goBack();
    }
    const onSignIn = () => {
        navigation.navigate('Signin');
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In"/>

                <Input label="Email" placeholder="example@gmail.com" />
                <Input isPassword label="Password" placeholder="******" />
                
                <Button title="Sign In" style={styles.button} onPress={onSignIn}/>
                <Separator text="Or sign in with" />
                <GoogleLogin />
                <View style={styles.signincontainer}>
                    <TouchableOpacity>
                        <Text style={styles.signin}>Don't have an account? <Text style={styles.signinbold} onPress={onSignUp}>Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signin