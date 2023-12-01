
<template>
  <div class="modal-card mx-auto">
    <div class="modal-card-head">
      <p class="modal-card-title">ตั้งค่า</p>
    </div>
    <div class="modal-card-body">
      <section>
        <div class="field">
          <div class="control">
            <div class="field has-addons">
              <p class="control"><a class="button is-static" style="width: 140px">title</a></p>
              <p class="control"><input class="input" type="text" v-model="category.title" /></p>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="field has-addons">
              <p class="control"><a class="button is-static" style="width: 140px">num row</a></p>
              <p class="control"><input class="input" type="number" v-model="category.nrow" /></p>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="field has-addons">
              <p class="control"><a class="button is-static" style="width: 140px">num col</a></p>
              <p class="control"><input class="input" type="number" v-model="category.ncol" /></p>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="field has-addons">
              <p class="control"><a class="button is-static" style="width: 140px">background</a></p>
              <p class="control"><input class="input" type="text" v-model="category.background" /></p>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control"><textarea class="textarea" :class="{'is-success': valid, 'is-danger': !valid}"
              v-model="questions"></textarea></div>
        </div>
      </section>
      <div class="field">
        <div class="control">
          <button class="is-danger" @click="clear_text_questions">
          clear storage [ลบข้อมูล!!!]
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { category, stringify_questions, questionsFromString, clear_questions } from './Category'

const valid = ref(true)
const questions = computed({
  get() {
    return stringify_questions.value
  },
  set(value: string) {
    console.log("SET VALUE")
    const parse = questionsFromString(value)
    if (parse) {
      valid.value = true
      category.questions = parse
    } else {
      valid.value = false
    }
  }
})

function clear_text_questions() {
  valid.value = true
  clear_questions()
}
</script>
