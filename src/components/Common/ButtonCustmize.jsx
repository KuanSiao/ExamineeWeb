import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";



export default function ButtonCustmize({
  children,
  disabled,
  onClick,
  startIcon,
  color = "#e84c3d",
  disabledColor = "#e48f8f",
  padding,
  width = "41%",
  height = 48,
  borderRadius = 2,
  fontSize = "1.1rem",
  overrideDisabled = false, // 是否自訂 disabled 樣式
  overrideHover = false, // 是否自訂 hover 樣式,
}) {
  return (
    <Button
      startIcon={startIcon}  
      size="large"
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      sx={{
        width,
        height,
        borderRadius,
        fontSize,
        padding,
        backgroundColor: disabled ? disabledColor : color,
        color: "white",
        ...(overrideDisabled && {
          "&.Mui-disabled": {
            backgroundColor: disabledColor,
            color: "white",
            opacity: 1,
          },
        }),
        ...(overrideHover && {
          "&:hover": {
            backgroundColor: disabled ? disabledColor : color,
          },
        }),
      }}
    >
      {children}
    </Button>
  );
}

ButtonCustmize.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overrideDisabled: PropTypes.bool,
  overrideHover: PropTypes.bool,
  startIcon: PropTypes.node,
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
