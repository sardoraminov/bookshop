<script setup>
import { onMounted } from '@vue/runtime-core';
import api from '../helpers/api';
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import MenuView from '../components/Explore/MenuView.vue';

const store = useStore()
const token = Cookies.get('token')

const chekcUserValid = async () => {
  const res = await api.get('/accounts/loggedin', {headers: {
    authorization: `Bearer ${token}`
  }})

  const data = await res.data

  if (data.status === 'bad') {
    store.commit('setToastShow', true)
    store.commit('setToastMsg', data.msg)

    Cookies.remove('token')
    Cookies.remove('account')

    window.location.href = '/'
  } else {
    return
  }
}

onMounted(() => {
  chekcUserValid()
})

</script>

<template>
  <div class="explore">
    <MenuView/>
  </div>
</template>

<style>

</style>