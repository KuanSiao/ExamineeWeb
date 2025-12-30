import styled from "@emotion/styled";
import { ButtonBase, InputBase } from "@mui/material";

export const ButtonStyle = styled(ButtonBase)({
  width: 120,
  height: 60,
  border: "1px solid #C4C4C4",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
  transition: "all 0.2s",
  marginTop: "24px",
  marginLeft: "16px",
  "&:hover": {
    borderColor: "#000",
    transform: "scale(1.02)",
  },
});

export const TextBoxStyle = styled(InputBase)({
  width: 120,
  height: 60,
  border: "1px solid #C4C4C4",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
  transition: "all 0.2s",
  marginTop: "24px",
  marginLeft: "16px",
  padding: "0 12px",
  fontSize: "32px",
  fontWeight: 500,
  "&:hover": {
    borderColor: "#000",
    transform: "scale(1.02)",
  },
  "& .MuiInputBase-input": {
    height: "100%",
  },
});
