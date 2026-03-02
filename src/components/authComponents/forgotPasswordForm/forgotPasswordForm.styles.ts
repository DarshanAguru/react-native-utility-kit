import { ms, ScaledSheet } from "react-native-size-matters";
import type { customStyleProps, dirType } from "./types";

export const getForgotPasswordFormStyles = (customStyle: customStyleProps, dir: dirType) =>
    ScaledSheet.create({
        container: {
            width: "100%",
            direction: dir,
            paddingVertical: "10@s",
        },
        instructionText: {
            fontSize: ms(14),
            fontFamily: customStyle?.fontFamily,
            color: customStyle?.primaryAccent,
            marginBottom: "24@s",
            textAlign: dir === "rtl" ? "right" : "left",
            writingDirection: dir,
            opacity: 0.8,
        },
        inputContainer: {
            marginBottom: "24@s",
        },
        actionContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "16@s",
        },
        linkText: {
            fontSize: ms(14),
            fontFamily: customStyle?.fontFamily,
            color: customStyle?.primaryAccent,
            textAlign: "center",
            writingDirection: dir,
        },
        buttonContainer: {
            width: "100%",
        },
    });
