import { Box, Grid, Link, Typography } from "@mui/material";
import mainvisual from "../images/task6Images/mainvisual.png";
import concept from "../images/task6Images/concept.png";
import work from "../images/task6Images/work.png";
import res_mainvisual from "../images/task6Images/res_mainvisual.png";
import res_concept from "../images/task6Images/res_concept.png";
import res_work from "../images/task6Images/res_work.png";
import logo from "../images/task6Images/logo.png";



const Task6 = () => {
  return (
    <Box sx={{ padding: {xs: "0", md: "0 70px"} }}>
      <Box
        sx={{
          width: { xs: "100%", md: "100%"},
          height: { xs: "334px", md: "590px"},
          margin: {xs: "0", md: "60px 0 32px"},
          backgroundImage: {xs: `url(${res_mainvisual})`, md:`url(${mainvisual})`},
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          '@media (min-width: 900px)': {
            backgroundSize: "cover", 
          },
        }}
      ></Box>
      <Box sx={{ padding: {xs: "20px 20px 0 20px", md: "0"}}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            width: {xs: "110px", md: "125px"},
            height: {xs: "14px", md: "16px"},
            marginRight: {xs: "30px", md: "50px"},
            backgroundImage: `url(${logo})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", 
            '@media (min-width: 900px)': {
              backgroundSize: "cover",
            },
          }}
        ></Box>
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: {xs: "20px", md: "30px"}
        }}
        >
          <Link
          href="#"
          sx={{ 
            color: "#2B2A27",
            fontSize: "14px",
            textDecoration: "none"
          }}
        >
            Concept
          </Link>
          <Link
          href="#"
          sx={{ 
            color: "#2B2A27",
            fontSize: "14px",
            textDecoration: "none"
          }}
        >
            Work
          </Link>
          <Link
          href="#"
          sx={{ 
            color: "#2B2A27",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
            Contact
          </Link>
        </Box>
      </Box>

      {/* メインコンテンツ */}
      <Box 
        sx={{
          width: { sx: "339px", md: "100%" },
          display: "flex",           // 全体を中央寄せする
          justifyContent: "center", 
          alignItems: "center",
          margin: { xs: "50px auto", md: "62px auto" }
      }}>
      <Grid container sx={{ maxWidth: "1000px" }}>  {/* コンテナを設定し、最大幅を制限 */}
        {/* 左側の画像部分 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",                 // 幅を100%に設定
              height: {xs: "339px", md: "482px"},               // 固定の高さ
              backgroundImage: { xs: `url(${res_concept})`, md: `url(${concept})` },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginBottom: { xs: "10px", md: "0" }
            }}
          />
        </Grid>

        {/* 右側のテキスト部分 */}
        <Grid item xs={12} md={6} sx={{
          display: "flex",           // フレックスレイアウトで縦に揃える
          flexDirection: "column",
          justifyContent: "center",   // 縦方向の中央揃え
          alignItems: { xs: "center", md: "flex-start" }, 
          paddingLeft: {xs: "0", md: "64px"}
        }}>
          <Box sx={{ width: { xs: "100%", md: "340px" } }}>
            <Typography sx={{ fontSize: {xs: "20px", md: "24px"}, fontFamily: "Arial"}}>私たちの考えるジュエリーとは</Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "25px" }}>Concept</Typography>
            <Typography variant="body1">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
            <Typography variant="body1">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
          </Box>
        </Grid>
      </Grid>
      </Box>

      <Box 
        sx={{
          width: { sx: "339px", md: "100%" },
          display: "flex",           // 全体を中央寄せする
          justifyContent: "center", 
          alignItems: "center",
          margin: { xs: "50px auto", md: "62px auto" }
      }}>
      <Grid container sx={{ maxWidth: "1000px" }}>  {/* コンテナを設定し、最大幅を制限 */}
        {/* 左側のテキスト部分 */}
        <Grid item xs={12} md={6} 
        sx={{
          order: { xs: 2, md: 1 },  // モバイルでは順序を2にして後に表示
          display: "flex",           // フレックスレイアウトで縦に揃える
          flexDirection: "column",
          justifyContent: "center",   // 縦方向の中央揃え
          alignItems: { xs: "center", md: "flex-start" },
          paddingLeft: {xs: "0", md: "64px"}
        }}>
          <Box sx={{ width: { xs: "100%", md: "331px" } }}>
            <Typography sx={{ fontSize: {xs: "20px", md: "24px"}, fontFamily: "Arial"}}>ハンドメイドにこだわる理由</Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "25px" }}>Work</Typography>
            <Typography variant="body1">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
            <Typography variant="body1">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
          </Box>
        </Grid>

        {/* 右側の画像部分 */}
        <Grid item xs={12} md={6}
          sx={{
            order: { xs: 1, md: 2 },  // モバイルでは順序を1にして先に表示
          }}
        >
          <Box
            sx={{
              width: "100%",                 // 幅を100%に設定
              height: {xs: "339px", md: "482px"},              // 固定の高さ
              backgroundImage: { xs: `url(${res_work})`, md: `url(${work})` },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginBottom: { xs: "10px", md: "0" }
            }}
          />
        </Grid>
      </Grid>
      </Box>

      {/* フッター */}
      <footer
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center", // 水平方向
      }}
      >
      <Box
      sx={{
        width: "1000px",
        display: "flex",
        justifyContent: "space-between", // 水平方向
      }}
      >
        <Box
          sx={{
            width: {xs: "110px", md: "125px"},
            height: {xs: "14px", md: "16px"},
            backgroundImage: `url(${logo})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", 
            '@media (min-width: 900px)': {
              backgroundSize: "cover",
            },
          }}
        ></Box>
        <Typography 
          sx={{ 
            fontSize: "14px",
            maxWidth: {xs: "290px", md: "600px"},
            paddingBottom: "20px",
            textAlign: "right"
          }}
        >
          © 2020 PHOTO BOOK
      </Typography>
      </Box>
    </footer>
    </Box>
    </Box>
  );
};

export default Task6;