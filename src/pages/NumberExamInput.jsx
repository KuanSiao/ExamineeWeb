import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import ExamEditor from "../components/Common/ExamEditor";

export default function NumberExamInput() {
  const leftData = [
    "85243",
    "3954",
    "5967",
    "8696",
    "949494",
    "29631",
    "1474936",
    "1110",
    "67657",
    "242980",
    "242518",
  ];

  const rightData = [
    { index: 1, value: "85243" },
    { index: 2, value: "3954" },
    { index: 3, value: "5967" },
    { index: 4, value: "8696" },
    { index: 5, value: "949494" },
    { index: 6, value: "29631" },
    { index: 7, value: "15464" },
    { index: 8, value: "158796" },
    { index: 9, value: "179538" },
    { index: 10, value: "258638" },
  ];
  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h6" fontWeight="bold">
          請輸入第 1 組數字 (尚餘 20 組)
        </Typography>
        <Divider
          sx={{
            mt: 2,
            borderBottomWidth: 2,
            borderColor: "text.primary",
            width: "40%",
            mx: "auto",
          }}
        />
      </Box>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {/* 左側清單 */}
        <Grid item md={6}>
          <Paper
            variant="outlined"
            sx={{
              height: { md: 370, overflowY: "auto" },
              width: { md: 300 },
              borderRadius: 3,
            }}
          >
            <List dense>
              {leftData.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* 右側對應清單 */}
        <Grid item md={6}>
          <Paper
            variant="outlined"
            sx={{
              height: { md: 370, overflowY: "auto" },
              width: { md: 300 },
              borderRadius: 3,
            }}
          >
            <List dense>
              {rightData.map((item) => (
                <ListItem key={item.index}>
                  <ListItemText
                    primary={`${item.index}. ------------------> ${item.value}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{mt:3,width:"50%",mx:"auto"}}>
         <ExamEditor readonly={false}/>       
      </Box>
    </Box>
  );
}
