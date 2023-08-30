import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import RFIDTagComponent from "../components/Tag";
import RFIDTag from "../utils/Tag.class";

export function ManageContainer() {
  const tag1 = new RFIDTag("1", "Tag 1");
  return (
    <ScrollView style={styles.container}>
      {/* Top Row: 3 In-line Buttons */}
      <View style={styles.buttonRow}>
        <View style={styles.columnThird}>
          <TouchableOpacity style={styles.smButton}>
            <Text style={styles.darkButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnThird}>
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.darkButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnThird}>
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.darkButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Mid Container: 30% Height */}
      <View style={styles.midContainer}>{/* Container Content */}</View>

      {/* Bottom Rows: 3 Rows with 2, 2, and 4 Columns */}
      <View style={styles.bottomRow}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.darkButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.darkButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.darkButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.darkButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomButtonRow}>
        <View style={styles.column}>{/* Column Content */}</View>
        <View style={styles.column}>{/* Column Content */}</View>
        <View style={styles.column}>{/* Column Content */}</View>
        <View style={styles.column}>{/* Column Content */}</View>
      </View>
      <View style={{ flex: 1, borderWidth: "1px", borderColor: "black" }}>
        {/* Simple background color */}
        
        {tag1.render()}
        {/* Space layout structure */}
        <View
          style={{ margin: 16, borderWidth: "1px", borderColor: "black" }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333", // Dark Background Color
    padding: 20,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  darkButton: {
    backgroundColor: "#555", // Dark Button Background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "auto",
  },
  smButton: {
    backgroundColor: "#555", // Dark Button Background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
  mdButton: {
    backgroundColor: "#555", // Dark Button Background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "4rem",
    width: "auto",
  },
  lgButton: {
    backgroundColor: "#555", // Dark Button Background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "6rem",
    width: "auto",
  },
  darkButtonText: {
    color: "#fff", // Light Text Color
    fontSize: 18,
  },
  // Pressed State
  darkButtonPressed: {
    backgroundColor: "#F5F5F5", // Off-White Background on Press
  },
  darkButtonTextPressed: {
    color: "#222", // Dark Text Color on Press
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  midContainer: {
    height: "30%",
    backgroundColor: "#444", // Darker Container Color
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    height: "6rem",
  },
  bottomButtonRow: {
    flexDirection: "row",
    justifyContent: "space-e",
    marginBottom: 20,
    height: "4rem",
  },
  column: {
    flex: 0.48,
    backgroundColor: "#222",
    borderRadius: 8,
  },
  columnThird: {
    flex: 0.3,
    backgroundColor: "#222",
    borderRadius: 8,
  },
  columnFourth: {
    flex: 0.3,
    backgroundColor: "#222",
    borderRadius: 8,
  },
});
