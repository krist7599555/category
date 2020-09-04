import { reactive, computed } from 'vue'
import * as ls from "local-storage";
import * as _ from 'lodash'
import { range, cloneDeep, set, get } from 'lodash'

interface Question {
  message: string
  visible: boolean
}

export const category = reactive({
  get title() { return ls.get('category-title') || 'category สุดมันส์' },
  set title(val: string) { ls.set('category-title', val) },
  get background() { return ls.get('category-background') || 'https://images.unsplash.com/photo-1484503753579-5a70ce11a6ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tim-trad-190770-unsplash.jpg' },
  set background(val: string) { ls.set('category-background', val) },
  get nrow() { return Number(ls.get('category-nrow')) || 5 },
  set nrow(val: number) { ls.set('category-nrow', val)  },
  get ncol() { return Number(ls.get('category-ncol')) || 5 },
  set ncol(val: number) { ls.set('category-ncol', val)  },
  get questions() { return JSON.parse(ls.get('category-questions') || '[]') as Question[] },
  set questions(value) { ls.set('category-questions', JSON.stringify(value)) },
})

export function clear_questions() {
  category.questions = range(category.nrow * category.ncol).map(() => ({
    message: '',
    visible: false
  }))
}

export function question_set_visible(i: number, visible: boolean) {
  let new_questions = cloneDeep(category.questions)
  set(new_questions, [i, 'visible'], visible)
  category.questions = new_questions
}
export function question_set_message(i: number, message: string) {
  let new_questions = cloneDeep(category.questions)
  set(new_questions, [i, 'message'], message)
  category.questions = new_questions
}

export const stringify_questions = computed(() => {
  return range(category.nrow * category.ncol).map(i => {
    return `${i+1}:${get(category.questions, [i, 'message'], '')}`
  }).join('\n')
});

export function parse_questions(str: string) {
  const arr = str.trim().split('\n')
  let ok = true
  const new_questions: Question[] = arr.map((s, i) => {
    const res = s.match(new RegExp(`^${i+1}:(.*)$`))
    if (!res) ok = false
    const new_q = { 
      message: res ? res[1] : '', 
      visible: get(category.questions, [i, 'visible'], false)
    }
    return new_q
  })
  return ok ? new_questions : null
}