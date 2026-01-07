import { Box, Container, Typography } from "@mui/material";
export default function Header(){
    return (
        <>
            <Box
              component="header" 
              sx={{
                width:"100%",
                p:2,
                bgcolor:"white",
                borderBottom:"1px solid #ddd"
              }}
            >
            <Container >
             <Typography variant="h5" fontWeight="bold">
                TQC 輸入輔助教學暨認證系統
             </Typography>
            </Container>
            </Box>
        </>
    );
}