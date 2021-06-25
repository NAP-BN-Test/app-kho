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
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../../../redux/actions/index.action';
import stylesGlobal from '../../../../css/cssGlobal.css';
import Scan_import from '../../import/scan_import';
import moment from 'moment';
import {RootState} from '../../../../redux/reducers/index.reducer';
import DateRangePicker, {
  IDateRange,
} from '../../../../component/Date/RangeDate';
import {Header} from 'react-native-elements';
import {addDays, differenceInDays, format, addYears} from 'date-fns';
import {PHIEUNHAP} from '../../../../types';
import DetailPhieunhap from './detailphieunhap';
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

interface modalList {
  VisibleModalList: any;
}
function Danhsachphieunhap(props: modalList) {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const phieunhap: Array<PHIEUNHAP> = useSelector(
    (state: RootState) => state.phieunhap,
  );

  console.log('phiếu nhập', phieunhap);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      setRange({
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
      });
    });
  }, []);
  useEffect(() => {
    const getlistphieunhap = async () => {
      dispatch(
        Action.act_get_listPhieunhap({
          to: moment().format('YYYY-MM-DD'),
          from: moment().subtract(1, 'months').format('YYYY-MM-DD'),
          isadmin: true,
        }),
      );
    };
    getlistphieunhap();
  }, [refreshing]);

  const {colors} = useTheme();
  const [modalVisibleCamera, setmodalVisibleCamera] = useState(false);
  const [modalVisibleDate, setmodalVisibleDate] = useState(false);
  const [modaldetail, setmodaldetail] = useState(false);
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

  const toggleCloseModalDetail: any = () => {
    setmodaldetail(false);
  };

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
          onPress={() => {
            // console.log('item',item);

            dispatch(Action.act_getDetailPhieunhap(item.ID));
            setmodaldetail(true);
          }}>
          <View
            style={[
              {flex: 1, flexDirection: 'column', marginLeft: 10, paddingBottom: 10},
              stylesGlobal.action,
            ]}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
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
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Phiếu nhập:</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text>{item.TenKhoText}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Kho:</Text>
              </View>
            </View>
            {item.IDKhachHang === null ? null : (
              <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <View style={{width: '60%'}}>
                  <Text>{item.KhachHangText}</Text>
                </View>
                <View style={{width: '40%'}}>
                  <Text style={stylesGlobal.text_title}>Khách hàng:</Text>
                </View>
              </View>
            )}

            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text>
                {item.NgayTaoPhieu? moment(item.NgayTaoPhieu).format('DD-MM-YYYY'):null}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Ngày tạo:</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text>{item.Loai}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Loại:</Text>
              </View>
            </View>

            {/* <Text>Ghi chú: {item.ghichu}</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={phieunhap}
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
      <Header
        backgroundColor={'#009387'}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              props.VisibleModalList(false);
            }}>
            <Icon
              //   containerStyle={{paddingRight: 16}}
              name="arrow-back"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'Danh sách phiếu nhập',
          style: {color: '#fff', fontSize: 18},
        }}
        rightComponent={
          <></>
          // <TouchableOpacity onPress={() => submit()}
          // >
          //   <Icon
          //     //   containerStyle={{paddingRight: 16}}
          //     name="save"
          //     size={30}
          //     color="white"
          //   />
          // </TouchableOpacity>
        }
      />
      {/* <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Danh sách phiếu xuất</Text>
      </View> */}

      <View style={styles.footer}>
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
                  Action.act_get_listPhieunhap({
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
            animationType="fade"
            transparent={true}
            visible={modalVisibleDate}
            // onRequestClose={setmodalVisibleDate(false)}
          >
            <View style={styles.modalView}>
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
                  // setmodalVisibleDate(false);
                  dispatch(
                    Action.act_get_listPhieunhap({
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
              <View>
                <Icon
                  name="close"
                  size={30}
                  color="black"
                  onPress={() => setmodalVisibleDate(false)}
                />
              </View>
            </View>
          </Modal>
        </View>
        <ScrollView
          style={{marginBottom: 30}}
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

      <View>
        <Modal animationType="slide" transparent={true} visible={modaldetail}>
          <DetailPhieunhap
            // VisibleModal={modalVisibleCamera}
            // data={}
            toggleCloseModalDetail={toggleCloseModalDetail}
          />
        </Modal>
      </View>
    </View>
  );
}

export default Danhsachphieunhap;
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

  footer: {
    flex: 5,
    backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  modalView: {
    backgroundColor: 'white',
    padding: 20,
    // borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '100%',
    width: '100%',
  },
});
