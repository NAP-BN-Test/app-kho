import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import stylesGlobal from '../../css/cssGlobal.css';
import stylesInventory from './inventory.css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import Scan_import from '../ImportExport/import/scan_import';
import {useDispatch} from 'react-redux';
import {Action} from '../../redux/actions/index.action';
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
function Inventory() {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    const getlisttonkho = async () => {
      dispatch(Action.act_get_tonkhotheodonvi({}));
    };
    getlisttonkho();
  }, [refreshing]);
  const producs = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },

    {
      id: 2,
      name: 'Sản phẩm 2',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },

    {
      id: 3,
      name: 'Sản phẩm 3',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },

    {
      id: 4,
      name: 'Sản phẩm 4',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },

    {
      id: 5,
      name: 'Sản phẩm 5',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },

    {
      id: 6,
      name: 'Sản phẩm 6',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },

    {
      id: 7,
      name: 'Sản phẩm 7',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },

    {
      id: 8,
      name: 'Sản phẩm 8',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },
    {
      id: 9,
      name: 'Sản phẩm 9',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },

    {
      id: 10,
      name: 'Sản phẩm 10',
      qty: 1000,
      dvt: 'Tấn',
      kho: 'NAP BẮC NINH',
      customer: 'Nguyễn Văn A',
    },
  ];
  const {colors} = useTheme();
  const [modalVisibleCamera, setmodalVisibleCamera] = useState(false);
  const toggleCloseModalCamera: any = () => {
    setmodalVisibleCamera(false);
  };

  const toggleCodeBar: any = (code: any) => {
    // setmodalVisibleCamera(false);
    console.log(code.data);
    // setcodebar(code.data);
  };

  function renderData() {
    const renderItem = ({item}: any) => (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row', marginBottom: 5}}
          //   onPress={() =>
          //     navigation.navigate('BookDetail', {
          //       book: item,
          //     })
          //   }
        >
          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: '#000',
                  fontWeight: 'bold',
                },
              ]}>
              {item.name}
            </Text>
            <Text>Kho: {item.kho}</Text>
            <Text>Khách hàng: {item.customer}</Text>
            <View style={styles.flexRow}>
              <View style={{marginRight: 10}}>
                <Text>Số lượng: {item.qty}</Text>
              </View>
              <View>
                <Text>Đơn vị tính: {item.dvt}</Text>
              </View>
            </View>
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
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
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
        <View style={styles.StartEnd}>
          <View style={[styles.flexRow, {width: '80%'}]}>
            <FontAwesome name="search" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập từ khóa tìm kiếm..."
              placeholderTextColor="#666666"
              style={[
                styles.textInputSearch,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              // onChangeText={(value) => setwarehouse(value)}
              // onChangeText={(val) => console.log(val)}
              // onEndEditing={(e) => console.log(e)}
            />
          </View>
          <TouchableOpacity
          //  onPress={() => setmodalVisibleCamera(true)}
          >
            <FontAwesome name="barcode" color={colors.text} size={20} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{marginBottom: 60}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View>{renderData()}</View>
        </ScrollView>
      </View>

      <View>
        <Scan_import
          toggleCloseModalCamera={toggleCloseModalCamera}
          toggleCodeBar={toggleCodeBar}
          visible={modalVisibleCamera}
        />
      </View>
    </View>
  );
}

export default Inventory;
const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    paddingBottom: 5,
  },

  textInputSearch: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  StartEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
