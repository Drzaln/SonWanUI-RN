import React, { useContext } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'
import Container from './Container'
import Text from './Text'

const RecentContact = () => {
	const { isDark } = useContext(ThemeContext)
	return (
		<Container style={styles.container}>
			<Text style={styles.sectionTitle(isDark)}>Recents Contact</Text>
			<View style={styles.listContainer}>
				<Person
					imageUrl="https://randomuser.me/api/portraits/men/43.jpg"
					title="Thomas Wise"
					subTitle="Bank - 0987 3422 8756"
				/>
				<Person
					title="Samantha"
					subTitle="Bank - 0987 3422 8756"
					imageUrl="https://randomuser.me/api/portraits/women/60.jpg"
				/>
				<Person
					imageUrl="https://randomuser.me/api/portraits/women/72.jpg"
					title="Karen William"
					subTitle="Bank - 0987 3422 8756"
				/>
			</View>
		</Container>
	)
}

const Person = ({ title, subTitle, imageUrl }) => {
	const { isDark } = useContext(ThemeContext)
	return (
		<View style={styles.personContainer}>
			<Container style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: imageUrl }} />
			</Container>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle(isDark)}>{subTitle}</Text>
			</View>
		</View>
	)
}

export default RecentContact

const styles = StyleSheet.create({
	container: { padding: 20 },
	sectionTitle: (isDark) => ({ color: isDark ? 'rgba(255,255,255,0.50)' : 'rgba(0,0,0,0.50)', fontSize: 14 }),
	listContainer: { marginTop: 10 },
	personContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 15
	},
	imageContainer: {
		flex: 1.8,
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		borderRadius: 100,
		marginVertical: 0
	},
	image: {
		height: '100%',
		width: 50,
		borderRadius: 100
	},
	textContainer: { flex: 10, marginHorizontal: 14, justifyContent: 'center' },
	title: { fontSize: 14 },
	subTitle: (isDark) => ({ fontSize: 12, color: isDark ? 'rgba(255,255,255,0.50)' : 'rgba(0,0,0,0.50)' })
})
