const cssString = String.raw`@font-face {
  font-family: "iconsauce";
  src: url(data:font/truetype;charset=utf-8;base64,AABBCCDDEE);
}

[class^="gm/"], [class*=" gm/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
}

.gm\/filled\/mic::before { content: "\2f"}
.gm\/filled\/transit-enterexit::before { content: "\2f"}
.gm\/filled\/zoom-out-map::before { content: "\2f"}
`
export default cssString
