import { InputProps } from "@/types/type";
import { StyleSheet, TextInput } from "react-native";

export default function Input({
  setEnteredManifestText,
  enteredManifestText,
}: InputProps) {
  function manifestInputHandler(text: string): void {
    setEnteredManifestText(text);
  }
  return (
    <TextInput
      value={enteredManifestText}
      style={styles.input}
      onChangeText={manifestInputHandler}
      placeholder="Write your dreamy manifestation 💗"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    color: "#3d3d3c",
    fontSize: 16,
    fontFamily: "Delius",
  },
});
