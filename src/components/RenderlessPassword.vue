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
    minComplexity: { type: Number, default: 3 },
  },
  setup(props, { slots }) {
    const matching = computed(() =>
      isMatching(props.password, props.confirmation)
    )
    const complexity = computed(() => calcComplexity(props.password))
    const valid = computed(
      () => complexity.value >= props.minComplexity && matching.value
    )
    return () =>
      slots.default!({
        matching: matching.value,
        complexity: complexity.value,
        valid: valid.value,
      })
  },
})
</script>
