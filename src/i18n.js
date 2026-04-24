import { ref } from 'vue'

const detected = (navigator.language || '').startsWith('de') ? 'de' : 'en'
export const lang = ref(detected)

const s = {
  en: {
    // home
    deckLabel:    'deck',     deckVal:    'Linux Essentials (LPI 010-160)',
    qLabel:       'questions',
    fmtLabel:     'format',   fmtVal:     'multiple choice · self-assessment',
    reviewLabel:  'review',   reviewVal:  'wrong answers re-queued automatically',
    startQuiz:    'start quiz',
    viewBoard:    'leaderboard',

    // hints
    selectOne:  '◉ select one answer',
    selectAll:  '☰ select all that apply',

    // buttons
    checkAnswer:    'check answer',
    nextQuestion:   'next question →',
    finishReview:   'finish review →',
    seeResults:     'see results →',
    reviewWrong:    '↺ review wrong answers',
    restartQuiz:    '↺ restart quiz',

    // verdict
    verdictOk:  (n) => n === 1 ? '✓ Correct' : '✓ Correct',
    verdictBad: '✗ Incorrect — correct answer highlighted',

    // header
    reviewBadge: '↺ review round',

    // sidebar
    sidebarTitle: 'questions',

    // result
    quizComplete:  'quiz complete',
    correctLbl:    'correct',
    wrongLbl:      'wrong',
    scoreLbl:      'score',
    yourScore:     'your score',
    timeLbl:       'time',
    wrongQueued:   (n) => `${n} question${n !== 1 ? 's' : ''} queued for review.`,
    allCorrect:    'All answers correct — perfect score!',

    // leaderboard submit
    submitScore:   'submit to leaderboard',
    nameLbl:       'your name',
    namePh:        'leave empty for anonymous',
    submitting:    'submitting…',
    submitted:     '✓ submitted',
    submitErr:     'could not reach server',

    // final
    sessionDone:   'session complete',
    perfectReview: 'all done — perfect review',
    totalLbl:      'total questions',
    round1Lbl:     'correct (round 1)',
    stillWrong:    'still wrong after review',
    revisitLbl:    'still need work:',

    // leaderboard page
    boardTitle:  'leaderboard',
    backBtn:     '← back',
    rankCol:     '#',
    nameCol:     'name',
    scoreCol:    'score',
    correctCol:  'correct',
    timeCol:     'time',
    dateCol:     'date',
    noScores:    'no scores yet — be the first!',
    loadingScores: 'loading…',
  },

  de: {
    deckLabel:    'Deck',     deckVal:    'Linux Essentials (LPI 010-160)',
    qLabel:       'Fragen',
    fmtLabel:     'Format',   fmtVal:     'Multiple Choice · Selbsttest',
    reviewLabel:  'Wiederholung', reviewVal: 'Falsche Antworten werden automatisch wiederholt',
    startQuiz:    'Quiz starten',
    viewBoard:    'Bestenliste',

    selectOne:  '◉ Eine Antwort wählen',
    selectAll:  '☰ Alle richtigen Antworten wählen',

    checkAnswer:    'Antwort prüfen',
    nextQuestion:   'Nächste Frage →',
    finishReview:   'Wiederholung beenden →',
    seeResults:     'Ergebnis anzeigen →',
    reviewWrong:    '↺ Falsche Antworten wiederholen',
    restartQuiz:    '↺ Quiz neu starten',

    verdictOk:  () => '✓ Richtig',
    verdictBad: '✗ Falsch — richtige Antwort hervorgehoben',

    reviewBadge: '↺ Wiederholungsrunde',

    sidebarTitle: 'Fragen',

    quizComplete:  'Quiz abgeschlossen',
    correctLbl:    'Richtig',
    wrongLbl:      'Falsch',
    scoreLbl:      'Punkte',
    yourScore:     'Deine Punkte',
    timeLbl:       'Zeit',
    wrongQueued:   (n) => `${n} Frage${n !== 1 ? 'n' : ''} zur Wiederholung vorgemerkt.`,
    allCorrect:    'Alle Antworten richtig — perfekte Punktzahl!',

    submitScore:   'In Bestenliste eintragen',
    nameLbl:       'Dein Name',
    namePh:        'leer lassen für anonym',
    submitting:    'wird gesendet…',
    submitted:     '✓ eingetragen',
    submitErr:     'Server nicht erreichbar',

    sessionDone:   'Session abgeschlossen',
    perfectReview: 'Alles richtig — perfekte Wiederholung',
    totalLbl:      'Fragen gesamt',
    round1Lbl:     'Richtig (Runde 1)',
    stillWrong:    'Nach Wiederholung noch falsch',
    revisitLbl:    'Noch zu üben:',

    boardTitle:  'Bestenliste',
    backBtn:     '← Zurück',
    rankCol:     '#',
    nameCol:     'Name',
    scoreCol:    'Punkte',
    correctCol:  'Richtig',
    timeCol:     'Zeit',
    dateCol:     'Datum',
    noScores:    'Noch keine Einträge — sei der Erste!',
    loadingScores: 'lädt…',
  },
}

export function t(key, ...args) {
  const val = s[lang.value]?.[key] ?? s.en[key] ?? key
  return typeof val === 'function' ? val(...args) : val
}
