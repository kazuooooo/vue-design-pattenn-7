<script lang="ts">
import { computed, defineComponent } from "vue"

export const isMatching = (
  password: string | undefined,
  confirmation: string | undefined
) => {
  if (!password || !confirmation) {
    return false
  }
  return password === confirmation
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

    return () =>
      slots.default!({
        matching: matching.value,
      })
  },
})
</script>
