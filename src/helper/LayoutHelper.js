import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function useCurrentBreakpoint() {
  const theme = useTheme();

  // ✅ hooks 都在最外層呼叫
  const upXl = useMediaQuery(theme.breakpoints.up("xl"));
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));

  // 再做判斷
  if (upXl) return "xl";
  if (upLg) return "lg";
  if (upMd) return "md";
  if (upSm) return "sm";
  return "xs";
}
