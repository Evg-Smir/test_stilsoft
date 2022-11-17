<template>
  <div class="modal" v-show="MODAL">
    <div class="modal__inner">
      <button class="modal__close" @click="closeModal"/>
      <h2 class="modal__title">
        Change
      </h2>
      <div class="modal__form-input">
        <span class="modal-input__title">Name</span>
        <input class="modal-input__input" type="text" v-model="title">
      </div>
      <div class="modal__form-input">
        <span class="modal-input__title">Link pictures</span>
        <input class="modal-input__input" type="text" v-model="url">
      </div>
      <div class="modal__form-input" v-show="CURRENT_EDIT.name === 'item'">
        <span class="modal-input__title">Price</span>
        <input class="modal-input__input" type="text" v-model="price">
      </div>
      <div class="modal__form-input" v-show="CURRENT_EDIT.name === 'item'">
        <span class="modal-input__title">Availability</span>
        <input type="checkbox" v-model="availability">
      </div>
      <div class="modal__buttons">
        <button class="modal__save" @click="saveItem">
          Save changes
        </button>
        <button class="modal__delete" @click="deleteItem">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "V-Modal",
  data() {
    return {
      title: '',
      category: '',
      url: '',
      price: '',
      availability: false,
    }
  },
  computed: {
    ...mapGetters(['MODAL', 'CURRENT_EDIT', 'LIST_CATEGORY']),
  },
  methods: {
    closeModal() {
      this.$store.dispatch('CHANGE_STATE_MODAL')
    },
    saveItem() {
      if (confirm('Are you sure you want to do this?')) {
        if (this.CURRENT_EDIT.name === 'category') {
          this.$store.dispatch('EDIT_ITEM', {
            name: this.CURRENT_EDIT.name,
            item: {
              ...this.CURRENT_EDIT.item,
              title: this.title,
              image: this.url,
            }
          })
        } else {
          this.$store.dispatch('EDIT_ITEM', {
            name: this.CURRENT_EDIT.name,
            item: {
              ...this.CURRENT_EDIT.item,
              name: this.title,
              image: this.url,
              price: this.price,
              availability: this.availability,
            }
          })
        }
        this.$store.dispatch('CHANGE_STATE_MODAL')
      }
    },
    deleteItem() {
      if (confirm('Are you sure you want to do this?')) {
        this.$store.dispatch('DELETE_ITEM', this.CURRENT_EDIT)
        this.$store.dispatch('CHANGE_STATE_MODAL')
      }
    },
  },
  watch: {
    '$store.state.stateModal'() {
      this.title = this.CURRENT_EDIT.item.title ? this.CURRENT_EDIT.item.title : this.CURRENT_EDIT.item.name
      this.url = this.CURRENT_EDIT.item.image
      this.category = this.CURRENT_EDIT.item.category ? this.CURRENT_EDIT.item.title : ''
      this.price = this.CURRENT_EDIT.item.price ? this.CURRENT_EDIT.item.price : ''
      this.availability = this.CURRENT_EDIT.item.availability ? this.CURRENT_EDIT.item.availability : ''
    }
  },
}
</script>

<style scoped lang="scss">

.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__inner {
  position: relative;
  border-radius: 18px;
  background: #e5e5e5;
  max-width: 1000px;
  color: #1C1B1B;
  padding: 30px;
}

.modal__title {
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 0;
}

.modal__form-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.modal-input__title {
  font-size: 24px;
  margin-bottom: 5px;
}

.modal-input__input {
  background: transparent;
  border: 1px solid #1C1B1B;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 16px;
  color: #1C1B1B;
  min-width: 400px;

  &:focus-visible {
    outline: none;
  }
}

.modal-input__select {
  background: transparent;
  padding: 10px 12px;
  color: #1C1B1B;
  border-radius: 12px;
  border: 1px solid #1C1B1B;

  &:focus-visible {
    outline: none;
  }
}

.modal__close {
  position: absolute;
  top: 18px;
  right: 22px;
  width: 19px;
  height: 19px;
  background: transparent;
  border: none;
  padding: 0;
  transition: .2s linear;

  &::after, &::before {
    transform: rotate(45deg);
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: #979797;
    left: 0;
    top: 8px;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: .2s linear;
  }
}

.modal__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__save, .modal__delete {
  color: #1C1B1B;
  padding: 14px 28px;
  line-height: normal;
  border: 3px solid #1C1B1B;
  border-radius: 6px;
  margin: 20px auto 0;
  display: block;
  background: #E5E3DB;
  transition: .3s linear;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    color: #E5E3DB;
    background: #1C1B1B;
    transition: .3s linear;
    cursor: pointer;
  }
}

.modal__delete:hover {
  background: #ff0000;
}

</style>