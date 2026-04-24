#!/usr/bin/env node
'use strict'

const http = require('http')
const fs   = require('fs')
const path = require('path')

const PORT        = process.env.PORT || 3001
const SCORES_FILE = path.join(__dirname, 'scores.json')
const MAX_ENTRIES = 500
const MAX_NAME    = 24

// ── persistence ───────────────────────────────────────────────
function readScores() {
  try { return JSON.parse(fs.readFileSync(SCORES_FILE, 'utf8')) }
  catch { return [] }
}
function writeScores(arr) {
  fs.writeFileSync(SCORES_FILE, JSON.stringify(arr, null, 2))
}

// ── helpers ───────────────────────────────────────────────────
function send(res, status, body) {
  const json = JSON.stringify(body)
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end(json)
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = ''
    req.on('data', c => { raw += c; if (raw.length > 4096) reject(new Error('too large')) })
    req.on('end',  () => resolve(raw))
    req.on('error', reject)
  })
}

function sanitize(str, max) {
  return String(str ?? '').replace(/[<>"'&]/g, '').trim().slice(0, max)
}

// ── routing ───────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  // preflight
  if (req.method === 'OPTIONS') { send(res, 204, {}); return }

  // GET /api/leaderboard
  if (req.method === 'GET' && req.url === '/api/leaderboard') {
    const scores = readScores()
    scores.sort((a, b) => b.score - a.score)
    send(res, 200, scores.slice(0, 20))
    return
  }

  // POST /api/score
  if (req.method === 'POST' && req.url === '/api/score' || req.url === '/score') {
    try {
      const body = await readBody(req)
      const raw  = JSON.parse(body)

      const entry = {
        name:    sanitize(raw.name, MAX_NAME) || 'anonymous',
        score:   Math.max(0, Math.min(9_999_999, Math.round(Number(raw.score)  || 0))),
        correct: Math.max(0, Math.min(9999,      Math.round(Number(raw.correct)|| 0))),
        total:   Math.max(0, Math.min(9999,      Math.round(Number(raw.total)  || 0))),
        seconds: Math.max(0, Math.min(86400,     Math.round(Number(raw.seconds)|| 0))),
        date:    new Date().toISOString(),
      }

      const scores = readScores()
      scores.push(entry)
      // keep only top MAX_ENTRIES by score to prevent unbounded growth
      scores.sort((a, b) => b.score - a.score)
      writeScores(scores.slice(0, MAX_ENTRIES))

      send(res, 200, { ok: true })
    } catch (e) {
      send(res, 400, { error: String(e.message) })
    }
    return
  }

  send(res, 404, { error: 'not found' })
})

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Leaderboard API listening on 127.0.0.1:${PORT}`)
})
