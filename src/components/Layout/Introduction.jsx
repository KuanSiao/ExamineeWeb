import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GetTime, FormatDateTime } from "../../helper/timeHelper";
import ButtonCustmize from "../Common/ButtonCustmize";
import styled from "@emotion/styled";

export default function Introduction() {
  const isTabletDown = useMediaQuery("(max-width:1024px)");
  const IconBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: isTabletDown ? "center" : "end",
    mt: 3,
  });
  const LabelBox = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "min-content 1fr",
    gap: "4px 20px",
    m: 0,
    whiteSpace: "nowrap",
    paddingLeft: isTabletDown ? theme.spacing(0) : theme.spacing(3),
    color: "#fff",
  }));

  return (
    <Box
      sx={(theme) => ({
        ...theme.custom.banner.BoxStyle,
        bgcolor: "#bfbfbf",
        width: "100%",
        p: 0,
        m: 0,
      })}
    >
      <Grid container sx={{ width: "100%" }}>
        <Grid size={2}>
          <IconBox>
            <BadgeIcon
              sx={{
                width: { xs: 36, md: 50 },
                height: { xs: 36, md: 50 },
                color: "#fff",
              }}
            />
          </IconBox>
        </Grid>
        <Grid size={3}>
          <LabelBox>
            <Typography
              variant="h6"
              sx={(theme) => ({ ...theme.custom.banner.labelStyle })}
            >
              登入帳號：
            </Typography>
            <Typography variant="h6">A123456789</Typography>
            <Typography
              variant="h6"
              sx={(theme) => ({ ...theme.custom.banner.labelStyle })}
            >
              姓　　名：
            </Typography>
            <Typography variant="h6">郝成績</Typography>
            <Typography
              variant="h6"
              sx={(theme) => ({ ...theme.custom.banner.labelStyle })}
            >
              科目名稱：
            </Typography>
            <Typography variant="h6">數字鍵輸入</Typography>
          </LabelBox>
        </Grid>
        <Grid size={2}>
          <IconBox>
            <AccessTimeIcon
              sx={{
                width: { xs: 36, md: 50 },
                height: { xs: 36, md: 50 },
                color: "#fff",
              }}
            />
          </IconBox>
        </Grid>
        <Grid size={3}>
          <LabelBox>
            <Typography
              variant="h6"
              sx={(theme) => ({ ...theme.custom.banner.labelStyle })}
            >
              測驗時間：
            </Typography>
            <Typography variant="h6">
              {FormatDateTime(GetTime(), "yyyy / LL / dd")}
            </Typography>

            <Typography
              variant="h6"
              sx={(theme) => ({ ...theme.custom.banner.labelStyle })}
            >
              測驗時間：
            </Typography>
            <Typography variant="h6">05 分 0 秒</Typography>

            <Typography
              variant="h6"
              sx={(theme) => ({ ...theme.custom.banner.labelStyle })}
            >
              剩餘時間：
            </Typography>
            <Typography variant="h6">04 分 37 秒</Typography>
          </LabelBox>
        </Grid>
        <Grid size={2}>
          <Box sx={{ mt: 3, pl: 5 }}>
            <ButtonCustmize
              width={isTabletDown ? "100%" : "70%"}
              size={isTabletDown ? "small" : "large"}
            >
              <Typography fontSize={isTabletDown ? 13 : 21}>
                結束本回測驗
              </Typography>
            </ButtonCustmize>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
