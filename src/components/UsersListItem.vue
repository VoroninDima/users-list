<template>
  <li>
    <router-link class="users-list-item" :to="'info/' + userInfo.id">
      <img class="users-list-item__avatar" :src="userInfo.avatar" :alt="userInfo.last_name">
      <div class="users-list-item__info">
        <span class="users-list-item__name">{{ userInfo.first_name }} {{ userInfo.last_name }}</span>
        <span class="users-list-item__email">{{ userInfo.email }}</span>
      </div>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'UsersListItem',
    props: {
      userInfo: {
        id: {
          type: Number
        },
        email: {
          type: String
        },
        first_name: {
          type: String
        },
        last_name: {
          type: String
        },
        avatar: {
          type: String
        },
        required: true
      }
    }
  }
</script>

<style scoped>
  .users-list-item {
    border-bottom: 1px solid #dedede;
    display: flex;
    padding: 15px;
    position: relative;
    cursor: pointer;
  }

  .users-list-item:hover:before {
    content: '';
    position: absolute;
    height: 20px;
    width: 4px;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    background-color: #ffab00;
    border-radius: 0 5px 5px 0;
  }

  .users-list-item__info {
    display: flex;
    flex-direction: column;
  }

  .users-list-item__avatar {
    width: 60px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .users-list-item__name {
    font-size: 16px;
    font-weight: bold;
  }

  .users-list-item__email {
    font-size: 14px;
    color: #9e9e9e;
    margin-top: 5px;
  }
</style>
