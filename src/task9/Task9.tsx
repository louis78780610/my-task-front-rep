import { Box, Button, Divider, Grid, Link, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import logo from "../images/task9Images/logo .png";
import item from "../images/task9Images/item.png";
import res_item from "../images/task9Images/res_item.png";
import { data } from './data';
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import { rows } from "./rows";

const Task9 = () => {
  return (
    <Box sx={{ padding: {xs: "36px 0 0 0", md:"46px 140px 0 140px "}}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: {xs:"0", md:"0 100px"},
        }}
      >
        <Box
          sx={{
            width: "109px",
            height: "19px",
            backgroundImage: `url(${logo})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: "0 auto"
          }}
          ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: {xs: "center", md: "space-between"},
            alignItems: "center",
            width: "100%",
            maxWidth: {xs: "375px", md:"1200px"},
            margin: {xs:"26px 0 16px 0", md:"36px 100px 26px 100px"},
          }}
        >
          <Box
            sx={{
              maxWidth: "350px",
              display: "flex",
              flexDirection: "row",
              justifyContent: {xs:"space-around", md:"flex-start"},
              gap: "14px"
            }}
            >
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "12px",
                textDecoration: "none",
                fontFamily: "Arial"
              }}
            >
              ALL
            </Link>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "12px",
                textDecoration: "none",
                fontFamily: "Arial"
              }}
            >
              NEW
            </Link>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "12px",
                textDecoration: "none",
                fontFamily: "Arial"
              }}
            >
              VINTAGE
            </Link>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "12px",
                textDecoration: "none",
                fontFamily: "Arial"
              }}
            >
              CATEGORY
            </Link>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "12px",
                textDecoration: "none",
                fontFamily: "Arial"
              }}
            >
              LOOKBOOK
            </Link>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "12px",
                textDecoration: "none",
                fontFamily: "Arial"
              }}
            >
              BLOG
            </Link>
          </Box>
          <Box
            sx={{
              maxWidth: "350px",
              display: {xs: "none", md:"flex"},
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "14px"
            }}
          >
          <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "12px",
                textDecoration: "none",
                fontFamily: "Arial"
              }}
            >
              LOGIN
            </Link>
            <Link
              href="#"
              sx={{ 
                color: "#333333",
                fontSize: "12px",
                textDecoration: "none",
                fontFamily: "Arial"
              }}
            >
              CONTACT
            </Link>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ marginBottom: "50px"}}/>

      {/* メインコンテンツ */}
          <Grid container sx={{padding: {xs: "0 16px", md: "0 100px"}}}>
            <Grid item xs={12} md={6} >
              <Box
                sx={{
                  width: "100%",                 // 幅を100%に設定
                  height: {xs: "468px", md: "500px"},               // 固定の高さ
                  backgroundImage: { xs: `url(${res_item})`, md: `url(${item})` },
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{paddingLeft: {xs: "0", md: "60px"}}}>
              <Box>
                <Divider sx={{ marginTop: {xs:"10px", md: "0"}}}/>
                <Typography
                  variant="h6"
                  sx={{
                    margin: "22px 0"
                  }}
                >
                  TOTALLY Short Sleeve Shirt
                </Typography>
                <Divider />
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Arial",
                    lineHeight: "22px",
                    margin: "20px 0 30px 0"
                  }}
                >
                  テキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキスト
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Arial",
                  }}
                >
                  ￥9,999 +tax
                </Typography>
              </Box>
              {/* MUIテーブル */}
              <TableContainer sx={{ width: "100%", margin: "30px 0 20px 0"}}> {/* テーブル全体の幅を指定 */}
                <Table> {/* テーブルの幅を100%に */}
                        
                  {/* テーブルヘッダー */}
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" sx={{ width: "68px !important", borderRight: "1px solid #C3C3C3", height: "34px", padding: "0", fontSize:"12px", fontFamily: "Arial" }}>Color</TableCell> {/* セルの中央寄せ */}
                      <TableCell align="center" sx={{ width: "68px !important", borderRight: "1px solid #C3C3C3", height: "34px", padding: "0", fontSize:"12px", fontFamily: "Arial" }}>Size</TableCell> {/* セルの中央寄せ */}
                      <TableCell align="center" sx={{ width: "68px !important", height: "34px", padding: "0" }}></TableCell> {/* 空セル */}
                    </TableRow>
                  </TableHead>              

                  {/* テーブルボディ */}
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow 
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': {
                            borderBottom: "none",
                          },
                        }}
                        >
                        <TableCell align="center" sx={{ width: "68px !important", borderRight: "1px solid #C3C3C3", height: "34px", padding: "0", fontSize:"12px", fontFamily: "Arial" }}>{row.color}</TableCell> {/* セルの中央寄せ */}
                        <TableCell align="center" sx={{ width: "68px !important", borderRight: "1px solid #C3C3C3", height: "34px", padding: "0", fontSize:"12px", fontFamily: "Arial" }}>{row.size}</TableCell> {/* セルの中央寄せ */}
                        <TableCell align="center" sx={{ width: "68px !important", height: "34px", padding: "0" }}>
                          {/* MUI の Select コンポーネントを使ったドロップダウン */}
                          <Select 
                            defaultValue="" 
                            displayEmpty 
                            sx={{
                              width: "180px",     // セレクトボックスの幅を広げる
                              padding: "0px",   // paddingを0に設定
                              '& .MuiSelect-select': {
                                padding: "0px",  // 内部の選択部分のpaddingを0に
                                borderRight: "0",
                              }
                            }}                  > {/* セレクトボックスの幅をセルいっぱいに */}
                            <MenuItem></MenuItem>
                            <MenuItem></MenuItem>
                            <MenuItem></MenuItem>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#4B4B4B",  // ダークグレーの背景色
                    color: "#fff",               // 白いテキスト
                    width: "100%",              // ボタンの幅を固定
                    height: "50px",              // ボタンの高さを固定
                    fontSize: "12px",            // テキストサイズ
                    fontFamily: "Arial",
                    borderRadius: "0",         // ボタンの角を少し丸く
                    marginBottom: "30px",
                    '&:hover': {
                      backgroundColor: "#4B4B4B",  // ホバー時の背景色を少し明るく
                    },
                  }}
                  >
                  ADD TO CART
                </Button>
              </Box>
              <Box sx={{ width: '100%' }}>
                  <DataGrid 
                    rows={rows}
                    columns={columns}
                    paginationModel={{ pageSize: 3, page: 0 }} 
                    disableColumnMenu // 列メニューを無効化
                    hideFooterPagination // ページネーションを隠す
                    hideFooter // フッター全体を非表示にする
                    disableColumnSelector // 列選択機能を無効化
                    disableColumnResize // 列のリサイズを無効化
                    disableColumnSorting // 全ての列でソートを無効化
                    sx={{
                      // カスタムCSS変数を上書き
                      '--DataGrid-containerBackground': '#ECEBEB', // コンテナ背景色
                      '--DataGrid-pinnedBackground': '#ECEBEB',    // ピン留め列背景色
                      '--DataGrid-rowBorderColor': '#C3C3C3',
                      // ヘッダー部分のスタイル
                      '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#ECEBEB',  // ヘッダーの背景色
                      },
                      '& .MuiDataGrid-columnHeader': {
                        borderRight: '1px solid rgba(224, 224, 224, 1)', // ヘッダーセル間の縦ボーダー
                        '&:last-child': {
                          borderRight: 'none', // 最後のヘッダーセルには右ボーダーを付けない
                        },
                      },
                      // Size列のセルに背景色を設定
                      '& .MuiDataGrid-cell[data-field="size"]': {
                        backgroundColor: '#ECEBEB',  // Size列のセルの背景色
                      },
                      // セルのスタイル
                      '& .MuiDataGrid-cell': {
                        '&:nth-of-type(1)': { // 1列目（size列）の背景色を変更
                        backgroundColor: '#ECEBEB',
                      },
                      borderRight: '1px solid #C3C3C3',  // 縦のボーダー
                        '&:last-child': {
                          borderRight: 'none', // 最後の列には右ボーダーを付けない
                        },
                      },
                      // グリッド全体のボーダー
                      '& .MuiDataGrid-root': {
                        ContainerBackground: '#ECEBEB',
                      },
                    }}
                  />
              </Box>
            </Grid>
          </Grid>
                {/* フッター */}
          <footer
          style={{
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#24292E",
            margin: "110px 0 10px 0"
          }}
        >
        <Typography 
          sx={{ 
            fontSize: "10px",
            height: "11px",
            margin: "0 auto"
              }}
            >
              © TOTALLY
            </Typography>
        </footer>
    </Box>
  );
};

export default Task9;

