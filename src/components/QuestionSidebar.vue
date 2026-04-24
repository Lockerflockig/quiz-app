<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <span class="sidebar-title">{{ t('sidebarTitle') }}</span>
      <span class="sidebar-count">{{ items.length }}</span>
    </div>
    <div class="sidebar-list" ref="listEl">
      <button
        v-for="(item, index) in items"
        :key="item.id"
        :ref="el => { if (item.isCurrent) activeEl = el }"
        class="sidebar-item"
        :class="[`s-${item.status}`, { 's-current': item.isCurrent }]"
        @click="$emit('jump', index)"
      >
        <span class="s-num">{{ String(index + 1).padStart(2, '0') }}</span>
        <span class="s-text">{{ truncate(item.text, 42) }}</span>
        <span class="s-dot">{{ dotChar(item.status) }}</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { t } from '../i18n.js'

defineProps({ items: Array, currentIndex: Number })
defineEmits(['jump'])

const listEl  = ref(null)
const activeEl = ref(null)

watch(
  () => activeEl.value,
  async (el) => {
    if (!el) return
    await nextTick()
    el.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }
)

function truncate(text, max) {
  return text.length > max ? text.slice(0, max) + '…' : text
}
function dotChar(s) {
  if (s === 'correct') return '✓'
  if (s === 'wrong')   return '✗'
  return '·'
}
</script>
