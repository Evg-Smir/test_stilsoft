<template>
  <button class="list-item__edit" @click.prevent="editItem">
    <img src="../assets/images/edit.svg" alt="edit">
  </button>
</template>

<script>
export default {
  name: "V-Edit",
  methods: {
    editItem() {
      console.log('date' in this.currentItem)
      const object = {
        name: 'date' in this.currentItem ? 'item' : 'category',
        item: this.currentItem,
      }

      this.$store.dispatch('CHANGE_STATE_MODAL', object);
    }
  },
  props: {
    currentItem: Object
  },
}
</script>

<style scoped lang="scss">
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