
<template>
  <div class="wall">
      <div :class="isActive(index) ? 'card active' : 'card'" v-for="(card, index) in cards" :key="card"
          v-on:click="expand_card(index)">
          <div class="card-content" :style="{ 'height': image_height + 'px', '--bg': 'url(' + card.image_path + ')' }"></div>
          <div class="card-icon">{{ card.icon || "🌟" }}</div>
          <div v-if="card.label" class="card-label">{{ card.label }}</div>
      </div>
  </div>
</template>

<script >
export default {
  props: {
      cards: {
          type: Array,
          required: true,
          validator: (value) => {
              // Check if each item in the array has the expected structure
              return (
                  Array.isArray(value) &&
                  value.every((item) =>
                      typeof item.image_path === 'string' &&
                      (typeof item.icon === 'string' || item.icon === null) &&
                      (typeof item.label === 'string' || item.label === null)
                  )
              );
          }
      }
  },
  data() {
      return {
          image_height: 400,
          image_max_width: 220,
          activeIndex: null,
      };
  },
  methods: {
      expand_card: function (index) {
          console.log(index);
          if (this.isActive(index)) {
              this.activeIndex = null;
          } else {
              this.activeIndex = index;
          }
      },
      isActive(index) {
          return this.activeIndex === index;
      },
  }
};
</script>

<style scoped>
.wall {
  width: auto;
  min-height: 200px;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
}

.card {
  --card-min: 70px;
  --card-max: 220px;
  position: relative;
  display: inline-block;
  border-radius: 8px;
  height: 400px;
  width: var(--card-min);
  margin: 0px 2px 0px;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;
}

.card-content {
  border-radius: 8px;
  /* height: 400px; */
  background-size: auto 150%;
  background-position: center;
  background-image: var(--bg);
  transition: 0.5s;
}

.card-icon {
  font-weight: bold;
  font-size: 10;
  color: white;
  background-color: teal;
  background-image: var(--bg);
  height: 20px;
  width: 20px;
  position: absolute;
  left: 15px;
  bottom: 15px;
  border-radius: 30px;
  text-align: center;
  transition: 0.25s;
  padding: 10px;
}

.card-label {
  font-weight: bold;
  padding: 8px;
  width: 135px;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  text-align: center;
  opacity: 0;
  bottom: 17px;
  left: 60px;
  border-radius: 4px;
  transition: 0.25s ease-in-out;
}

.card-icon:hover {
  color: teal;
  background-color: white;
}

.active {
  width: 220px;
}

.card.active .card-icon {
  left: 10px;
}

.card.active .card-label {
  opacity: 1;
  background: rgba(255, 255, 255, 0.5)
}

.card.active .card-content {
  background-size: auto 100%;
}
</style>
