import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, ScrollView, Text, TextInput, View } from 'react-native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';
import Cidades from '../../Cidades.json'
import { useState } from 'react';

export default function Home() {
  const[searchWord, setSearchWord] = useState('')
  
  return(
    <View
      style={estilo.all}>
        
        <View style={estilo.inform}>

          <View style={estilo.informLeft}>
            <View style={estilo.location}>
              <Icon
                name='place'
                color='#7ED957'
                size={35}
              />
              <Text 
                style={estilo.cidade}>
                BEBEDOURO
              </Text>
            </View>
          </View>

          <View style={estilo.informRight}>
            <Icon
              name='person'
              color='#7ED957'
              size={35}
              style={estilo.account}
            />
          </View>

        </View>

        <View style={estilo.body}>

          <View style={estilo.regiao}>
            <View style={estilo.searchIcon}>
              <TextInput 
                placeholder='Pesquisar...'
                onChangeText={setSearchWord}
                style={estilo.search}>
              </TextInput>
            </View>
            <View style={estilo.searchiconTop}>

              <Text style={estilo.region}>Cinemas na Região</Text>

              <ScrollView
                style={estilo.cinemas}>
                {Cidades.filter((val)=>{
                  if(searchWord == ""){
                    return val
                  }else if(val.Cidades.toLowerCase().includes(searchWord.toLowerCase())){
                    return val
                  }
                }).map((item, index)=>(
                  <Text key={index}>{item.Cidades}</Text>
                ))}
              </ScrollView>

            </View>
          </View>

        </View>

        <View style={estilo.nav}>

        </View>

    </View>
  );
}''