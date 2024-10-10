import { Avatar, Box, Grid, Grid2, Typography, useMediaQuery } from "@mui/material";
import mainVisual from "../images/mainvisual.png";
import avatar from "../images/avatar.png";
import bicycleImage1 from "../images/bicycle1.png";
import bicycleImage2 from "../images/bicycle2.png";
import bicycleImage3 from "../images/bicycle3.png";
import logo from "../images/logo.png"
import './style.css'

const Task1 = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');


  return (
    <div style={{ fontFamily: "Arial"}}>
      {/* ヘッダー */}
      <header>
        <div><img className="logo" src={logo} alt="logo" /></div>
        <nav>
          <ul style={{ 
            display: "flex", 
            justifyContent: "flex-end", 
            alignItems: "center", 
            gap: "30px", 
            listStyleType: "none"
            }}>
            <li>About</li>
            <li>Bycecle</li>
          </ul>
        </nav>
      </header>
      
      {/* 画像 */}
    <Box sx={{ width: "100%", marginBottom: "110px"}}>
      <Box
        sx={{
          width: "100%",
          height: "600px",
          backgroundImage: `url(${mainVisual})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          '@media (min-width: 900px)': {
            backgroundSize: "contain", 
          },
        }}
      ></Box>

        {/* 中身 */}
      <div className="container">
        <Box 
        sx={{ 
          height: {xs: "480px", md: "378px" }, 
          paddingTop: "80px"
        }}
          >
        
        {/* About */}
          <Box sx={{ textAlign: "center" }}>
            <Typography 
            sx={{ 
              height: "42px",
              fontWeight: "bold", 
              fontSize: "32px", 
              borderBottom: "1px solid #383E45",
              display: "inline-block",
              }}
              >
                About
              </Typography>
          </Box>
            <Box 
            sx={{ 
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
              justifyContent: {xs: "center", md: "center"},
              paddingTop: {md: "70px"},
              gap: {md: "30px"}
            }}
            >
              <Box
            sx={{
              display: {xs: "flex"},
              justifyContent: {xs: "center"},
              alignItems: {xs: "center"},
              marginTop: {xs: "60px", md: "0"}
            }}
            >
                <Avatar 
                alt="Kakeru Miyauthi" 
                src={avatar} 
                sx={{ 
                  height: "100px", 
                  width: "100px",
                  }}
                />
              </Box>
              <Box 
              sx={{
                width: {xs: "100%", md: "410px"},
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                <Typography 
                sx={{ 
                  fontSize: "1rem",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                  paddingTop: {xs: "10px", md: "0"},
                  paddingRight: {xs: "217px", md: "0"},
                  paddingLeft: {xs: "15px", md: "0"}
                }}>
                  KAKERU MIYAICHI
                </Typography>
                <Typography 
                sx={{ 
                  fontSize: "14.4px",
                  height: "65px",
                  padding: {xs: "10px 20px 0px 15px", md: "0"},
                  }}>
                  テキストテキストテキストテキストテキストテキストテキスト{isSmallScreen && <br />}テキストテキストテキストテキストテキストテキストテキスト{isSmallScreen && <br />}テキストテキストテキストテキストテキストテキストテキスト
                </Typography>
              </Box>
            </Box>
        </Box>

                {/* Bicycle */}
        <Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
            sx={{ 
              height: "42px",
              fontWeight: "bold", 
              fontSize: "32px", 
              borderBottom: "1px solid #383E45",
              display: "inline-block",
              }}
            >
              Bicycle
            </Typography>
            </Box>
          <Grid2 container spacing={4} justifyContent="center" paddingTop="60px">
            <Grid item>
              <Box 
              sx={{ 
                width: {md: "262.8px" }, 
                height: {md:"174px" },
                padding: {xs: "0 15px", md: "0px"}
                }}
                >
                <img 
                src={bicycleImage1} 
                alt="Bicycle 1" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover" 
                  }} 
                  />
                  <Box sx={{ textAlign: "center"}}>
                  <Typography 
                sx={{ 
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
                  >タイトルタイトル</Typography>
                  <Typography>テキストテキストテキスト</Typography>
                  </Box>
              </Box>
            </Grid>
              <Box 
              sx={{ 
                width: {md: "262.8px" }, 
                height: {md:"174px" },
                padding: {xs: "0 15px 30px 15px", md: "0px"}
                }}
                >
                <img 
                src={bicycleImage2} 
                alt="Bicycle 2" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover" }} 
                  />
                  <Box 
                  sx={{textAlign: "center"}}>
                  <Typography
                sx={{ 
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
                >
                  タイトルタイトル
                  </Typography>
                  <Typography>テキストテキストテキスト</Typography>
                  </Box>
              </Box>
              <Box 
              sx={{ 
                width: {md: "262.8px" }, 
                height: {md:"174px" },
                padding: {xs: "30px 15px 0 15px", md: "0px"}
                }}
                >
                <img 
                src={bicycleImage3} 
                alt="Bicycle 3" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover" 
                  }} 
                  />
                  <Box sx={{ textAlign: "center"}}>
                  <Typography
                sx={{ 
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
                  >タイトルタイトル</Typography>
                  <Typography>テキストテキストテキスト</Typography>
                  </Box>
              </Box>
          </Grid2>
        </Box>
      </div>
      </Box>

      {/* フッター */}
      <footer style={{ textAlign: "center", padding: "20px 0" }}>
        <Typography sx={{ fontSize: "10px" }}>
          © 2020 Profile
        </Typography>
      </footer>
    </div>
  );
};

export default Task1;
