import { Box, Divider, Grid, Link, List, ListItem, ListItemIcon, Typography } from "@mui/material"
import { author, logo, main1, main2, main3, pickup1, pickup2, pickup3, ranking1, ranking2, ranking3, resMain1, resMain2, resMain3, resPickup1, resPickup2, resPickup3, resRanking1, resRanking2, resRanking3 } from "../images/task12Images";
import { StyleHeader, StyleHeaderNav, StyleLogo } from "./Style";
import { ArrowRight } from "@mui/icons-material";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Task12 = () => {
  const mainImages = [
    { mobile: resMain1, desktop: main1 },
    { mobile: resMain2, desktop: main2 },
    { mobile: resMain3, desktop: main3 },
  ]

  const rankingImage = [
    { mobile: resRanking1, desktop: ranking1 },
    { mobile: resRanking2, desktop: ranking2 },
    { mobile: resRanking3, desktop: ranking3 },
  ]

  const archiveDates = [
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
    "XXXX年XX月(XX)",
  ];

  const menuIcons = [
    "プロフィール詳細",
    "お仕事の依頼",
    "お問い合わせ"
  ]

  const menuDates = [
    "NEW",
    "CATEGORY",
    "COLUMN",
    "SERIES",
    "Q&A",
  ]

  return (
    <Box>
        <StyleHeader>
          <StyleLogo>
          <Box
            sx={{
              width: "145px",
              height: "30px",
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              }}
          />
          </StyleLogo>
          <StyleHeaderNav>
            <Link
            href="#"
            sx={{ 
              color: "#fff",
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "Arial",
            }}
          >
            NEW
            </Link>
            <Link
            href="#"
            sx={{ 
              color: "#fff",
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "Arial",
            }}
          >
            COLUMN
            </Link>
            <Link
            href="#"
            sx={{ 
              color: "#fff",
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "Arial",
            }}
          >
            SERIES
            </Link>
            <Link
            href="#"
            sx={{ 
              color: "#fff",
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "Arial",
            }}
          >
            Q&A
            </Link>
            <Link
            href="#"
            sx={{ 
              color: "#fff",
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "Arial",
              display: {xs: "none", md: "block"}
            }}
          >
            CONTACT
            </Link>
          </StyleHeaderNav>
        </StyleHeader>
        
        <Box sx={{ padding: {xs: "34px 16px 120px", md: "44px 217px 140px"}}}>
          <Grid container spacing={4} sx={{ marginBottom: "70px"}}>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: {xs: "343px", md: "375px"},
                height:{xs: "193px", md: "210px"},
                backgroundImage: { xs: `url(${resPickup1})`, md: `url(${pickup1})` },
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <Typography 
              style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                fontFamily: 'Arial',
                margin: "10px 0 15px 0"
              }}
            >
              タイトルテキストテキストテキストテキストテキストテキストテキスト
            </Typography>
            <Box sx={{ textAlign: "center" }}>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "14px",
                fontFamily: "Arial",
                margin: "0 auto",
                textDecoration: "underline",
                textDecorationColor: "#333333",
                textUnderlineOffset: "3px"
              }}
            >
            READ MORE
            </Link>
            </Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: {xs: "343px", md: "375px"},
                height:{xs: "193px", md: "210px"},
                backgroundImage: { xs: `url(${resPickup2})`, md: `url(${pickup2})` },
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <Typography 
              style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                fontFamily: 'Arial',
                margin: "10px 0 15px 0"
              }}
            >
              タイトルテキストテキストテキストテキストテキストテキストテキスト
            </Typography>
            <Box sx={{ textAlign: "center" }}>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "14px",
                fontFamily: "Arial",
                margin: "0 auto",
                textDecoration: "underline",
                textDecorationColor: "#333333",
                textUnderlineOffset: "3px"
              }}
            >
            READ MORE
            </Link>
            </Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: {xs: "343px", md: "375px"},
                height:{xs: "193px", md: "210px"},
                backgroundImage: { xs: `url(${resPickup3})`, md: `url(${pickup3})` },
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <Typography 
              style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                fontFamily: 'Arial',
                margin: "10px 0 15px 0"
              }}
            >
              タイトルテキストテキストテキストテキストテキストテキストテキスト
            </Typography>
            <Box sx={{ textAlign: "center" }}>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "14px",
                fontFamily: "Arial",
                textAlign: "center",
                textDecoration: "underline",
                textDecorationColor: "#333333",
                textUnderlineOffset: "3px"
              }}
            >
            READ MORE
            </Link>
            </Box>
            </Grid>
          </Grid>

          {/* ２カラム */}
          {/* 左側 */}
          <Grid container>
            <Grid item xs={12} md={8}>
              {mainImages.map((image, index) => (
                <Box key={index} sx={{ marginBottom: "80px"}}>
                  <Typography sx={{ fontSize: "24px", fontFamily: "Arial", fontWeight: "bold"}}>タイトルテキストテキストテキストテキストテキスト</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "20px",
                      margin: "10px 0"
                    }}
                  >
                  <Typography variant="body2">2020/01/01</Typography>
                  <Typography variant="body2">カテゴリ1</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: '343px', md: '759px' },
                      height: { xs: '193px', md: '427px' },
                      backgroundImage: {
                        xs: `url(${image.mobile})`, // モバイル用画像
                        md: `url(${image.desktop})`, // デスクトップ用画像
                      },
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                  <Typography 
                    sx={{ 
                      padding: {xs: "10px 58px 30px 58px", md: "10px 49px 30px"},
                      fontSize: "16px", 
                      fontFamily: "Arial",
                      }}>
                  本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Typography>
                  <Box sx={{ textAlign: "center"}}>
                  <Link
                    href="#"
                    sx={{ 
                      color: "#333333",
                      fontSize: "14px",
                      fontFamily: "Arial",
                      textAlign: "center",
                      textDecoration: "underline",
                      textDecorationColor: "#333333",
                      textUnderlineOffset: "3px"
                    }}
                  >
                    READ MORE
                  </Link>
                  </Box>
                </Box>
              ))}
            </Grid>

            {/* 右側のサイドバー */}
              <Grid item xs={12} md={4} sx={{ paddingLeft: {xs: "0", md: "54px"}}}>
                <Box
                  sx={{
                    width: "130px",
                    height: "130px",
                    backgroundImage: `url(${author})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    margin: "0 auto"
                  }}
                />
                <Typography
                  sx={{
                    padding: "30px 0",
                    fontSize: "18px", 
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  Name Name
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "60px",
                    fontSize: "18px", 
                    fontFamily: "Arial",
                  }}
                >
                  プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Typography>

                {/* ランキング */}
                <Typography
                  sx={{
                    fontSize: "18px", 
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    marginBottom: "30px",
                    textAlign: "center"
                  }}
                >
                  Ranking
                </Typography>
                  {rankingImage.map((image, index) => (
                <Box key={index} sx={{ marginBottom: "60px"}}>
                <Box
                  sx={{
                    width: { xs: '343px', md: '345px' },
                    height: { xs: '193px', md: '194px' },
                    backgroundImage: {
                      xs: `url(${image.mobile})`, // モバイル用画像
                      md: `url(${image.desktop})`, // デスクトップ用画像
                    },
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                />
                <Typography 
                  sx={{ 
                    fontSize: "14px", 
                    fontFamily: "Arial",
                    }}>
                      タイトルテキストテキストテキストテキストテキストテキスト
                </Typography>
              </Box>
                ))}

                {/* Archive */}
                <Box>
                  <Typography
                  sx={{
                    fontSize: "18px", 
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    marginBottom: "30px",
                    textAlign: "center"
                  }}
                  >
                    Archive
                  </Typography>
                  {archiveDates.map((data, index) => (
                    <Box key={index}>
                      <Divider 
                        sx={{
                          border: "solid 1px #777777"
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "14px", 
                          fontFamily: "Arial",
                          textAlign: "left",
                          padding: "20px 0 20px 20px"
                        }}
                      >
                        {data}
                      </Typography>
                    </Box>
                ))}
                <Divider 
                  sx={{
                    border: "solid 1px #777777"
                  }}
                />
                </Box>
              </Grid>
          </Grid>
        </Box>

        {/* フッター手前 */}
        <Box
          sx={{
            padding: {xs: "50px 16px 10px 16px", md: "50px 217px 10px 217px"},
            backgroundColor: "#F7F7F7"
          }}
        >
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontSize: "18px", 
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  textAlign: "left",
                  marginBottom: "30px"
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px", 
                  fontFamily: "Arial",
                  textAlign: "left",
                  marginBottom: "20px"
                }}
              >
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Typography>
              <List>
                {menuIcons.map(( items, index) => (
                  <ListItem key={index} sx={{padding: "0"}}>
                    <ListItemIcon sx={{minWidth: "0"}}>
                      <ArrowRight fontSize="small" sx={{ color: "#333" }} />
                    </ListItemIcon>
                    <Typography
                      sx={{
                        fontSize: "14px", 
                        fontFamily: "Arial",
                        textAlign: "left",
                      }}
                    >
                      {items}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4} sx={{ padding: {xs: "50px 0 0 0", md: "0 0 0 72px"}}}>
            <Typography
                sx={{
                  fontSize: "18px", 
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  textAlign: "left",
                  marginBottom: "30px"
                }}
              >
                Menu
              </Typography>
              {menuDates.map((data, index) => (
                    <Box key={index}>
                      <Divider 
                        sx={{
                          border: "solid 1px #777777"
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "14px", 
                          fontFamily: "Arial",
                          textAlign: "left",
                          padding: "15px 0 15px 15px"
                        }}
                      >
                        {data}
                      </Typography>
                    </Box>
                ))}
                <Divider 
                  sx={{
                    border: "solid 1px #777777"
                  }}
                />
            </Grid>
            <Grid item xs={12} md={4} sx={{ padding: {xs: "30px 0 0 0", md: "0 0 0 53px"}}}>
              <Typography
                  sx={{
                    fontSize: "18px", 
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    textAlign: "left",
                    marginBottom: "30px"
                  }}
                >
                  Twitter
              </Typography>
              <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="testa001" // 表示したいユーザー名を指定
                  options={{ height: 315, width: 347 }}
              />
            </Grid>
          </Grid>

          {/* フッター */}
          <Box
            component="footer"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: { xs: "90px", md: "60px"}
            }}
          >
            <Typography 
              sx={{ 
                fontSize: "12px",
                height: "10px",
                color: "#333333"
                  }}
                >
                  © Travel & Blog
            </Typography>
          </Box>
        </Box>
    </Box>
  );
};

export default Task12;
