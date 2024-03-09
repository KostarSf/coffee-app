import { Stack } from 'expo-router';

export default function CatalogLayout() {
    return (
        <Stack>
            <Stack.Screen name="catalog/index" options={{ title: 'Главная' }} />
            <Stack.Screen name="catalog/[slug]" />
        </Stack>
    );
}
