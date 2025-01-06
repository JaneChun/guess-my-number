import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
}

export default Title;

const styles = StyleSheet.create({
	titleContainer: {
		borderWidth: 2,
		borderColor: Colors.white,
		padding: 12,
		height: 60,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.white,
		textAlign: 'center',
		fontFamily: 'open-sans-bold',
	},
});
