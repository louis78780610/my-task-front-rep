import { Box, styled } from '@mui/material';


// ヘッダー
export const StyleHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '20px 0 10px 0', // デフォルトの padding
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.up('md')]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "960px",
    margin: "0 auto",
    padding: "120px 160px",
  },
}));

export const StyleHeaderInner = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px', // 項目間のスペースを調整
  flexDirection: 'row', // デフォルトで横並び
  [theme.breakpoints.down('md')]: {
    gap: '20px', // スペースを少し狭くする
  },
}));

export const StyleAbout = styled(Box)(`
  width: 100%;
  margin: 70px auto;
`);

export const StyleNews = styled(Box)(({theme}) => ({
  width: "100%",
  marginBottom: "70px",
  [theme.breakpoints.up('md')]: {
    marginBottom: "130px",
  },
}));

export const StyleNewsInner = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "15px 0",
  [theme.breakpoints.up('md')]: {
    flexDirection: "row",
  },
}));

export const StyleContact = styled(Box)(({theme}) => ({
  width: "100%",
  marginBottom: "70px",
  [theme.breakpoints.up('md')]: {
    marginBottom: "130px",
  },
}));

export const StyleInput = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginBottom: "10px",
  [theme.breakpoints.up('md')]: {
    flexDirection: "row",
  },
}));

export const StyleTextArea = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginBottom: "30px",
  [theme.breakpoints.up('md')]: {
    flexDirection: "row",
  },
}));
  