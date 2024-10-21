import { Box, Button, Grid, Typography } from "@mui/material"
import { antique, catalog, fashion, logo, magazineArchive, magazineNew, mainvisual, resAntique, resCatalog, resFashion, resMagazineArchive, resMagazineNew, resMainvisual } from "../images/task8Images";
import { Archive, Style, More } from "@mui/icons-material";
import { StyleBlackBox, StyleCatalog, StyleFashion, StyleMag88 } from "./Style";

const Task8 = () => {
  return (
    <Box
      sx={{
        width: "100%"
      }}
    >
      {/* メインビジュアル */}
      <Box
        sx={{
          width: "100%",
          height: "600px",
          backgroundImage: {xs: `url(${resMainvisual})`, md:`url(${mainvisual})`},
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          position: "relative", 
        }}
      >
        <Box
        sx={{
          width: "120px",
          height: "40px",
          backgroundImage: `url(${logo})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          top: "30px",
          right: "30px"
        }}
        ></Box>
      </Box>

        {/* A special, long article in a newspaper or magazine */}
      <Box sx={{ padding: {xs: "0 19px", md: "0 200px"}, margin: "80px auto"}}>
        <Typography 
          sx={{ 
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "24px",
            fontFamily: "Arial",
            fontWeight: "bold"
          }}
          >
            A special, long article in a newspaper or magazine
          </Typography>
          <Typography
          sx={{ 
            textAlign: "center",
            marginBottom: {xs: "0", md: "20px"},
            fontSize: "14px",
            fontFamily: "Arial",
          }}
          >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Typography>
          <Typography
          sx={{ 
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "14px",
            fontFamily: "Arial",
          }}
          >
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </Typography>
        
        {/* ２枚の画像 */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ marginBottom: {xs: "15px", md: "0"}}}>
          <Box
            sx={{
              width: "100%",
              height: {xs: "338px", md: "510px"},
              backgroundImage: {xs: `url(${resMagazineArchive})`, md:`url(${magazineArchive})`},
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <StyleBlackBox>
              <Typography 
              sx={{ 
                textAlign: "center",
                fontSize: "20px",
                fontFamily: "Arial",
                fontWeight: "bold",
                color: "#FFFFFF"
              }}
              >
                Archive
              </Typography>
              <Typography
              sx={{ 
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "Arial",
                color: "#FFFFFF"
              }}
              >
                テキストテキストテキストテキスト
              </Typography>
              <Typography
              sx={{ 
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "Arial",
                color: "#FFFFFF"
              }}
              >
                テキストテキストテキスト
              </Typography>
            </StyleBlackBox>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: {xs: "338px", md: "510px"},
              backgroundImage: {xs: `url(${resMagazineNew})`, md:`url(${magazineNew})`},
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <StyleBlackBox>
              <Typography 
              sx={{ 
                textAlign: "center",
                fontSize: "20px",
                fontFamily: "Arial",
                fontWeight: "bold",
                color: "#FFFFFF"
              }}
              >
                New
              </Typography>
              <Typography
              sx={{ 
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "Arial",
                color: "#FFFFFF"
              }}
              >
                テキストテキストテキストテキスト
              </Typography>
              <Typography
              sx={{ 
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "Arial",
                color: "#FFFFFF"
              }}
              >
                テキストテキストテキスト
              </Typography>
            </StyleBlackBox>
          </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Fashion & Style */}
      <Box
            sx={{
              width: "100%",
              height: "520px",
              backgroundImage: {xs: `url(${resFashion})`, md:`url(${fashion})`},
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginBottom: {xs: "50px", md: "80px"},
              '@media (min-width: 900px)': {
                backgroundSize: "cover", 
              },
            }}
          >
            <StyleFashion>
              <Typography 
              sx={{ 
                textAlign: "center",
                fontSize: "24px",
                fontFamily: "Arial",
                fontWeight: "bold",
                color: "#24292E",
                marginBottom: "20px",
              }}
              >
                Fashion & Style
              </Typography>
              <Typography
              sx={{ 
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "Arial",
                color: "#24292E"
              }}
              >
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Typography>
              <Typography
              sx={{ 
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "Arial",
                color: "#24292E"
              }}
              >
                テキストテキストテキストテキストテキストテキストテキストテキスト
              </Typography>
              <Box sx={{ textAlign: 'center', marginTop: "30px" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: "132x",              // ボタンの幅を固定
                    height: "42px",              // ボタンの高さを固定
                    fontSize: "14px",            // テキストサイズ
                    fontFamily: "Arial",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    textTransform: "none",
                    boxShadow: "none",
                    border: "solid 1px #2A2A2A",
                    padding: "0 36px",
                    color: "#24292E",
                    borderRadius: "0",         // ボタンの角を少し丸く
                    '&:hover': {
                      backgroundColor: "#343a40",  // ホバー時の背景色を少し明るく
                    },
                  }}
                >
                  Read More
                </Button>
              </Box>
            </StyleFashion>
          </Box>

          {/* Catalog */}
          <StyleCatalog>
            <Box 
              sx={{
                width: { sx: "339px", md: "100%" },
                display: "flex",           // 全体を中央寄せする
                flexDirection: {xs: "column", md: "row"},
                justifyContent: "center", 
                alignItems: "center",
                margin: { xs: "50px auto", md: "62px auto" }
              }}
            >
            <Grid container sx={{ width: "100%", padding:{ xs: "30px 22px 0 22px", md: "60px 250px 0 250px" }}}>  {/* コンテナを設定し、最大幅を制限 */}
              {/* 左側の画像部分 */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: "100%",                 // 幅を100%に設定
                    height: {xs: "337px", md: "500px"},               // 固定の高さ
                    backgroundImage: { xs: `url(${resCatalog})`, md: `url(${catalog})` },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
              </Grid>
            
            {/* 右側のテキスト部分 */}
                <Grid item xs={12} md={6} 
                  sx={{
                    width: "100%",
                    height: {xs: "100%", md: "500px"},               // 固定の高さ
                    display: "flex",           // フレックスレイアウトで縦に揃える
                    flexDirection: "column",
                    justifyContent: "center",   // 縦方向の中央揃え
                    alignItems: { xs: "center", md: "flex-start" }, 
                    paddingLeft: {xs: "0", md: "40px"},
                    marginTop: {xs: "60px", md: "0"}
                  }}
                >
                  <Box sx={{ width: "100%"}}>
                    <Typography sx={{ fontSize: "27px", fontFamily: "Arial", textAlign: "center", marginBottom: "40px", }}>Catalog</Typography>
                    <Typography 
                    sx={{ 
                      marginBottom: "30px",
                      fontSize: "14px", 
                      fontFamily: "Arial"
                      }}
                    >
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </Typography>
                    <Typography 
                    sx={{ 
                      marginBottom: "30px",
                      fontSize: "14px", 
                      fontFamily: "Arial"
                      }}
                    >
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </Typography>
                    <Typography 
                    sx={{ 
                      fontSize: "14px", 
                      fontFamily: "Arial"
                      }}
                    >
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
        
        <Box 
          sx={{
            width: { sx: "339px", md: "100%" },
            display: "flex",           // 全体を中央寄せする
            flexDirection: {xs: "column", md: "row"},
            justifyContent: "center", 
            alignItems: "center",
            margin: { xs: "50px auto", md: "62px auto" }
        }}>
        <Grid container sx={{ width: "100%", padding:{ xs: "0 22px", md: "0 250px" } }}>  {/* コンテナを設定し、最大幅を制限 */}
          {/* 左側のテキスト部分 */}
          <Grid item xs={12} md={6} 
            sx={{
              display: "flex",           // フレックスレイアウトで縦に揃える
              flexDirection: "column",
              justifyContent: "center",   // 縦方向の中央揃え
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ width: "100%"}}>
              <Typography sx={{ fontSize: "27px", fontFamily: "Arial", textAlign: "center", marginBottom: "40px"}}>Antique</Typography>
              <Typography 
              sx={{ 
                marginBottom: "30px",
                fontSize: "14px", 
                fontFamily: "Arial"
          }}
              >
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Typography>
              <Typography 
              sx={{ 
                marginBottom: "60px",
                fontSize: "14px", 
                fontFamily: "Arial"
          }}
              >
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  sx={{
                    width: "132x",              // ボタンの幅を固定
                    height: "42px",              // ボタンの高さを固定
                    fontSize: "14px",            // テキストサイズ
                    fontFamily: "Arial",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    textTransform: "none",
                    boxShadow: "none",
                    border: "solid 1px #2A2A2A",
                    padding: "0 36px",
                    marginBottom: {xs: "60px", md: "0"},
                    color: "#24292E",
                    borderRadius: "0",         // ボタンの角を少し丸く
                    '&:hover': {
                      backgroundColor: "#343a40",  // ホバー時の背景色を少し明るく
                    },
                  }}
                >
                  Read More
                </Button>
              </Box>
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
                height: {xs: "337px", md: "500px"},              // 固定の高さ
                backgroundImage: { xs: `url(${resAntique})`, md: `url(${antique})` },
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: { xs: "10px", md: "0" },
                marginLeft: {xs: "0", md: "40px"}
              }}
            />
          </Grid>
        </Grid>
        </Box>
      </StyleCatalog>

      {/* Mag88 */}
      <StyleMag88>
        <Box
          sx={{
            width: "120px",
            height: "40px",
            backgroundImage: `url(${logo})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: { xs: "0 auto 30px", md: "0" },
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: {xs: "flex-start", md: "center"},
            alignItems: "flex-start", // 左揃え
            marginRight: {xs: "0", md: "20px"},  // 右側に余白を追加
            color: "#FFFFFF",
            marginBottom: {xs: "30px", md:"0"}
          }}
        >
          <Typography 
            sx={{ 
              fontSize: "16px", 
              fontFamily: "Arial", 
              fontWeight: "bold", 
              marginBottom: "10px", 
              alignItems:"center",
              }}
            >
            タイトル
          </Typography>
          <Typography
            sx={{ 
              fontSize: "12px", 
              fontFamily: "Arial",
              lineHeight: "18px"
            }}
          >
            - テキストテキストテキスト
          </Typography>
          <Typography
            sx={{ 
              fontSize: "12px", 
              fontFamily: "Arial",
              lineHeight: "24px"
            }}
          >
            - テキストテキストテキスト
          </Typography>
          <Typography
            sx={{ 
              fontSize: "12px", 
              fontFamily: "Arial",
              lineHeight: "24px"
            }}
          >
            - テキストテキストテキスト
          </Typography>
          <Typography
            sx={{ 
              fontSize: "12px", 
              fontFamily: "Arial",
              lineHeight: "24px"
            }}
          >
            - テキストテキストテキスト
          </Typography>
          <Typography
            sx={{ 
              fontSize: "12px", 
              fontFamily: "Arial",
              lineHeight: "24px"
            }}
          >
            - テキストテキストテキスト
          </Typography>
        </Box>
        <Box
          sx={{
            width: "315px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",  // 左揃え
            color: "#FFFFFF"
          }}
        >
          <Typography sx={{ fontSize: "16px", fontFamily: "Arial", fontWeight: "bold", lineHeight: "18px", marginBottom: "10px"}}>タイトルタイトルタイトル</Typography>
          <Typography
            sx={{ 
              fontSize: "12px", 
              fontFamily: "Arial",
              lineHeight: "24px"
            }}
          >
            テキストテキストテキストテキストテキストテキストテキ
            ストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキ
            ストテキストテキストテキストテキストテキストテキスト
            テキスト
          </Typography>
        </Box>
      </StyleMag88>

      {/* フッター */}
      <footer
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#24292E"
      }}
    >
    <Typography 
      sx={{ 
        fontSize: "12px",
        height: "12px",
        margin: "0 auto"
          }}
        >
          © Mag88
        </Typography>
    </footer>
    </Box>
  );
};

export default Task8;
