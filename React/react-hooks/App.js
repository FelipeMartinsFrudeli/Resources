import React, { useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "setText":
      return { ...state, text: action.payload };
    case "toogleRedBox":
      return { ...state, showRedBox: action.payload };
    default:
      return state;
  }
};

const initialValue = {
  text: "",
  showRedBox: false,
};

const App = () => {
  // const [text, setText] = useState("")
  let typedText;

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <Text style={styles.title}>useReducer Example</Text>
      <View style={styles.container}>
        <Text style={styles.text}>{state.text}</Text>
        {state.showRedBox && <View style={styles.redBox} />}
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            // setText(text)
            typedText = text;
          }}
        />
        <Button
          title="Set text"
          onPress={() =>
            dispatch({ type: "setText", payload: typedText })
          }
        />
        <Button
          title={state.showRedBox ? "Hide Red Box" : "Show Red Box"}
          onPress={() =>
            dispatch({
              type: "toogleRedBox",
              payload: !state.showRedBox,
            })
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 70,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  redBox: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#e7e7e7",
    padding: 10,
    borderRadius: 10,
    fontSize: 25,
    marginVertical: 10,
    width: "80%",
  },
});

export default App;
