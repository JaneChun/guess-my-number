import PrimaryButton from '@/components/ui/PrimaryButton';
import Title from '@/components/ui/Title';
import Colors from '@/constants/colors';
import { StyleSheet, Text, Image, View } from 'react-native';

function GameOverScreen() {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER!</Title>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require('../assets/images/success.png')} />
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.
			</Text>
			<PrimaryButton>Start New Game</PrimaryButton>
		</View>
	);
}

export default GameOverScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		marginTop: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		borderRadius: 150,
		width: 300,
		height: 300,
		borderWidth: 3,
		borderColor: Colors.white,
		overflow: 'hidden',
		marginVertical: 36,
	},
	image: {
		width: 300,
		height: 300,
	},
	summaryText: {
		color: Colors.white,
		fontFamily: 'open-sans',
		fontSize: 16,
		textAlign: 'center',
		marginVertical: 16,
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	},
});
