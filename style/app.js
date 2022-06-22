import React from "react";
import { StyleSheet } from "react-native";

import variables from "./variables";

const app = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: variables.backgroundcolor,
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default app;