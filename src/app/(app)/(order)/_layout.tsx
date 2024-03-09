import { Stack } from 'expo-router';

export default function OrderLayout() {
    return (
        <Stack>
            <Stack.Screen name="order" options={{ title: 'Заказ' }} />
            <Stack.Screen name="address" options={{ title: 'Изменить адрес' }} />
            <Stack.Screen name="success" options={{ title: 'Заказ оформлен!' }} />
        </Stack>
    );
}
