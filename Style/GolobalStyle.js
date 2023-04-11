import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#acddde',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9
  },
  text: {
    color: '#000',
    fontSize: 19,
    marginVertical: 30
  },
  text_span: {
     fontSize: 40,
     fontWeight: '900'
    
  },
  pra: {
     marginVertical: 20,
     fontWeight: '900'
  },
  input: {
     padding: 10,
     textAlign: 'center',
    color: 'blue',
    fontSize: 20,
    borderColor: '#000',
    borderStyle: 'solid',
     borderWidth: 1,
     marginVertical: 10,
     borderRadius: 8,
   },
   btn: {
  padding : 10,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#68a0cf',
    borderRadius: 10,
      borderWidth: 1,
    borderColor: '#68a0cf'
  }
});
export { styles };

