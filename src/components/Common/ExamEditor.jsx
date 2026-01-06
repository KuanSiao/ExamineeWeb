import { Editor } from "@monaco-editor/react";
import { Box } from "@mui/material";

const ExamEditor = ({
  value,
  height = "100vh",
  width = "100vw",
  onChange,
  fontSize = 16,
  readOnly = false,
  themeName = "customTheme",
  padding = { top: 15, bottom: 15 },
  onMount,
  path,
  onEditorReady, // 👈 新增：回傳 editor / monaco
}) => {
  return (
      <Editor
        width={width}
        height={height}
        path={path}
        defaultLanguage="plaintext"
        value={value}
        theme={themeName}
        options={{
          fontSize,
          readOnly,
          wordWrap: "on",
          minimap: { enabled: false },
          lineNumbers: "off",
          padding,
          quickSuggestions: false,
          autoDetectHighContrast: false,
          contextmenu: false,
          automaticLayout:true,
        }}
        onMount={(editor, monaco) => {
          monaco.editor.setTheme(themeName);

          // 關閉 F1 / Command Palette
          editor.addCommand(monaco.KeyCode.F1, () => {});
          editor.addCommand(
            monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP,
            () => {}
          );

          // 🔥 把實例交給父層
          onEditorReady?.({ editor, monaco });

          // 父層原本的 onMount
          onMount?.(editor, monaco);
        }}
        onChange={(val) => {
          onChange?.(val);
        }}
      />
  );
};

export default ExamEditor;
