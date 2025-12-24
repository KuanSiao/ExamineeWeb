import { Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import customerTheme from "./theme/theme";
import Header from "./components/App/Header";
import Footer from "./components/App/Footer";
import Banner from "./components/App/Banner";
import Login from "./pages/Login";
import ChooseExamList from "./pages/ChooseExamList";
import WarningPage from "./pages/WarningPage";
import Setting from "./pages/Setting";
import ExamInput from "./pages/ExamInput";
import Introduction from "./components/App/Introduction";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={customerTheme}>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Header />
          <Introduction />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 6, flexGrow: 1 }}>
            <Routes>
              <Route index element={<Login />}></Route>
              <Route path="chooseExam" element={<ChooseExamList />}></Route>
              <Route path="warningPage" element={<WarningPage />}></Route>
              <Route path="setting" element={<Setting />}></Route>
              <Route path="ExamInput" element={<ExamInput />}></Route>
            </Routes>
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
