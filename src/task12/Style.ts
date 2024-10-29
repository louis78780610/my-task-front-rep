import { Box, styled } from '@mui/material';


export const StyleHeader = styled(Box)(`
  width: 100%;
`);

export const StyleLogo = styled(Box)(({theme}) => ({
  padding: "20px 217px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down('md')]: {
    padding: "20px",
  },
}));

export const StyleHeaderNav = styled(Box)(({theme}) => ({
  backgroundColor: "#333333",
  padding: "20px 217px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "60px",
  [theme.breakpoints.down('md')]: {
    padding: "10px 16px",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "0px",
  },
}));
