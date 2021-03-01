import React, { Component } from "react";
import { View, Text } from 'react-native';

import { TextInput } from 'react-native';

export default class EntrarScreen extends Component {

    render() {
        return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Universal React with Expo</Text>
              <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
            </View>
          );
    }
}