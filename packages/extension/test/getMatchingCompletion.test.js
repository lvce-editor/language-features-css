import { getMatchingCompletion } from '../src/parts/getMatchingCompletion.js'

test('', () => {})
// const expectSnippet = (partialWord, expected) => {
//   expect(getMatchingCompletion(partialWord)).toBe(expected)
// }

// const expectNoSnippet = (partialWord) => {
//   expect(getMatchingCompletion(partialWord)).toBe('')
// }

// test('property aspect-ratio', () => {
//   expectSnippet(`ar`, `aspect-ratio: $0`)
// })

// test('property align-content', () => {
//   expectSnippet(`ac`, `align-content: $0`)
// })

// test('property align-items', () => {
//   expectSnippet(`ai`, `align-items: $0`)
//   expectSnippet(`aib`, `align-items: baseline;`)
//   expectSnippet(`aic`, `align-items: center;`)
// })

// test('property align-self', () => {
//   expectSnippet(`as`, `align-self: $0`)
// })

// test('property animation', () => {
//   expectSnippet(`ani`, `animation: $0`)
// })

// test('property background', () => {
//   expectSnippet(`bg`, `background: $0`)
// })

// test('property background-attachment', () => {
//   expectSnippet(`bga`, `background-attachment: fixed;`)
// })

// test('property background-repeat', () => {
//   expectSnippet(`bgr`, `background-repeat: no-repeat;`)
// })

// test('property background-size', () => {
//   expectSnippet(`bgs`, `background-size: cover;`)
// })

// test('property baseline-source', () => {
//   expectSnippet(`bss`, `baseline-source: $0`)
// })

// test('property clip', () => {
//   expectSnippet(`cl`, `clip: $0`)
// })

// test('property contain', () => {
//   expectSnippet(`contain`, `contain: $0`)
//   expectSnippet(`cs`, `contain: strict;`)
// })

// test('property content', () => {
//   expectSnippet(`con`, `content: $0`)
// })

// test('property cursor', () => {
//   expectSnippet(`cur`, `cursor: $0`)
//   expectSnippet(`curd`, `cursor: default;`)
//   expectSnippet(`curp`, `cursor: pointer;`)
// })

// test('property dominant-baseline', () => {
//   expectSnippet(`domb`, `dominant-baseline: $0`)
// })

// test('property display', () => {
//   expectSnippet('d', 'display: $0')
//   expectSnippet(`db`, `display: block;`)
//   expectSnippet(`dn`, `display: none;`)
// })

// test('property gap', () => {
//   expectSnippet(`g`, `gap: $0`)
// })

// test('property grid', () => {
//   expectSnippet('gd', 'grid: $0')
// })

// test('property grid-template-rows', () => {
//   expectSnippet(`gtr`, 'grid-template-rows: $0')
// })

// test('property height', () => {
//   expectSnippet('h', 'height: $0')
// })

// test('property image-rendering', () => {
//   expectSnippet('ir', `image-rendering: $0`)
// })

// test('property justify-content', () => {
//   expectSnippet(`jc`, `justify-content: $0`)
//   expectSnippet(`jcc`, `justify-content: center;`)
// })

// test('property justify-items', () => {
//   expectSnippet(`ji`, `justify-items: $0`)
//   expectSnippet(`jic`, `justify-items: center;`)
// })

// test('property justify-self', () => {
//   expectSnippet(`js`, `justify-self: $0`)
// })

// test('property letter-spacing', () => {
//   expectSnippet(`ls`, `letter-spacing: $0`)
// })

// test('property line-height', () => {
//   expectSnippet(`lh`, `line-height: $0`)
// })

// test('property margin', () => {
//   expectSnippet(`m`, `margin: $0`)
// })

// test('property margin-bottom', () => {
//   expectSnippet(`mb`, `margin-bottom: $0`)
// })

// test('property margin-left', () => {
//   expectSnippet('ml', `margin-left: $0`)
// })

// test('property margin-right', () => {
//   expectSnippet(`mr`, `margin-right: $0`)
// })

// test('property margin-top', () => {
//   expectSnippet(`mt`, `margin-top: $0`)
// })

// test('property max-height', () => {
//   expectSnippet(`mah`, `max-height: $0`)
// })

// test('property max-width', () => {
//   expectSnippet(`maw`, `max-width: $0`)
// })

// test('property min-height', () => {
//   expectSnippet('mih', `min-height: $0`)
// })

// test('property min-width', () => {
//   expectSnippet(`miw`, `min-width: $0`)
// })

// test('property outline', () => {
//   expectSnippet(`ol`, `outline: $0`)
// })

// test('property outline-offset', () => {
//   expectSnippet(`olo`, `outline-offset: $0`)
// })

// test('property order', () => {
//   expectSnippet(`ord`, `order: $0`)
// })

// test('property overflow', () => {
//   expectSnippet(`oh`, `overflow: hidden;`)
// })

// test('property opacity', () => {
//   expectSnippet(`o`, `opacity: $0;`)
// })

// test('property padding', () => {
//   expectSnippet(`p`, `padding: $0`)
// })

// test('property padding-bottom', () => {
//   expectSnippet(`pb`, `padding-bottom: $0`)
// })

// test('property padding-left', () => {
//   expectSnippet(`pl`, 'padding-left: $0')
// })

// test('property padding-right', () => {
//   expectSnippet(`pr`, 'padding-right: $0')
// })

// test('property padding-top', () => {
//   expectSnippet(`pt`, 'padding-top: $0')
// })

// test('property place-content', () => {
//   expectSnippet(`pc`, `place-content: $0`)
// })

// test('property place-items', () => {
//   expectSnippet(`pi`, `place-items: $0`)
//   expectSnippet('pic', 'place-items: center;')
// })

// test('property place-self', () => {
//   expectSnippet('ps', `place-self: $0`)
// })

// test('property pointer-events', () => {
//   expectSnippet(`pen`, `pointer-events: none;`)
// })

// test('property resize', () => {
//   expectSnippet(`rz`, `resize: $0`)
// })

// test('property right', () => {
//   expectSnippet(`r`, `right: $0;`)
// })

// test('property quotes', () => {
//   expectSnippet(`q`, `quotes: $0`)
// })

// test('property text-align', () => {
//   expectSnippet(`ta`, `text-align: $0`)
//   expectSnippet(`tac`, `text-align: center;`)
// })

// test('property text-decoration', () => {
//   expectSnippet(`tdn`, `text-decoration: none;`)
// })

// test('property text-indent', () => {
//   expectSnippet(`ti`, `text-indent: $0`)
// })

// test('property text-overflow', () => {
//   expectSnippet(`tov`, `text-overflow: $0`)
// })

// test('property text-orientation', () => {
//   expectSnippet(`tor`, `text-orientation: $0`)
// })

// test('property transform-origin', () => {
//   expectSnippet(`trfo`, `transform-origin: $0`)
// })

// test('property text-transform', () => {
//   expectSnippet(`tt`, `text-transform: $0`)
// })

// test('property user-select', () => {
//   expectSnippet(`us`, `user-select: none;`)
// })

// test('property visibility', () => {
//   expectSnippet(`vi`, `visibility: $0`)
//   expectSnippet(`vh`, `visibility: hidden;`)
// })

// test('property width', () => {
//   expectSnippet('w', 'width: $0')
// })

// test('property will-change', () => {
//   expectSnippet(`wc`, `will-change: transform;`)
// })

// test('property white-space', () => {
//   expectSnippet(`ws`, `white-space: $0;`)
// })

// test('property word-wrap', () => {
//   expectSnippet(`ww`, `word-wrap: break-word;`)
// })

// test('property z-index', () => {
//   expectSnippet(`z`, `z-index: $0`)
// })

// test('deprecated properties', () => {
//   expectNoSnippet(`text-height`)
//   expectNoSnippet(`grid-gap`)
//   expectNoSnippet(`grid-row-gap`)
//   expectNoSnippet(`grid-column-gap`)
// })
