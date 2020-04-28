import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class Secured extends Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
            <Text 
            style={{fontSize: 27}}>
            LOGIN
        </Text>
        <TextInput placeholder='Username' />
        <TextInput placeholder='Password' />
                <View style={{margin:20}} />
                <Button
                            onPress={this.props.onLogoutPress}
                            title="Login"
                        />
                </ScrollView>
                )
    }
}