import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from '@/constants/colors';

import StartGameScreen from '../screens/StartGameScreen';
import GameScreen from '../screens/GameScreen';

export default function Index() {
	const [userNumber, setUserNumber] = useState<number | null>(null);

	function pickedNumberHandler(pickedNumber: number) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} />;
	}

	return (
		<LinearGradient colors={[Colors.dark700, Colors.dark800]} style={styles.rootScreen}>
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
