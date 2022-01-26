# omnicon
An incremental build tool to include only the icons used in your code and.

### Input Examples

```jsx
const Component = () => {

  const icon = 'gm/filled/warning'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 gm/filled/add-chart tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="gm/filled/info"/>
      <span className='bg-adjust-tone-01/24 gm/filled/error'/>
      <div>
        <footer title="gm/filled/close"></footer>
      </div>
    </div>
  </section>
}
export default Component
```

### Output

```css
@font-face {
  font-family: "iconsauce";
  src: url(data:font/truetype;charset=utf-8;base64,AA...AA);
}
[class^="gm/"],
[class*=" gm/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
}
.gm\/filled\/add-chart::before { content: "\ea02"; }
.gm\/filled\/close::before { content: "\ea03"; }
.gm\/filled\/error::before { content: "\ea04"; }
.gm\/filled\/info::before { content: "\ea05"; }
.gm\/filled\/warning::before { content: "\ea08"; }
```

---

## Config

Place config file `iconsauce.config.js` in the root of your node project:

```js
module.exports = {
  content: [
    './static/**/*.{html,htm}',
    './templates/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{json}',
    './layouts/**/*.{js}',
  ],
  fontSize: '24px',
  plugin: {
    require('@iconsauce/plugin-material-design-icons-updated'),
  }
}
```
