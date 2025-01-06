import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from '../screens/StartGameScreen';
import GameScreen from '../screens/GameScreen';

export default function Index() {
	const [userNumber, setUserNumber] = useState<number | null>(null);

	function pickedNumberHandler(pickedNumber: number) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}

	return (
		<LinearGradient colors={['#0B192C', '#000000']} style={styles.rootScreen}>
			<ImageBackground
				source={require('../assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView styles={styles.rootScreen}>{screen}</SafeAreaView>
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
