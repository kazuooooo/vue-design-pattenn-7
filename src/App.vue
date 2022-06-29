<template>
  <renderless-password
    :password="input.password"
    :confirmation="input.confirmation"
    v-slot="{ matching }"
  >
    <div class="wrapper">
      <div class="field">
        <label for="password">Password</label>
        <input v-model="input.password" id="password" />
      </div>
      <div class="field">
        <label for="confirmation">Confirmation</label>
        <input v-model="input.confirmation" id="confirmation" />
      </div>
    </div>
    <p>Matches: {{ matching }}</p>
  </renderless-password>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { reactive } from "vue"
import RenderlessPassword from "./components/RenderlessPassword.vue"
export default defineComponent({
  components: {
    RenderlessPassword,
  },
  setup(props) {
    const input = reactive({
      password: "",
      confirmation: "",
    })
    return {
      input,
    }
  },
})
</script>
