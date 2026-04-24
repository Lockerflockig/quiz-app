<template>
  <!-- Home -->
  <HomeScreen
    v-if="phase === 'home'"
    :total="questions.length"
    @start="goLoading"
    @board="phase = 'leaderboard'"
  />

  <!-- Loading animation -->
  <LoadingScreen v-else-if="phase === 'loading'" @done="startQuiz" />

  <!-- Quiz / Review -->
  <div v-else-if="phase === 'quiz' || phase === 'review'" class="quiz-shell">
    <header class="app-header">
      <span class="logo">lpi<span class="accent">_essentials</span></span>
      <div class="header-score">
        <span class="score-chip score-correct">✓ {{ correctCount }}</span>
        <span class="score-chip score-wrong">✗ {{ wrongCount }}</span>
        <span class="score-chip score-pending">○ {{ pendingCount }}</span>
        <span class="score-chip score-time">⏱ {{ elapsedDisplay }}</span>
      </div>
      <span v-if="phase === 'review'" class="review-badge">{{ t('reviewBadge') }}</span>
    </header>

    <div class="quiz-body">
      <QuestionSidebar
        :items="sidebarItems"
        :current-index="currentIndex"
        @jump="jumpTo"
      />
      <main class="quiz-main">
        <QuizQuestion
          v-if="activeQuestions[currentIndex]"
          :key="currentIndex + '-' + phase"
          :question="activeQuestions[currentIndex]"
          :state="activeStates[currentIndex]"
          :has-more="hasMoreUnsubmitted"
          :phase="phase"
          @submit="onSubmit"
          @next="onNext"
        />
      </main>
    </div>
  </div>

  <!-- Result (after main quiz) -->
  <ResultScreen
    v-else-if="phase === 'result'"
    :total="questions.length"
    :correct="correctCount"
    :wrong-list="wrongList"
    :score="finalScore"
    :seconds="elapsedSeconds"
    @review="startReview"
    @restart="restart"
    @board="phase = 'leaderboard'"
  />

  <!-- Final (after review) -->
  <FinalScreen
    v-else-if="phase === 'final'"
    :total="questions.length"
    :first-round-correct="correctCount"
    :review-wrong="reviewWrong"
    :score="finalScore"
    :seconds="elapsedSeconds"
    @restart="restart"
    @board="phase = 'leaderboard'"
  />

  <!-- Leaderboard -->
  <Leaderboard
    v-else-if="phase === 'leaderboard'"
    :highlight-score="lastSubmittedScore"
    @back="phase = prevPhase"
  />
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { questions as questionsEN } from './questions.js'
import { questionsDE } from './questions_de.js'
import { lang, t } from './i18n.js'
import HomeScreen      from './components/HomeScreen.vue'
import LoadingScreen   from './components/LoadingScreen.vue'
import QuestionSidebar from './components/QuestionSidebar.vue'
import QuizQuestion    from './components/QuizQuestion.vue'
import ResultScreen    from './components/ResultScreen.vue'
import FinalScreen     from './components/FinalScreen.vue'
import Leaderboard     from './components/Leaderboard.vue'

// ── shuffle ───────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── phase & routing ───────────────────────────────────────────
const phase    = ref('home')
const prevPhase = ref('home')   // for leaderboard back button

function goLeaderboard() {
  prevPhase.value = phase.value
  phase.value = 'leaderboard'
}

// ── questions state ───────────────────────────────────────────
function sourceQuestions() {
  return lang.value === 'de' ? questionsDE : questionsEN
}

const questions = ref([...questionsEN])
const currentIndex = ref(0)

function makeStates(count) {
  return Array.from({ length: count }, () => ({
    selected: [], submitted: false, correct: false,
  }))
}

const quizStates  = ref(makeStates(questionsEN.length))
const reviewQueue = ref([])
const reviewStates = ref([])

const activeQuestions = computed(() =>
  phase.value === 'review' ? reviewQueue.value : questions.value
)
const activeStates = computed(() =>
  phase.value === 'review' ? reviewStates.value : quizStates.value
)

// ── timer ─────────────────────────────────────────────────────
const startTime      = ref(null)
const elapsedSeconds = ref(0)
let   timerHandle    = null

function startTimer() {
  startTime.value = Date.now()
  timerHandle = setInterval(() => {
    elapsedSeconds.value = Math.floor((Date.now() - startTime.value) / 1000)
  }, 1000)
}
function stopTimer() {
  clearInterval(timerHandle)
  timerHandle = null
}
onUnmounted(stopTimer)

const elapsedDisplay = computed(() => {
  const s = elapsedSeconds.value
  const m = Math.floor(s / 60)
  return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
})

// ── score ─────────────────────────────────────────────────────
const finalScore = computed(() => {
  const base  = correctCount.value * 1000
  const bonus = Math.max(0, 5000 - elapsedSeconds.value * 2)
  return base + bonus
})

const lastSubmittedScore = ref(null)

// ── derived counts ────────────────────────────────────────────
const correctCount = computed(() => quizStates.value.filter(s => s.correct).length)
const wrongCount   = computed(() => quizStates.value.filter(s => s.submitted && !s.correct).length)
const pendingCount = computed(() => quizStates.value.filter(s => !s.submitted).length)
const wrongList    = computed(() =>
  questions.value.filter((_, i) => quizStates.value[i].submitted && !quizStates.value[i].correct)
)
const reviewWrong = computed(() =>
  reviewQueue.value.filter((_, i) => reviewStates.value[i]?.submitted && !reviewStates.value[i]?.correct)
)
const hasMoreUnsubmitted = computed(() =>
  activeStates.value.some((s, i) => i !== currentIndex.value && !s.submitted)
)

const sidebarItems = computed(() => {
  const qs     = activeQuestions.value
  const states = activeStates.value
  return qs.map((q, i) => {
    const isCurrent = i === currentIndex.value
    const st = states[i]
    const status = st?.submitted ? (st.correct ? 'correct' : 'wrong') : 'pending'
    return { id: q.id, text: q.question, status, isCurrent }
  })
})

// ── lifecycle ─────────────────────────────────────────────────
function goLoading() {
  phase.value = 'loading'
}

function startQuiz() {
  questions.value   = shuffle(sourceQuestions())
  quizStates.value  = makeStates(questions.value.length)
  currentIndex.value = 0
  elapsedSeconds.value = 0
  startTimer()
  phase.value = 'quiz'
}

function jumpTo(index) {
  currentIndex.value = index
}

function onSubmit(selected) {
  const states   = activeStates.value
  const qs       = activeQuestions.value
  const state    = states[currentIndex.value]
  const question = qs[currentIndex.value]

  state.selected  = selected
  state.submitted = true
  const cs = new Set(question.correct)
  state.correct   = selected.length === question.correct.length && selected.every(s => cs.has(s))
}

function onNext() {
  const states = activeStates.value
  const qs     = activeQuestions.value

  for (let offset = 1; offset <= qs.length; offset++) {
    const idx = (currentIndex.value + offset) % qs.length
    if (!states[idx].submitted) {
      currentIndex.value = idx
      return
    }
  }

  // All submitted in this phase
  if (phase.value === 'quiz') {
    stopTimer()
    phase.value = 'result'
  } else {
    phase.value = 'final'
  }
}

function startReview() {
  const wrong = questions.value.filter((_, i) =>
    quizStates.value[i].submitted && !quizStates.value[i].correct
  )
  reviewQueue.value  = wrong.map(q => ({ ...q, options: shuffle(q.options) }))
  reviewStates.value = makeStates(reviewQueue.value.length)
  currentIndex.value = 0
  phase.value = 'review'
}

function restart() {
  stopTimer()
  quizStates.value   = makeStates(sourceQuestions().length)
  reviewQueue.value  = []
  reviewStates.value = []
  currentIndex.value = 0
  elapsedSeconds.value = 0
  lastSubmittedScore.value = null
  phase.value = 'home'
}
</script>
