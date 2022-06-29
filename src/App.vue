<template>
  <renderless-password
    :password="input.password"
    :confirmation="input.confirmation"
    v-slot="{ matching, complexity }"
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
      <div class="complexity-field">
        <div
          role="password-complexity"
          class="complexity"
          :class="complexityStyle(complexity)"
        />
      </div>
    </div>
    <p>Matches: {{ matching }}</p>
    <p>Complexity: {{ complexity }}</p>
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

    const complexityStyle = (complexity: number) => {
      if (complexity >= 3) {
        return "high"
      }
      if (complexity >= 2) {
        return "mid"
      }
      if (complexity >= 1) {
        return "low"
      }
    }

    return {
      input,
      complexityStyle,
    }
  },
})
</script>
<style scoped>
.complexity-field {
  width: 100%;
}

.complexity {
  transition: 0.2s;
  height: 10px;
}

.high {
  width: 100%;
  background: lime;
}

.mid {
  width: 66%;
  background: yellow;
}

.low {
  width: 33%;
  background: red;
}
</style>
