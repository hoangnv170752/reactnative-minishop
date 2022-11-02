import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { useState } from "react";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { request } from "../../../utils/request";
const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({})

    const onSignIn = () => {
        navigation.navigate('Signin');
    }
    const onBack = () => {
        navigation.navigate('Splash');
    }
    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }
    const onSubmit = async () => {
        try {
            if (!values?.fullName || !values?.email || !values?.password){
                Alert.alert('Please enter all fields');
                return;
            }
            if (values?.password !== values?.confirmPassword) {
                Alert.alert('Passwords do not match');
                return;
            }
    
            if (!checked) {
                Alert.alert('Please agree to the terms');
                return;
            }
    
            const response = await request({
                url: '/user/register',
                method: 'post',
                data: values,
            }); console.log('response: >>', response);
        } catch(error) {
            console.log('error: >>', error);
        }
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
                <Button title="Sign Up" style={styles.button} onPress={onSubmit} />
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