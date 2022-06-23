import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet, 
  Image, 
  TouchableOpacity,
  } from 'react-native';
  import Torch from 'react-native-torch';
  import RNShake from 'react-native-shake';

const App = ( )=>{
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => {setToggle(oldToggle => !oldToggle)}

  useEffect(() => {
   Torch.switchState(toggle);
  },[toggle]);

  useEffect (() => {
    /**
     * comando para 'chacoalhar' o celular e mudar o status da lanterna
     */
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle)
    });
    //essa função será chamada quando o componets for desmontado
    return () => subscription.remove();
    
    }, [])
  return (
    <View style={toggle?style.containerLight:style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>
      <Image style={style.lighting}
        source={
          toggle
          ? require('./assets/icons/lampada-de-oleo-white.png')
          : require('./assets/icons/lampada-de-oleo-black.png')
        }
        />
      <Image style={toggle ? style.dioOn : style.dioOff}
        source={toggle 
          ?require('./assets/icons/logo-dio-white.png') 
          :require('./assets/icons/logo-dio.png')
        }
        />
    </TouchableOpacity>
    </View>
    );    
};

export default App;

const style = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'black',
  alignItems:'center',
  justifyContent:'center',
},
containerLight:{
  flex:1,
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
},
lighting:{
  resizeMode:'contain',
  alignSelf:'center',
  width:160,
  height:160,
},

dioOn:{
  resizeMode:'contain',
  alignSelf:'center',
  tintColor: 'black',
  width:260,
  height:260,
},
dioOff:{
  resizeMode:'contain',
  alignSelf:'center',
  width:260,
  height:260,
},
});