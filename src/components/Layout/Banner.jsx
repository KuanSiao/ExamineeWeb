import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Banner() {
  const { bannerText } = useSelector((state) => state.layoutTodos);
  return (
    <>
      <Box
        sx={(theme) => ({
          ...theme.custom.banner.BoxStyle,
          backgroundImage: 'url("/images/Banner.png")',
        })}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="white" align="center">
            {bannerText}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
