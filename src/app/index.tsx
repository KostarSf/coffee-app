import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { AnimatedView } from '../shared/AnimatedView/AnimatedView';
import { Button } from '../shared/Button/Button';
import { Colors, Fonts, Gaps, Letter } from '../shared/tokens';
import { router } from 'expo-router';

export default function IntroScreen() {
    return (
        <ImageBackground
            style={styles.container}
            source={require('../assets/intro-background.png')}
            imageStyle={styles.image}
        >
            <StatusBar style="light" />

            <View style={styles.content}>
                <View style={styles.titles}>
                    <AnimatedView yOffset={-70} duration={800}>
                        <Text style={styles.title}>Один из самых вкусных кофе в городе!</Text>
                    </AnimatedView>
                    <AnimatedView yOffset={-10} duration={500} delay={700}>
                        <Text style={styles.subtitle}>
                            Свежие зёрна, настоящая арабика и бережная обжарка
                        </Text>
                    </AnimatedView>
                </View>

                <AnimatedView yOffset={40} duration={1000} delay={1200}>
                    <Button title="Начать" onPress={() => router.push('(app)/(catalog)/catalog')} />
                </AnimatedView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: 'flex-end',
    },

    image: {
        objectFit: 'cover',
        marginTop: -200,
        height: '100%',
    },

    content: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        gap: Gaps.g24,
    },

    titles: {
        gap: Gaps.g8,
        alignItems: 'center',
    },

    title: {
        color: Colors.white,
        fontSize: Fonts.f34,
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
        letterSpacing: Letter.l1,
    },

    subtitle: {
        maxWidth: 300,
        color: Colors.gray,
        fontSize: Fonts.f14,
        fontFamily: Fonts.regular,
        textAlign: 'center',
        letterSpacing: Letter.l1,
    },
});
