<template>
  <div class="p-4 h-screen bg-no-repeat [background-blend-mode:color-burn] bg-cover bg-center bg-[#130c0dc2]" :style="'background-image: url(' + category.background + ')'">
    <Modal v-model:active="visible_setting">
      <CategorySetting></CategorySetting>
    </Modal>
    <Modal v-model:active="visible_fucus_question" :width="640" scroll="keep">
      <div class="text-white font-bold text-center [white-space:balance]">
        <div class="text-5xl">Question number {{ focus_idx + 1 }}</div>
        <div class="text-[4.4rem] mt-2 leading-[6rem] [white-space:balance]">{{ focus_question.message }}</div>
      </div>
    </Modal>
    <div class="text-white text-center font-bold text-4xl">{{ category.title }}</div>
    
    <button @click="visible_setting = true" class="border-[1px] rounded px-2 py-1 text-sm border-current top-4 absolute left-4 opacity-80">
      Setting
    </button>
    
    <div class="pt-4">
      <div id="category-grid" :style="grid_style">
        <div class="flip-wrapper" v-for="(q, i) in category.questions.slice(0, category.nrow *category.ncol)" :key="i">
          <FlipVue :ref="el => pre_open_flipcard(i, el)" :active-hover="false" :active-click="true" width="100%"
            height="100%" transition="1s">
            <template v-slot:front>
              <div class="box plate grid justify-start" @click="flip(i, true)">
                <strong class="text-5xl">{{ i + 1 }}</strong>
              </div>
            </template>
            <template v-slot:back>
              <div class="box plate is-close grid place-content-center" @click="flip(i, false)">
                <div class="text-center">{{ q.message }}</div>
              </div>
            </template>
          </FlipVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, onMounted, ref } from "vue";
import { get } from "lodash";
// @ts-ignore
import Modal from "buefy/src/components/modal/Modal.vue"

import { category, clear_questions } from './Category'

console.log(category.questions)
import FlipVue from '@/components/Flip.vue';
import CategorySetting from './CategorySetting.vue';
import { isEmpty } from "lodash";

onMounted(() => {
  if (isEmpty(category.questions)) {
    clear_questions()
  }
})
const focus_idx = ref(-1)
const focus_question = computed(() => get(category.questions, focus_idx.value) || { message: 'not exist', visible: false })
const visible_setting = ref(false);
const visible_fucus_question = ref(false);
let timeout: number | null = null;

const grid_style = computed(() => `
  display: grid;
  grid-template-columns: repeat(${category.ncol}, 1fr);
  grid-template-rows: repeat(${category.nrow}, 1fr);
  height: calc(100vh - 80px - 1rem);
  grid-gap: 4px;
`)

function pre_open_flipcard(i: number, el: any) {
  if (!el) return;
  if (el.hover !== get(category.questions, [i, 'visible'], false)) {
    el.handlerHover()
  }
}

function flip(i: number, v: boolean) {
  focus_idx.value = i
  category.questions[i].visible = v
  if (v) {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = window.setTimeout(() => {
      visible_fucus_question.value = v
      timeout = null
    }, 800);
  }
}

</script>

<style lang="scss" scoped>
.plate {
  opacity: 0.9;
  width: 100%;
  height: 100%;

  &.is-close {
    background-color: #ffffff33;
    color: #ffffffee;
  }
}

.my-flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}</style>s
