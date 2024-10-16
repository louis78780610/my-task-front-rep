/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Divider, Grid, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material";
import logo from "../images/task3Images/logo.png";
import mainvisual from "../images/task3Images/mainvisual.png";
import photo1 from "../images/task3Images/photo1.png";
import photo2 from "../images/task3Images/photo2.png";
import photo3 from "../images/task3Images/photo3.png";
import photo4 from "../images/task3Images/photo4.png";


const Task3 = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // スマホサイズの判定

  return (
    <Box 
    sx=
      {{ 
        fontFamily: "Arial", 
        height: "100%", 
        width: "100%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingTop: "60px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%"
          }}
          >
            <Box
              sx={{
                paddingBottom: "15px",
                paddingLeft: {xs: "10px", md: "0"}
              }}
            >
              <img src={logo} alt="logo" 
              style={{
                height: "18px",
              }}
              />
            </Box>
            <Box
                sx={{
                  width: { xs: "100%", md: "1000px" }, // 幅をレスポンシブで設定
                  height: { xs: "142px", md: "400px" } // 高さもレスポンシブで設定
                }}            
                ><img src={mainvisual} alt="mainVisual"
              style={{
                width: "100%",
              }}
            />
            </Box>
        </Box>
      </Box>

              {/* INDEX */}
      <Box 
      sx={{
        width: {xs: "335px", md: "800px" },
        height: "100%",
        backgroundColor: "#F5F5F5",
        margin: "0 auto",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",         // フレックスボックスにする
        flexDirection: "column", // 縦方向に要素を並べる
        alignItems: "center",     // 水平方向に中央寄せ
        marginTop: "60px"
      }}
      >
        <Typography 
          variant="h6"
          sx={{
            marginTop: { xs: "40px", md:"60px" }
          }}
          >
            INDEX
        </Typography>
        <List
          sx={{
            border: "solid 1px #333333",
            width: { xs: "295px", md: "680px" },
            margin: { xs: "30px auto 40px", md: "30px auto 60px" },
            display: "flex",
            flexDirection: "column",  // リストアイテムを縦に並べる
            alignItems: "center"      // リストアイテムを中央に寄せる
            }}
        >
          {Array.from({length:5}).map((_, index) => (
            <ListItem
              sx={{
                width: "100%",               // ListItemの幅を100%に
                display: "flex",
                justifyContent: "center",    // 各ListItem内のテキストを中央寄せ
              }}
              >
              <ListItemText
              primary={`${index+1}. タイトルタイトルタイトルタイトルタイトルタイトルタイトル`}
              sx={{
                fontSize: "14px",
                textAlign: "center",
                paddingLeft: "0",  // テキストのインデントを揃える
                lineHeight: "1.5em" // テキストの行間を調整
              }}
                />
            </ListItem>
          ))}
        </List>
      </Box>

          {/* 4枚の画像 */}
      <Box 
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "60px 0"
        }}
        >
        <Grid container spacing={2} sx={{ width: { xs: "100%", md: "816px" }}}>
          <Grid item xs={12} sm={6} md={6}>
          <Box 
            component="img"
            src={photo1}
            alt="photo1"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}            
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Box 
            component="img"
            src={photo2}
            alt="photo2"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}            
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Box 
            component="img"
            src={photo3}
            alt="photo3"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}            
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Box 
            component="img"
            src={photo4}
            alt="photo4"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}            
            />
          </Grid>
        </Grid>
      </Box>

            {/* DETAIL */}
      <Box
      sx={{
        width: {xs: "335px", md: "800px"},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto 75px auto",
        backgroundColor: "#F5F5F5"
        }}
      >
        <Typography variant="h6" sx={{marginTop: {xs: "40px", md: "60px" }}}>DETAIL</Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            justifyContent: "center",
            alignItems: "flex-start",
            margin: "30px 0 60px 0"
            }}
        >
        <Box
            sx={{
              display: "flex",
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "flex-start",
              padding: {xs: "0 0 0 20px", md: "0 71px 0 60px"}
              }}
        >
            <Box sx={{width: "170px"}}>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold"}}>著者</Typography>
              <Typography sx={{ fontSize: "14px"}}>タイトルタイトルタイトル</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold"}}>出版社</Typography>
              <Typography sx={{ fontSize: "14px"}}>タイトルタイトルタイトル</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold"}}>発行年</Typography>
              <Typography sx={{ fontSize: "14px"}}>2021年1月1日</Typography>
            </Box>
        </Box>

        {/* 縦線を表示する部分 */}
        <Divider
          orientation={isMobile ? "horizontal" : "vertical"} // モバイル時は横線、PC時は縦線
          flexItem
          sx={{
            borderRight: isMobile ? "none" : "1px solid #333", // 縦線の色と幅
            borderBottom: isMobile ? "1px solid #333" : "none", // 横線の色と幅
            margin: isMobile ? "16px 20px" : "0",             // モバイル時の余白
          }}
        />

        <Box
            sx={{
              width: {xs: "290px", md: "400px"},
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: {xs:"0 0 0 20px", md: "0 55px 0 40px"},

              }}
        >
          <Typography variant="body2" sx={{paddingBottom: "20px"}}>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
          <Typography variant="body2" sx={{paddingBottom: "20px"}}>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
          <Typography variant="body2">
            <a 
              href="#"
              style={{ color: "#333333" }}
              >
                オンラインストアで見る
            </a>
          </Typography>
        </Box>
        </Box>
      </Box>

    {/* フッター */}
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
    <Typography 
      sx={{ 
        fontSize: "10px",
        maxWidth: {xs: "290px", md: "600px"},
        paddingBottom: "15px",
        margin: "0 auto"
          }}
        >
          © 2020 PHOTO BOOK
        </Typography>
    </footer>
    </Box>
  );
};

export default Task3;