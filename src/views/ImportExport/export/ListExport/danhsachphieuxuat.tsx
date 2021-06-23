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
  Modal,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../../../redux/actions/index.action';
import stylesGlobal from '../../../../css/cssGlobal.css';
import Scan_import from '../../import/scan_import';
import moment from 'moment';
import {RootState} from '../../../../redux/reducers/index.reducer';
import {PHIEUXUAT} from '../../../../types';
import DateRangePicker, {
  IDateRange,
} from '../../../../component/Date/RangeDate';
import {addDays, differenceInDays, format, addYears} from 'date-fns';
// import {DatePickerModal} from 'react-native-paper-dates';
// import DateRangePicker from "react-native-daterange-picker";
// import Calendar from 'react-native-calendar-range-picker';
// import DatepickerRange from 'react-native-range-datepicker';
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
function danhsachphieuxuat() {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const phieuxuat: Array<PHIEUXUAT> = useSelector(
    (state: RootState) => state.phieuxuat,
  );

  console.log(phieuxuat);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    const getlistphieuxuat = async () => {
      dispatch(
        Action.act_get_listPhieuxuat({
          to: moment().format('YYYY-MM-DD'),
          from: moment().subtract(1, 'months').format('YYYY-MM-DD'),
          isadmin: true,
        }),
      );
    };
    getlistphieuxuat();
  }, [refreshing]);

  const {colors} = useTheme();
  const [modalVisibleCamera, setmodalVisibleCamera] = useState(false);
  const [modalVisibleDate, setmodalVisibleDate] = useState(false);
  const [valueSearch, setvalueSearch] = useState('');
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
  });

  //   const [range, setRange] = React.useState<{
  //     startDate: Date | undefined;
  //     endDate: Date | undefined;
  //   }>({startDate: undefined, endDate: undefined});

  console.log(range);

  const toggleCloseModalCamera: any = () => {
    setmodalVisibleCamera(false);
  };

  const toggleCodeBar: any = (code: any) => {
    // setmodalVisibleCamera(false);
    setvalueSearch(code.data);
    // dispatch(Action.act_get_tonkhotheodonvi({tukhoa: code.data}));
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
              {item.Code}
            </Text>
            <Text>Kho: {item.TenKhoText}</Text>
            {item.IDKhachHang === null ? null : (
              <Text>Khách hàng: {item.KhachHangText}</Text>
            )}

            <View style={styles.flexRow}>
              <View style={{marginRight: 10}}>
                <Text>
                  Ngày tạo: {moment(item.NgayTaoPhieu).format('YYYY-MM-DD')}
                </Text>
              </View>
              <View>
                <Text>Loại: {item.Loai}</Text>
              </View>
            </View>

            <Text>Ghi chú: {item.ghichu}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={phieuxuat}
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

  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Danh sách phiếu xuất</Text>
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
                dispatch(
                  Action.act_get_listPhieuxuat({
                    to: range.endDate,
                    from: range.startDate,
                    isadmin: true,
                    tukhoa: val,
                  }),
                );
              }}
              // onEndEditing={(e) => console.log(e)}
            />
          </View>
          <TouchableOpacity onPress={() => setmodalVisibleDate(true)}>
            <FontAwesome name="calendar" color={colors.text} size={20} />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleDate}>
            <DateRangePicker
              initialRange={{from: range.startDate, to: range.endDate}}
              minDate={addYears(new Date(), -1)}
              maxDate={addYears(new Date(), 1)}
              onFromOnlySelected={(from: any) => {
                // console.warn(from);
                console.log(from);
              }}
              onFullRangeSelected={(range: IDateRange) => {
                // console.warn(range);
                setmodalVisibleDate(false);
                dispatch(
                  Action.act_get_listPhieuxuat({
                    to: range.to,
                    from: range.from,
                    isadmin: true,
                  }),
                );
                setRange({
                  startDate: range.from,
                  endDate: range.to,
                });
              }}
              firstDay={1} //Sunday is 0, Monday is 1...
              width={'100%'} // style.width -> number | string
              color={'#00ff00'}
              textColor={'#000000'}
            />
          </Modal>
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

export default danhsachphieuxuat;
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
