<script lang="ts">
import { defineComponent, PropType } from "vue"
export default defineComponent({
  props: {
    numbers: {
      type: Array as PropType<number[]>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const sum = props.numbers.reduce((acc: number, num: number) => acc + num, 0)
    return () =>
      slots.default!({
        sum,
      })
  },
})
</script>
