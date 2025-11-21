<script setup lang="ts">
import dayjs from 'dayjs';
import { ref } from "vue";
import { Button, showConfirmDialog, Space } from 'vant';

const props = withDefaults(defineProps<{
  msg?: string;
}>(), {
  msg: 'Hello Vant with Vue 3 + TypeScript!',
});

const emits = defineEmits<{
  (e: 'change', val: string): void;
}>();
const count = ref(0);
const date = dayjs().format('YYYY-MM-DD');

const handleClick = async () => {
  const confirmed = await showConfirmDialog({
    title: 'Confirm Action',
    message: `Are you sure you want to proceed? Current time: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
  });
  if (confirmed) {
    count.value += 1;
  }
};
</script>

<template>
  <div class="demo-wrapper">
    <p>{{ date }}</p>
    <p class="demo-red">{{ props.msg }}</p>
    <p>Count: {{ count }}</p>
    <Space>
      <Button type="primary" @click="handleClick">Click me</Button>
      <Button type="primary" @click="emits('change', date)">抛出事件</Button>
    </Space>
  </div>
</template>

<style lang="css" scoped>
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