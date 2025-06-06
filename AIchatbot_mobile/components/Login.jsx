import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>EduLawAI</Text>
      <Text style={styles.regularText}>Welcome to EduLawAI!</Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
        placeholder={"Email"}
        clearButtonMode={"always"}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        clearButtonMode={"always"}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <Text style={styles.normalT}>
        Don't have an account? <Text style={{ color: "#78bcc4" }}>Sign Up</Text>{" "}
      </Text>
      <TouchableOpacity
        style={styles.buttonGoogle}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.buttonTextGoogle}>
          Login with Google{"   "}
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
            }}
            style={{ width: 15, height: 15 }}
          />
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    padding: 20,
    color: "#000",
    textAlign: "center",
    paddingTop: 60,
  },
  regularText: {
    fontSize: 30,
    padding: 20,
    marginVertical: 8,
    color: "#000",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#F7444E",
    padding: 10,
    borderRadius: 20,
    margin: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  orText: {
    fontSize: 20,
    padding: 10,
    marginVertical: 6,
    color: "#000",
    textAlign: "center",
  },
  buttonGoogle: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 20,
    margin: 12,
    alignItems: "center",
    display: "flex",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonTextGoogle: {
    color: "#000",
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  normalT: {
    fontSize: 16,
    padding: 10,
    marginVertical: 6,
    color: "#000",
    textAlign: "center",
  },
});
export default Login;
