/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import logo from "../images/task2Images/logo.png";
import mainvisual from "../images/task2Images/mainvisual.png";
import detail from "../images/task2Images/detail.png";

const Task2 = () => {
  return (
    // メインビジュアル
    <Box sx={{ fontFamily: "Arial", height: "100%", width: "100%", backgroundColor: "#F4F9FF" }}>
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
                paddingBottom: "15px"
              }}
            >
              <img src={logo} alt="logo" 
              style={{
                height: "18px"
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
                height: "100%"
              }}
            />
            </Box>
        </Box>
      </Box>

    {/* INDEX */}
    <Box 
    sx={{ 
      backgroundColor: "#FFFFFF", 
      width: { md: "1000px"},
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      margin: "60px auto 0px auto",
      paddingLeft: { xs: "20px", md: "0" },  // 小さい画面では左右に余白を設定
      paddingRight: { xs: "20px", md: "0" }  // 小さい画面では左右に余白を設定
    }}
      >
      <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%",
            paddingTop: "30px",
            paddingBottom: "30px",
            margin: {xs: "0 auto", md:"0" }
          }}
      >
      <Typography
        variant="h6"
        >
        INDEX
      </Typography>
      <List sx={{ padding: "0"}}>
        {Array.from({ length:5}).map((_, index) => (
          <ListItem key={index} sx={{ padding: "10px 0"}}>
            <ListItemText
            primary={`${index + 1}. タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル`}
            sx={{
              fontSize: "14px",
              textIndent: "-1.3em",  // 数字部分のインデントを調整
              paddingLeft: "1.3em",  // テキストのインデントを揃える
              lineHeight: "1.5em" // テキストの行間を調整
            }}
            />
          </ListItem>
        ))}
      </List>
      </Box>
    </Box>

    {/* DETAIL */}
    <Box 
    sx={{ 
      width: {xs: "100%", md: "1000px"},
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      margin: "60px auto 0px auto"
  }}
      >
      <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%",
            // paddingTop: "30px",
            paddingBottom: "30px"
          }}
      >
        <Typography
        variant="h6"
        >
          DETAIL
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs:"column", md:"row"},
            marginTop: "10px"
          }}
        >
          <Box>
            <img src={detail} alt="detail" 
              style={{
                height: "270px"
              }}
            />
          </Box>
          
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "270px",
              height: "270px",
              margin: {xs: "0 0 115px 0", md: "0 0 115px 60px"}
            }}
          >
            <Typography sx={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "20px",
              marginTop: { xs: "25px", md: "0"}
            }}
            >
              タイトルタイトルタイトル
            </Typography>
            <Divider 
              sx={{
                marginBottom: "16px"
              }}
              />
            <Grid container>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ height: "14px"}}>著者</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" sx={{ height: "14px"}}>タイトルタイトルタイトル</Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ height: "14px"}}>出版社</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ height: "14px"}}>タイトルタイトルタイトル</Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ height: "14px"}}>発行年</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ height: "14px"}}>タイトルタイトルタイトル</Typography>
              </Grid>
            </Grid>
            <Divider 
              sx={{
                margin: "16px 0 25px 0"
              }}
            />

          <Box
            sx={{
              marginBottom: "20px"
            }}
            >
            <Typography variant="body2">テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト</Typography>
          </Box>

          <Box>
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
      </Box>
    </Box>

    {/* フッター */}
    <footer>
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

export default Task2;