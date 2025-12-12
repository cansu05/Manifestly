import AddButton from "@/components/AddButton";
import Input from "@/components/Input";
import ManifestList from "@/components/ManifestItem";
import { ManifestItem } from "@/types/type";
import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [enteredManifestText, setEnteredManifestText] = useState("");
  const [manifestList, setManifestList] = useState<ManifestItem[]>([]);

  const [fontsLoaded] = useFonts({
    Pacifico: require("../assets/Pacifico/Pacifico-Regular.ttf"),
    Delius: require("../assets/Delius_Swash_Caps/DeliusSwashCaps-Regular.ttf"),
    WorkSans: require("../assets/Work_Sans/WorkSans-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function addManifestHandler(): void {
    if (!enteredManifestText.trim()) return;

    setManifestList((prevList) => [
      ...prevList,
      { id: Math.random().toString(), text: enteredManifestText },
    ]);
    setEnteredManifestText("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>2026 Vision & Manifest List ✨💕</Text>
      <View style={styles.inputArea}>
        <Input
          setEnteredManifestText={setEnteredManifestText}
          enteredManifestText={enteredManifestText}
        />
        <AddButton addManifestHandler={addManifestHandler} />
      </View>
      <ManifestList data={manifestList} setManifestList={setManifestList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 30,
    backgroundColor: "#edd9be39",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  inputArea: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    flex: 1,
  },
  title: {
    color: "#3d3d3c",
    fontSize: 22,
    fontFamily: "Pacifico",
  },
});
