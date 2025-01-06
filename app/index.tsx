import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from '../screens/StartGameScreen';

export default function Index() {
	return (
		<LinearGradient colors={['#0B192C', '#000000']} style={styles.rootScreen}>
			<ImageBackground
				source={require('../assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<StartGameScreen />
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.1,
	},
});
