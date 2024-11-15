import { Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import InputTemperature from "../components/InputTemperature";
import TemperatureDisplay from "../components/TemperatureDisplay";
import { getOppositUnit, convertTempretureTo, isIceTemperature } from "@/services/temperature-services";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "../constants/Colors";
import ButtonConvert from "@/components/ButtonConvert";
import hotBackgorund from "../assets/images/1.png";
import coldBackgorund from "../assets/images/2.png";

export default function Index() {
  const [inputValue, setInputValue] = useState<string>(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState<string>(DEFAULT_UNIT);
  const oppositeUnit = getOppositUnit(currentUnit);

  // Initial background state is set to hot
  const [currentBackground, setCurrentBackground] = useState(hotBackgorund);

  useEffect(() => {
    // Check if the input value is valid, if not, don't change background
    if (isNaN(parseFloat(inputValue))) return;

    // Check if the temperature indicates cold and set background accordingly
    const isColdBackground = isIceTemperature(inputValue, currentUnit);
    setCurrentBackground(isColdBackground ? coldBackgorund : hotBackgorund);
  }, [inputValue, currentUnit]);  // Re-run effect when inputValue or currentUnit changes

  return (
    <ImageBackground source={currentBackground} style={styles.container}>
      <View style={styles.workspace}>
        <View>
          <TemperatureDisplay value={convertTempretureTo(oppositeUnit, inputValue)} unit={oppositeUnit} />
        </View>
        <View>
          <InputTemperature onChangeText={setInputValue} value={inputValue} unit={currentUnit} />
        </View>
        <View>
          <ButtonConvert onPress={() => setCurrentUnit(oppositeUnit)} unit={currentUnit} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  workspace: {
    width: "100%",
    height: 450,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
