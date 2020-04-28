import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    SIGN UP
                </Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <TextInput placeholder=' confirm Password' />
                <View style={{margin:7}} />
                <Button 
                          onPress={this.props.onLoginPress}
                          title="Signup"
                      />
                  </ScrollView>
            )
    }
}