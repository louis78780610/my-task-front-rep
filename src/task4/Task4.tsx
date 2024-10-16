import { Box, Button, Link, Typography } from "@mui/material";
import mainvisual from "../images/task4Images/mainvisual.png";
import recipe1 from "../images/task4Images/recipe1.png";
import recipe2 from "../images/task4Images/recipe2.png";
import recipe3 from "../images/task4Images/recipe3.png";
import res_mainvisual from "../images/task4Images/res_mainvisual.png";
import res_recipe1 from "../images/task4Images/res_recipe1.png";
import res_recipe2 from "../images/task4Images/res_recipe2.png";
import res_recipe3 from "../images/task4Images/res_recipe3.png";


const Task4 = () => {
  return(
    <Box sx={{ fontFamily: "Arial", width: "100%" }}>
      {/* メインビジュアル */}
      <Box
        sx={{ width: {xs: "375px", md: "100%"}}}
      >
      <Box
        sx={{
          width: "100%",
          height: "700px",
          backgroundImage: {xs: `url(${res_mainvisual})`, md:`url(${mainvisual})`},
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          '@media (min-width: 900px)': {
            backgroundSize: "cover", 
          },
        }}
      ></Box>
      </Box>

      {/* Recipe Diary */}
      <Box
        sx={{
          width: {xs: "330px", md: "580px"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "80px auto"
        }}
      >
        <Typography sx={{ fontSize: "32px", fontWeight: "bold", fontFamily: "Arial" }}>Recipe Diary</Typography>
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px"
        }}
        >
        <Typography variant="body1">日々の料理レシピをまとめています。</Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、</Typography>
        <Typography variant="body1">みなさんの献立にお役立てくださいね！</Typography>
        </Box>
      </Box>

      {/* ３枚の画像 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundImage: {xs: `url(${res_recipe1})`, md:`url(${recipe1})`},
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
          width: "100%",
          height: "500px",
          backgroundImage: {xs: `url(${res_recipe2})`, md:`url(${recipe2})`},
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
          width: "100%",
          height: "500px",
          backgroundImage: {xs: `url(${res_recipe3})`, md:`url(${recipe3})`},
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          '@media (min-width: 900px)': {
            backgroundSize: "cover", 
          },
        }}
      ></Box>
      </Box>

      {/* 最後の部分 */}
      <Box
        sx={{
          width: "100%",
          margin: "60px auto 20px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "space-between"
        }}
      >
        <Button 
          sx={{
            width: "232px",
            fontSize: "14px",
            border: "solid 1px #2B2A27",
            borderRadius: "0",
            color: "#2B2A27",
            margin: "0 auto"
          }}
        >
          レシピ一覧を見る
        </Button>
        <Box
          sx={{
            width: "232px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "100px auto 20px auto",
          }}
        >
          <Link 
            href="#" 
            sx={{ 
              color: "#2B2A27", 
              fontSize: "12px",
              textDecoration: "underline",  // 下線を有効にする
              textUnderlineOffset: "3px",   // 文字と下線の間に9pxのスペースを追加
                "--Link-underlineColor": "#2B2A27",  // カスタムプロパティの指定
            }}
          >
            Instagram
          </Link>
          <Link 
          href="#"
            sx={{ 
              color: "#2B2A27",
              fontSize: "12px",
              textDecoration: "underline",  // 下線を有効にする
              textUnderlineOffset: "3px",   // 文字と下線の間に9pxのスペースを追加
                "--Link-underlineColor": "#2B2A27",  // カスタムプロパティの指定
            }}
          >
            Twitter
            </Link>
          <Link 
          href="#"
            sx={{ 
              color: "#2B2A27",
              fontSize: "12px",
              textDecoration: "underline",  // 下線を有効にする
              textUnderlineOffset: "3px",   // 文字と下線の間に9pxのスペースを追加
                "--Link-underlineColor": "#2B2A27",  // カスタムプロパティの指定
            }}
          >
            Facebook
          </Link>
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
        paddingBottom: "20px",
        margin: "0 auto"
          }}
        >
          © 2020 PHOTO BOOK
        </Typography>
    </footer>
    </Box>
  );
};

export default Task4;