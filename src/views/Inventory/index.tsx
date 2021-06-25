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
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../redux/actions/index.action';
import {TONKHO} from '../../types';
import {RootState} from '../../redux/reducers/index.reducer';
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
function Inventory() {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const tonkho: Array<TONKHO> = useSelector((state: RootState) => state.tonkho);
  console.log('tồn kho', tonkho);

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

  const {colors} = useTheme();
  const [modalVisibleCamera, setmodalVisibleCamera] = useState(false);
  const [valueSearch, setvalueSearch] = useState('');
  const toggleCloseModalCamera: any = () => {
    setmodalVisibleCamera(false);
  };

  const toggleCodeBar: any = (code: any) => {
    // setmodalVisibleCamera(false);
    setvalueSearch(code.data);
    dispatch(Action.act_get_tonkhotheodonvi({tukhoa: code.data}));
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
              {item.TenHang}
            </Text>
            <Text>
              <Text style={stylesGlobal.text_title}>Kho</Text>:{' '}
              {item.TenKhoText}
            </Text>
            {item.IDKhachHang === null ? null : (
              <Text>
                <Text style={stylesGlobal.text_title}>Khách hàng</Text>:{' '}
                {item.KhachHangText}
              </Text>
            )}
            <View style={styles.flexRow}>
              <View style={{marginRight: 10}}>
                <Text>
                  <Text style={stylesGlobal.text_title}>Sl</Text>:{' '}
                  {item.SoLuongTon}
                </Text>
              </View>
              <View>
                <Text>
                  <Text style={stylesGlobal.text_title}>ĐVT</Text>:{' '}
                  {item.DVTText}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={tonkho}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.ID}`}
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
              value={valueSearch}
              autoCapitalize="none"
              // onChangeText={(value) => setwarehouse(value)}
              onChangeText={(val) => {
                setvalueSearch(val);
                dispatch(Action.act_get_tonkhotheodonvi({tukhoa: val}));
              }}
              // onEndEditing={(e) => console.log(e)}
            />
          </View>
          <TouchableOpacity onPress={() => setmodalVisibleCamera(true)}>
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
