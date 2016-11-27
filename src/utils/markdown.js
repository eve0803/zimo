import marked from 'marked'
import hljs from 'highlight.js'

export function md2HTML (content) {
  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  return marked(content, { sanitize: true })
}
