<template>
  <div class="users-list-wrapper">
    <div class="pagination-controls">
      <ArrowButton @click="pageNumber--" :disabled="!pageNumber"/>
      <div class="pagination-controls-select">
        <label for="pageRate" class="pagination-controls-select__label">Пользователей на странице:</label>
        <select v-model="currentRate" @change="setFirstPage" class="pagination-controls-select__input" name="pageRate" id="pageRate">
          <option v-for="rate in pageRates" :value="rate" :key="rate">{{ rate }}</option>
        </select>
      </div>
      <ArrowButton @click="pageNumber++" :disabled="pagesCount === pageNumber + 1" rotated/>
    </div>
    <ul class="users-list">
      <UsersListItem v-for="item in paginatedData" :user-info="item" :key="item.id"/>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import UsersListItem from "../components/UsersListItem";
import ArrowButton from "../components/ArrowButton";

export default {
  name: 'Home',
  components: {ArrowButton, UsersListItem},
  data () {
    return {
      pageRates: [5, 10, 20],
      pageNumber: 0,
      currentRate: 5
    }
  },
  computed: {
    ...mapState(['usersList']),
    paginatedData(){
      const start = this.pageNumber * this.currentRate;
      const end = start + this.currentRate;

      return this.usersList.slice(start, end)
    },
    pagesCount(){
      const usersLength = this.usersList.length;
      return Math.ceil(usersLength/this.currentRate);
    }
  },
  methods: {
    setFirstPage () {
      this.pageNumber = 0
    }
  }
}
</script>

<style scoped>
  .pagination-controls {
    background-color: #f8f8f8;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .pagination-controls-select {
    display: flex;
    flex-direction: column;
  }

  .pagination-controls-select__input {
    padding: 5px;
    font-size: 14px;
  }

  .pagination-controls-select__label {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .users-list {
    height: 500px;
    overflow: auto;
  }

  @media only screen and (max-width: 500px) {
    .users-list {
      height: calc(100vh - 162px);
    }
  }
</style>
