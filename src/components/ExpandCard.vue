<template>
  <div class="wall" :style="styleObject">
    <div
      class="card"
      :class="isActive(index) ? 'active' : ''"
      v-for="(card, index) in cards"
      :key="card"
      v-on:click="_expand($event, index)"
    >
      <div
        class="card-content"
        :style="{
          height: cardHeight + 'px',
          '--bg': 'url(' + card.imagePath + ')',
        }"
      ></div>
      <div
        v-show="!hideIcon"
        class="card-icon"
        :style="{ 'background-color': iconBGColor, color: iconFontColor }"
        :class="iconCenter ? 'icon-center' : 'icon-left'"
      >
        {{ _iconStrip(card.icon) || "🌟" }}
      </div>
      <div v-if="card.label" class="card-label" :class="hideIcon? 'label-wide' : ''">
        {{ card.label }}
      </div>
      <a :href="card.link" v-if="card.link" class="card-link">🔗</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
    },
    cardHeight: {
      type: Number,
      default: 400,
    },
    expandWidth: {
      type: Number,
      default: 200,
    },
    hideIcon: {
      type: Boolean,
    },
    iconCenter: {
      type: Boolean,
    },
    iconBGColor: {
      type: String,
      default: "teal",
    },
    iconFontColor: {
      type: String,
      default: "white",
    },
    labelBGColor: {
      type: String,
      default: "#FFFFFF80",
    },
    labelFontColor: {
      type: String,
      default: "black",
    },
    labelFontSize: {
      type: Number,
      default: 16,
    },
    fontFamily: {
      type: Array,
      default: ["Century Gothic", "Arial"],
    },
  },
  data() {
    return {
      activeIndex: null,
    };
  },
  computed: {
    IconStrip(text) {
      return text;
    },
    styleObject: function () {
      return {
        "--card-min": "70px",
        "--card-maxWidth": this.expandWidth + "px",
        "--card-height": this.cardHeight + "px",
        "--icon-bgc": this.iconBGColor,
        "--icon-font-color": this.iconFontColor,
        "--icon-color-hover": this.iconBGColor,
        "--icon-bgcolor-hover": this.iconFontColor,
        "--label-bg-color": this.labelBGColor,
        "--label-font-color": this.labelFontColor,
        "--label-font-size": this.labelFontSize,
        "--label-font-weight": this.labelFontWeight,
        "--font-family": this.fontFamily.join(","),
      };
    },
  },
  methods: {
    _expand: function (event, index) {
      const targetClass = event.target.className;
      if (targetClass != "card-link" && targetClass != "card-label") {
        this.activeIndex = this.isActive(index) ? null : index;
      }
    },
    isActive(index) {
      return this.activeIndex === index;
    },
    _iconStrip: function (text) {
      return text != null
        ? text === "string"
          ? text.charAt(0)
          : text
        : false;
    },
  },
};
</script>

<style scoped>
.wall {
  width: auto;
  min-height: 200px;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: var(--font-family);
}

.card {
  position: relative;
  display: inline-block;
  border-radius: 8px;
  height: var(--card-height);
  width: var(--card-min);
  margin: 0px 2px 0px;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;
}

.card-content {
  border-radius: 8px;
  background-size: auto 150%;
  background-position: center;
  background-image: var(--bg);
  transition: 0.5s;
}

.card-icon {
  font-weight: bold;
  font-size: 10;
  background-image: var(--bg);
  height: 20px;
  width: 20px;
  position: absolute;
  left: calc(50% - 20px);
  bottom: 15px;
  border-radius: 30px;
  text-align: center;
  transition: 0.25s;
  padding: 10px;
}

.card-label {
  font-weight: bold;
  font-style: var(--label-font-style);
  font-size: calc(var(--label-font-size) * 1px);
  padding: 8px;
  width: calc(100% - 85px);
  background: var(--label-bg-color);
  position: absolute;
  text-align: center;
  opacity: 0;
  bottom: 17px;
  left: 60px;
  border-radius: 4px;
  transition: 0.25s ease-in-out;
}

.label-wide {
  width: calc(100% - 36px);
  left: 10px;
}

.card-link {
  width: 24px;
  height: 24px;
  /* background-color: #d3d3d380; */
  position: absolute;
  text-align: center;
  opacity: 0;
  top: 10px;
  right: 10px;
  border-radius: 4px;
  transition: 0.25s ease-in-out;
}

a {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.card-icon:hover {
  color: var(--icon-color-hover);
  background-color: var(--icon-bgcolor-hover);
}

.card-link:hover {
  background-color: #ffffff;
  box-shadow: 1px 1px 8px gray;
}

.active {
  width: var(--card-maxWidth);
}

.card.active .icon-left {
  left: 10px;
}

/* .card.active .icon-center {
  left: calc(50% - 20px);
} */

.card.active .card-link {
  opacity: 1;
}
.card.active .card-label {
  opacity: 1;
}

.card.active .card-content {
  background-size: auto 100%;
}
</style>
