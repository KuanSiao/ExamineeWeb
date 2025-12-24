import { Route, Routes, useLocation } from "react-router-dom";
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
import PraticeExamPage from "./pages/PraticeExamPage";

function App() {
  const location = useLocation()

  const isExamInput = location.pathname === "/ExamInput"
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={customerTheme}>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Header />
           {isExamInput  ? <Introduction/>:<Banner/>}
          <Container maxWidth="xl" sx={{ mt: 4, mb: 6, flexGrow: 1 }}>
            <Routes>
              <Route index element={<Login />}></Route>
              <Route path="chooseExam" element={<ChooseExamList />}></Route>
              <Route path="warningPage" element={<WarningPage />}></Route>
              <Route path="setting" element={<Setting />}></Route>
              <Route path="examInput" element={<ExamInput />}></Route>
              <Route path="examPractice" element={<PraticeExamPage />}></Route>
            </Routes>
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
