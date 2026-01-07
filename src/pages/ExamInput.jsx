import { Box, Stack, } from "@mui/material";
import { Editor } from "@monaco-editor/react";
import ExamEditor from "../components/Common/ExamEditor";
import {useCurrentBreakpoint} from "../helper/LayoutHelper";

export default function ExamInput() {
  const initialValueTop = `稀有且瀕臨絕種的櫻花鉤吻鮭是冰河時期遺生物，需有適當蔽蔭、冷冽清淨溪水...`;
  const curWidth=useCurrentBreakpoint();
   const height = curWidth == "xl" ? 340 : curWidth == "lg" ? 250 : 150;
  return (
    <Stack direction="column" spacing={3} sx={{ p: 4, minHeight: "50vh" }}>
      <Box sx={(theme)=>({...theme.custom.inputExamStyle.monacaBox,height:{md:150,lg:250,xl:340}})}>
        <ExamEditor value={initialValueTop} readonly={true} height={height}/>
      </Box>
      <Box sx={(theme)=>({...theme.custom.inputExamStyle.monacaBox,height:{md:150,lg:250,xl:340}})}>
         <ExamEditor  readonly={false} height={height}/>
      </Box>
    </Stack>
  );
}
