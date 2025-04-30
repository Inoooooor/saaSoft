<template>
  <main>
    <el-row class="form-wrapper">
      <el-form :model="records" class="form" label-position="top">
        <el-row>
          <el-form-item class="form__header" label="Учетные записи" label-position="left">
            <el-button plain :icon="Plus" type="primary" @click="addRecord"> </el-button>
          </el-form-item>
        </el-row>
        <el-row>
          <el-alert
            type="info"
            description="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
            show-icon
            :closable="false"
            class="alert"
          />
        </el-row>
        <el-row :gutter="5">
          <el-col :span="6">
            <el-form-item label="Метки"> </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="Тип записи"> </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Логин"> </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Пароль"> </el-form-item>
          </el-col>
        </el-row>

        <form-record-row
          v-for="record in records"
          v-model:marks="record.marks"
          v-model:record-type="record.recordType"
          v-model:login="record.login"
          v-model:password="record.password"
          :key="record.key"
          @delete-record="deleteRecord(record)"
        />
      </el-form>
    </el-row>
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import FormRecordRow from './components/FormRecord.vue'
import { type FormRecord } from './types'
import { Plus } from '@element-plus/icons-vue'

const records = reactive<FormRecord[]>([
  {
    marks: '',
    recordType: '',
    login: '',
    password: '',
    key: Date.now(),
  },
])

const addRecord = (): void => {
  records.push({ marks: '', recordType: '', login: '', password: '', key: Date.now() })
}

const deleteRecord = (record: FormRecord): void => {
  const index = records.indexOf(record)

  if (index !== -1) {
    records.splice(index, 1)
  }
}
</script>

<style>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100dvh;
  width: 100dvw;
}

.form {
  background-color: rgba(0, 0, 0, 0.136);
  padding: 1.5rem;
  width: 100%;
}

.form-wrapper {
  width: 80%;
}

.el-form-item {
  margin-bottom: 0px;
}

.alert {
  margin-bottom: 20px;
}

.form__header {
  --el-form-label-font-size: 24px;
  margin-bottom: 24px;
}
</style>
