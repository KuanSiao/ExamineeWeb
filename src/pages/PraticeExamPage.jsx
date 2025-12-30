import { Box, Stack, Button } from "@mui/material";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import ButtonCustmize from "../components/Common/ButtonCustmize";
import SettingPanel from "../components/Setting/SettingPanel";
import DrawerPanel from "../components/Common/DrawerPanel";

export default function PraticeExamPage() {
  const [isOpen,setOpen]=useState(open);
  const handleOpenSettingPanel=(state)=>{
    setOpen(state);
  }
  const initialValueTop = `稀有且瀕臨絕種的櫻花鉤吻鮭是冰河時期遺生物，需有適當蔽蔭、冷冽清淨溪水...`;
  return (
    <Box>
    <DrawerPanel open={isOpen} onClose={()=>handleOpenSettingPanel(false)} children={<SettingPanel/>}/>
      <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          // 使用 startIcon 放置左側圖標
          startIcon={<SettingsIcon />}
          sx={(theme)=>({
            // 顏色與形狀調整
            backgroundColor: theme.palette.blue.main, // 可根據需求調整更深或更淺的藍色
            borderRadius: "12px", // 圓角效果
            padding: "6px 24px", // 增加寬度感
            textTransform: "none", // 防止文字自動變大寫
            width:250,
            fontSize: "1.1rem",
          })}
          onClick={()=>handleOpenSettingPanel(true)}
        >
          系統設定
        </Button>
      </Stack>
      <Stack direction="column" spacing={3} sx={{ p: 4, minHeight: "50vh" }}>
        <Box
          sx={(theme) => ({
            ...theme.custom.inputExamStyle.monacaBox,
            height: { md: 150, lg: 250, xl: "30vh" },
          })}
        >
          <Editor
            height="100vh"
            path="top-editor"
            defaultLanguage="plaintext"
            defaultValue={`${initialValueTop}`}
            theme="vs-dark"
            options={{
              fontSize: 16,
              wordWrap: "on",
              minimap: { enabled: false },
              lineNumbers: "off", // 模仿閱讀器的感覺，關閉行號
              padding: { top: 15, bottom: 15 },
              quickSuggestions: false,
              autoDetectHighContrast: false,
              readOnly: true,
              contextmenu: false,
            }}
            onMount={(editor, monaco) => {
              // 關閉 F1
              editor.addCommand(monaco.KeyCode.F1, () => {});
              // 順便把 Ctrl+Shift+P 也封掉（同樣是 Command Palette）
              editor.addCommand(
                monaco.KeyMod.CtrlCmd |
                  monaco.KeyMod.Shift |
                  monaco.KeyCode.KeyP,
                () => {}
              );
            }}
          />
        </Box>
        <Box
          sx={(theme) => ({
            ...theme.custom.inputExamStyle.monacaBox,
            height: { md: 150, lg: 250, xl: "30vh" },
          })}
        >
          <Editor
            height="100vh"
            path="bottom-editor"
            defaultLanguage="plaintext"
            defaultValue=""
            theme="vs-dark"
            options={{
              fontSize: 16,
              wordWrap: "on",
              minimap: { enabled: false },
              lineNumbers: "off", // 模仿閱讀器的感覺，關閉行號
              padding: { top: 15, bottom: 15 },
              quickSuggestions: false,
              autoDetectHighContrast: false,
              contextmenu: false,
            }}
            onMount={(editor, monaco) => {
              // 關閉 F1
              editor.addCommand(monaco.KeyCode.F1, () => {});
              // 順便把 Ctrl+Shift+P 也封掉（同樣是 Command Palette）
              editor.addCommand(
                monaco.KeyMod.CtrlCmd |
                  monaco.KeyMod.Shift |
                  monaco.KeyCode.KeyP,
                () => {}
              );
            }}
          />
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",mt:2 }}>
           <ButtonCustmize
             color="#9a790e"
             fontSize="1.1rem">
             {"結束練習模式"}
           </ButtonCustmize>
        </Box>
      </Stack>
    </Box>
  );
}
