import { StyleSheet, View, Text } from 'react-native';

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
		borderColor: '#FF6500',
		padding: 12,
		height: 60,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#FF6500',
		textAlign: 'center',
	},
});
