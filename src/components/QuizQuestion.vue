<template>
  <div class="question-wrap">
    <div class="question-hint">
      <span v-if="question.isMulti" class="hint-badge hint-multi">{{ t('selectAll') }}</span>
      <span v-else class="hint-badge hint-single">{{ t('selectOne') }}</span>
    </div>

    <p class="question-text">{{ question.question }}</p>

    <div class="options-list">
      <button
        v-for="opt in question.options"
        :key="opt"
        class="option-card"
        :class="optClass(opt)"
        :disabled="state.submitted"
        @click="toggle(opt)"
      >
        <span class="opt-indicator">
          <span v-if="question.isMulti" class="chk" :class="{ on: isSelected(opt) }">
            {{ isSelected(opt) ? '■' : '□' }}
          </span>
          <span v-else class="rdo" :class="{ on: isSelected(opt) }">
            {{ isSelected(opt) ? '◉' : '○' }}
          </span>
        </span>
        <span class="opt-text">{{ opt }}</span>
        <span v-if="state.submitted" class="opt-mark">
          <span v-if="isCorrect(opt)" class="mark-correct">✓</span>
          <span v-else-if="isSelected(opt)" class="mark-wrong">✗</span>
        </span>
      </button>
    </div>

    <div class="question-actions">
      <template v-if="!state.submitted">
        <button
          class="btn btn-check"
          :disabled="localSelected.length === 0"
          @click="submit"
        >
          {{ t('checkAnswer') }}
        </button>
      </template>
      <template v-else>
        <div class="answer-verdict" :class="state.correct ? 'verdict-correct' : 'verdict-wrong'">
          <span v-if="state.correct">{{ t('verdictOk', 1) }}</span>
          <span v-else>{{ t('verdictBad') }}</span>
        </div>
        <button class="btn btn-next" @click="$emit('next')">
          {{ hasMore ? t('nextQuestion') : (phase === 'review' ? t('finishReview') : t('seeResults')) }}
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { t } from '../i18n.js'

const props = defineProps({
  question: Object,
  state:    Object,
  hasMore:  Boolean,
  phase:    String,
})
const emit = defineEmits(['submit', 'next'])

const localSelected = ref(props.state.submitted ? [...props.state.selected] : [])

function isSelected(opt) { return localSelected.value.includes(opt) }
function isCorrect(opt)   { return props.question.correct.includes(opt) }

function toggle(opt) {
  if (props.state.submitted) return
  if (props.question.isMulti) {
    const i = localSelected.value.indexOf(opt)
    i === -1 ? localSelected.value.push(opt) : localSelected.value.splice(i, 1)
  } else {
    localSelected.value = [opt]
  }
}

function submit() { emit('submit', [...localSelected.value]) }

function optClass(opt) {
  if (!props.state.submitted) return isSelected(opt) ? 'opt-selected' : ''
  if (isCorrect(opt))          return 'opt-correct'
  if (isSelected(opt))         return 'opt-wrong'
  return 'opt-neutral'
}
</script>
