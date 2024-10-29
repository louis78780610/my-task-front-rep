import { Box, styled } from '@mui/material';

export const StyleMenuBox = styled(Box)(`
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
`);


export const StyleHeaderNav = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "flex-start",
  gap: "30px",
  position: "absolute",
  top: "20px",
  right: "40px",
  [theme.breakpoints.down('md')]: {
    justifyContent: "flex-start",
  },
}));
