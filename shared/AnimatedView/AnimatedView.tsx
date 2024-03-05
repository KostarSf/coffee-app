import { Animated, ViewProps } from 'react-native';

type AnimatedViewProps = ViewProps & {
    yOffset?: number;
    duration?: number;
    delay?: number;
};
export function AnimatedView({
    children,
    style,
    yOffset,
    duration,
    delay,
    ...props
}: AnimatedViewProps) {
    const animatedValue = new Animated.ValueXY({
        x: 0,
        y: yOffset ?? 0,
    });

    Animated.timing(animatedValue, {
        toValue: { x: 1, y: 0 },
        duration: duration ?? 1000,
        delay: delay ?? 0,
        useNativeDriver: true,
    }).start();

    return (
        <Animated.View
            {...props}
            style={[
                style,
                { opacity: animatedValue.x, transform: [{ translateY: animatedValue.y }] },
            ]}
        >
            {children}
        </Animated.View>
    );
}
