# omnicon
A build tool to include only the icons used in your code.

### Input Examples

```html
<div>
  <div class="mdi/close"></div>
</div>
```

```json
{
  "variant-a": {
    "icon": "mgg/file-odt"
  }
}
```

```ts
const selector = 'mdi/file-word'
```

### Output

```css
@font-face {
  font-family: "mgg-icons";
  src: url(data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzJAJlAAAAAAA=);
}

[class^="mdi/"], [class^="mgg/"], [class^="gmat/"] {
  font-family: 'mgg-icons' !important;
  font-size:24px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mdi\/menu-book:before {
  content: "\ea01";
}
```

---

### Input NON fattibili


```ts
const prefix = 'mdi'
const icon = 'file-word'
const iconName = `${prefix}/${icon}`
```

### Formato selettore

- lowercase
- separatore tra parole: `-`
- struttura `group/icon-name`

### Casi librerie esterne

- filename: `todo-IN-prendere_in_carico.svg`
  => icon name `mgg/todo-in-prendere-in-carico`

---

## Config

omnicon.config.js

```js
module.exports = {
  content: [
    './node_modules/@maggioli-design-system/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{html,htm}',
    './fragments/**/*.{json}',
    './layouts/**/*.{js}',
  ],
  plugin: {
    require('@omnicon/material-google')({ prefix: 'gm' }),
    require('@omnicon/mdi'),
    require('@omnicon/mgg-icons-svg'),
  }
}
```
