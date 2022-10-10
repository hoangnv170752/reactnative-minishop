import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { useState } from "react";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        console.log("Hello");
    }
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In"/>

            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="******" />
            
            <Button title="Sign In" style={styles.button} />
            <Separator text="Or sign in with" />
            <GoogleLogin />
            <View style={styles.signincontainer}>
                <TouchableOpacity>
                    <Text style={styles.signin}>Don't have an account? <Text style={styles.signinbold} onPress={onSignIn}>Sign Up</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signin