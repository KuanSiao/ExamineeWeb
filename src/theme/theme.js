import { createTheme } from "@mui/material";

const buttonFontFamily =
  'PMingLiU, "新細明體", "Microsoft JhengHei", "Helvetica", "Arial", sans-serif';

const customerTheme = createTheme({
  palette: {
    error: { main: "#e84c3d" },
    secondary: {
      main: "#6c757d",
      light: "#808080",
      lightGrey: "#a19d9c",
      borderGrey: "#ccc",
      disableTextBoxGrey: "#f0f0f0ff",
    },
    white: {
      main: "#fff",
    },
    blue:{
      main:"#1976d2",
    },
    fontColor: {
      disableColor: "#999",
      showColor: "#000",
    },
  },
  typography: {
    button: {
      fontFamily: buttonFontFamily,
      fontWeight: 300,
    },
  },
  custom: {
    loginStyle: {
      buttonClear: {
        flexGrow: { xs: 1, md: 1 },
        maxWidth: { md: 280 },
        bgcolor: "secondary.main",
      },
      buttonSubmit: {
        flexGrow: { xs: 1, md: 1 },
        maxWidth: { md: 280 },
        bgcolor: "error.main",
      },
    },
    chooseExamPageStyle: {
      content: {
        maxWidth: 1000,
        mx: "auto", // 水平居中
        p: 4, // 內邊距 (32px)
        bgcolor: "white",
        borderRadius: 2,
      },
      bigButtonOrange: {
        bgcolor: "#e84c3d",
        "&:hover": { bgcolor: "#D34A38" },
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        padding: "10px 40px",
        borderRadius: 3,
        width: "80%",
      },
    },
    inputExamStyle: {
      monacaBox: {
        height: 250,
        border: "1px solid #000",
        borderRadius: 3,
        p: 1,
        overflow: "hidden",
        bgcolor: "#000",
      },
    },
    setting: {
      iconButtonStyle: {
        ml: 1,
        width: 36,
        height: 36,
        borderRadius: 1,
      },
    },
    banner: {
      BoxStyle: {
        width: "100%",
        height: 200,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      },
      labelStyle:{
        letterSpacing: "0.5rem",textAlign: "right"
      }
    },
  },
  common: {
    alignCenter: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  },
});

export default customerTheme;
