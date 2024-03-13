import {
    Animated,
    GestureResponderEvent,
    Pressable,
    PressableProps,
    StyleSheet,
    Text,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import { useAnimatedColor } from './Button.hooks';

type ButtonProps = PressableProps & { title: string };
export function Button({ title, ...props }: ButtonProps) {
    const { color, fadeIn, fadeOut } = useAnimatedColor(Colors.primary, Colors.primaryHover);

    const onPressInHandle = (event: GestureResponderEvent) => {
        fadeIn();
        props.onPressIn?.(event);
    };

    const onPressOutHandle = (event: GestureResponderEvent) => {
        fadeOut();
        props.onPressOut?.(event);
    };

    return (
        <Pressable {...props} onPressIn={onPressInHandle} onPressOut={onPressOutHandle}>
            <Animated.View style={[styles.button, { backgroundColor: color }]}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Radius.r16,
    },

    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontFamily: Fonts.semiBold,
    },
});
