import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { useState } from "react";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        navigation.navigate('Signin');
    }
    const onBack = () => {
        navigation.navigate('Splash');
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign Up"/>

                <Input label="Name" placeholder="John Doe" />
                <Input label="Email" placeholder="example@gmail.com" />
                <Input isPassword label="Password" placeholder="******" />
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Term</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>
                <Button title="Sign Up" style={styles.button} onPress={onSignIn} />
                <Separator text="Or sign up with" />
                <GoogleLogin />
                <View style={styles.signincontainer}>
                    <TouchableOpacity>
                        <Text style={styles.signin}>Already have an account? <Text style={styles.signinbold} onPress={onSignIn}>Sign In</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup