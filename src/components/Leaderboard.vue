<template>
  <div class="full-screen leaderboard-screen">
    <div class="board-card">
      <div class="board-header">
        <span class="board-icon">⚡</span>
        <h2>{{ t('boardTitle') }}</h2>
        <button class="btn btn-ghost btn-back" @click="$emit('back')">{{ t('backBtn') }}</button>
      </div>

      <div v-if="loading" class="board-empty">{{ t('loadingScores') }}</div>
      <div v-else-if="!entries.length" class="board-empty">{{ t('noScores') }}</div>
      <div v-else class="board-table-wrap">
        <table class="board-table">
          <thead>
            <tr>
              <th>{{ t('rankCol') }}</th>
              <th>{{ t('nameCol') }}</th>
              <th class="num">{{ t('scoreCol') }}</th>
              <th class="num">{{ t('correctCol') }}</th>
              <th class="num">{{ t('timeCol') }}</th>
              <th>{{ t('dateCol') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(e, i) in entries"
              :key="i"
              :class="{ 'row-gold': i === 0, 'row-silver': i === 1, 'row-bronze': i === 2, 'row-me': e._isMe }"
            >
              <td class="rank">{{ i + 1 }}</td>
              <td class="entry-name">{{ e.name || 'anonymous' }}</td>
              <td class="num score-val">{{ e.score.toLocaleString() }}</td>
              <td class="num">{{ e.correct }}/{{ e.total }}</td>
              <td class="num">{{ fmtTime(e.seconds) }}</td>
              <td class="entry-date">{{ fmtDate(e.date) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { t } from '../i18n.js'

const props = defineProps({ highlightScore: { type: Number, default: null } })
defineEmits(['back'])

const loading = ref(true)
const entries = ref([])

onMounted(async () => {
  try {
    const r = await fetch('/api/leaderboard')
    const data = await r.json()
    entries.value = data.map(e => ({
      ...e,
      _isMe: props.highlightScore !== null && e.score === props.highlightScore,
    }))
  } catch {
    entries.value = []
  } finally {
    loading.value = false
  }
})

function fmtTime(s) {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
}

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString()
  } catch {
    return iso
  }
}
</script>
