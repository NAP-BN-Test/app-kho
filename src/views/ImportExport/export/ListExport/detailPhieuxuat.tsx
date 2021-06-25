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
        <ScrollView style={{}}>
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
          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'red'}}>{chitietphieuxuat.Code}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Phiếu xuất:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>
                  {moment(chitietphieuxuat.NgayTaoPhieu).format('DD-MM-YYYY')}
                </Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Ngày tạo:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>
                  {moment(chitietphieuxuat.NgayXuat).format('DD-MM-YYYY')}
                </Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Ngày xuất:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>{chitietphieuxuat.Loai}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Loại:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>{chitietphieuxuat.KhoXuat}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Kho xuất:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>{chitietphieuxuat.KhoNhan}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Kho nhận:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>
                  {chitietphieuxuat.KhachHang}
                </Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Khách hàng::</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>
                  {chitietphieuxuat.NguoiNhan}
                </Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Người nhận:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>
                  {chitietphieuxuat.NguoiXuat}
                </Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Người xuất:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>
                  {chitietphieuxuat.TrongLuong}
                </Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Trọng lượng:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>{chitietphieuxuat.SoKhoi}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Số khối:</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <View style={{width: '60%'}}>
                <Text style={{color: 'black'}}>{chitietphieuxuat.GhiChu}</Text>
              </View>
              <View style={{width: '40%'}}>
                <Text style={stylesGlobal.text_title}>Ghi chú:</Text>
              </View>
            </View>
          </View>
        </ScrollView>

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
            Danh sách hàng hóa (Tên/SL/ĐVT/Ký gửi)
          </Text>
          <View>
            <ScrollView style={{marginBottom: 160}}>
              {chitietphieuxuat.ListHangHoa?.map((items: any, index: any) => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#f2f2f2',
                      paddingBottom: 10,
                    }}>
                    <Text>
                      <Text style={stylesGlobal.text_title}>{index + 1}</Text>.{' '}
                      <Text style={{color: 'black'}}>
                        {items.TenHang}/{items.SoLuong}/{items.DVTText}/
                        {items.FlagKyGui === true ? 'Có' : 'Không'}
                      </Text>
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
