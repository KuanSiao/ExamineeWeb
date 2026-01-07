import CodeMirror from "@uiw/react-codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { useMemo } from "react";

//
// ❶ 封鎖快捷鍵（複製 / 貼上 / 剪下 / F1 / 搜尋）
//
const blockKeymap = keymap.of([
  { key: "Mod-c", run: () => true }, // copy
  { key: "Mod-v", run: () => true }, // paste
  { key: "Mod-x", run: () => true }, // cut
  { key: "Mod-f", run: () => true }, // find
  { key: "Mod-s", run: () => true },
  { key: "Mod-p", run: () => true },
  { key: "F1", run: () => true },
]);

//
// ❷ Tab 插入空白
//
const tabToSpaces = (size = 2) =>
  keymap.of([
    {
      key: "Tab",
      run: (view) => {
        view.dispatch(view.state.replaceSelection(" ".repeat(size)));
        return true;
      },
    },
  ]);

//
// ❸ 封鎖滑鼠行為（右鍵 / 拖拉 / 選取）
//
const blockMouse = EditorView.domEventHandlers({
  contextmenu: (e) => {
    e.preventDefault();
    return true;
  },
  dragstart: (e) => {
    e.preventDefault();
    return true;
  },
  selectstart: (e) => {
    e.preventDefault();
    return true;
  },
});

//
// ❹ 封鎖「選取產生的 transaction」
// （Shift + Arrow、滑鼠殘留）
//
// const blockSelection = EditorState.transactionFilter.of((tr) => {
//   if (tr.selection && !tr.selection.main.empty) {
//     return []; // 阻止選取
//   }
//   return tr;
// });

//
// ❺ 主元件
//
const ExamEditor = ({
  value,
  onChange,
  onLineChange,
  readonly=false,
  //width = 600,  //由外層控制
  height = 200,
  fontSize = 18,
  textColor = "#fff",
  backgroundColor = "#000",
}) => {
  const theme = useMemo(
    () =>
      EditorView.theme(
        {
          "&": {
            backgroundColor,
            color: textColor,
            fontSize: `${fontSize}px`,
          },
          ".cm-scroller": {
            backgroundColor,
          },
          ".cm-content": {
            caretColor: textColor,
          },
        },
        { dark: true }
      ),
    [backgroundColor, textColor, fontSize]
  );

  return (
    <CodeMirror
      value={value}
      //width={`${width}px`}
      height={`${height}px`}
      readOnly={readonly}
      basicSetup={{
        lineNumbers: false,
        highlightActiveLine: false,
        foldGutter: false,
        drawSelection: false, // 👈 不畫選取
      }}
      extensions={[
        EditorView.lineWrapping,
        theme,
        tabToSpaces(2),
        blockKeymap,
        blockMouse,
        // blockSelection,

        // 🔢 回傳目前行數
        EditorView.updateListener.of((update) => {
          if (update.selectionSet) {
            const pos = update.state.selection.main.head;
            const line = update.state.doc.lineAt(pos);
            onLineChange?.(line.number);
          }
        }),
      ]}
      onChange={(val) => onChange?.(val)}
    />
  );
};

export default ExamEditor;
