import { Box,Typography,Divider  } from "@mui/material";
import { TextBoxStyle } from "../../style/settingStyle";

export default function FontPanel({text,value,setSize}) {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 4, ml: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", whiteSpace: "nowrap", mr: 1 }}
        >
          {text}
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Box>
      {/* 顏色方塊按鈕 */}
      <TextBoxStyle defaultValue={value} onChange={(e)=>setSize(e.target.value)}/>
    </Box>
  );
}
