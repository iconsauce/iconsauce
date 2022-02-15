const cssString = String.raw`@font-face {
  font-family: "iconsauce";
  src: url("data:font/truetype;charset=utf-8;base64,AABBCCDDEE") format("truetype");
}

[class^="gm/"], [class*=" gm/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}

.gm\/filled\/10k::before { content: "\2f" }
.gm\/filled\/1k::before { content: "\2f" }
.gm\/filled\/1k-plus::before { content: "\2f" }
.gm\/filled\/accessible-forward::before { content: "\2f" }
.gm\/filled\/add-alert::before { content: "\2f" }
.gm\/filled\/add-chart::before { content: "\2f" }
.gm\/filled\/auto-delete::before { content: "\2f" }
.gm\/filled\/close::before { content: "\2f" }
.gm\/filled\/error::before { content: "\2f" }
.gm\/filled\/error-outline::before { content: "\2f" }
.gm\/filled\/info::before { content: "\2f" }
.gm\/filled\/mic::before { content: "\2f" }
.gm\/filled\/notification-important::before { content: "\2f" }
.gm\/filled\/remove-shopping-cart::before { content: "\2f" }
.gm\/filled\/transit-enterexit::before { content: "\2f" }
.gm\/filled\/vpn-key::before { content: "\2f" }
.gm\/filled\/warning::before { content: "\2f" }
.gm\/filled\/warning-amber::before { content: "\2f" }
.gm\/filled\/zoom-out-map::before { content: "\2f" }
`
export default cssString
