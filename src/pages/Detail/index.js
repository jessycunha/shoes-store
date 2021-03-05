import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Air Jordan'
  })

  return (
    <ScrollView style={styles.container}>
        <Image
          source={require('../../assets/detail.png')}
          style={styles.image}
          resizeMode="cover"
        />

        <View>
          <View>
            <Text style={[styles.title, {fontSize: 24} ]}>R$290,00</Text>
          </View>
          
          <View opacity={0.4}>
            <Text style={[styles.title, {fontSize: 30} ]}>Nike Air Max</Text>
          </View>

          <View style={styles.dotContainer}>
            <Dot color="#2379F4"/>
            <Dot color="#FB6E53"/>
            <Dot color="#DDD"/>
            <Dot color="#000"/>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SizeButton bgColor="#17181A" color="#FFF">37</SizeButton>
              <SizeButton>38</SizeButton>
              <SizeButton>39</SizeButton>
              <SizeButton>42</SizeButton>
            </ScrollView>
          </View>

          <View style={styles.textContent}>
            <Text style={styles.textContent}>
              Nike Air Jordan
            </Text>
            <Text style={styles.textTitle}>
              O tênis Nike Air Jordan traz conforto, amortecimento e suporte atualizados, para garantir uma passada estável e anatômica. Esse tênis é confeccionado em material respirável e cabedal em couro sintético.
            </Text>
            <Text style={styles.textList}>
              - Categoria: Amortecimento
            </Text>
            <Text style={styles.textList}>
              - Material: Mesh
            </Text>
          </View>

          <View>
            <Button/>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingVertical: '2%'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight:25
  }
});