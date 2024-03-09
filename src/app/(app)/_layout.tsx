import { Tabs } from 'expo-router';

export default function AppLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="(catalog)" options={{ title: 'Главная' }} />
            <Tabs.Screen name="(order)" options={{ title: 'Заказ' }} />
        </Tabs>
    );
}
