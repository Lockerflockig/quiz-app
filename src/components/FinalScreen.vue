<template>
  <div class="full-screen final-screen">
    <div class="result-card">
      <div class="result-header">
        <span class="result-icon" :class="reviewWrong.length === 0 ? 'icon-green' : 'icon-amber'">
          {{ reviewWrong.length === 0 ? '✓' : '○' }}
        </span>
        <h2>{{ reviewWrong.length === 0 ? t('perfectReview') : t('sessionDone') }}</h2>
      </div>

      <div class="stats-grid">
        <div class="stat-cell">
          <span class="stat-num stat-total">{{ total }}</span>
          <span class="stat-lbl">{{ t('totalLbl') }}</span>
        </div>
        <div class="stat-cell">
          <span class="stat-num stat-correct">{{ firstRoundCorrect }}</span>
          <span class="stat-lbl">{{ t('round1Lbl') }}</span>
        </div>
        <div class="stat-cell">
          <span class="stat-num" :class="reviewWrong.length === 0 ? 'stat-correct' : 'stat-wrong'">
            {{ reviewWrong.length }}
          </span>
          <span class="stat-lbl">{{ t('stillWrong') }}</span>
        </div>
        <div class="stat-cell">
          <span class="stat-num stat-score">{{ score.toLocaleString() }}</span>
          <span class="stat-lbl">{{ t('scoreLbl') }}</span>
        </div>
      </div>

      <div v-if="reviewWrong.length > 0" class="wrong-list">
        <p class="wl-label">{{ t('revisitLbl') }}</p>
        <ul>
          <li v-for="q in reviewWrong" :key="q.id" class="wl-item">
            <span class="wl-q">{{ q.question }}</span>
            <span class="wl-a">→ {{ q.correct.join(' · ') }}</span>
          </li>
        </ul>
      </div>

      <!-- leaderboard submit -->
      <div class="submit-block">
        <p class="submit-label">{{ t('yourScore') }}: <strong>{{ score.toLocaleString() }}</strong></p>
        <div v-if="!submitted" class="submit-form">
          <input
            v-model="nameInput"
            class="name-input"
            :placeholder="t('namePh')"
            maxlength="24"
            @keyup.enter="submitScore"
          />
          <button class="btn btn-submit-score" :disabled="submitting" @click="submitScore">
            {{ submitting ? t('submitting') : t('submitScore') }}
          </button>
        </div>
        <div v-else class="submit-ok">{{ t('submitted') }}</div>
        <p v-if="submitError" class="submit-err">{{ t('submitErr') }}</p>
      </div>

      <div class="result-actions">
        <button class="btn btn-ghost" @click="$emit('board')">⚡ {{ t('viewBoard') }}</button>
        <button class="btn btn-primary" @click="$emit('restart')">{{ t('restartQuiz') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { t } from '../i18n.js'

const props = defineProps({
  total: Number, firstRoundCorrect: Number, reviewWrong: Array,
  score: Number, seconds: Number,
})
defineEmits(['restart', 'board'])

const nameInput   = ref('')
const submitting  = ref(false)
const submitted   = ref(false)
const submitError = ref(false)

async function submitScore() {
  submitting.value  = true
  submitError.value = false
  try {
    const res = await fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:    nameInput.value.trim() || 'anonymous',
        score:   props.score,
        correct: props.firstRoundCorrect,
        total:   props.total,
        seconds: props.seconds,
      }),
    })
    if (!res.ok) throw new Error()
    submitted.value = true
  } catch {
    submitError.value = true
  } finally {
    submitting.value = false
  }
}
</script>
