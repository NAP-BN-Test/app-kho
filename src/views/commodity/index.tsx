import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import stylesGlobal from '../../css/cssGlobal.css';
import AddCommodity from './addCommodity';

function commodity() {
  const {colors} = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleCloseModal: any = () => {
    setModalVisible(false);
  };

  const toggleCommodity: any = (data: any) => {};

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
          {/* <Image
            source={{
              uri: item.img,
            }}
            resizeMode="cover"
            style={{width: 100, height: 100, borderRadius: 10}}
          /> */}
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
        <Text style={stylesGlobal.text_header}>Quản lý hàng hóa</Text>
      </View>
      <View style={stylesGlobal.footer}>
        <View>
          <View>
            <View style={styles.lableSquare}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                Danh sách hàng hóa
              </Text>
              <View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.btn_Square}>
                    <Text
                      style={[
                        // styles.textSign,
                        {
                          color: '#fff',
                          padding: 5,
                        },
                      ]}>
                      Thêm
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView style={{marginBottom: 100, marginTop: 10}}>
            <View>{renderData()}</View>
          </ScrollView>
        </View>

        <View>
          <AddCommodity
            toggleCloseModal={toggleCloseModal}
            toggleCommodity={toggleCommodity}
            visible={modalVisible}
          />
        </View>
      </View>
    </View>
  );
}

export default commodity;

const styles = StyleSheet.create({
  square: {
    width: '100%',
    minHeight: 200,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
  },
  lableSquare: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn_Square: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
