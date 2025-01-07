import PrimaryButton from '@/components/ui/PrimaryButton';
import Title from '@/components/ui/Title';
import Colors from '@/constants/colors';
import { StyleSheet, Text, Image, View, Dimensions, ScrollView } from 'react-native';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
	const deviceHeight = Dimensions.get('window').height;
	const imageSize = deviceHeight < 700 ? 200 : 300;

	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.rootContainer}>
				<Title>GAME OVER!</Title>
				<View style={[styles.imageContainer, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]}>
					<Image
						style={[styles.image, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]}
						source={require('../assets/images/success.png')}
					/>
				</View>
				<Text style={styles.summaryText}>
					Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
					<Text style={styles.highlight}>{userNumber}</Text>.
				</Text>
				<PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
			</View>
		</ScrollView>
	);
}

export default GameOverScreen;

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		borderWidth: 3,
		borderColor: Colors.white,
		overflow: 'hidden',
		marginVertical: 36,
	},
	image: {},
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
