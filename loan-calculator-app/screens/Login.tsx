import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

export const Login = ({ navigation }: any) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.white, COLORS.white]}
    >
      <View style={{ flex: 1 }}>
        <View>
          {/* <Image
            source={require("../assets/hero1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 20,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -20,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 140,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          /> */}

          <Image
            source={require("../assets/2.jpg")}
            style={{
              height: 370,
              width: 370,
              borderRadius: 20,
              position: "absolute",
              top: 100,
              left: 2,
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 500,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: "800",
              color: COLORS.blue,
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: "800",
              color: COLORS.blue,
            }}
          >
            Started
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.darkBlue,
                marginVertical: 4,
              }}
            >
              Connect with each other with chatting
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.darkBlue,
              }}
            >
              Calling, Enjoy Safe and private texting
            </Text>
          </View>

          {/* <Button
            title="Get Started"
            onPress={() => navigation.navigate("DrawerGroup")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
            color={COLORS.blue}
            filled
          /> */}
        </View>
      </View>
    </LinearGradient>
  );
};
