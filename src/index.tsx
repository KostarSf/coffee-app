import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function IntroScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.content}>
                <View style={styles.titles}>
                    <Text style={styles.title}>Один из самых вкусных кофе в городе!</Text>
                    <Text style={styles.subtitle}>
                        Свежие зёрна, настоящая арабика и бережная обжарка
                    </Text>
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Начать</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'black',
    },

    content: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        gap: 24,
    },

    titles: {
        gap: 8,
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontSize: 34,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 0.5,
    },

    subtitle: {
        maxWidth: 300,
        color: '#A9A9A9',
        fontSize: 14,
        textAlign: 'center',
        letterSpacing: 0.5,
    },

    button: {
        padding: 20,
        backgroundColor: '#C67C4E',
        borderRadius: 16,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
