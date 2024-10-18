import { Box, Button, Divider, Grid, Input, TextField, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { StyleAbout, StyleContact, StyleHeader, StyleHeaderInner, StyleInput, StyleNews, StyleNewsInner, StyleTextArea } from "./Style";
import { logo, MainVisualPC, MainVisualSP, ResWorks1, ResWorks2, ResWorks3, ResWorks4, ResWorks5, ResWorks6, Works1, Works2, Works3, Works4, Works5, Works6 } from "../images/task7Images/index";

const Task7 = () => {
  return (
    <Box sx={{
      width: "100%"
      }}
      >
        {/* ヘッダー */}
      <StyleHeader>
        <Box
        sx={{
          width: "120px",
          height: "27px",
          backgroundImage: `url(${logo})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          '@media (min-width: 900px)': {
            backgroundSize: "cover", 
          },
        }}
        ></Box>
          <StyleHeaderInner>
          <Typography sx={{ fontSize: {xs: "12.8px", md: "16px"}, color: "#24292E"}}>About</Typography>
          <Typography sx={{ fontSize: {xs: "12.8px", md: "16px"}, color: "#24292E"}}>Works</Typography>
          <Typography sx={{ fontSize: {xs: "12.8px", md: "16px"}, color: "#24292E"}}>News</Typography>
          <Typography sx={{ fontSize: {xs: "12.8px", md: "16px"}, color: "#24292E"}}>Contact</Typography>
          <InstagramIcon sx={{ width: "50px" }} />
          </StyleHeaderInner>
      </StyleHeader>

      {/* メインビジュアル */}
      <Box
        sx={{
          width: "100%",
          height: "420px",
          backgroundImage: {xs: `url(${MainVisualSP})`, md:`url(${MainVisualPC})`},
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          '@media (min-width: 900px)': {
            backgroundSize: "cover", 
          },
        }}
      ></Box>

      {/* About */}
      <Box sx={{ padding: {xs: "0 16px", md: "0 160px"}}}>
      <StyleAbout>
        <Typography 
          sx={{ 
            textAlign: "center",
            marginBottom: {xs: "40px", md: "65px"},
            fontSize: "27px",
            fontFamily: "Arial",
            fontWeight: "bold"
          }}
          >
            About
          </Typography>
        <Typography
          sx={{ 
            fontSize: "14.4px",
            fontFamily: "Arial",
            marginBottom: "30px"
          }}
        >
          Xxxxx Ashley
        </Typography>
        <Typography
          sx={{ 
            fontSize: "14.4px",
            fontFamily: "Arial"
          }}
        >
          2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan
        </Typography>
        <Typography
          sx={{ 
            fontSize: "14.4px",
            fontFamily: "Arial",
          }}
        >
          tel: 000-0000-0000
        </Typography>
        <Typography
          sx={{ 
            fontSize: "14.4px",
            fontFamily: "Arial",
          }}
        >
          url: www.xxxxxx.jp
        </Typography>
        <Typography
          sx={{ 
            fontSize: "14.4px",
            fontFamily: "Arial",
            marginBottom: "30px"
          }}
        >
          mail: xxx@xxxxxx.jp
        </Typography>
        <Typography
          sx={{ 
            fontSize: "14.4px",
            fontFamily: "Arial",
          }}
        >
          プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト 
        テキストテキストテキストテキスト
        </Typography>
      </StyleAbout>

      {/* Works(画像６枚) */}
      <Box sx={{ margin: {xs: "70px 0 93px", md: "130px 0 130px"}}}>
        <Typography 
          sx={{ 
            textAlign: "center",
            marginBottom: {xs: "40px", md: "65px"},
            fontSize: "27px",
            fontFamily: "Arial",
            fontWeight: "bold"
          }}
        >
            Works
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: {xs: "225px", md: "172px"},
                backgroundImage: {xs: `url(${ResWorks1})`, md:`url(${Works1})`},
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
                '@media (min-width: 900px)': {
                  backgroundSize: "cover", 
                },
              }}
            ></Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: {xs: "225px", md: "172px"},
                backgroundImage: {xs: `url(${ResWorks2})`, md:`url(${Works2})`},
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
                '@media (min-width: 900px)': {
                  backgroundSize: "cover", 
                },
              }}
            ></Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: {xs: "225px", md: "172px"},
                backgroundImage: {xs: `url(${ResWorks3})`, md:`url(${Works3})`},
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
                '@media (min-width: 900px)': {
                  backgroundSize: "cover", 
                },
              }}
            ></Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: {xs: "225px", md: "172px"},
                backgroundImage: {xs: `url(${ResWorks4})`, md:`url(${Works4})`},
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
                '@media (min-width: 900px)': {
                  backgroundSize: "cover", 
                },
              }}
            ></Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: {xs: "225px", md: "172px"},
                backgroundImage: {xs: `url(${ResWorks5})`, md:`url(${Works5})`},
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
                '@media (min-width: 900px)': {
                  backgroundSize: "cover", 
                },
              }}
            ></Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: {xs: "225px", md: "172px"},
                backgroundImage: {xs: `url(${ResWorks6})`, md:`url(${Works6})`},
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
                '@media (min-width: 900px)': {
                  backgroundSize: "cover", 
                },
              }}
            ></Box>
            </Grid>
          </Grid>
      </Box>

      {/* News */}
      <StyleNews>
        <Typography
          sx={{ 
            textAlign: "center",
            marginBottom: {xs: "40px", md: "65px"},
            fontSize: "27px",
            fontFamily: "Arial",
            fontWeight: "bold"
          }}
        >
          News
        </Typography>
          <Divider />
          <StyleNewsInner>
            <Typography sx={{ marginRight: {xs: "0", md: "88px"}, fontSize: "14.4px", fontFamily: "Arial"}}>2020.XX.XX</Typography>
            <Typography sx={{fontSize: "14.4px", fontFamily: "Arial"}}>デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。</Typography>
          </StyleNewsInner>
          <Divider />
          <StyleNewsInner>
          <Typography sx={{ marginRight: {xs: "0", md: "88px"}, fontSize: "14.4px", fontFamily: "Arial"}}>2020.XX.XX</Typography>
          <Typography sx={{fontSize: "14.4px", fontFamily: "Arial"}}>ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。</Typography>
          </StyleNewsInner>
          <Divider />
          <StyleNewsInner>
            <Typography sx={{ marginRight: {xs: "0", md: "88px"}, fontSize: "14.4px", fontFamily: "Arial"}}>2019.XX.XX</Typography>
            <Typography sx={{fontSize: "14.4px", fontFamily: "Arial"}}>【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト</Typography>
          </StyleNewsInner>
          <Divider />
          <StyleNewsInner>
            <Typography sx={{ marginRight: {xs: "0", md: "88px"}, fontSize: "14.4px", fontFamily: "Arial"}}>2019.XX.XX</Typography>
            <Typography sx={{fontSize: "14.4px", fontFamily: "Arial"}}>デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。</Typography>
          </StyleNewsInner>
          <Divider />
          <StyleNewsInner>
            <Typography sx={{ marginRight: {xs: "0", md: "88px"}, fontSize: "14.4px", fontFamily: "Arial"}}>2019.XX.XX</Typography>
            <Typography sx={{fontSize: "14.4px", fontFamily: "Arial"}}>【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト</Typography>
          </StyleNewsInner>
          <Divider />
      </StyleNews>

      {/* Contact */}
      <StyleContact>
        <Typography
          sx={{ 
            textAlign: "center",
            marginBottom: {xs: "40px", md: "65px"},
            fontSize: "27px",
            fontFamily: "Arial",
            fontWeight: "bold"
          }}
        >
          Contact
        </Typography>
          <StyleInput>
            <Typography sx={{ marginRight: {xs: "0", md: "75px"}, fontSize: "14.4px", fontFamily: "Arial", whiteSpace: "nowrap"}}>NAME</Typography>
            <TextField fullWidth variant="outlined" />
          </StyleInput>
          <StyleInput>
            <Typography sx={{ marginRight: {xs: "0", md: "75px"}, fontSize: "14.4px", fontFamily: "Arial", whiteSpace: "nowrap"}}>E-mail</Typography>
            <TextField type="email" fullWidth variant="outlined" />
          </StyleInput>
          <StyleTextArea>
            <Typography sx={{ marginRight: {xs: "0", md: "46px"}, fontSize: "14.4px", fontFamily: "Arial", whiteSpace: "nowrap"}}>MESSAGE</Typography>
            <TextField multiline rows={4} fullWidth variant="outlined" />
          </StyleTextArea>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#24292E",  // ダークグレーの背景色
              color: "#fff",               // 白いテキスト
              width: "200px",              // ボタンの幅を固定
              height: "45px",              // ボタンの高さを固定
              fontSize: "14.4px",            // テキストサイズ
              fontFamily: "Arial",
              borderRadius: "0",         // ボタンの角を少し丸く
              '&:hover': {
                backgroundColor: "#343a40",  // ホバー時の背景色を少し明るく
              },
            }}
            >
            送信
          </Button>
        </Box>
      </StyleContact>
      </Box>

      {/* フッター */}
      <footer
      style={{
        height: "31px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#24292E",
        color: "#fff"
      }}
    >
    <Typography 
      sx={{ 
        fontSize: "10px",
        maxWidth: {xs: "290px", md: "600px"},
        margin: "0 auto"
          }}
        >
          © 2020 My Work
        </Typography>
    </footer>
    </Box>
  );
};

export default Task7;
















