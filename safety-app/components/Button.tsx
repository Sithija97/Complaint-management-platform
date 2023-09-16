import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { StyleProps } from "react-native-reanimated";

interface ButtonProps {
  title: string; // The text displayed on the button
  onPress: () => void; // Callback function when the button is pressed
  filled?: boolean; // Optional: whether the button should be filled (default: true)
  color?: string; // Optional: custom background color for filled button
  style?: any; // Optional: additional styles for the button
  textStyle?: StyleProp<TextStyle>; // Optional: additional styles for the button text
  textcolor?: string;
}

const Button = (props: ButtonProps) => {
  const filledBgColor = props.color || COLORS.secondary;
  const outlinedColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.textcolor
    ? props.textcolor
    : props.filled
    ? COLORS.white
    : COLORS.secondary;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: 18, ...{ color: textColor } }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.white,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Button;
