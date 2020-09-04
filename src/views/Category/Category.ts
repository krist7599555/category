import { reactive, computed } from 'vue'
import * as ls from "local-storage";
import * as _ from 'lodash'
import { range, cloneDeep, set, get } from 'lodash'

interface Question {
  message: string
  visible: boolean
}

export const category = reactive({
  title: 'category สุดมันส์',
  background: 'https://images.unsplash.com/photo-1484503753579-5a70ce11a6ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tim-trad-190770-unsplash.jpg',
  get nrow() { return Number(ls.get('nrow')) || 5 },
  get ncol() { return Number(ls.get('ncol')) || 5 },
  set nrow(val: number) { ls.set('nrow', val) },
  set ncol(val: number) { ls.set('ncol', val) },
  get questions() { return JSON.parse(ls.get('questions') || '[]') as Question[] },
  set questions(value) { ls.set('questions', JSON.stringify(value)) },
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
  console.log("functionquestion_set_visible -> category.questions", category.questions[0].visible)
  category.questions = new_questions
  console.log("functionquestion_set_visible -> category.questions", category.questions[0].visible)
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
    if (i==0) console.log(new_q)
    return new_q
  })
  return ok ? new_questions : null
}