import styled from "@emotion/styled";
import {
  Box,
  Stack,
  Typography,
  Divider,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetColor, setExamColor } from "../../store/slice/ColorSlice";
import ColorPanel from "../Common/ColorPanel";
import FontPanel from "../Setting/FontPanel";
import ButtonCustmize from "../Common/ButtonCustmize";
import ModalCustmize from "../Common/ModalCustmize";
const FontWarningLabel = styled(Typography)({
  color: "red",
  fontWeight: "bold",
});

export default function SettingPanel() {
  const [submitModal, setSubmitModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const dispatch = useDispatch();
  const [examSetting, setExamSetting] = useState({
    backgroundColor: "#000000",
    fontColor: "#ffffff",
    fontSize: 16,
  });


  const handlerSubmitModalBtn=()=>{
     dispatch(setExamColor(examSetting));
     setSubmitModal(false);
  }

  const handlerResetModalBtn = () => {
    dispatch(resetColor());
    setCancelModal(false);
    setExamSetting({
      backgroundColor: "#000000",
      fontColor: "#ffffff",
      fontSize: 16,
    });
  };

  const submitInfo = {
    title: "",
    content: (
      <DialogContentText
        component="div"
        id="test-duration-text"
        sx={{ color: "text.primary" }} // 確保文字顏色清晰
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            已儲存系統設定
          </Typography>
        </Stack>
      </DialogContentText>
    ),
    footerType: 1,
  };

  const cnacelInfo = {
    title: "",
    content: (
      <DialogContentText
        component="div"
        id="test-duration-text"
        sx={{ color: "text.primary" }} // 確保文字顏色清晰
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            是否要還原設定為預設值
          </Typography>
        </Stack>
      </DialogContentText>
    ),
    footerType: 1,
  };

  return (
    <Stack direction="column" spacing={2}>
      <ModalCustmize
        open={submitModal}
        onClose={() => setSubmitModal(false)}
        model={submitInfo}
        onClick={handlerSubmitModalBtn}
      />
      <ModalCustmize
        open={cancelModal}
        onClose={() => setCancelModal(false)}
        model={cnacelInfo}
        onClick={handlerResetModalBtn}
      />
      <Box sx={{ p: 5 }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 500 }}>
          系統設定
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="column" sx={{ alignItems: "flex-start" }}>
          <FontWarningLabel>提醒您:</FontWarningLabel>
          <FontWarningLabel sx={{ mt: 1 }}>
            調整背景顏色／字體顏色、大小設定後，按下儲存設定按鈕，調整的顏色及字體大小設定，會套用
          </FontWarningLabel>
          <FontWarningLabel sx={{ mt: 1 }}>
            用至正式測驗。若需重新調整，請點選＂還原為預設＂按鈕。
          </FontWarningLabel>
        </Stack>
        <ColorPanel
          text="背景顏色"
          color={examSetting.backgroundColor}
          setColor={(newColor) =>
            setExamSetting((pre) => ({ ...pre, backgroundColor: newColor }))
          }
        />
        <ColorPanel
          text="字體顏色"
          color={examSetting.fontColor}
          setColor={(newColor) =>
            setExamSetting((pre) => ({ ...pre, fontColor: newColor }))
          }
        />
        <FontPanel
          text="字體大小"
          value={examSetting.fontSize}
          setSize={(size) =>
            setExamSetting((prev) => ({ ...prev, fontSize: size }))
          }
        />
        <Stack
          direction="row"
          alignItems="flex-start"
          spacing={5}
          sx={{ mt: 5 }}
        >
          <ButtonCustmize width="30%" height="50" onClick={()=>setSubmitModal(true)}>
            儲存設定
          </ButtonCustmize>
          <ButtonCustmize
            width="30%"
            height="50"
            sx={{ ml: 2 }}
            color="#a19d9c"
            onClick={() => setCancelModal(true)}
          >
            還原為預設
          </ButtonCustmize>
        </Stack>
      </Box>
    </Stack>
  );
}
