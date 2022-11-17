<template>
  <section class="setting">
    <div class="container">
      <h2 class="setting__title title">
        <router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link>
        <span>Setting</span>
      </h2>
      <div class="setting__theme">
        <div class="setting__theme-title">
          Add to
        </div>
        <div class="setting__choice">
          <button
            class="setting__choice-item"
            :class="{'setting__choice-item_active': choice.isActive}"
            v-for="choice in listChoice"
            :key="choice.id"
            @click="selectedTheme(choice)"
            v-text="choice.name"
          />
        </div>
      </div>
      <div class="setting__form">
        <div class="setting__form-input">
          <span class="setting-input__title">Name</span>
          <input class="setting-input__input" type="text" v-model="title">
        </div>
        <div class="setting__form-input" v-show="currentTheme === 'items'">
          <span class="setting-input__title">Category</span>
          <select class="setting-input__select" v-model="category">
            <option
              :value="category.title"
              v-for="category in LIST_CATEGORY"
              :key="category.id"
              v-text="category.title"
            />
          </select>
        </div>
        <div class="setting__form-input">
          <span class="setting-input__title">Link pictures</span>
          <input class="setting-input__input" type="text" v-model="url">
        </div>
        <div class="setting__form-input" v-show="currentTheme === 'items'">
          <span class="setting-input__title">Price</span>
          <input class="setting-input__input" type="text" v-model="price">
        </div>
        <div class="setting__form-input" v-show="currentTheme === 'items'">
          <span class="setting-input__title">Availability</span>
          <input type="checkbox" v-model="availability">
        </div>
      </div>
      <button class="setting__button" @click="addNew()">
        Add
      </button>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "V-Setting",
  data() {
    return {
      listChoice: [
        {
          id: 1,
          name: 'category',
          isActive: true,
        },
        {
          id: 2,
          name: 'items',
          isActive: false,
        }
      ],
      currentTheme: 'category',
      title: '',
      category: '',
      url: '',
      price: '',
      availability: false,
    }
  },
  computed: {
    ...mapGetters(['LIST_CATEGORY', 'LIST_ALL_ITEMS']),
  },
  methods: {
    selectedTheme(theme) {
      this.currentTheme = theme.name
      this.listChoice.forEach(choice => choice.isActive = choice.name === theme.name)
    },
    addNew() {
      let newObject = {}
      const currentDate = [
        new Date().getDate(),
        new Date().getMonth() + 1,
        new Date().getFullYear()
      ]
      if (this.currentTheme === 'category') {
        const newId = this.LIST_CATEGORY.at(-1).id
        newObject = {
          info: {
            id: newId + 1,
            title: this.title,
            image: this.url,
            name: this.title.toLowerCase()
          },
          param: this.currentTheme
        }
      } else {
        const newId = this.LIST_ALL_ITEMS.at(-1).id
        newObject = {
          info: {
            id: newId + 1,
            name: this.title,
            image: this.url,
            price: this.price,
            category: this.category.toLowerCase(),
            availability: this.availability,
            date: currentDate.join('.')
          },
          param: this.currentTheme
        }
      }
      this.$store.dispatch('ADD_NEW', newObject)
      this.title = ''
      this.category = ''
      this.url = ''
      this.price = ''
      this.availability = false
    },
  },
}
</script>

<style scoped lang="scss">

.setting__theme {
  margin-bottom: 22px;
}

.setting__theme-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.setting__choice {
  display: flex;
  align-items: center;
  gap: 15px;
}

.setting__choice-item {
  padding: 10px;
  border: 1px solid #e5e5e5;
  transition: .2s linear;
  border-radius: 12px;
  background: transparent;
  color: #E5E3DB;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 8px 7px rgb(145 143 143 / 20%);
    transition: .2s linear;
  }
}

.setting__choice-item_active {
  color: #1C1B1B;
  background: #E5E3DB;
  transition: .2s linear;
}

.setting__form-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 22px;
}

.setting-input__select {
  background: transparent;
  padding: 10px 12px;
  color: #E5E3DB;

  &:focus-visible {
    outline: none;
  }
}

.setting-input__title {
  margin-bottom: 8px;
  font-size: 24px;
}

.setting-input__input {
  background: transparent;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 16px;
  color: #E5E3DB;
  min-width: 400px;

  &:focus-visible {
    outline: none;
  }
}

.setting__button {
  color: #1C1B1B;
  padding: 14px 28px;
  line-height: normal;
  border: 3px solid #E5E3DB;
  border-radius: 6px;
  display: block;
  background: #E5E3DB;
  transition: .3s linear;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    color: #E5E3DB;
    background: transparent;
    transition: .3s linear;
    cursor: pointer;
  }
}
</style>