import { Box, styled } from '@mui/material';


// 黒い薄い箱

export const StyleBlackBox = styled(Box)(`
  width: 290px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 15px;
  textAlign: center;
`);

// ファッション
export const StyleFashion = styled(Box)(({theme}) => ({
  paddingTop: "60px",
  [theme.breakpoints.down('md')]: {
    margin: "35px auto 277px",
    padding: "35px 22px 0 22px",
  },
}));

// カタログとアンティーク
export const StyleCatalog = styled(Box)(`
  width: "100%";
  backgroundColor: "#F5F5F5";
`);

// カタログとアンティーク
export const StyleMag88 = styled(Box)(({theme}) => ({
  backgroundColor: "#333333",
  padding: "100px 200px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down('md')]: {
    padding: "30px 22px 60px 22px",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
}));
