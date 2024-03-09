import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function CatalogScreen() {
    return (
        <View>
            <Link href={'./catalog/latte'}>
                <Text>Кофе Капучино</Text>
            </Link>
            <Link href={'../(order)/address'}>
                <Text>Изменить адрес</Text>
            </Link>
        </View>
    );
}
