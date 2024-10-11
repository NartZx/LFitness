import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
   container:{flex:1,
              backgroundColor:'#fff',
              alignItems:'center',
              justifyContent:'center'},
   
   forminput:{borderColor:'red',
              borderWidth:1,
              borderRadius:10,
              fontSize:22,
              width:'100%',
              padding:10,
              margin:10},
   formbutton:{backgroundColor:'red',
               width:'80%',
               margin:10,
               padding:10,
               borderRadius:10,
               alignItems:'center',  },          
   subcontainer:{flexDirection:'row',
                 justifyContent:'space-between',
                 width:'80%'},

     subbutton:{padding:10,}


});

export default styles;
