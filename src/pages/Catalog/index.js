import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: "#2c3e50",
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontStyle:'italic',
    color: '#f5f5f5',
    fontFamily:'monospace',
  },
});

export default function App() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Hello, R0drigogo</Text>
        </View>
      </>
    );
  }


