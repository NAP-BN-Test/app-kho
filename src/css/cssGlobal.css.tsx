import {StyleSheet} from 'react-native';

const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 14,
  },
  text_title: {
    color: '#009387',
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 15,
    color: '#05375a',
  },

  actionSelect: {
    // flexDirection: 'row',
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
  },

  action: {
    // flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
  },

  // text_label: {
  //   color: '#05375a',
  //   fontSize: 18,
  // },
});

export default stylesGlobal;
