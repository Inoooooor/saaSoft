<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'

defineEmits(['deleteRecord'])

const marks = defineModel<string>('marks')
const recordType = defineModel<string>('recordType')
const password = defineModel<string>('password')
const login = defineModel<string>('login')
</script>
<template>
  <div>{{ marks }}</div>
  <div>{{ password }}</div>
  <div>{{ recordType }}</div>
  <div>{{ login }}</div>

  <el-row :gutter="10" class="form-item">
    <el-col :span="4">
      <el-form-item label="Метки">
        <el-input v-model="marks" placeholder="Метки" clearable />
      </el-form-item>
    </el-col>
    <el-col :span="5">
      <el-form-item label="Тип записи">
        <el-select v-model="recordType" placeholder="Тип записи" clearable>
          <el-option label="Локальная" value="local" />
          <el-option label="LDAP" value="ldap" />
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="Логин">
        <el-input v-model="login" placeholder="Значение"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="Пароль">
        <el-input v-model="password" show-password></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="3">
      <div class="delete-btn-wrapper">
        <el-form-item>
          <el-button plain :icon="Delete" type="primary" @click="$emit('deleteRecord')"></el-button>
        </el-form-item>
      </div>
    </el-col>
  </el-row>
</template>
<style scoped>
.delete-btn-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>
