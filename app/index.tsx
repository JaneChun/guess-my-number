import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from '@/constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import StartGameScreen from '../screens/StartGameScreen';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';

export default function Index() {
	const [userNumber, setUserNumber] = useState<number | null>(null);
	const [isGameOver, setIsGameOver] = useState(true);
	const [rounds, setRounds] = useState(0);

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

	function gameOverHandler(guessRoundsLength: number) {
		setRounds(guessRoundsLength);
		setIsGameOver(true);
	}

	function startNewGameHandler() {
		setUserNumber(null);
		setRounds(0);
	}

	let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
	}

	if (isGameOver && userNumber) {
		screen = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
	}

	return (
		<>
			<StatusBar style='light' />
			<LinearGradient colors={[Colors.dark600, Colors.dark800]} style={styles.rootScreen}>
				<ImageBackground
					source={require('../assets/images/background.png')}
					resizeMode='cover'
					style={styles.rootScreen}
					imageStyle={styles.backgroundImage}
				>
					<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
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
