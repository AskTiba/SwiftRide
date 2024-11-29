export default {
  expo: {
    name: "SwiftRide",
    slug: "SwiftRide",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#F8F9FA",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#F8F9FA",
      },
      package: "com.codeplayug.frontend_playground",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "89be462b-4772-4154-8777-33892cd8c3e2",
      },
    },
    plugins: [
      "expo-router",
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsVersion: "11.4.0",
          RNMapboxMapsDownloadToken:
            "sk.eyJ1IjoiYXNrdGliYSIsImEiOiJjbHl1NXpncHIwaWFtMmlzMGtmMDdtOGZ0In0.FtMORycn1RuP6bjH67uZRw",
        },
      ],
      [
        "expo-location",
        {
          locationWhenInUsePermission: "Show current location on map.",
        },
      ],
    ],
  },
};
