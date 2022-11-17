<template>
  <section class="list">
    <div class="container">
      <h2 class="list__title title">
        <router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link>
        <span v-text="CURRENT_CATEGORY" />
      </h2>
      <VFilter />
      <div class="list__flex" v-if="LIST_ITEMS.length">
        <div class="list__item" v-for="item in LIST_ITEMS" :key="item.id">
          <img class="list-item__image" :src="item.image" alt="">
          <div class="list-item__name" v-text="item.name" />
          <div class="list-item__price" v-text="item.price + ' $'" />
          <div class="list-item__date" v-text="item.date" />
          <button
            class="list-item__button"
            :class="{'list-item__button_disabled': !item.availability}"
            :disabled="!item.availability"
            v-text="checkAvailability(item.availability)"
          />
          <VEdit :currentItem="item"/>

<!--          <button class="list-item__edit" @click="editItem(item)">-->
<!--            <img src="../assets/images/edit.svg" alt="edit">-->
<!--          </button>-->
        </div>
      </div>
      <div class="list__empty" v-else>
        Sorry, there are no products
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import VFilter from "@/components/V-Filter";
import VEdit from "@/components/V-Edit";

export default {
  name: "V-List",
  components: {
    VFilter, VEdit
  },
  computed: {
    ...mapGetters(['LIST_ITEMS', 'CURRENT_CATEGORY']),
  },
  methods: {
    checkAvailability(value) {
      return value ? 'BUY' : 'not available'
    },
    editItem(item) {
      const object = {
        name: 'items',
        item,
      }
      this.$store.dispatch('CHANGE_STATE_MODAL', object);
    }
  },
}
</script>

<style scoped lang="scss">

.list__flex {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 30px;
}

.list__empty {
  font-size: 24px;
  text-align: center;
}

.list__item {
  position: relative;
  width: 100%;
  max-width: calc((100% - 60px)/ 3);
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 10px 10px 20px;

  &:hover {

    .list-item__edit {
      opacity: 1;
    }
  }
}

.list-item__image {
  max-width: 100%;
  margin-bottom: 20px;
}

.list-item__name {
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
}

.list-item__price {
  font-weight: 700;
  color: #d4af37;
  text-align: center;
  font-size: 16px;
}

.list-item__date {
  text-align: center;
  margin-top: 12px;
}

.list-item__button {
  color: #1C1B1B;
  padding: 14px 28px;
  line-height: normal;
  border: 3px solid #E5E3DB;
  border-radius: 6px;
  margin: 20px auto 0;
  display: block;
  background: #E5E3DB;
  transition: .3s linear;
  text-transform: uppercase;
  font-weight: 700;

  &:not(.list-item__button_disabled):hover {
    color: #E5E3DB;
    background: transparent;
    transition: .3s linear;
    cursor: pointer;
  }
}

.list-item__button_disabled {
  background: transparent;
  color: #E5E3DB;
}

.list-item__edit {
  position: absolute;
  right: 15px;
  top: 15px;
  max-width: 30px;
  padding: 0;
  background: transparent;
  border: none;
  opacity: 0;
  transition: .2s linear;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}
</style>