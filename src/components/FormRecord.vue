<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'

defineEmits(['deleteRecord'])

const marks = defineModel<string>('marks')
const recordType = defineModel<string>('recordType')
const password = defineModel<string>('password')
const login = defineModel<string>('login')
</script>
<template>
  <el-row :gutter="5" class="form-item" justify="space-between">
    <el-col :span="6">
      <el-form-item>
        <el-input
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 2 }"
          resize="none"
          maxlength="50"
          v-model="marks"
          placeholder="Метки"
        />
      </el-form-item>
    </el-col>
    <el-col :span="5">
      <el-form-item>
        <el-select v-model="recordType" placeholder="Тип записи" clearable>
          <el-option label="Локальная" value="local" />
          <el-option label="LDAP" value="ldap" />
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item>
        <el-input v-model="login" placeholder="Значение"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item>
        <el-input v-model="password" show-password></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="1">
      <el-form-item>
        <el-button
          class="delete-btn"
          plain
          :icon="Delete"
          type="primary"
          @click="$emit('deleteRecord')"
        ></el-button>
      </el-form-item>
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

.delete-btn {
  width: 100%;
}

.form-item {
  margin-bottom: 8px;
}
</style>
