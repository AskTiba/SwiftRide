// import { View, Text, Image } from "react-native";
// import React from "react";

// export default function location() {
//   return (
//     <View className=" items-center bg-white h-full">
//       <View className="border-2 border-red-600 bg-[#FFFFFF] w-full px-8">
//         <Image
//           className="h-[528.55px] w-[328.67px]"
//           source={require("../../../assets/images/location.png")}
//         />
//       </View>
//       <View className="my-5">
//         <Text className="text-[17px] font-[600] leading-[22px] -tracking-[0.43]">
//           Location access
//         </Text>
//         <Text className="my-2 text-[13px] font-normal leading-[18px] -tracking-[0.08]">
//           Don't miss your ride and important updates location based updates like
//           traffic details.
//         </Text>
//       </View>
//     </View>
//   );
// }

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, Image } from "react-native";

import { Link, Stack, router } from "expo-router";
import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";

import Animated, {
  FadeIn,
  FadeOut,
  SlideOutLeft,
  SlideInRight,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    image: require("../../../assets/images/location.png"),
    title: "Location access",
    description:
      "Don't miss your ride and important updates location based updates like traffic details",
  },
  {
    image: require("../../../assets/images/access.png"),
    title: "Notification access",
    description:
      "Get important travel deals, personalized recommendations and more.",
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="">
        <Stack.Screen options={{ headerShown: false }} />

        <GestureDetector gesture={swipes}>
          <View
            className="items-center bg-white h-full px-3 pt-16"
            key={screenIndex}
          >
            <Animated.View entering={FadeIn} exiting={FadeOut}>
              <Image style={styles.image} source={data.image} />
            </Animated.View>

            <View className="">
              <Animated.Text
                entering={SlideInRight}
                exiting={SlideOutLeft}
                className="text-[17px] font-[600] leading-[22px] -tracking-[0.43]"
              >
                {data.title}
              </Animated.Text>
              <Animated.Text
                entering={SlideInRight.delay(50)}
                exiting={SlideOutLeft}
                className="my-2 text-[13px] font-normal leading-[18px] -tracking-[0.08]"
              >
                {data.description}
              </Animated.Text>

              <View className="justify-between flex-row">
                <View style={styles.stepIndicatorContainer}>
                  {onboardingSteps.map((step, index) => (
                    <View
                      key={index}
                      style={[
                        styles.stepIndicator,
                        {
                          backgroundColor:
                            index === screenIndex ? "black" : "grey",
                        },
                      ]}
                    />
                  ))}
                </View>

                <Pressable
                  onPress={onContinue}
                  className="bg-black rounded-full h-[56px] w-[56px] justify-center items-center"
                >
                  <Image
                    className="w-5 h-[8px]"
                    source={require("../../../assets/images/arrow.png")}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    // margin: 20,
    width: 328.67,
    height: 528.55,
    resizeMode: "contain",
  },

  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 3,
    marginTop: 20,
  },
  stepIndicator: {
    width: 10,
    height: 10,
    backgroundColor: "gray",
    borderRadius: 5,
  },
});
