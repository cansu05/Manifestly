import { ManifestListProps } from "@/types/type";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DeleteButton from "./DeleteButton";

export default function ManifestList({
  data,
  setManifestList,
}: ManifestListProps) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        contentContainerStyle={{ gap: 12 }}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(itemData) => {
          return (
            <View style={styles.listItem}>
              <View style={styles.listItemTextWrapper}>
                <Text style={styles.listText}>🌸</Text>
                <Text style={styles.listText}>{itemData.item.text}</Text>
              </View>
              <DeleteButton
                id={itemData.item.id}
                setManifestList={setManifestList}
              />
            </View>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.listEmptyText}>My Glow-Up List Empty 💫</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#c59fbe90",
    width: "100%",
    flex: 2,
    padding: 30,
    borderRadius: 8,
    gap: 15,
  },
  listEmptyText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Delius",
  },
  listText: {
    color: "white",
    fontSize: 18,
    fontFamily: "WorkSans",
    maxWidth: "80%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  listItemTextWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
});
