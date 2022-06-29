import { computed, UnwrapNestedRefs } from "vue"
type Input = UnwrapNestedRefs<{ password: string; confirmation: string }>

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

export const usePassword = (input: Input, minComplexity: number = 3) => {
  const matching = computed(() =>
    isMatching(input.password, input.confirmation)
  )
  const complexity = computed(() => calcComplexity(input.password))
  const valid = computed(
    () => complexity.value >= minComplexity && matching.value
  )
  return {
    matching,
    complexity,
    valid,
  }
}
