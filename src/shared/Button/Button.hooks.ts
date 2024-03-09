import { Animated } from 'react-native';

export function useAnimatedColor(primaryColor: string, secondaryColor: string) {
    const animatedValue = new Animated.Value(100);
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [secondaryColor, primaryColor],
    });

    const fadeIn = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    return { color, fadeIn, fadeOut };
}
