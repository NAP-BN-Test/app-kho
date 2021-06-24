import moment from 'moment';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import stylesGlobal from '../../../../css/cssGlobal.css';
import {RootState} from '../../../../redux/reducers/index.reducer';
import {CHITIETPHIEUNHAP, CHITIETPHIEUXUAT} from '../../../../types';
interface detailProps {
  // VisibleModal: any;
  toggleCloseModalDetail: any;
}
function DetailPhieunhap(props: detailProps) {
  const chitietphieunhap: CHITIETPHIEUNHAP = useSelector(
    (state: RootState) => state.detailphieunhap,
  );
  console.log('chitietphieunhap', chitietphieunhap);

  return (
    <View style={styles.centeredView}>
      <Header
        backgroundColor={'#009387'}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              props.toggleCloseModalDetail();
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
          text: 'Chi tiết phiếu xuất',
          style: {color: '#fff', fontSize: 18},
        }}
        rightComponent={
          //   <TouchableOpacity>
          //     <Icon
          //       //   containerStyle={{paddingRight: 16}}
          //       name="save"
          //       size={30}
          //       color="white"
          //     />
          //   </TouchableOpacity>
          <></>
        }
      />
      <View style={styles.modalView}>
        <View style={{marginBottom: 20}}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: '#000',
                fontWeight: 'bold',
                marginBottom: 20,
              },
            ]}>
            Thông tin chung
          </Text>
          <Text>
            Phiếu xuất:{' '}
            <Text style={{color: 'red'}}>{chitietphieunhap.Code}</Text>
          </Text>
          <Text>
            Ngày tạo:{' '}
            {moment(chitietphieunhap.NgayTaoPhieu).format('DD-MM-YYYY')}
          </Text>
          <Text>
            Ngày xuất:{moment(chitietphieunhap.NgayXuat).format('DD-MM-YYYY')}
          </Text>
          <Text>Loại: {chitietphieunhap.Loai}</Text>
          <Text>Kho xuất: {chitietphieunhap.KhoXuat}</Text>
          <Text>Kho nhận: {chitietphieunhap.KhoNhan}</Text>
          <Text>Khách hàng: {chitietphieunhap.KhachHang}</Text>
          <Text>Người nhận: {chitietphieunhap.NguoiNhan}</Text>
          <Text>Người xuất: {chitietphieunhap.NguoiXuat}</Text>
          <Text>Trọng lượng: {chitietphieunhap.TrongLuong}</Text>
          <Text>Số khối: {chitietphieunhap.SoKhoi}</Text>
          <Text>Ghi chú: {chitietphieunhap.GhiChu}</Text>
        </View>

        <View>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: '#000',
                fontWeight: 'bold',
                marginBottom: 20,
              },
            ]}>
            Danh sách hàng hóa
          </Text>
          <View>
            <ScrollView style={{marginBottom: 160}}>
              {chitietphieunhap.ListHangHoa?.map((items: any) => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#f2f2f2',
                      paddingBottom: 10,
                    }}>
                    <Text>
                      Tên hàng:{' '}
                      <Text style={{color: 'red'}}>{items.TenHang}</Text>
                    </Text>
                    <Text>Số lượng: {items.SoLuong}</Text>
                    {/* <View style={styles.flexRow}>
                      <View style={{marginRight: 10}}>
                        <Text>Loại tem: {items.SoLuongTem}</Text>
                      </View>
                      <View>
                        <Text>Số lượng tem: {items.SoLuongTem}</Text>
                      </View>
                    </View> */}
                    <Text>Loại tem: {items.LoaiTemText}</Text>
                    <Text>Số lượng tem: {items.SoLuongTem}</Text>
                    <Text>Đơn giá: {items.DonGia}</Text>
                    <Text>Đơn vị tính: {items.DVTText}</Text>
                    <Text>Kho xuất: {items.KhoXuat}</Text>
                    <Text>Khách hàng: {items.KhachHangText}</Text>
                    <Text>
                      Ký gửi: {items.FlagKyGui === true ? 'Có' : 'Không'}
                    </Text>
                    <Text>Ghi chú: {items.GhiChu}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailPhieunhap;
const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  leftComponent: {},
  heardComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  inputEnd: {
    marginTop: 10,
  },

  codebar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
