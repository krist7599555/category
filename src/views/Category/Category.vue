/* eslint-disable */
<template lang="pug">
.bg(:style="'background-image: url(' + category.background + ')'")
  Modal(v-model:active="visible_setting")
    CategorySetting
  Modal(v-model:active="visible_fucus_question" :width="640" scroll="keep")
    .hero
      .hero-body
        .title.first Question number {{focus_idx + 1}}
        .title.second {{focus_question.message}}

  .title {{category.title}}
  .is-inline
    .button.is-small(@click='visible_setting = true' style='top: 1.5rem; position: absolute; left: 1rem; background-color: transparent; opacity: 0.5')
      label(style='color: white') setting

  div(style='padding: 0 1rem 1rem 1rem')
    #category-grid(:style='grid_style')
      .flip-wrapper(v-for='(q, i) in category.questions' :key='i + q.message')
        FlipVue(
          :ref='el => pre_open_flipcard(i, el)'
          :active-hover="false" 
          :active-click="true" 
          width="100%"
          height="100%"
          transition='1s'
        )
          template(v-slot:front)
            .box.plate(@click='flip(i, true)')
              h1(style='font-size: 3rem; margin: 0 auto') {{i+1}}
          template(v-slot:back)
            .box.plate.is-close.my-flex(@click='flip(i, false)')
              div(style='text-align: center;') {{q.message}}
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, ref } from "vue";
import { get } from "lodash";
import Modal from "buefy/src/components/modal/Modal.vue"

import { category, clear_questions, question_set_visible } from './Category'
import FlipVue from '../../components/Flip.vue';
import CategorySetting from './CategorySetting.vue';
import { isEmpty } from "lodash";

export default defineComponent({
  components: {
    Modal,
    FlipVue,
    CategorySetting,
  },
  setup() {
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
    return {
      visible_setting,
      visible_fucus_question,
      focus_idx,
      focus_question,
      category,
      grid_style: computed(() => `
        display: grid;
        grid-template-columns: repeat(${category.ncol}, 1fr);
        grid-template-rows: repeat(${category.nrow}, 1fr);
        height: calc(100vh - 80px - 1rem);
        grid-gap: 4px;
      `),
      pre_open_flipcard(i: number, el: any) {
        if (!el) return;
        if (el.hover !== get(category.questions, [i, 'visible'], false)) {
          el.handlerHover()
        }
      },
      flip(i: number, v: boolean) {
        focus_idx.value = i
        question_set_visible(i, v)
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
    };
  },
});
</script>

<style lang="scss" scoped>
.hero-body .title {
  &.first {
    font-size: 3rem;
  }
  &.second {
    font-size: 4.4rem;
    line-height: 6rem;
  }
}
.bg {
  margin: 0 auto;
  min-height: 93vh;
  justify-content: center;
  vertical-align: middle;
  // background-image: url(https://images.unsplash.com/photo-1484503753579-5a70ce11a6ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tim-trad-190770-unsplash.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: color-burn; //luminosity;
  background-position: center center;
  background-color: #130c0dc2;

}
.is-flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
}
.wrap {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.title {
  color: white;
  text-align: center;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 0px;
}
.round-edge {
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
}

.plate {
  opacity: 0.9;
  width: 100%;
  height: 100%;
  &.is-close {
    background-color: #ffffff33;
    color: #ffffffee;
  }
  &.is-active {
    opacity: 1;
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
}

</style>s
