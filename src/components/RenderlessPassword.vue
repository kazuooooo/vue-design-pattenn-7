<script lang="ts">
import { computed, defineComponent } from "vue"

const isMatching = (
  password: string | undefined,
  confirmation: string | undefined
) => {
  if (!password || !confirmation) {
    return false
  }
  return password === confirmation
}

const calcComplexity = (val: string | undefined) => {
  if (!val) {
    return 0
  }
  if (val.length >= 10) {
    return 3
  }
  if (val.length >= 7) {
    return 2
  }
  if (val.length >= 5) {
    return 1
  }
  return 0
}

export default defineComponent({
  props: {
    password: {
      type: String,
    },
    confirmation: {
      type: String,
    },
  },
  setup(props, { slots }) {
    const matching = computed(() =>
      isMatching(props.password, props.confirmation)
    )
    const complexity = computed(() => calcComplexity(props.password))

    return () =>
      slots.default!({
        matching: matching.value,
        complexity: complexity.value,
      })
  },
})
</script>
