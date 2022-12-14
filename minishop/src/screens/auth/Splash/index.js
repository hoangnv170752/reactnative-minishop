import {View, Text, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';
const Splash = ({navigation}) => {
    console.log('navigation', navigation);
    const onSignup = () => {
        navigation.navigate('Signup');
    }
    const onSignIn = () => {
        navigation.navigate('Signin');
    }
    return (
        <View style={styles.container}>
            <Image resizeMode = 'contain' source = {{uri: 'https://i.ibb.co/mtxpTcR/10050-1.png'}} style={styles.image}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find </Text> 
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>
            <Button onPress={onSignup} title= "Sign up" />
            <TouchableOpacity hitSlop={20}>
                <Text style={styles.footerText} onPress={onSignIn}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Splash;