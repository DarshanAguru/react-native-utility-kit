import { ms, ScaledSheet } from "react-native-size-matters";
import type { customStyleProps, dirType } from "./types";

export  const gettextInputStyles = (customStyle:customStyleProps, dir:dirType)=>ScaledSheet.create({
  container: {
    marginBottom: 0,
    width: "100%",
    direction: dir,
  },
  label: {
    fontSize: ms(15),
    fontFamily: customStyle?.fontFamilyLabel,
    marginBottom: 4,
    color: customStyle?.primaryColor,
    textAlign: "left",
    width: "100%",
    flexDirection: "row",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: customStyle?.borderColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 0,
  },
  leftContent: {
    marginHorizontal: 5,
  },
  rightContent: {
    marginHorizontal: 5,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 17,
    fontFamily: customStyle?.fontFamily,
    paddingHorizontal: 10,
    color: customStyle?.primaryColor,
    textAlign: dir === 'rtl'?'right':'left',
    writingDirection: dir,
    //textAlign: 'left',
  },
  inputWithLeftContent: {
    paddingLeft: 0,
  },
  inputWithRightContent: {
    paddingRight: 0,
  },
  errorText: {
    fontSize: 12,
    fontFamily: customStyle?.fontFamily,
    color: customStyle?.secondaryColor,
    marginTop: 1,
    textAlign: "left",
  },
});
