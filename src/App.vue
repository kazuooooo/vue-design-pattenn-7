<template>
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
    <div class="field">
      <button :disabled="!valid">Submit</button>
    </div>
  </div>
  <p>Matches: {{ matching }}</p>
  <p>Complexity: {{ complexity }}</p>
  <p>Valid: {{ valid }}</p>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { reactive } from "vue"
import RenderlessPassword from "./components/RenderlessPassword.vue"
import { usePassword } from "./hooks/usePassword"
export default defineComponent({
  components: {
    RenderlessPassword,
  },
  setup(props) {
    const input = reactive({
      password: "",
      confirmation: "",
    })

    const { matching, complexity, valid } = usePassword(input)

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
      matching,
      complexity,
      valid,
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
