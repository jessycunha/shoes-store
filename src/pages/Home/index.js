import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Shoes from '../../component/Shoes';

export default function Home() {

 const navigation = useNavigation();

 return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/banner.png')}
            style={styles.image}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>TÊNIS</Text>
            <Text style={[styles.text, { color: '#CECECF' } ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF' } ]}>CORRIDA</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line}/>

        <ScrollView>
          <Text style={styles.text}>LANÇAMENTOS</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/1.png')} cost="R$145,00">
              Nike Air Max
            </Shoes>
            <Shoes img={require('../../assets/2.png')} cost="R$290,00" onClick={() => navigation.navigate('Detail')}>
              Nike Air Jordan
            </Shoes>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/3.png')} cost="R$189,90">
             Adidas Super Star
            </Shoes>
            <Shoes img={require('../../assets/4.png')} cost="R$450,00">
              Adidas Runstatic
            </Shoes>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/5.png')} cost="R$325,00">
              Adidas Run
            </Shoes>
            <Shoes img={require('../../assets/6.png')} cost="R$230,00">
              Adidas Indoor
            </Shoes>
          </View>
        </ScrollView>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#fff'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2
  }
});