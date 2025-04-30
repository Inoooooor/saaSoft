<template>
  <main>
    <el-row>
      <el-form :inline="false" :model="form" class="form" label-position="top">
        <el-row>
          <el-alert
            type="info"
            description="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
            show-icon
            :closable="false"
            class="alert"
          />
        </el-row>
        <el-row :gutter="10" class="form-item">
          <el-col :span="4">
            <el-form-item label="Метки">
              <el-input v-model="form.marks" placeholder="Метки" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="Тип записи">
              <el-select v-model="form.recordType" placeholder="Тип записи" clearable>
                <el-option label="Локальная" value="local" />
                <el-option label="LDAP" value="ldap" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Логин">
              <el-input v-model="form.login" placeholder="Значение"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Пароль">
              <el-input v-model="form.password" show-password></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <div class="delete-btn-wrapper">
              <el-form-item>
                <el-button plain :icon="Delete" type="primary" @click="onSubmit"></el-button>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-row>
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Delete } from '@element-plus/icons-vue'

interface Form {
  marks: string
  recordType: string
  login: string
  password: string
}

const form = reactive<Form>({
  marks: '',
  recordType: '',
  login: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
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
  width: 100%;
  /* height: 70%; */
  background-color: rgba(0, 0, 0, 0.136);
  padding: 1.5rem;
}

.delete-btn-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
/* .form .el-input {
  --el-input-width: 100px;
}

.form .el-select {
  --el-select-width: 100px;
} */

.alert {
  margin-bottom: 20px;
}
</style>
