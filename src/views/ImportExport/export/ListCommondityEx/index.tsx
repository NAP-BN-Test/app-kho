import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stylesGlobal from '../../../../css/cssGlobal.css';
// import Scan_import from '../scan_import';
import {DataTable} from 'react-native-paper';
// import FormAddCommodity from './formAddCommodity';
// import FormEditCommodity from './formEditCommodity';
import {SANPHAM} from '../../../../types';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reducers/index.reducer';
import {ScrollView} from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';
import FormAddCommodityEx from './formAddCommodityEx';
import FormEditCommodityEx from './formEditCommodityEx';
interface CommodifyProps {
  VisibleModalList: any;
  toggleCommodity: any;
  arrayCommodity: any;
}
function ListCommodityEx(props: CommodifyProps) {
  const dmsp: Array<SANPHAM> = useSelector((state: RootState) => state.dmsp);
  const [modalVisibleCamera, setmodalVisibleCamera] = useState(false);
  const [modalAddCommodity, setmodalAddCommodity] = useState(false);
  const [modalEditCommodity, setmodalEditCommodity] = useState(false);
  const [dataEdit, setdataEdit] = useState();
  const [codebar, setcodebar] = useState(String);
  const [arrayCommodity, setarrayCommodity] = useState(
    props.arrayCommodity as any,
  );
  console.log(arrayCommodity);
  useEffect(() => {
    setarrayCommodity(props.arrayCommodity);
  }, [props.arrayCommodity]);

  const {colors} = useTheme();

  const toggleCloseModalCamera: any = () => {
    setmodalVisibleCamera(false);
  };

  const toggleCodeBar: any = (code: any) => {
    // setmodalVisibleCamera(false);
    console.log(code.data);
    setcodebar(code.data);
  };

  const toggleAddCommodity: any = (value: any) => {
    console.log(value);

    let arrayOld = arrayCommodity;
    arrayOld.push({...value, key: arrayCommodity.length + 1});

    setarrayCommodity(arrayOld);

    props.toggleCommodity(arrayOld);
  };

  const toggleEditCommodity: any = (value: any) => {
    console.log(value);
    let arrayOld = arrayCommodity;
    arrayOld.splice(
      arrayOld.findIndex((values: any) => values.key === value.key),
      1,
    );
    arrayOld.push({...value});
    setarrayCommodity(arrayOld);
    props.toggleCommodity(arrayOld);
  };

  function func_VisibleModalFormAdd(e: any) {
    setmodalAddCommodity(e);
  }

  function func_VisibleModalFormEdit(e: any) {
    setmodalEditCommodity(e);
  }

  function func_delete(key: any) {
    let arrOld = arrayCommodity;
    arrOld.splice(
      arrOld.findIndex((values: any) => values.key === key),
      1,
    );
    setarrayCommodity(arrOld);
    props.toggleCommodity(arrOld);
  }

  function renderData() {
    const renderItem = ({item}: any, ) => (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row', marginBottom: 5}}
          onPress={() => {
            setdataEdit(item);
            setmodalEditCommodity(true);
          }}
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
               {item.sp.NameVI}
            </Text>
            <Text>Đơn vị tính: {item.dvt.NameVI}</Text>
            <View style={styles.flexRow}>
              <View style={{marginRight: 10}}>
                <Text>Số lượng {item.sl}</Text>
              </View>
              {/* <View>
                <Text>Đơn vị tính: {item.dvt}</Text>
              </View> */}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={arrayCommodity}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.key}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
  return (
    <View style={styles.centeredView}>
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
          text: 'Danh sách',
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
        <View>
          <View style={styles.lableSquare}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}></Text>
            <View>
              <TouchableOpacity onPress={() => setmodalAddCommodity(true)}>
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

        

        <ScrollView style={{marginBottom: 60}}>
          <View>{renderData()}</View>
        </ScrollView>

        {/* <View>
          <Scan_import
            toggleCloseModalCamera={toggleCloseModalCamera}
            toggleCodeBar={toggleCodeBar}
            visible={modalVisibleCamera}
          />
        </View> */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalAddCommodity}>
          <FormAddCommodityEx
            VisibleModal={func_VisibleModalFormAdd}
            toggleAddCommodity={toggleAddCommodity}
            listsp={dmsp}
          />
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEditCommodity}>
          <FormEditCommodityEx
            VisibleModal={func_VisibleModalFormEdit}
            toggleEditCommodity={toggleEditCommodity}
            data={dataEdit}
            func_delete={func_delete}
            listsp={dmsp}
          />
        </Modal>
      </View>
    </View>
  );
}

export default ListCommodityEx;
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
