<template>
    <div v-if="user" class="user-container">
      <img :src="user.picture.large" alt="User Image" class="user-img" />
      <p class="user-name">{{ user.name.first }} {{ user.name.last }}</p>
      <input v-model="messageText" placeholder="Escribe tu mensaje" class="form-control" />
      <button @click="submitMessage" class="btn btn-primary mt-2">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      color: String,
      user: {
        type: Object,
        default: () => ({})
        }
    },
    data() {
      return {
        messageText: ''
      };
    },
    methods: {
      submitMessage() {
        if (this.messageText.trim()) {
          this.$emit('sendMessage', {
            text: this.messageText,
            sender: `${this.user.name.first} ${this.user.name.last}`,
            color: this.color
          });
          this.messageText = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .user-container {
    text-align: center;
  }
  .user-img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .user-name {
    font-weight: bold;
  }
  </style>
  