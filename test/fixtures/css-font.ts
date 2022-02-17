const cssString = String.raw`@font-face {
  font-family: "iconsauce";
  src: url("data:font/truetype;charset=utf-8;base64,AABBCCDDEE") format("truetype");
}

[class^="miu/"], [class*=" miu/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}

.miu\/filled\/10k::before { content: "\2f" }
.miu\/filled\/1k::before { content: "\2f" }
.miu\/filled\/1k-plus::before { content: "\2f" }
.miu\/filled\/accessible-forward::before { content: "\2f" }
.miu\/filled\/add-alert::before { content: "\2f" }
.miu\/filled\/add-chart::before { content: "\2f" }
.miu\/filled\/auto-delete::before { content: "\2f" }
.miu\/filled\/close::before { content: "\2f" }
.miu\/filled\/error::before { content: "\2f" }
.miu\/filled\/error-outline::before { content: "\2f" }
.miu\/filled\/info::before { content: "\2f" }
.miu\/filled\/mic::before { content: "\2f" }
.miu\/filled\/notification-important::before { content: "\2f" }
.miu\/filled\/remove-shopping-cart::before { content: "\2f" }
.miu\/filled\/transit-enterexit::before { content: "\2f" }
.miu\/filled\/vpn-key::before { content: "\2f" }
.miu\/filled\/warning::before { content: "\2f" }
.miu\/filled\/warning-amber::before { content: "\2f" }
.miu\/filled\/zoom-out-map::before { content: "\2f" }
`
export default cssString
