import {
  Box,
  Card,
  Typography,
  CardContent,
  DialogContentText,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import CheckboxCustomizeStyle from "../components/Common/CheckboxCustomizeStyle";
import ButtonCustmize from "../components/Common/ButtonCustmize";
import ModalCustmize from "../components/Common/ModalCustmize";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBannerText } from "../store/slice/LayoutSlice";

export default function WarningPage() {
  const [isCheck, setIsCheck] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  dispatch(setBannerText('注意事項'));


  const handlerSubmitBtn=()=>{
    console.log('進入練習');
  }

  const handlerEnterInputExam=()=>{
   navigate("/");           
  }


  // 規則列表的內容
  const rules = [
    "一、本測驗進行兩次，每次測驗須在限制時間內完成，覆核成績取兩次評分中成績較高者 (錯誤率須小於10%)。",
    "二、當進入輸入視窗時，立即開始倒數計時。",
    "三、測驗一需按試卷 CHN-X000K-1 的內容輸入，若計時結束前即輸入完畢，則按試卷 CHN-X000K-2 的內容繼續輸入。",
    "四、測驗二需按試卷 CHN-X000K-2 的內容輸入，若計時結束前即輸入完畢，則按試卷 CHN-X000K-1 的內容繼續輸入。",
    "五、輸入時每段首請按空格 (全形2格)，每行末尾皆需按 [Enter] 鍵換行。",
    "六、輸入正確每字計一字數，輸入錯誤每字倒扣 0.5 字。",
    "七、測驗結束，請聽從監考人員指示進行動作。",
  ];

  const alertInfo = {
    title: "",
    content: (
      <DialogContentText
        component="div"
        id="test-duration-text"
        sx={{ color: "text.primary" }} // 確保文字顏色清晰
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            是否開始測驗一
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            測驗時間為 5 分鐘
          </Typography>
        </Stack>
      </DialogContentText>
    ),
    footerType: 2,
  };

  return (
    <Box
      maxWidth="xl"
      minWidth="md"
      sx={{ maxWidth: "100%", flexDirection: "column", alignItems: "center" }}
    >
      <ModalCustmize
        open={openModal}
        onClose={()=>setOpenModal(false)}
        aria-labelledby="是否開始測驗"
        aria-describedby="測驗時間為 5 分鐘"
        model={alertInfo}
        onClick={handlerEnterInputExam}
      ></ModalCustmize>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
        align="center"
      >
        測驗科目:中文輸入
      </Typography>
      {/* 規則卡片 */}
      <Card
        variant="outlined"
        sx={{
          maxWidth: {
            md: "70%",
            margin: "0 auto",
            width: "100%",
            border: "1px solid black",
            boxShadow: 3,
          },
        }}
      >
        <CardContent>
          {rules.map((item) => {
            return <Typography sx={{ mt: 1, ml: 6 }}>{item}</Typography>;
          })}
        </CardContent>
      </Card>
      <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
        <CheckboxCustomizeStyle
          text="已閱讀測驗注意事項"
          isChecked={setIsCheck}
        />
        <Box sx={(theme) => ({ ...theme.common.alignCenter })}>
          <ButtonCustmize
            disabled={!isCheck}
            overrideDisabled
            overrideHover
            onClick={()=>setOpenModal(true)}
          >
            開始測驗一
          </ButtonCustmize>
        </Box>
        <Box sx={(theme) => ({ ...theme.common.alignCenter, pt: 1 })}>
          <ButtonCustmize color="#b8860b" onClick={handlerSubmitBtn}>進入練習模式</ButtonCustmize>
        </Box>
      </Stack>
    </Box>
  );
}
