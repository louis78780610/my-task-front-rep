import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { about, mainvisual, menu, location, res_about, res_location, res_mainvisual, res_menu } from "../images/task13Images";
import { StyleHeaderNav } from "./Style";

const Task13 = () => {
  const coffeeMenuData = [
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
  ];

  const coffeePriceData = [
    "¥500",
    "¥500",
    "¥500",
    "¥500",
    "¥500",
    "¥500",
    "¥500",
    "¥500",
    "¥500",
    "¥500",
  ];

  const menuRightData = [
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
  ];

  const menuRightPriceData = [
    "¥500",
    "¥500",
    "¥500",
  ];

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "600px",
          backgroundImage: { xs: `url(${res_mainvisual})`, md: `url(${mainvisual})` },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <StyleHeaderNav>
          <Link
            href="#"
            sx={{ 
              color: "#fff",
              fontSize: "14.4px",
              textDecoration: "none",
              fontFamily: "Arial",
            }}
          >
              MENU
          </Link>
          <Link
            href="#"
            sx={{ 
              color: "#fff",
              fontSize: "14.4px",
              textDecoration: "none",
              fontFamily: "Arial",
            }}
          >
            ABOUT
          </Link>
          <Link
            href="#"
            sx={{ 
              color: "#fff",
              fontSize: "14.4px",
              textDecoration: "none",
              fontFamily: "Arial",
            }}
          >
            LOCATION
          </Link>
        </StyleHeaderNav>
        <Typography
          sx={{
            fontSize: {xs: "84.5px", md: "115px"},
            fontFamily: "Arial",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          COFFEE
        </Typography>
      </Box>

      {/* メニュー */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "94px", md: "300px" },
          backgroundImage: { xs: `url(${res_menu})`, md: `url(${menu})` },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: { xs: "10px", md: "20px" }
        }}
      >
        <Typography
          sx={{
            fontSize: {xs: "32px", md: "115px"},
            fontFamily: "Arial",
            color: "white",
            fontWeight: "bold",
          }}
        >
          MENU
        </Typography>
      </Box>
      <Grid container sx={{ padding: {xs: "30px 16px 100px", md: "90px 156px 170px 156px"}}}>
        <Grid item xs={12} md={6} sx={{ paddingRight: {xs: "0", md: "70px"}}}>
          <Typography 
            sx={{
              width: {xs: "81px", md: "162px"},
              fontSize: {xs: "20px", md: "40px"},
              fontFamily: "Arial",
              color: "#000000",
              fontWeight: "bold",
              borderBottom: "6px solid #E03131",
              margin: {xs: "0 auto 25px", md: "0 auto 70px"}
            }}
          >
            COFFEE
          </Typography>
            {coffeeMenuData.map((data, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: { xs: "298px", md: "346px" },
                  margin: "0 auto 25px",
                }}
              >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}
              >
                <Typography sx={{ fontSize: "16px", fontFamily: "Arial" }}>
                  {data}
                </Typography>

                <Divider
                  flexItem
                  sx={{
                    width: {xs: "270px", md: "346px"},
                    borderStyle: "dotted",
                    borderColor: "#000000"
                  }}
                />
                </Box>
                <Typography sx={{ fontSize: "16px", fontFamily: "Arial", marginLeft: {xs: "13px", md: "16px"} }}>
                  {coffeePriceData[index]}
                </Typography>
              </Box>
            ))}
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            position: "relative",
            borderColor: "#000000",
            "&::before": {
              content: '""',
            },
          }}
        />

        <Grid item xs={12} md={5.9}>
        <Typography 
            sx={{
              width: {xs: "58px", md: "116px"},
              fontSize: {xs: "20px", md: "40px"},
              fontFamily: "Arial",
              color: "#000000",
              fontWeight: "bold",
              borderBottom: "6px solid #E03131",
              margin: {xs: "0 auto 25px", md: "0 auto 70px"}
            }}
          >
            FOOD
          </Typography>
            {menuRightData.map((data, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: { xs: "298px", md: "346px" },
                  margin: "0 auto 25px",
                }}
              >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}
              >
                <Typography sx={{ fontSize: "16px", fontFamily: "Arial" }}>
                  {data}
                </Typography>

                <Divider
                  flexItem
                  sx={{
                    width: {xs: "270px", md: "346px"},
                    borderStyle: "dotted",
                    borderColor: "#000000"
                  }}
                />
              </Box>
                <Typography sx={{ fontSize: "16px", fontFamily: "Arial", marginLeft: {xs: "13px", md: "16px"} }}>
                  {menuRightPriceData[index]}
                </Typography>
              </Box>
            ))}
        <Typography 
            sx={{
              width: {xs: "70px", md: "140px"},
              fontSize: {xs: "20px", md: "40px"},
              fontFamily: "Arial",
              color: "#000000",
              fontWeight: "bold",
              borderBottom: "6px solid #E03131",
              margin: {xs: "0 auto 25px", md: "80px auto 70px"}
            }}
          >
            OTHER
          </Typography>
            {menuRightData.map((data, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: { xs: "298px", md: "346px" },
                  margin: "0 auto 25px",
                }}
              >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}
              >
                <Typography sx={{ fontSize: "16px", fontFamily: "Arial" }}>
                  {data}
                </Typography>

                <Divider
                  flexItem
                  sx={{
                    width: {xs: "270px", md: "346px"},
                    borderStyle: "dotted",
                    borderColor: "#000000"
                  }}
                />
              </Box>
                <Typography sx={{ fontSize: "16px", fontFamily: "Arial", marginLeft: {xs: "13px", md: "16px"} }}>
                  {menuRightPriceData[index]}
                </Typography>
              </Box>
            ))}
        </Grid>
      </Grid>

      {/* About */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "94px", md: "300px" },
          backgroundImage: { xs: `url(${res_about})`, md: `url(${about})` },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: { xs: "10px", md: "20px" }
        }}
      >
        <Typography
          sx={{
            fontSize: {xs: "32px", md: "115px"},
            fontFamily: "Arial",
            color: "white",
            fontWeight: "bold",
          }}
        >
          ABOUT
        </Typography>
      </Box>
      
      {/* Coffee */}
      <Box
        sx={{ padding: {xs: "30px 16px 115px ", md: "90px 156px 170px 156px"}
      }}
      >
        <Typography 
          sx={{
            width: {xs: "81px", md: "162px"},
            fontSize: {xs: "20px", md: "40px"},
            fontFamily: "Arial",
            color: "#000000",
            fontWeight: "bold",
            borderBottom: "6px solid #E03131",
            margin: {xs: "0 auto 25px", md: "0 auto 70px"}
          }}
        >
          COFFEE
        </Typography>
        <Grid container sx={{ margin: { xs: "35px 0 50px 0", md: "90px 0 60px 0"}}}>
          <Grid item xs={12} md={6} sx={{paddingRight: {xs: "0", md: "20px"}}}>
            <Typography
              sx={{
                color: "#000000",
                fontSize: "14.4px",
                fontFamily: "Arial",
                marginBottom: {xs: "20px", md: "40px"}
                }}
            >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                fontSize: "14.4px",
                fontFamily: "Arial",
                marginBottom: {xs: "20px", md: "0"}
                }}
            >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{paddingLeft: {xs: "0", md: "20px"}}}>
          <Typography
              sx={{
                color: "#000000",
                fontSize: "14.4px",
                fontFamily: "Arial",
                marginBottom: {xs: "20px", md: "40px"}
                }}
            >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                fontSize: "14.4px",
                fontFamily: "Arial",
                marginBottom: {xs: "20px", md: "0"}
                }}
            >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "inline-block",
              justifyContent: "center",
              alignItems: "center",
              padding: "17px 45px",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                borderColor: "#e57373", // 赤色の角
                borderWidth: "1px",
                borderStyle: "solid",
              },
              "&::before": {
                top: 0,
                left: 0,
                width: "15px",
                height: "15px",
                borderRight: "none",
                borderBottom: "none",
              },
              "&::after": {
                bottom: 0,
                right: 0,
                width: "15px",
                height: "15px",
                borderLeft: "none",
                borderTop: "none",
              },
            }}
          >
            <Typography sx={{ color: "#333", fontSize: "14.4px", }}>
              Read More
            </Typography>
          </Box>
        </Box>
      </Box>

            {/* Location */}
            <Box
        sx={{
          width: "100%",
          height: { xs: "94px", md: "300px" },
          backgroundImage: { xs: `url(${res_location})`, md: `url(${location})` },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: { xs: "10px", md: "20px" }
        }}
      >
        <Typography
          sx={{
            fontSize: {xs: "32px", md: "115px"},
            fontFamily: "Arial",
            color: "white",
            fontWeight: "bold",
          }}
        >
          LOCATION
        </Typography>
      </Box>

      {/* Our Store */}
      <Box
        sx={{ padding: {xs: "30px 16px 115px", md: "90px 156px 170px 156px"}
      }}
      >
        <Typography 
          sx={{
            width: {xs: "130px", md: "270px"},
            fontSize: {xs: "20px", md: "40px"},
            fontFamily: "Arial",
            color: "#000000",
            fontWeight: "bold",
            borderBottom: "6px solid #E03131",
            margin: {xs: "0 auto 50px", md: "0 auto 70px"}
          }}
        >
          OUR STORE
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: "40px"
          }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=ここにGoogleマップから取得したURLを貼り付けます"
            width="100%"
            height="450"
            style=
            {{ 
              border: 0,
              filter: "grayscale(100%) contrast(90%) brightness(100%)",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px"
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontFamily: "Arial",
            }}
          >
            X-XX-XX, Ebisuminami, Shibuya-ku, Tokyo 150-0022
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontFamily: "Arial",
            }}
          >
            東京都渋谷区恵比寿南X-XX-XX
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontFamily: "Arial",
            }}
          >
            Open 7 days a Week
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontFamily: "Arial",
            }}
          >
            9:00am to 10:00pm
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontFamily: "Arial",
            }}
          >
            Tel : XX-XXXX-XXXX
          </Typography>
        </Box>
      </Box>

          {/* フッター */}
          <Box
            component="footer"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px"
            }}
          >
            <Typography 
              sx={{ 
                fontSize: "10px",
                height: "10px",
                color: "#000000"
                  }}
                >
                  © COFFEE
            </Typography>
          </Box>
    </Box>
  );
};

export default Task13;
