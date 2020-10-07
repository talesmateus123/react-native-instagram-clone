import React, { Component } from 'react'
import {
  View, Text, TextInput, StyleSheet,
  TouchableOpacity
} from 'react-native'

class Register extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        const options = {
            email: 'email@email.com', secure: true
        }
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="Nome"
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput 
                    placeholder="E-mail"
                    style={styles.input}
                    value={this.state.email}
                    keyboardType="email-address"
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput 
                    placeholder="Senha"
                    style={styles.input}
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity onPress={() => {}} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})

export default Register
