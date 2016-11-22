export function set (key, value) {
  window.localStorage.setItem(key, value)
}

export function get (key) {
  return window.localStorage.getItem(key) || null
}

export function del (key) {
  window.localStorage.removeItem(key)
}

export function setObject (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getObject (key) {
  return JSON.parse(window.localStorage[key] || '{}')
}

export function getArray (key) {
  return JSON.parse(window.localStorage[key] || '[]')
}
