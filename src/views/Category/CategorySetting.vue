<template lang="pug">
.modal-card(style='margin: auto;')
  .modal-card-head
    p.modal-card-title ตั้งค่า
  .modal-card-body
    section
      .field
        .control
          .field.has-addons
            p.control
              a.button.is-static(style='width: 140px') title
            p.control
              input.input(type="text" v-model='state.title')
      .field
        .control
          .field.has-addons
            p.control
              a.button.is-static(style='width: 140px') num row
            p.control
              input.input(type="number" v-model='state.nrow')
      .field
        .control
          .field.has-addons
            p.control
              a.button.is-static(style='width: 140px') num col
            p.control
              input.input(type="number" v-model='state.ncol')
      .field
        .control
          .field.has-addons
            p.control
              a.button.is-static(style='width: 140px') background
            p.control
              input.input(type="text" v-model='state.background')
      .field
        .control
          textarea.textarea(
            :class="{'is-success': valid, 'is-danger': !valid}"
            v-model='questions'
          )
    .field
      .control
        a.is-danger(@click='clear_text_questions') clear storage [ลบข้อมูล !!!]
  //- .modal-card-foot

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { category, stringify_questions, parse_questions, clear_questions } from './Category'

export default defineComponent({
  setup() {
    const valid = ref(true)
    return {
      state: category,
      get questions() {
        return stringify_questions.value
      },
      set questions(value: string) {
        const parse = parse_questions(value)
        if (parse) {
          valid.value = true
          category.questions = parse
        } else {
          valid.value = false
        }
      },
      valid,
      clear_text_questions() {
        valid.value = true
        clear_questions()
      }
    }
  }
});
</script>
