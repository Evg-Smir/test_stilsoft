<template>
  <div class="filter">
    <div class="filter__row">
      <div class="filter__item"
           @mouseover="sortState = true"
           @mouseleave="sortState = false"
      >
        <div class="filter__button">
          Sort {{ currentSort }}
        </div>
        <div class="filter__list" v-show="sortState">
          <div
            class="filter-list__item"
            v-for="filter in this.sort"
            v-text="filter.name"
            :key="filter.key"
            @click="sortItems(filter)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "V-Filter",
  data() {
    return {
      sortState: false,
      currentSort: '',
      sort: [
        {
          key: 'priceToHigh',
          name: 'Price, low to high'
        },
        {
          key: 'priceToLow',
          name: 'Price, high to low'
        },
        {
          key: 'stock',
          name: 'In stock, at the beginning'
        },
      ],
    }
  },
  methods: {
    sortItems(param) {
      this.$store.dispatch('SORT_ITEM', param.key)
      this.currentSort = `(${param.name})`
    }
  }
}
</script>

<style scoped lang="scss">

.filter {
  margin-bottom: 20px;
}

.filter__row {
  display: flex;
  justify-content: flex-start;
}

.filter__item {
  position: relative;
  cursor: pointer;
}

.filter__button {
  font-size: 20px;
}

.filter__list {
  position: absolute;
  left: 0;
  top: 10px;
  width: max-content;
  z-index: 10;
  background: #1C1B1B;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px;
  transform: translateY(15%);
}

.filter-list__item {
  margin-bottom: 20px;
  transition: color .2s linear;

  &:hover {
    color: #d4af37;
    transition: color .2s linear;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.filter__button {
  display: inline-block;
  padding-bottom: 10px;
}
</style>