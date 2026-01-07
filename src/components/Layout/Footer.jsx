import { Box, Typography } from "@mui/material";
import { GetTime, FormatDateTime } from "../../helper/timeHelper";
export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          width: "100%",
          p: 2,
          textAlign: "center",
          bgcolor: "#0e5aa7",
          color: "white",
          mt: "auto",
        }}
      >
        <Typography sx={{color:"#fff"}}>
          財團法人中華民國電腦技能基金會 版權所有{" "}
          {FormatDateTime(GetTime(), "yyyy-LL-dd")} ©All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
}
