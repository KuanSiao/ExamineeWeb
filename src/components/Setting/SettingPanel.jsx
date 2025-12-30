import styled from "@emotion/styled";
import { Box, Stack, Typography,Divider } from "@mui/material";
const FontWarningLabel=styled(Typography)({
  color:"red",
  fontWeight:"bold"
});
export default function SettingPanel() {

  return (
    <Stack direction="column" spacing={2}>
      <Box sx={{p:5}}>
        <Typography variant="h3" sx={{ textAlign:"center", fontWeight: 500 }}>系統設定</Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="column" sx={{alignItems:"flex-start"}}>
           <FontWarningLabel>提醒您:</FontWarningLabel>
           <FontWarningLabel sx={{mt:1}}>調整背景顏色／字體顏色、大小設定後，按下儲存設定按鈕，調整的顏色及字體大小設定，會套用</FontWarningLabel>
           <FontWarningLabel sx={{mt:1}}>用至正式測驗。若需重新調整，請點選＂還原為預設＂按鈕。</FontWarningLabel>
        </Stack>
        <Box></Box>
      </Box>
    </Stack>
  );
}
