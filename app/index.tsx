import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from '@/constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from '../screens/StartGameScreen';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';

export default function Index() {
	const [userNumber, setUserNumber] = useState<number | null>(null);
	const [isGameOver, setIsGameOver] = useState(true);

	const [fontsLoaded] = useFonts({
		'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	function pickedNumberHandler(pickedNumber: number) {
		setUserNumber(pickedNumber);
		setIsGameOver(false);
	}

	function gameOverHandler() {
		setIsGameOver(true);
	}

	let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
	}

	if (isGameOver && userNumber) {
		screen = <GameOverScreen />;
	}

	return (
		<LinearGradient colors={[Colors.dark600, Colors.dark800]} style={styles.rootScreen}>
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
