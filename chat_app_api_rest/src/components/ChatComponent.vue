<template>
    <div class="chat-container">
      <div v-for="(message, index) in messages" :key="index" :style="{ backgroundColor: message.color }" class="chat-message">
        <strong>{{ message.sender }}</strong>: {{ message.text }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      messages: Array
    }
  };
  </script>
  
  <style scoped>
  .chat-container {
    background-color: #f5f5f5;
    padding: 20px;
    flex-grow: 1;
    border: 1px solid #ccc;
    height: 80vh;
    overflow-y: auto; 
  }
  .chat-message {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    min-width: 65%;
    max-width: 95%; 
    word-wrap: break-word; 
    overflow-wrap: break-word; 
    white-space: pre-wrap;
  }
  </style>
  
  