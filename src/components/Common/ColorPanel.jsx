import { useState } from "react";
import { Box, Typography, Divider, ButtonBase, Popover } from "@mui/material";
import ColorPicker from "./ColorPicker";
import PropTypes from "prop-types";
import {ButtonStyle} from "../../style/settingStyle";

export default function ColorPanel({ text, defaultColor }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState(defaultColor);
  const open = Boolean(anchorEl);
  const handlerOpen = (e) => setAnchorEl(e.currentTarget);
  const handlerClose = () => {
    setAnchorEl(null);
  };

  const handlerChangeColor=(newColor)=>{
     setColor(newColor.hex)
  }
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
      <ButtonStyle
       onClick={handlerOpen}
       sx={{backgroundColor:color}}
      />
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        open={open}
        onClose={handlerClose}
      >
       <ColorPicker color={color} handlerChangeColor={handlerChangeColor}/>
      </Popover>
    </Box>
  );
}

ColorPanel.propTypes = {
  text: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired, 
};
