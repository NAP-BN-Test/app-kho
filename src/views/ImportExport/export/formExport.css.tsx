import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    text: {
      fontWeight: 'bold',
      width: '30%',
      fontSize: 13,
      textAlign: 'left',
    },
    text_selected: {
      width: '70%',
      // flexDirection: 'row',
    },
  
    text_input: {
      width: '70%',
      fontSize: 15,
      paddingRight: 20,
      textAlign: 'right',
    },
  
    searchSection: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingRight: 10,
    },
  
    line_text: {
      // ...ROW_SPACE_BETWEEN,
      alignItems: 'center',
      lineHeight: 40,
      height: 40,
    },
  
    input: {
      flex: 1,
      fontSize: 15,
      paddingTop: 10,
      // paddingRight: 20,
      paddingBottom: 10,
      paddingLeft: 20,
      textAlign: 'left',
      backgroundColor: '#fff',
      color: '#424242',
    },
  
    textInput: {
      flex: 1,
      marginTop: -12,
      paddingLeft: 15,
      color: '#05375a',
    },
  
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
  
    IconDate: {},
    button: {
      alignItems: 'center',
      marginTop: 10,
      borderRadius: 20,
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    textSign: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    inputEnd: {
      marginTop: 10,
    },
  
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

    footer: {
      flex: 5,
      backgroundColor: '#fff',
      // borderTopLeftRadius: 30,
      // borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
  });
  