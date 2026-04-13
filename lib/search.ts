import { Problem } from './types'

// ─────────────────────────────────────────────────────────────────────────────
// HOW THIS WORKS
//
// "my phone is not charging"
//   Step 1 — strip stop words  → ["phone", "charging"]
//   Step 2 — expand concepts   → ["phone","charging","charge","charger","battery",
//                                  "mobile","smartphone","power",...]
//   Step 3 — score every guide → title hit = 12pts, symptom hit = 7pts, etc.
//   Step 4 — sort by score     → best matches surface first
//
// This means ANY natural-language description finds the right guides,
// even if the exact phrase was never typed that way before.
// ─────────────────────────────────────────────────────────────────────────────


// ─── CONCEPT MAP ─────────────────────────────────────────────────────────────
// Maps every word a user might type → the data-side words that will hit.
const CONCEPT_MAP: Record<string, string[]> = {
  // ── Charging / power ──
  'charge':         ['charging', 'charge', 'charger'],
  'charging':       ['charging', 'charge', 'charger', 'battery'],
  'charger':        ['charger', 'charging', 'charge'],
  'cable':          ['charging', 'cable', 'charger'],
  'port':           ['charging', 'port', 'usb'],
  'usb':            ['usb', 'charging', 'port'],
  'plug':           ['charging', 'charger', 'charge'],
  'power':          ['power', 'charging', 'battery', 'not turning on'],
  'wont charge':    ['not charging', 'charging', 'charge'],
  'not charging':   ['not charging', 'charging', 'charge'],
  'no charge':      ['not charging', 'charging'],

  // ── Battery ──
  'battery':        ['battery', 'charging', 'battery drain'],
  'dead':           ['battery', 'not turning on', 'dead', 'charging'],
  'dying':          ['battery drain', 'battery', 'dying'],
  'drain':          ['battery drain', 'battery'],
  'draining':       ['battery drain', 'battery'],

  // ── Not turning on / boot ──
  'turn':           ['turning on', 'not turning on', 'boot', 'power'],
  'turning':        ['turning on', 'not turning on', 'boot'],
  'start':          ['startup', 'boot', 'not turning on'],
  'starting':       ['startup', 'boot', 'not turning on'],
  'boot':           ['boot', 'startup', 'not turning on', 'boot loop'],
  'booting':        ['boot', 'startup', 'not turning on'],
  'startup':        ['startup', 'boot', 'not turning on'],
  'wont start':     ['not turning on', 'boot', 'startup'],
  'wont turn on':   ['not turning on', 'boot'],
  'not turning on': ['not turning on', 'boot', 'startup'],
  'no power':       ['not turning on', 'battery', 'charging'],
  'stuck':          ['stuck', 'startup', 'boot', 'freezing'],
  'loading':        ['startup', 'boot', 'loading', 'stuck'],
  'logo':           ['startup', 'boot', 'logo', 'stuck'],
  'restart':        ['restart', 'restarting', 'boot loop', 'restart loop'],
  'restarting':     ['restarting', 'restart loop', 'boot loop'],
  'reboot':         ['restarting', 'restart loop'],
  'loop':           ['boot loop', 'restart loop', 'loop'],

  // ── Screen / display ──
  'screen':         ['screen', 'display', 'touchscreen'],
  'display':        ['display', 'screen', 'touchscreen'],
  'flicker':        ['flickering', 'flicker', 'screen', 'display'],
  'flickering':     ['flickering', 'flicker', 'screen'],
  'black':          ['black screen', 'screen', 'display'],
  'blank':          ['black screen', 'blank', 'screen', 'display'],
  'white':          ['white screen', 'screen', 'display'],
  'dark':           ['black screen', 'brightness', 'screen'],
  'dim':            ['brightness', 'dim', 'screen'],
  'bright':         ['brightness', 'screen', 'display'],
  'brightness':     ['brightness', 'screen'],
  'lines':          ['lines', 'screen', 'display', 'flickering'],
  'cracked':        ['cracked', 'screen', 'display'],
  'broken':         ['broken', 'not working', 'crashing'],
  'touch':          ['touchscreen', 'touch', 'screen', 'not responding'],
  'tap':            ['touchscreen', 'touch', 'not responding'],
  'unresponsive':   ['not responding', 'unresponsive', 'touchscreen', 'freezing'],
  'responding':     ['not responding', 'touchscreen', 'unresponsive'],

  // ── Internet / WiFi / network ──
  'internet':       ['internet', 'wifi', 'network', 'connection'],
  'wifi':           ['wifi', 'internet', 'network', 'connection'],
  'wi-fi':          ['wifi', 'internet', 'connection'],
  'network':        ['network', 'wifi', 'internet', 'connection'],
  'connection':     ['connection', 'wifi', 'internet', 'network'],
  'connect':        ['connecting', 'connection', 'wifi', 'network'],
  'connecting':     ['connecting', 'connection', 'wifi'],
  'disconnect':     ['disconnecting', 'wifi', 'connection'],
  'disconnecting':  ['disconnecting', 'wifi', 'connection'],
  'signal':         ['signal', 'wifi', 'network', 'no signal'],
  'slow':           ['slow', 'speed', 'performance', 'lagging'],
  'speed':          ['speed', 'slow', 'internet', 'performance'],
  'data':           ['data', 'mobile data', 'internet', 'network'],
  'mobile':         ['mobile data', 'data', 'network', 'signal'],
  'router':         ['router', 'wifi', 'internet'],
  'hotspot':        ['hotspot', 'wifi', 'mobile data'],

  // ── Audio / sound ──
  'sound':          ['sound', 'audio', 'speaker', 'no sound'],
  'audio':          ['audio', 'sound', 'speaker'],
  'speaker':        ['speaker', 'sound', 'audio', 'no sound'],
  'hear':           ['no sound', 'speaker', 'audio'],
  'volume':         ['volume', 'sound', 'audio'],
  'mute':           ['mute', 'no sound', 'sound', 'audio'],
  'microphone':     ['microphone', 'mic', 'audio'],
  'mic':            ['microphone', 'mic', 'audio'],
  'headphone':      ['headphone', 'audio', 'jack'],
  'headphones':     ['headphone', 'audio', 'jack'],
  'earphone':       ['headphone', 'earphones', 'audio'],
  'earphones':      ['headphone', 'earphones', 'audio'],
  'jack':           ['jack', 'headphone', 'audio'],
  'noise':          ['noise', 'sound', 'audio', 'speaker'],
  'distorted':      ['distorted', 'sound', 'audio'],
  'echo':           ['echo', 'audio', 'microphone'],

  // ── Camera ──
  'camera':         ['camera', 'photo', 'video'],
  'photo':          ['photo', 'camera', 'image'],
  'photos':         ['photo', 'camera'],
  'picture':        ['photo', 'camera', 'image'],
  'pictures':       ['photo', 'camera'],
  'video':          ['video', 'camera', 'recording'],
  'blurry':         ['blurry', 'blur', 'camera', 'focus'],
  'blur':           ['blur', 'blurry', 'camera'],
  'focus':          ['focus', 'camera', 'blur'],
  'flash':          ['flash', 'camera'],

  // ── Performance ──
  'lag':            ['lagging', 'slow', 'performance'],
  'lagging':        ['lagging', 'slow', 'performance'],
  'freeze':         ['freezing', 'freeze', 'not responding'],
  'freezing':       ['freezing', 'freeze', 'not responding', 'stuck'],
  'frozen':         ['freezing', 'freeze', 'not responding'],
  'hang':           ['freezing', 'hanging', 'not responding'],
  'hanging':        ['freezing', 'hanging', 'not responding'],
  'crash':          ['crashing', 'crash', 'closing'],
  'crashing':       ['crashing', 'crash', 'app', 'closing'],
  'crashes':        ['crashing', 'crash'],
  'performance':    ['performance', 'slow', 'lagging'],
  'memory':         ['memory', 'ram', 'storage'],
  'storage':        ['storage', 'memory', 'full'],
  'full':           ['full', 'storage', 'space'],
  'space':          ['space', 'storage', 'full'],
  'overheating':    ['overheating', 'overheat', 'hot', 'temperature'],
  'overheat':       ['overheating', 'overheat', 'hot'],
  'hot':            ['overheating', 'hot', 'temperature'],
  'heat':           ['overheating', 'hot', 'temperature'],
  'heating':        ['overheating', 'overheat', 'hot'],
  'fan':            ['fan', 'overheating', 'noise', 'performance'],

  // ── Apps / software ──
  'app':            ['app', 'application', 'crashing', 'not working'],
  'apps':           ['app', 'application'],
  'application':    ['app', 'application'],
  'open':           ['not opening', 'not launching', 'open', 'launch'],
  'opening':        ['not opening', 'open', 'launch'],
  'launch':         ['not launching', 'launch', 'not opening'],
  'install':        ['install', 'installation', 'app'],
  'update':         ['update', 'app', 'software'],
  'download':       ['download', 'install', 'app'],
  'notification':   ['notification', 'notifications', 'not working'],
  'notifications':  ['notifications', 'notification', 'not working'],
  'instagram':      ['instagram', 'app', 'crashing'],
  'whatsapp':       ['whatsapp', 'app'],
  'youtube':        ['youtube', 'app', 'streaming'],
  'facebook':       ['facebook', 'app'],
  'tiktok':         ['tiktok', 'app'],
  'snapchat':       ['snapchat', 'app'],
  'gmail':          ['gmail', 'email', 'app'],
  'google':         ['google', 'app'],
  'play store':     ['play store', 'app', 'install'],
  'app store':      ['app store', 'app', 'install'],

  // ── Bluetooth ──
  'bluetooth':      ['bluetooth', 'pairing', 'connection'],
  'pair':           ['pairing', 'bluetooth', 'connection'],
  'pairing':        ['pairing', 'bluetooth', 'connection'],
  'paired':         ['pairing', 'bluetooth'],

  // ── Keyboard / input ──
  'keyboard':       ['keyboard', 'keys', 'typing'],
  'keys':           ['keyboard', 'keys'],
  'typing':         ['keyboard', 'typing'],
  'touchpad':       ['touchpad', 'cursor', 'trackpad'],
  'trackpad':       ['touchpad', 'cursor', 'trackpad'],
  'cursor':         ['cursor', 'touchpad', 'mouse'],
  'mouse':          ['mouse', 'cursor', 'touchpad'],

  // ── Device names ──
  'phone':          ['phone', 'mobile', 'smartphone'],
  'smartphone':     ['smartphone', 'phone', 'mobile'],
  'iphone':         ['iphone', 'ios', 'apple', 'phone'],
  'samsung':        ['samsung', 'galaxy', 'android', 'phone'],
  'galaxy':         ['samsung', 'galaxy', 'android'],
  'android':        ['android', 'phone', 'mobile'],
  'ios':            ['ios', 'iphone', 'apple'],
  'apple':          ['apple', 'iphone', 'ios', 'macbook', 'mac'],
  'laptop':         ['laptop', 'computer', 'pc'],
  'computer':       ['computer', 'laptop', 'pc', 'windows'],
  'pc':             ['pc', 'computer', 'laptop', 'windows'],
  'macbook':        ['macbook', 'mac', 'apple', 'laptop'],
  'mac':            ['mac', 'macbook', 'apple', 'laptop'],
  'windows':        ['windows', 'laptop', 'pc'],
  'dell':           ['dell', 'laptop', 'windows'],
  'hp':             ['hp', 'laptop', 'windows'],
  'lenovo':         ['lenovo', 'laptop', 'windows'],
  'asus':           ['asus', 'laptop'],
  'acer':           ['acer', 'laptop'],
  'tablet':         ['tablet', 'ipad', 'android'],
  'ipad':           ['ipad', 'tablet', 'ios', 'apple'],
  'tv':             ['tv', 'smart tv', 'screen', 'display'],
  'smart tv':       ['smart tv', 'tv'],
  'television':     ['tv', 'smart tv'],
  'xbox':           ['xbox', 'gaming', 'console'],
  'playstation':    ['playstation', 'ps4', 'ps5', 'gaming', 'console'],
  'ps4':            ['ps4', 'playstation', 'gaming'],
  'ps5':            ['ps5', 'playstation', 'gaming'],
  'console':        ['console', 'gaming', 'xbox', 'playstation'],
  'printer':        ['printer', 'printing'],
  'watch':          ['watch', 'smartwatch', 'wearable'],
  'smartwatch':     ['smartwatch', 'watch', 'wearable'],

  // ── Email / accounts ──
  'email':          ['email', 'gmail', 'outlook', 'mail'],
  'mail':           ['email', 'mail', 'gmail'],
  'password':       ['password', 'account', 'login', 'locked'],
  'account':        ['account', 'login', 'password'],
  'login':          ['login', 'account', 'password', 'sign in'],
  'locked':         ['locked', 'account', 'password'],

  // ── Security ──
  'virus':          ['virus', 'malware', 'security'],
  'malware':        ['malware', 'virus', 'security'],
  'hacked':         ['hacked', 'security', 'account'],

  // ── Problem words (catch "broken", "issue", etc.) ──
  'not working':    ['not working', 'issue', 'problem'],
  'problem':        ['problem', 'issue', 'not working'],
  'issue':          ['issue', 'problem', 'not working'],
  'error':          ['error', 'not working', 'failed'],
  'failed':         ['failed', 'error', 'not working'],
}

// ─── Stop words — provide no search signal, stripped out ─────────────────────
const STOP_WORDS = new Set([
  'my', 'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'shall', 'can', 'need', 'to', 'of', 'in',
  'on', 'at', 'by', 'for', 'with', 'about', 'from', 'up', 'into',
  'it', 'its', 'this', 'that', 'these', 'those', 'i', 'me', 'we',
  'how', 'what', 'why', 'when', 'where', 'who', 'which', 'there',
  'please', 'hi', 'hello', 'hey', 'just', 'only', 'also', 'very',
  'really', 'suddenly', 'recently', 'always', 'sometimes', 'keep',
  'keeps', 'kept', 'getting', 'get', 'got', 'make', 'makes', 'made',
  'go', 'goes', 'went', 'come', 'comes', 'came', 'now', 'then',
  'after', 'before', 'again', 'back', 'still', 'even', 'but', 'and',
  'or', 'so', 'if', 'not', 'no', 'yes', 'ok', 'okay', 'help', 'tell',
  'know', 'think', 'try', 'use', 'used', 'using', 'show', 'see',
  'look', 'find', 'work', 'works', 'worked', 'working', 'say', 'said',
])

// ─── Normalize ────────────────────────────────────────────────────────────────
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[''`]/g, "'")
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// ─── Stem — strip common suffixes to get root ─────────────────────────────────
// "charging" → "charg"  "disconnecting" → "disconnect"  "flickering" → "flicker"
function stem(word: string): string {
  if (word.length <= 4) return word
  if (word.endsWith('ing'))  return word.slice(0, -3)
  if (word.endsWith('tion')) return word.slice(0, -4)
  if (word.endsWith('ed'))   return word.slice(0, -2)
  if (word.endsWith('ly'))   return word.slice(0, -2)
  if (word.endsWith('ers'))  return word.slice(0, -3)
  if (word.endsWith('er'))   return word.slice(0, -2)
  if (word.endsWith('s') && word.length > 5) return word.slice(0, -1)
  return word
}

// ─── Step 1: Extract keywords from the raw query ─────────────────────────────
// Strips stop words, checks for multi-word concepts first
export function extractKeywords(raw: string): string[] {
  const q = normalize(raw)
  const keywords: string[] = []
  let remaining = q

  // Check multi-word phrases first (longest first so "play store" beats "play")
  const phrases = Object.keys(CONCEPT_MAP)
    .filter(k => k.includes(' '))
    .sort((a, b) => b.length - a.length)

  for (const phrase of phrases) {
    if (remaining.includes(phrase)) {
      keywords.push(phrase)
      remaining = remaining.split(phrase).join(' ')
    }
  }

  // Then individual words that aren't stop words
  const words = remaining
    .split(' ')
    .map(w => w.replace(/[^a-z0-9]/g, ''))
    .filter(w => w.length > 1 && !STOP_WORDS.has(w))

  for (const word of words) {
    keywords.push(word)
  }

  return [...new Set(keywords)]
}

// ─── Step 2: Expand keywords → full term set ──────────────────────────────────
function expandKeywords(keywords: string[]): string[] {
  const expanded = new Set<string>()

  for (const kw of keywords) {
    expanded.add(kw)

    // Expand through concept map
    const expansions = CONCEPT_MAP[kw]
    if (expansions) {
      for (const t of expansions) expanded.add(t)
    }

    // Stem and expand the stemmed version too
    const stemmed = stem(kw)
    if (stemmed !== kw) {
      expanded.add(stemmed)
      const stemExpansions = CONCEPT_MAP[stemmed]
      if (stemExpansions) {
        for (const t of stemExpansions) expanded.add(t)
      }
    }
  }

  return Array.from(expanded)
}

// ─── Step 3: Score a problem against the term set ────────────────────────────
function scoreProblem(problem: Problem, terms: string[]): number {
  const title      = problem.title.toLowerCase()
  const desc       = problem.shortDescription.toLowerCase()
  const subcat     = problem.subcategory.toLowerCase()
  const cat        = problem.category.toLowerCase()
  const symptoms   = problem.symptoms.join(' ').toLowerCase()
  const causes     = problem.causes.join(' ').toLowerCase()
  const steps      = problem.steps.map(s => `${s.title} ${s.description}`).join(' ').toLowerCase()
  const advice     = problem.technicianAdvice.toLowerCase()
  const everything = `${title} ${desc} ${subcat} ${cat} ${symptoms} ${causes} ${steps} ${advice}`

  let score = 0

  for (const term of terms) {
    if (!term || term.length < 2) continue
    const t = term.toLowerCase()

    if (title.includes(t))    { score += 12; continue }
    if (subcat.includes(t))   { score += 8;  continue }
    if (symptoms.includes(t)) { score += 7;  continue }
    if (desc.includes(t))     { score += 6;  continue }
    if (causes.includes(t))   { score += 5;  continue }
    if (cat.includes(t))      { score += 4;  continue }
    if (steps.includes(t))    { score += 3;  continue }
    if (advice.includes(t))   { score += 2;  continue }

    // Last resort: try stem of term
    const st = stem(t)
    if (st !== t && everything.includes(st)) {
      score += 1
    }
  }

  return score
}

// ─── Public API ───────────────────────────────────────────────────────────────
export function smartSearch(problems: Problem[], rawQuery: string): Problem[] {
  if (!rawQuery.trim()) return []

  const keywords = extractKeywords(rawQuery)
  const terms    = expandKeywords(keywords)

  // MIN_SCORE = 3 means at least one meaningful word must match somewhere
  const MIN_SCORE = 3

  return problems
    .map(p => ({ problem: p, score: scoreProblem(p, terms) }))
    .filter(({ score }) => score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .map(({ problem }) => problem)
}
