import { ms, ScaledSheet } from "react-native-size-matters";
import type { customStyleProps, dirType } from "./types";

export const getLoginFormStyles = (customStyle: customStyleProps, dir: dirType) =>
    ScaledSheet.create({
        container: {
            width: "100%",
            direction: dir,
            paddingVertical: "10@s",
        },
        inputContainer: {
            marginBottom: "16@s",
        },
        actionContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "8@s",
            marginBottom: "24@s",
        },
        linkText: {
            fontSize: ms(14),
            fontFamily: customStyle?.fontFamily,
            color: customStyle?.primaryAccent,
            textAlign: dir === "rtl" ? "right" : "left",
            writingDirection: dir,
        },
        buttonContainer: {
            marginTop: "10@s",
            width: "100%",
        },
    });
