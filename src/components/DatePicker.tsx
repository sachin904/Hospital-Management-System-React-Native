import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Modal, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker() {
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    if (Platform.OS === "android") setShow(false);

    if (selectedDate) {
      const d = selectedDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
      setDate(d);
    }
  };

  return (
    <View >
      {/* Input Box */}
      <TouchableOpacity onPress={() => setShow(true)}>
        <TextInput
          placeholder="Select Date"
          value={date}
          editable={false}
          style={{
            borderWidth: 1,
            borderColor: "#aaa",
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            backgroundColor: "#fff",
          }}
        />
      </TouchableOpacity>

      {/* Calendar Modal */}
      {show && (
        <DateTimePicker
          value={date ? new Date(date) : new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "calendar"} 
          onChange={handleChange}
        />
      )}
    </View>
  );
}
