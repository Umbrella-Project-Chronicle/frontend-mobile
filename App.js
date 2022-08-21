import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Press me" disabled onPress={() => Alert.alert("Cannot press this one")} />
      <Text>Hello world! Welcome to Chronicle</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
