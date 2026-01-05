import { Box,Typography,Divider  } from "@mui/material";
import { TextBoxStyle } from "../../style/settingStyle";
import PropTypes from "prop-types";

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

FontPanel.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setSize: PropTypes.func.isRequired,
};