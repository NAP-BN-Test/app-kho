import React from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import stylesGlobal from '../../css/cssGlobal.css';
import stylesInventory from './inventory.css';
function Inventory() {
  const producs = [
    {
      id: 1,
      name: 'SP 1',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },

    {
      id: 2,
      name: 'SP 2',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },

    {
      id: 3,
      name: 'SP 3',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },

    {
      id: 4,
      name: 'SP 4',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },

    {
      id: 5,
      name: 'SP 5',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },

    {
      id: 6,
      name: 'SP 6',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },

    {
      id: 7,
      name: 'SP 7',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },

    {
      id: 8,
      name: 'SP 8',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },
    {
      id: 9,
      name: 'SP 9',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },

    {
      id: 10,
      name: 'SP 10',
      qty: 1000,
      price: '1.000.000',
      date: '10/12/2021',
      img: 'https://inanh.net/wp-content/uploads/2020/08/chup-hinh-the-4.jpg',
    },
  ];

  function renderData() {
    const renderItem = ({item}: any) => (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row', marginBottom: 10}}
          //   onPress={() =>
          //     navigation.navigate('BookDetail', {
          //       book: item,
          //     })
          //   }
        >
          <Image
            source={{
              uri: item.img,
            }}
            resizeMode="cover"
            style={{width: 100, height: 100, borderRadius: 10}}
          />
          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <Text>Tên SP: {item.name}</Text>
            <Text>Số lượng: {item.qty}</Text>
            <Text>Đơn giá: {item.price}</Text>
            <Text>HSD: {item.date}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={producs}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Quản lý tồn kho</Text>
      </View>
      <View style={stylesGlobal.footer}>
          <ScrollView style={{marginBottom: 60}}>
            <View>{renderData()}</View>
          </ScrollView>
      </View>
    </View>
  );
}

export default Inventory;
