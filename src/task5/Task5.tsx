import { Box, Button, Grid, Link, Typography } from "@mui/material";
import recipe from "../images/task5Images/recipe.png";
import res_recipe from "../images/task5Images/res_recipe.png";

const Task5 = () => {
  return(
    <Box sx={{ width: "100%" }}>
      <Box>
        <Grid container>
          <Grid item xs={12} md={6}>
          <Box
        sx={{
          width: "100%",
          height: { xs: "469px", md: "700px" },
          backgroundImage: {xs: `url(${res_recipe})`, md:`url(${recipe})`},
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          '@media (min-width: 900px)': {
            backgroundSize: "cover", 
          },
        }}
      ></Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                margin: {xs: "40px 16px 0", md: "40px 85px 0"}
              }}
            >
              <Typography sx={{ fontSize: "28px", fontWeight: "bold", fontFamily: "Arial"}}>ひよこ豆とアボガドのタコス</Typography>
              <Typography 
              variant="body1"
              sx={{
                margin: "20px 0 40px 0"
              }}
              >
                たっぷりのひよこ豆とレンズ豆にアボガドとトマトを添えて、少しライムを絞ったらおいしいタコスのできあがりです。
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: "20px", 
                  fontWeight: "bold", 
                  fontFamily: "Arial", 
                  borderBottom: "solid 1px #CCCCCC"
                  }}
                >
                  材料（2人分）
                </Typography>
              <Box
              sx={{
                margin: "20px 0 40px 0"
              }}
              >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
              >
              <Typography variant="body1">テキストテキスト</Typography>
              <Typography variant="body1">1個</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
              >
              <Typography variant="body1">テキストテキスト</Typography>
              <Typography variant="body1">1個</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
              >
              <Typography variant="body1">テキストテキスト</Typography>
              <Typography variant="body1">1個</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
              >
              <Typography variant="body1">テキストテキスト</Typography>
              <Typography variant="body1">1個</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
              >
              <Typography variant="body1">テキストテキスト</Typography>
              <Typography variant="body1">1個</Typography>
              </Box>
              </Box>

              <Typography 
              sx={{ 
                fontSize: "20px", 
                fontWeight: "bold", 
                fontFamily: "Arial",
                borderBottom: "solid 1px #CCCCCC"
                }}
                >
                  作り方
                </Typography>
              <Box
              sx={{
                margin: "20px 0 40px 0"
              }}
              >
              <Typography 
                variant="body1"
                sx={{
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
                >
                  1. テキストテキストテキストテキスト
                </Typography>
              <Typography 
                variant="body1"
                sx={{
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
                >
                  2. テキストテキストテキストテキスト
                </Typography>
              <Typography 
                variant="body1"
                sx={{
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
                >
                  3. テキストテキストテキストテキスト
                </Typography>
              <Typography 
                variant="body1"
                sx={{
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
                >
                  4. テキストテキストテキストテキスト
                </Typography>
              <Typography 
                variant="body1"
                sx={{
                  borderBottom: "solid 1px #CCCCCC",
                  marginBottom: "6px"
                }}
                >
                  5. テキストテキストテキストテキスト
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
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

export default Task5;