<template>
  <div class="user-info" v-if="userInfo">
    <router-link to="/"><ArrowButton class="user-info__back-btn"/></router-link>
    <img class="user-info__avatar" :src="userInfo.avatar" :alt="userInfo.last_name">
    <span class="user-info__text">{{ userInfo.first_name }} {{ userInfo.last_name }}</span>
    <span class="user-info__text">{{ userInfo.email }}</span>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import ArrowButton from "../components/ArrowButton";

  export default {
    name: "UserInfo",
    components: {ArrowButton},
    computed: {
      ...mapState(['usersList']),
      userInfo () {
        return this.usersList.find(el => el.id === Number(this.$route.params.id))
      }
    }

  }
</script>

<style scoped>
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;
  }

  .user-info__avatar {
    width: 200px;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  .user-info__text {
    margin-bottom: 10px;
  }

  .user-info__back-btn {
    position: absolute;
    left: 20px;
  }
</style>
