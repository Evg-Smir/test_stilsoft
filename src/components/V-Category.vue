<template>
  <section class="category">
    <div class="container">
      <h2 class="category__title title">
        Categories
      </h2>
      <div class="category__list">
        <div class="category__item"
             @click="linkCategory(category)"
             v-for="category in LIST_CATEGORY"
             :key="category.id"
             :style="{backgroundImage: `url(${category.image})`}"
        >
          <button class="category-name__edit" @click.stop="editItem(category)">
            <img src="../assets/images/edit.svg" alt="edit">
          </button>
          <div class="category-name__name" v-text="category.title"/>
        </div>
      </div>
      <router-link to="/setting">
        <div class="category__item category__item-added"/>
      </router-link>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "V-Category",
  mounted() {
    this.FETCH_LIST_CATEGORY()
    this.FETCH_LIST_ITEMS()
  },
  computed: {
    ...mapGetters(['LIST_CATEGORY'])
  },
  methods: {
    ...mapActions(['FETCH_LIST_CATEGORY', 'FETCH_LIST_ITEMS']),

    linkCategory(link) {
      const category = {
        name: link.name,
        title: link.title
      }
      this.$router.push({
        name: `category`,
        params: {
          nameCategory: category.name,
        }
      })
      this.$store.dispatch('FILTER_ITEMS', category);
    },
    editItem(item) {
      const object = {
        name: 'category',
        item,
      }
      this.$store.dispatch('CHANGE_STATE_MODAL', object);
    }
  }
}
</script>

<style scoped lang="scss">

.category__title {
  font-size: 30px;
  text-transform: uppercase;
}

.category__list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.category__item {
  position: relative;
  width: calc((100% - 60px) / 3);
  min-height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 15px;
  border-radius: 12px;
  transition: .2s linear;

  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 8px 0 rgba(145, 143, 143, 0.2);
    transition: .2s linear;

    button {
      opacity: 1;
      transition: .2s linear;
    }
  }
}

.category-name__edit {
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

.category__item-added {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e5e5;
  margin-top: 30px;
  text-transform: uppercase;

  &::before, &::after {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: .3s linear;
  }

  &::before {
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
  }

  &::after {
    content: '+';
    font-size: 50px;
    color: #e5e5e5;
  }

  &:hover {

    &::before, &::after {
      transform: translate(-50%, -50%) scale(1.3);
      transition: .3s linear;
    }
  }
}

.category-name__name {
  font-size: 23px;
  font-weight: 700;
}
</style>