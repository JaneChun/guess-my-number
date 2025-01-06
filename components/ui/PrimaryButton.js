import { StyleSheet, View, Text, Pressable } from 'react-native';
import Colors from '@/constants/colors';

function PrimaryButton({ children, onPress, style }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : [styles.buttonInnerContainer])}
				onPress={onPress}
				android_ripple={{ color: Colors.dark600 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
	},
	buttonInnerContainer: {
		backgroundColor: Colors.dark600,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontFamily: 'open-sans',
	},
	pressed: {
		opacity: 0.75,
	},
});
