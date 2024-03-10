import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function CoffeeScreen() {
    const { slug } = useLocalSearchParams();

    const title = slug ? (slug as string) : 'Кофе';

    return (
        <View>
            <Stack.Screen options={{ title }} />
            <Text>{slug}</Text>
        </View>
    );
}
