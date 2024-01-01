# Expandable Card

Simple Expandable Card

![Alt text](image.png)

## Installation

- npm i expand-card-flavored

## Global Registration

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import ExpandCard from "expand-card-flavored";
import "expand-card-flavored/dist/style.css";

const app = createApp(App);

app.use(ExpandCard);

app.mount("#app");
```

## Local Registration

```javascript
import ExpandCard from "expand-card-flavored";
import "expand-card-flavored/dist/style.css";

export default {
  name: "App",
  components: { ExpandCard },
};
```

## Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>:cards</code></td>
      <td>Array</td>
      <td>[Object]</td>
      <td>List of card data (Required)</td>
    </tr>
    <tr>
      <td><code>:cardHeight</code></td>
      <td>Number</td>
      <td>400</td>
      <td>Height of the card</td>
    </tr>
    <tr>
      <td><code>:expandWidth</code></td>
      <td>Number</td>
      <td>200</td>
      <td>Width when card is expanded</td>
    </tr>
    <tr>
      <td><code>hideIcon</code></td>
      <td>Boolean</td>
      <td></td>
      <td>Flag to hide icon</td>
    </tr>
    <tr>
      <td><code>iconBGColor</code></td>
      <td>String</td>
      <td>teal</td>
      <td>Background color of the icon</td>
    </tr>
    <tr>
      <td><code>iconFontColor</code></td>
      <td>String</td>
      <td>white</td>
      <td>Font color of the icon</td>
    </tr>
    <tr>
      <td><code>labelBGColor</code></td>
      <td>String</td>
      <td>#FFFFFF80 (50% transparent white)</td>
      <td>Background color of the label.</td>
    </tr>
    <tr>
      <td><code>labelFontColor</code></td>
      <td>String</td>
      <td>black</td>
      <td>Text color of the label.</td>
    </tr>
    <tr>
      <td><code>:labelFontSize</code></td>
      <td>Number</td>
      <td>16</td>
      <td>Font size of the label.</td>
    </tr>
    <tr>
      <td><code>:fontFamily</code></td>
      <td>Array</td>
      <td>["Century Gothic", "Arial"]</td>
      <td>Font Styles.</td>
    </tr>
  </tbody>
</table>

## Demo

```html
<template>
  <ExpandCard 
    :cardHeight=300 
    :cards="
      [ 
        { 
          imagePath: 'https:.....', 
          icon: null,
          label: 'Test', 
          link: '#', 
        }, 
        { 
          imagePath: img1,
          icon: 'A',
          label: 'Test' 
        }, 
      ]"
  />
</template>

<script>
  import Img1 from "./assets/images/1.jpg";
  import Img2 from "./assets/images/2.jpg";
</script>
```

OR

```html
<template>
  <ExpandCard 
    iconBGColor="#bae1ff" 
    iconFontColor="yellow" 
    :cards="data" 
  />
</template>

<script>
  import Img1 from "./assets/images/1.jpg";
  import Img2 from "./assets/images/2.jpg";

  var data = [
    {
      imagePath: "https:.....",
      icon: null,
      label: "Test",
      link: "#",
    },
    {
      imagePath: img1,
      icon: "A",
      label: "Test",
    },
  ];
</script>
```

code for fun
