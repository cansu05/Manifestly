import { DeleteButtonProps } from "@/types/type";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DeleteButton({
  id,
  setManifestList,
}: DeleteButtonProps) {
  function deleteManifestHandler(id: string): void {
    setManifestList((prevList) => prevList.filter((item) => item.id !== id));
  }
  return (
    <TouchableOpacity onPress={() => deleteManifestHandler(id)}>
      <Text style={styles.text}>🧹</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "WorkSans",
    maxWidth: "80%",
  },
});
