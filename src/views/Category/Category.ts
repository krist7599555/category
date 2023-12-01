import { reactive, computed, watch } from 'vue'
import { range, get } from 'lodash'
import { useLocalStorage } from '@vueuse/core'

interface Question {
  message: string
  visible: boolean
}

const local_category = useLocalStorage('category', {
  title: 'Category สุดมันส์',
  background:
    'https://images.unsplash.com/photo-1484503753579-5a70ce11a6ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tim-trad-190770-unsplash.jpg',
  nrow: 5,
  ncol: 5,
  questions: range(5 * 5).map(() => ({
    message: '',
    visible: false
  }))
})

export const category = reactive(local_category.value)

watch(category, (c) => {
  if (c.questions.length < c.ncol * c.nrow) {
    c.questions = range(c.nrow * c.ncol).map((i) => {
      return c.questions[i] ?? { message: '', visible: false }
    })
  }
})

export function clear_questions() {
  category.questions = range(category.nrow * category.ncol).map(() => ({
    message: '',
    visible: false
  }))
}

export const stringify_questions = computed(() => {
  return range(category.nrow * category.ncol)
    .map((i) => {
      return `${i + 1}:${get(category.questions, [i, 'message'], '')}`
    })
    .join('\n')
})

export function questionsFromString(str: string) {
  const arr = str.trim().split('\n')
  let ok = true
  const new_questions: Question[] = arr.map((s, i) => {
    const res = s.match(new RegExp(`^${i + 1}:(.*)$`))
    if (!res) ok = false
    const new_q = {
      message: res ? res[1] : '',
      visible: get(category.questions, [i, 'visible'], false)
    }
    return new_q
  })
  return ok ? new_questions : null
}
