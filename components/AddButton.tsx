import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AddButton({
  addManifestHandler,
}: {
  addManifestHandler: () => void;
}) {
  return (
    <TouchableOpacity style={styles.addButton} onPress={addManifestHandler}>
      <Text style={styles.buttonText}>Make it real ✨</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#f283ae",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "WorkSans",
  },
});
