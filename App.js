/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';

import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {

    const comments = [
      {
        nickname: 'Joana Elena Silva',
        comment: 'Excelente foto'
      },
      {
        nickname: 'Rafael Gustavo Pereira',
        comment: 'Muito ruim! Faço melhor...'
      }
    ]

    return (
      <>
        <SafeAreaView style={{flex: 1}}>
          <Header />
          <Post 
            image={require('./assets/imgs/fence.jpg')}
            comments={comments}
          />

        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({

})
