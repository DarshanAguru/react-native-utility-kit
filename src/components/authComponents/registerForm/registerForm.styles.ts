import { ms, ScaledSheet } from "react-native-size-matters";
import type { customStyleProps, dirType } from "./types";

export const getRegisterFormStyles = (customStyle: customStyleProps, dir: dirType) =>
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
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8@s",
            marginBottom: "24@s",
        },
        linkText: {
            fontSize: ms(14),
            fontFamily: customStyle?.fontFamily,
            color: customStyle?.secondaryColor,
            textAlign: "center",
            writingDirection: dir,
        },
        buttonContainer: {
            marginTop: "10@s",
            width: "100%",
        },
    });
