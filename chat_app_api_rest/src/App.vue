<template>
  <div class="container-fluid app-container">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-3 d-flex justify-content-center">
        <UserComponent 
          :user="user1" 
          @sendMessage="sendMessage" 
          color="lightblue"
        />
      </div>

      <div class="col-6 d-flex justify-content-center">
        <ChatComponent :messages="messages" />
      </div>

      <div class="col-3 d-flex justify-content-center">
        <UserComponent 
          :user="user2" 
          @sendMessage="sendMessage" 
          color="lightcoral"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UserComponent from './components/UserComponent.vue';
import ChatComponent from './components/ChatComponent.vue';

export default {
  components: {
    UserComponent,
    ChatComponent
  },
  data() {
    return {
      user1: null,
      user2: null,
      messages: []
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response1 = await axios.get('https://randomuser.me/api/');
        const response2 = await axios.get('https://randomuser.me/api/');
        this.user1 = response1.data.results[0];
        this.user2 = response2.data.results[0];
        console.log(this.user1);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    sendMessage(message) {
      this.messages.push(message);
      console.log("Mensaje enviado correctamente. Emitido por");
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
.app-container {
  height: 80vh;
}

.row {
  height: 100%; 
}
</style>

