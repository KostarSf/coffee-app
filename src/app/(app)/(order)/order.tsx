import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function OrderScreen() {
    return (
        <View>
            <Link href={'success'}>
                <Text>Заказать</Text>
            </Link>
            <Link href={'address'}>
                <Text>Изменить адрес</Text>
            </Link>
        </View>
    );
}
