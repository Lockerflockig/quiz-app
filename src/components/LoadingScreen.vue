<template>
  <div class="loading-screen">
    <div class="terminal-window">
      <div class="tw-bar">
        <span class="tw-dot tw-r"></span>
        <span class="tw-dot tw-y"></span>
        <span class="tw-dot tw-g"></span>
        <span class="tw-title">bash — linux-essentials</span>
      </div>
      <div class="tw-body" ref="bodyEl">
        <p
          v-for="(line, i) in visible"
          :key="i"
          :class="['tl', `tl-${line.cls}`]"
        >{{ line.text }}</p>

        <p v-if="barVisible" class="tl tl-normal">
          Fetching...&nbsp;&nbsp;[<span class="bar-done">{{ barDone }}</span><span class="bar-left">{{ barLeft }}</span>]&nbsp;&nbsp;{{ barPct }}%
        </p>

        <span v-if="cursorVisible" class="tl-cursor">█</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['done'])

const TOTAL_W = 28

const SEQUENCE = [
  [0,    'cmd',     '$ apt install linux-essentials'],
  [420,  'normal',  'Reading package lists... Done'],
  [650,  'normal',  'Building dependency tree... Done'],
  [850,  'normal',  'Reading state information... Done'],
  [1050, 'normal',  'The following NEW packages will be installed:'],
  [1200, 'pkg',     '  linux-essentials (010-160)'],
  [1380, 'normal',  '0 upgraded, 80 newly installed, 0 to remove.'],
  [1560, 'normal',  'Need to get 4.2 kB of archives.'],
  [1700, 'normal',  ''],
  [1820, 'normal',  'Get:1 https://dl.lpi.org stable/main linux-essentials 010-160 [4.2 kB]'],
  // bar plays 2000–2650
  [2700, 'normal',  'Fetched 4.2 kB in 0s (11.4 kB/s)'],
  [2880, 'normal',  'Selecting previously unselected package linux-essentials.'],
  [3060, 'normal',  'Unpacking linux-essentials (010-160) ...'],
  [3240, 'normal',  'Setting up linux-essentials (010-160) ...'],
  [3380, 'normal',  'Processing triggers for quiz-engine (1.0.0) ...'],
  [3520, 'normal',  ''],
  [3620, 'success', '✓  80 questions loaded. Launching quiz...'],
]

const DONE_AT = 3950

const visible      = ref([])
const barVisible   = ref(false)
const barPct       = ref(0)
const cursorVisible= ref(true)

const barDone = computed(() => '█'.repeat(Math.round(TOTAL_W * barPct.value / 100)))
const barLeft = computed(() => '░'.repeat(TOTAL_W - Math.round(TOTAL_W * barPct.value / 100)))

const timers = []

function later(ms, fn) {
  timers.push(setTimeout(fn, ms))
}

function scrollBottom() {
  if (bodyEl.value) bodyEl.value.scrollTop = bodyEl.value.scrollHeight
}

const bodyEl = ref(null)

onMounted(() => {
  SEQUENCE.forEach(([delay, cls, text]) => {
    later(delay, () => {
      visible.value.push({ cls, text })
      scrollBottom()
    })
  })

  // progress bar
  later(2000, () => { barVisible.value = true })
  for (let i = 1; i <= 20; i++) {
    later(2000 + i * 32, () => {
      barPct.value = Math.min(100, Math.round(i * 5))
      scrollBottom()
    })
  }
  later(2680, () => { barVisible.value = false })

  // blink cursor off near end
  later(DONE_AT - 200, () => { cursorVisible.value = false })

  later(DONE_AT, () => emit('done'))
})

onUnmounted(() => timers.forEach(clearTimeout))
</script>
