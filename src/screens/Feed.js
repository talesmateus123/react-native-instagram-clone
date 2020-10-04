import React, { Component } from 'react';
import {
  View, FlatList, StyleSheet,
} from 'react-native';
import Post from '../components/Post'
import Header from '../components/Header'

class Feed extends Component {

    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Rafael Pereira Filho',
                email: 'rafael.filho@email.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'Joana Elena Silva',
                        comment: 'Excelente foto'
                    },
                    {
                        nickname: 'Rafael Gustavo Pereira',
                        comment: 'Muito ruim! Faço melhor...'
                    }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Joana da Silva',
                email: 'joana.silva@email.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'Rafael Pereira Filho',
                        comment: 'Excelente foto'
                    },
                    {
                        nickname: 'Rafael Gustavo Pereira',
                        comment: 'Muito ruim! Faço melhor...'
                    }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Joana da Silva',
                email: 'joana.silva@email.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: []
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed
