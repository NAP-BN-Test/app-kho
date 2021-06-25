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
import {CHITIETPHIEUXUAT} from '../../../../types';
interface detailProps {
  // VisibleModal: any;
  toggleCloseModalDetail: any;
}
function DetailPhieuxuat(props: detailProps) {
  const chitietphieuxuat: CHITIETPHIEUXUAT = useSelector(
    (state: RootState) => state.detailphieuxuat,
  );
  console.log('chitietphieuxuat', chitietphieuxuat);

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
            <Text style={stylesGlobal.text_title}>Phiếu xuất</Text>:{' '}
            <Text style={{color: 'red'}}>{chitietphieuxuat.Code}</Text>
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Ngày tạo</Text>:{' '}
            {moment(chitietphieuxuat.NgayTaoPhieu).format('DD-MM-YYYY')}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Ngày xuất</Text>:
            {moment(chitietphieuxuat.NgayXuat).format('DD-MM-YYYY')}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Loại</Text>:{' '}
            {chitietphieuxuat.Loai}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Kho xuất</Text>:{' '}
            {chitietphieuxuat.KhoXuat}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Kho nhận</Text>:{' '}
            {chitietphieuxuat.KhoNhan}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Khách hàng</Text>:{' '}
            {chitietphieuxuat.KhachHang}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Người nhận</Text>:{' '}
            {chitietphieuxuat.NguoiNhan}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Người xuất</Text>:{' '}
            {chitietphieuxuat.NguoiXuat}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Trọng lượng</Text>:{' '}
            {chitietphieuxuat.TrongLuong}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Số khối</Text>:{' '}
            {chitietphieuxuat.SoKhoi}
          </Text>
          <Text>
            <Text style={stylesGlobal.text_title}>Ghi chú</Text>:{' '}
            {chitietphieuxuat.GhiChu}
          </Text>
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
              {chitietphieuxuat.ListHangHoa?.map((items: any) => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#f2f2f2',
                      paddingBottom: 10,
                    }}>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Tên hàng</Text>:{' '}
                      <Text style={{color: 'red'}}>{items.TenHang}</Text>
                    </Text>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Số lượng</Text>:{' '}
                      {items.SoLuong}
                    </Text>
                    {/* <View style={styles.flexRow}>
                      <View style={{marginRight: 10}}>
                        <Text>Loại tem: {items.SoLuongTem}</Text>
                      </View>
                      <View>
                        <Text>Số lượng tem: {items.SoLuongTem}</Text>
                      </View>
                    </View> */}
                    <Text>
                      <Text style={stylesGlobal.text_title}>Loại tem</Text>:{' '}
                      {items.LoaiTemText}
                    </Text>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Số lượng tem</Text>:{' '}
                      {items.SoLuongTem}
                    </Text>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Đơn giá</Text>:{' '}
                      {items.DonGia}
                    </Text>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Đơn vị tính</Text>:{' '}
                      {items.DVTText}
                    </Text>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Kho xuất</Text>:{' '}
                      {items.KhoXuat}
                    </Text>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Khách hàng</Text>:{' '}
                      {items.KhachHangText}
                    </Text>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Ký gửi</Text>:{' '}
                      {items.FlagKyGui === true ? 'Có' : 'Không'}
                    </Text>
                    <Text>
                      <Text style={stylesGlobal.text_title}>Ghi chú</Text>:{' '}
                      {items.GhiChu}
                    </Text>
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

export default DetailPhieuxuat;
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
