import { Box } from "@mui/material";
import { SketchPicker } from "react-color";
import PropTypes from "prop-types";

export default function ColorPicker({color,handlerChangeColor}){
    return (
        <Box>
          <SketchPicker
           color={color}
           onChange={handlerChangeColor}
           disableAlpha={true}
          />
        </Box>
    )
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  handlerChangeColor: PropTypes.func.isRequired, 
};