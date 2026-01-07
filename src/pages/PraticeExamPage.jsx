import { Box, Stack, Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCurrentBreakpoint } from "../helper/LayoutHelper";
import SettingsIcon from "@mui/icons-material/Settings";
import ButtonCustmize from "../components/Common/ButtonCustmize";
import SettingPanel from "../components/Setting/SettingPanel";
import DrawerPanel from "../components/Common/DrawerPanel";
import ExamEditor from "../components/Common/ExamEditor";

export default function PraticeExamPage() {
  const breakPoint = useCurrentBreakpoint();
  console.log(breakPoint);
  const [isOpen, setOpen] = useState(open);
  const examSetting = useSelector((state) => state.colorFulTodo);
  const navigate = useNavigate();
  const curWidth = useCurrentBreakpoint();
  const height = curWidth == "xl" ? 340 : curWidth == "lg" ? 250 : 150;

  const initialValueTop = `稀有且瀕臨絕種的櫻花鉤吻鮭是冰河時期遺生物，需有適當蔽蔭、冷冽清淨溪水...`;
  return (
    <Box>
      <DrawerPanel
        open={isOpen}
        onClose={() => setOpen(false)}
        children={<SettingPanel />}
      />
      <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          // 使用 startIcon 放置左側圖標
          startIcon={<SettingsIcon />}
          sx={(theme) => ({
            // 顏色與形狀調整
            backgroundColor: theme.palette.blue.main, // 可根據需求調整更深或更淺的藍色
            borderRadius: "12px", // 圓角效果
            padding: "6px 24px", // 增加寬度感
            textTransform: "none", // 防止文字自動變大寫
            width: 250,
            fontSize: "1.1rem",
          })}
          onClick={() => setOpen(true)}
        >
          系統設定
        </Button>
      </Stack>
      <Stack direction="column" spacing={3} sx={{ p: 4, minHeight: "50vh" }}>
        <Box
          sx={(theme) => ({
            ...theme.custom.inputExamStyle.monacaBox,
            height: { md: 150, lg: 250, xl: 340 },
            bgcolor:examSetting.backgroundColor
          })}
        >
          <ExamEditor
            readonly={true}
            value={initialValueTop}
            height={height}
            backgroundColor={examSetting.backgroundColor}
            fontColor={examSetting.fontColor}
            fontSize={examSetting.fontSize}
          />
        </Box>
        <Box
          sx={(theme) => ({
            ...theme.custom.inputExamStyle.monacaBox,
            height: { md: 150, lg: 250, xl: 340 },
            bgcolor:examSetting.backgroundColor
          })}
        >
          <ExamEditor
            height={height}
            backgroundColor={examSetting.backgroundColor}
            fontColor={examSetting.fontColor}
            fontSize={examSetting.fontSize}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <ButtonCustmize
            color="#9a790e"
            fontSize="1.1rem"
            onClick={() => navigate("/warningPage")}
          >
            {"結束練習模式"}
          </ButtonCustmize>
        </Box>
      </Stack>
    </Box>
  );
}
