import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

type ButtonProps = PressableProps & { title: string };
export function Button({ title, ...props }: ButtonProps) {
    return (
        <Pressable {...props}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: Radius.r16,
    },

    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontWeight: '600',
    },
});
