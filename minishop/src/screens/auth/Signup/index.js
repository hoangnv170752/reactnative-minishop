import { View, Text } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { useState } from "react";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
const Signup = () => {
    const [checked, setChecked] = useState(false)
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>

            <Input label="name" placeholder="John Doe" />
            <Input label="email" placeholder="example@gmail.com" />
            <Input isPassword label="password" placeholder="******" />
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Term</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button title="Sign up" style={styles.button} />
            <Separator text="Or sign up with" />
            <GoogleLogin />
        </View>
    )
}

export default Signup