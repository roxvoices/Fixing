import { Problem } from './types'

// ─── Synonym map ────────────────────────────────────────────────────────────
// Keys are what users type (natural language). Values are canonical terms
// that appear in the data. Every key normalises to one or more data terms.
const SYNONYMS: Record<string, string[]> = {
  // Charging / power
  'wont charge': ['not charging', 'charging'],
  "won't charge": ['not charging', 'charging'],
  'not charging': ['not charging', 'charging'],
  'not charge': ['not charging', 'charging'],
  'no charge': ['not charging', 'charging'],
  'dead battery': ['battery', 'not charging', 'battery drain'],
  'battery dead': ['battery', 'not charging'],
  'battery dying': ['battery drain', 'battery'],
  'battery draining': ['battery drain', 'battery'],
  'drains fast': ['battery drain', 'battery'],
  'drain fast': ['battery drain', 'battery'],
  'battery life': ['battery drain', 'battery'],
  'battery low': ['battery drain', 'battery'],
  'not turn on': ['not turning on', 'boot', 'power'],
  "won't turn on": ['not turning on', 'boot', 'power'],
  'wont turn on': ['not turning on', 'boot', 'power'],
  'wont start': ['not turning on', 'boot', 'startup'],
  "won't start": ['not turning on', 'boot', 'startup'],
  'wont switch on': ['not turning on', 'boot'],
  'not switching on': ['not turning on', 'boot'],
  'not powering on': ['not turning on', 'boot'],
  'no power': ['not turning on', 'battery', 'charging'],
  'overheating': ['overheating', 'overheat', 'hot'],
  'getting hot': ['overheating', 'overheat'],
  'too hot': ['overheating', 'overheat'],
  'heating up': ['overheating', 'overheat'],

  // Screen / display
  'screen broken': ['screen', 'display', 'cracked'],
  'black screen': ['black screen', 'screen', 'display', 'not turning on'],
  'blank screen': ['black screen', 'screen', 'display'],
  'white screen': ['white screen', 'screen', 'display'],
  'screen off': ['black screen', 'screen', 'display'],
  'screen not working': ['screen', 'display', 'touchscreen'],
  'display not working': ['screen', 'display'],
  'flickering': ['flickering', 'screen', 'display'],
  'screen flicker': ['flickering', 'screen'],
  'lines on screen': ['screen', 'display', 'flickering'],
  'screen lines': ['screen', 'display', 'flickering'],
  'touch not working': ['touchscreen', 'touch', 'not responding'],
  'touch screen not working': ['touchscreen', 'not responding'],
  'screen not responding': ['touchscreen', 'not responding'],
  'screen unresponsive': ['touchscreen', 'not responding'],
  'touch not responding': ['touchscreen', 'not responding'],
  'cant touch': ['touchscreen', 'not responding'],
  "can't touch": ['touchscreen', 'not responding'],
  'dim screen': ['brightness', 'screen', 'display'],
  'dark screen': ['brightness', 'black screen', 'display'],
  'brightness': ['brightness', 'screen'],

  // Internet / WiFi / network
  'no internet': ['internet', 'wifi', 'network', 'connection'],
  'internet not working': ['internet', 'wifi', 'connection', 'network'],
  'internet down': ['internet', 'wifi', 'disconnecting'],
  'internet slow': ['slow internet', 'speed', 'internet'],
  'slow internet': ['slow internet', 'speed', 'internet'],
  'slow wifi': ['slow internet', 'speed', 'wifi'],
  'weak wifi': ['wifi', 'signal', 'connection'],
  'wifi not working': ['wifi', 'not connecting', 'connection'],
  'wifi disconnecting': ['wifi', 'disconnecting', 'connection'],
  'keeps disconnecting': ['disconnecting', 'wifi', 'connection'],
  'wifi drops': ['disconnecting', 'wifi'],
  'cant connect': ['not connecting', 'connection', 'wifi'],
  "can't connect": ['not connecting', 'connection', 'wifi'],
  'no signal': ['no signal', 'signal', 'network', 'wifi'],
  'no network': ['network', 'no signal', 'connection'],
  'mobile data not working': ['mobile data', 'data', 'network'],
  'data not working': ['mobile data', 'data', 'network'],
  'no data': ['mobile data', 'data', 'network'],

  // Audio / sound
  'no sound': ['no sound', 'sound', 'audio', 'speaker'],
  'sound not working': ['no sound', 'sound', 'audio'],
  'audio not working': ['no sound', 'audio', 'sound'],
  'speaker not working': ['speaker', 'no sound', 'audio'],
  'cant hear': ['no sound', 'speaker', 'audio'],
  "can't hear": ['no sound', 'speaker', 'audio'],
  'microphone not working': ['microphone', 'mic', 'audio'],
  'mic not working': ['microphone', 'mic', 'audio'],
  'earphone': ['headphone', 'earphones', 'audio', 'jack'],
  'headphones not working': ['headphone', 'audio', 'jack'],
  'earphones not working': ['headphone', 'earphones', 'audio'],
  'no headphone sound': ['headphone', 'audio', 'jack'],
  'distorted sound': ['distorted', 'sound', 'audio'],

  // Camera
  'camera not working': ['camera', 'not working'],
  'camera blurry': ['camera', 'blur', 'focus'],
  'cant take photos': ['camera', 'not working'],
  'photos blurry': ['camera', 'blur'],
  'camera black': ['camera', 'black screen'],
  'camera freezing': ['camera', 'freeze', 'crash'],

  // Performance / speed
  'slow phone': ['slow', 'performance', 'lagging'],
  'phone slow': ['slow', 'performance', 'lagging'],
  'slow laptop': ['slow', 'performance', 'lagging'],
  'laptop slow': ['slow', 'performance', 'lagging'],
  'running slow': ['slow', 'performance', 'lagging'],
  'lagging': ['lagging', 'slow', 'performance'],
  'freezing': ['freezing', 'freeze', 'unresponsive', 'not responding'],
  'keeps freezing': ['freezing', 'freeze', 'not responding'],
  'hanging': ['freezing', 'freeze', 'not responding'],
  'unresponsive': ['unresponsive', 'not responding', 'freezing'],
  'not responding': ['not responding', 'freezing', 'unresponsive'],
  'crashing': ['crashing', 'crash', 'closing'],
  'keeps crashing': ['crashing', 'crash', 'closing'],
  'app crashing': ['crashing', 'crash', 'app'],
  'app closing': ['crashing', 'closing', 'app'],
  'keeps closing': ['crashing', 'closing', 'app'],

  // Storage / memory
  'storage full': ['storage', 'full', 'space'],
  'no space': ['storage', 'full', 'space'],
  'out of storage': ['storage', 'full', 'space'],
  'memory full': ['storage', 'memory', 'full'],
  'phone full': ['storage', 'full', 'space'],

  // Bluetooth
  'bluetooth not working': ['bluetooth', 'not connecting', 'connection'],
  'bluetooth not connecting': ['bluetooth', 'not connecting'],
  'bluetooth wont pair': ['bluetooth', 'pairing'],
  "bluetooth won't pair": ['bluetooth', 'pairing'],
  'cant pair': ['bluetooth', 'pairing'],
  "can't pair": ['bluetooth', 'pairing'],

  // Keyboard / input
  'keyboard not working': ['keyboard', 'not working', 'not responding'],
  'keys not working': ['keyboard', 'keys', 'not working'],
  'keyboard not typing': ['keyboard', 'not working'],
  'touchpad not working': ['touchpad', 'cursor', 'not working'],
  'trackpad not working': ['touchpad', 'cursor', 'not working'],
  'mouse not working': ['touchpad', 'cursor', 'mouse'],

  // Boot / startup
  'stuck on startup': ['startup', 'boot', 'stuck'],
  'stuck on logo': ['startup', 'boot', 'stuck', 'logo'],
  'boot loop': ['boot loop', 'restart loop', 'boot'],
  'restart loop': ['restart loop', 'boot loop', 'restarting'],
  'keeps restarting': ['restart loop', 'restarting'],
  'keeps rebooting': ['restart loop', 'restarting'],
  'wont boot': ['not turning on', 'boot', 'startup'],
  "won't boot": ['not turning on', 'boot', 'startup'],
  'startup issue': ['startup', 'boot'],
  'loading screen': ['startup', 'boot', 'stuck'],

  // Apps / software
  'app not opening': ['not opening', 'not launching', 'app'],
  'app wont open': ['not opening', 'not launching', 'app'],
  "app won't open": ['not opening', 'not launching', 'app'],
  'app not working': ['not working', 'app', 'crashing'],
  'app not loading': ['not loading', 'app'],
  'instagram not working': ['instagram', 'app', 'crashing'],
  'whatsapp not working': ['whatsapp', 'app'],
  'youtube not working': ['youtube', 'app', 'streaming'],
  'facebook not working': ['facebook', 'app'],
  'notifications not working': ['notifications', 'not working'],
  'no notifications': ['notifications', 'not working'],
  'notification not showing': ['notifications', 'not working'],

  // Passwords / account
  'forgot password': ['password', 'account', 'reset'],
  'locked out': ['locked', 'password', 'account'],
  'account locked': ['locked', 'account', 'password'],
  'cant login': ['login', 'password', 'account'],
  "can't login": ['login', 'password', 'account'],
  'cant sign in': ['login', 'sign in', 'account'],
  "can't sign in": ['login', 'sign in', 'account'],

  // Device types — normalise casual names
  'iphone': ['iphone', 'ios', 'apple'],
  'samsung': ['samsung', 'galaxy', 'android'],
  'android': ['android', 'phone'],
  'macbook': ['macbook', 'mac', 'apple', 'laptop'],
  'mac': ['mac', 'macbook', 'apple'],
  'windows': ['windows', 'laptop', 'pc'],
  'pc': ['windows', 'laptop', 'computer'],
  'computer': ['laptop', 'computer', 'pc', 'windows'],
  'tablet': ['tablet', 'ipad', 'android'],
  'ipad': ['ipad', 'tablet', 'ios'],
  'smart tv': ['smart tv', 'tv'],
  'smarttv': ['smart tv', 'tv'],

  // Colloquial / informal language
  'broken': ['not working', 'crashing', 'not responding'],
  'died': ['not turning on', 'battery', 'dead'],
  'dead': ['not turning on', 'battery', 'dead'],
  'busted': ['not working', 'crashing', 'broken'],
  'messed up': ['not working', 'issue', 'problem'],
  'glitching': ['glitch', 'freezing', 'crashing'],
  'glitch': ['glitch', 'freezing', 'crashing'],
  'buggy': ['glitch', 'crashing', 'not working'],
  'issues': ['issue', 'problem', 'not working'],
  'problem': ['problem', 'issue', 'not working'],
  'error': ['error', 'not working', 'failed'],
  'fix': ['fix', 'repair', 'solution'],
  'repair': ['repair', 'fix'],
  'help': ['help', 'fix', 'problem'],
}

// ─── Stop words to strip from queries ───────────────────────────────────────
const STOP_WORDS = new Set([
  'my', 'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'shall', 'can', 'need', 'to', 'of', 'in',
  'on', 'at', 'by', 'for', 'with', 'about', 'from', 'up', 'into',
  'it', 'its', 'this', 'that', 'these', 'those', 'i', 'me', 'we',
  'how', 'what', 'why', 'when', 'where', 'who', 'which', 'there',
  'please', 'help', 'hi', 'hello', 'hey',
])

// ─── Normalize text ─────────────────────────────────────────────────────────
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, "'")          // smart quotes → straight
    .replace(/[^a-z0-9\s']/g, ' ') // strip punctuation except apostrophes
    .replace(/\s+/g, ' ')
    .trim()
}

// ─── Expand a query into a set of search terms ──────────────────────────────
function expandQuery(raw: string): string[] {
  const query = normalize(raw)
  const terms = new Set<string>()

  // 1. Add the full raw query as-is (cleaned)
  terms.add(query)

  // 2. Check multi-word synonym phrases (longest match first)
  const sortedKeys = Object.keys(SYNONYMS).sort((a, b) => b.length - a.length)
  for (const phrase of sortedKeys) {
    if (query.includes(phrase)) {
      for (const expansion of SYNONYMS[phrase]) {
        terms.add(expansion)
      }
    }
  }

  // 3. Add individual meaningful words (after stop-word removal)
  const words = query.split(' ').filter((w) => w.length > 2 && !STOP_WORDS.has(w))
  for (const word of words) {
    terms.add(word)
    // Also expand each individual word through synonyms
    if (SYNONYMS[word]) {
      for (const expansion of SYNONYMS[word]) {
        terms.add(expansion)
      }
    }
  }

  return Array.from(terms)
}

// ─── Score a single problem against a set of search terms ───────────────────
function scoreProblem(problem: Problem, terms: string[]): number {
  // Build a single searchable string for this problem
  const haystack = [
    problem.title,
    problem.shortDescription,
    problem.subcategory,
    problem.category,
    ...problem.symptoms,
    ...problem.causes,
    problem.technicianAdvice,
    ...problem.steps.map((s) => `${s.title} ${s.description}`),
  ]
    .join(' ')
    .toLowerCase()

  let score = 0

  for (const term of terms) {
    if (!term) continue
    const tl = term.toLowerCase()

    if (problem.title.toLowerCase().includes(tl)) {
      score += 10  // strong signal — title match
    } else if (problem.shortDescription.toLowerCase().includes(tl)) {
      score += 6
    } else if (problem.subcategory.toLowerCase().includes(tl)) {
      score += 5
    } else if (problem.category.toLowerCase().includes(tl)) {
      score += 4
    } else if (problem.symptoms.some((s) => s.toLowerCase().includes(tl))) {
      score += 5
    } else if (problem.causes.some((c) => c.toLowerCase().includes(tl))) {
      score += 4
    } else if (haystack.includes(tl)) {
      score += 2  // found somewhere in the text
    }
  }

  return score
}

// ─── Public search function ──────────────────────────────────────────────────
export function smartSearch(problems: Problem[], rawQuery: string): Problem[] {
  if (!rawQuery.trim()) return []

  const terms = expandQuery(rawQuery)
  const MIN_SCORE = 2  // must match at least something meaningful

  const scored = problems
    .map((p) => ({ problem: p, score: scoreProblem(p, terms) }))
    .filter(({ score }) => score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)

  return scored.map(({ problem }) => problem)
}
