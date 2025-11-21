<script lang="ts">
import { defineComponent } from 'vue';
import dayjs from 'dayjs';
import { Button, Space, showConfirmDialog } from 'vant';

export default defineComponent({
  name: 'DemoOptions',
  components: {
    Button,
    Space,
  },
  props: {
    msg: {
      type: String,
      default: 'Hello Vant with Vue 3 + TypeScript!',
    },
  },
  emits: ['change'],
  data() {
    return {
      count: 0,
      date: dayjs().format('YYYY-MM-DD'),
    };
  },
  methods: {
    async handleClick() {
      const confirmed = await showConfirmDialog({
        title: 'Confirm Action',
        message: `Are you sure you want to proceed? Current time: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
      });
      if (confirmed) {
        this.count += 1;
      }
    },
    emitChange() {
      this.$emit('change', this.date);
    },
  },
});
</script>

<template>
  <div class="demo-wrapper">
    <p>{{ date }}</p>
    <p class="demo-red">{{ msg }}</p>
    <p>Count: {{ count }}</p>
    <Space>
      <Button type="primary" @click="handleClick">Click me</Button>
      <Button type="primary" @click="emitChange">抛出事件</Button>
    </Space>
  </div>
</template>

<style scoped>
.demo-wrapper {
  width: 300px;
  padding: 20px;
  background: #01487a;
  border-radius: 20px;
}

.demo-red {
  color: red;
}
</style>
