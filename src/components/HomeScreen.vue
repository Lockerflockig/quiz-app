<template>
  <div class="full-screen home-screen">
    <div class="home-card">
      <div class="home-top">
        <div class="terminal-prompt">
          <span class="p-user">user</span><span class="p-at">@</span><span class="p-host">lpi</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-dollar"> $ </span><span class="p-cmd">./linux_essentials_quiz.sh</span>
        </div>
        <div class="lang-toggle">
          <button :class="['lang-btn', { active: lang === 'en' }]" @click="lang = 'en'">EN</button>
          <button :class="['lang-btn', { active: lang === 'de' }]" @click="lang = 'de'">DE</button>
        </div>
      </div>

      <div class="home-meta">
        <div class="meta-row"><span class="mk">{{ t('deckLabel') }}</span><span class="mo">:</span><span class="mv">{{ t('deckVal') }}</span></div>
        <div class="meta-row"><span class="mk">{{ t('qLabel') }}</span><span class="mo">:</span><span class="mv">{{ total }}</span></div>
        <div class="meta-row"><span class="mk">{{ t('fmtLabel') }}</span><span class="mo">:</span><span class="mv">{{ t('fmtVal') }}</span></div>
        <div class="meta-row"><span class="mk">{{ t('reviewLabel') }}</span><span class="mo">:</span><span class="mv">{{ t('reviewVal') }}</span></div>
      </div>

      <div class="home-actions">
        <button class="btn btn-start" @click="$emit('start')">
          <span>▶</span> {{ t('startQuiz') }}
        </button>
        <button class="btn btn-ghost" @click="$emit('board')">
          ⚡ {{ t('viewBoard') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { t, lang } from '../i18n.js'
defineProps({ total: Number })
defineEmits(['start', 'board'])
</script>
