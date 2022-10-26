/**
 * Useful resources for CSS properties:
 * - W3C: https://github.com/w3c/csswg-drafts
 * - W3: https://www.w3.org/Style/CSS/all-properties.en.html
 * - Css Tricks: https://css-tricks.com/almanac/properties
 * - Chrome Status: https://www.chromestatus.com/metrics/css/timeline/popularity
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
 */

import { getMatchingCompletion } from '../src/parts/getMatchingCompletion.js'

const expandProperty = (partialWord) => {
  return getMatchingCompletion(partialWord)
}

test('accent-color', () => {
  expect(expandProperty('accent-color')).toBe('accent-color: $0;')
})

test('align-content', () => {
  expect(expandProperty('ac')).toBe('align-content: $0;')
  expect(expandProperty('align-content')).toBe('align-content: $0;')
})

test('align-items', () => {
  expect(expandProperty('ai')).toBe('align-items: $0;')
  expect(expandProperty('ali')).toBe('align-items: $0;')
  expect(expandProperty('aic')).toBe('align-items: center;')
})

test('align-self', () => {
  expect(expandProperty('align-self')).toBe('align-self: $0;')
})

test('align-tracks', () => {
  expect(expandProperty('at')).toBe('align-tracks: $0;')
  expect(expandProperty('align-tracks')).toBe('align-tracks: $0;')
})

test('alignment-baseline', () => {
  expect(expandProperty('alignment-baseline')).toBe('alignment-baseline: $0;')
})

test('all', () => {
  expect(expandProperty('all')).toBe('all: $0;')
})

test('animation', () => {
  expect(expandProperty('animation')).toBe('animation: $0;')
})

test('animation-composition', () => {
  expect(expandProperty('animation-composition')).toBe(
    'animation-composition: $0;'
  )
})

test('animation-delay', () => {
  expect(expandProperty('animation-delay')).toBe('animation-delay: $0;')
})

test('animation-direction', () => {
  expect(expandProperty('animation-direction')).toBe('animation-direction: $0;')
})

test('animation-duration', () => {
  expect(expandProperty('animation-duration')).toBe('animation-duration: $0;')
})

test('animation-fill-mode', () => {
  expect(expandProperty('animation-fill-mode')).toBe('animation-fill-mode: $0;')
})

test('animation-iteration-count', () => {
  expect(expandProperty('animation-iteration-count')).toBe(
    'animation-iteration-count: $0;'
  )
})

test('animation-name', () => {
  expect(expandProperty('animation-name')).toBe('animation-name: $0;')
})

test('animation-play-state', () => {
  expect(expandProperty('animation-play-state')).toBe(
    'animation-play-state: $0;'
  )
})

test('animation-timing-function', () => {
  expect(expandProperty('animation-timing-function')).toBe(
    'animation-timing-function: $0;'
  )
})

test('animation-timeline', () => {
  expect(expandProperty('animation-timeline')).toBe('animation-timeline: $0;')
})

test('appearance', () => {
  expect(expandProperty('ap')).toBe('appearance: $0;')
  expect(expandProperty('appearance')).toBe('appearance: $0;')
})

test('ascent-override', () => {
  expect(expandProperty('ao')).toBe('ascent-override: $0;')
  expect(expandProperty('ascent-override')).toBe('ascent-override: $0;')
})

test('aspect-ratio', () => {
  expect(expandProperty('ar')).toBe('aspect-ratio: $0;')
  expect(expandProperty('aspect-ratio')).toBe('aspect-ratio: $0;')
})

test('backdrop-filter', () => {
  expect(expandProperty('backdrop-filter')).toBe('backdrop-filter: $0;')
})

test('backface-visibility', () => {
  expect(expandProperty('backface-visibility')).toBe('backface-visibility: $0;')
})

test('background', () => {
  expect(expandProperty('background')).toBe('background: $0;')
})

test('background-attachment', () => {
  expect(expandProperty('baf')).toBe('background-attachment: fixed;')
  expect(expandProperty('background-attachment')).toBe(
    'background-attachment: $0;'
  )
})

test('background-blend-mode', () => {
  expect(expandProperty('background-blend-mode')).toBe(
    'background-blend-mode: $0;'
  )
})

test('background-clip', () => {
  expect(expandProperty('background-clip')).toBe('background-clip: $0;')
})

test('background-color', () => {
  expect(expandProperty('background-color')).toBe('background-color: $0;')
})

test('background-image', () => {
  expect(expandProperty('background-image')).toBe('background-image: $0;')
})

test('background-origin', () => {
  expect(expandProperty('background-origin')).toBe('background-origin: $0;')
})

test('background-position', () => {
  expect(expandProperty('background-position')).toBe('background-position: $0;')
})

test('background-position-block', () => {
  expect(expandProperty('background-position-block')).toBe(
    'background-position-block: $0;'
  )
})

test('background-position-inline', () => {
  expect(expandProperty('background-position-inline')).toBe(
    'background-position-inline: $0;'
  )
})

test('background-position-x', () => {
  expect(expandProperty('background-position-x')).toBe(
    'background-position-x: $0;'
  )
})

test('background-position-y', () => {
  expect(expandProperty('background-position-y')).toBe(
    'background-position-y: $0;'
  )
})

test('background-repeat', () => {
  expect(expandProperty('background-repeat')).toBe('background-repeat: $0;')
})

test('background-repeat-x', () => {
  expect(expandProperty('background-repeat-x')).toBe('background-repeat-x: $0;')
})

test('background-repeat-y', () => {
  expect(expandProperty('background-repeat-y')).toBe('background-repeat-y: $0;')
})

test('background-size', () => {
  expect(expandProperty('background-size')).toBe('background-size: $0;')
})

test('base-palette', () => {
  expect(expandProperty('bp')).toBe('base-palette: $0;')
  expect(expandProperty('base-palette')).toBe('base-palette: $0;')
})

test('baseline-shift', () => {
  expect(expandProperty('baseline-shift')).toBe('baseline-shift: $0;')
})

test('baseline-source', () => {
  expect(expandProperty('baseline-source')).toBe('baseline-source: $0;')
})

test('block-ellipsis', () => {
  expect(expandProperty('block-ellipsis')).toBe('block-ellipsis: $0;')
})

test('block-size', () => {
  expect(expandProperty('block-size')).toBe('block-size: $0;')
})

test('block-step', () => {
  expect(expandProperty('block-step')).toBe('block-step: $0;')
})

test('block-step-align', () => {
  expect(expandProperty('block-step-align')).toBe('block-step-align: $0;')
})

test('block-step-insert', () => {
  expect(expandProperty('block-step-insert')).toBe('block-step-insert: $0;')
})

test('block-step-round', () => {
  expect(expandProperty('block-step-round')).toBe('block-step-round: $0;')
})

test('block-step-size', () => {
  expect(expandProperty('block-step-size')).toBe('block-step-size: $0;')
})

test('bookmark-label', () => {
  expect(expandProperty('bookmark-label')).toBe('bookmark-label: $0;')
})

test('bookmark-level', () => {
  expect(expandProperty('bookmark-level')).toBe('bookmark-level: $0;')
})

test('bookmark-state', () => {
  expect(expandProperty('bookmark-state')).toBe('bookmark-state: $0;')
})

test('border', () => {
  expect(expandProperty('border')).toBe('border: $0;')
})

test('border-block', () => {
  expect(expandProperty('border-block')).toBe('border-block: $0;')
})

test('border-block-color', () => {
  expect(expandProperty('border-block-color')).toBe('border-block-color: $0;')
})

test('border-block-end', () => {
  expect(expandProperty('border-block-end')).toBe('border-block-end: $0;')
})

test('border-block-end-color', () => {
  expect(expandProperty('border-block-end-color')).toBe(
    'border-block-end-color: $0;'
  )
})

test('border-block-end-style', () => {
  expect(expandProperty('border-block-end-style')).toBe(
    'border-block-end-style: $0;'
  )
})

test('border-block-end-width', () => {
  expect(expandProperty('border-block-end-width')).toBe(
    'border-block-end-width: $0;'
  )
})

test('border-block-start', () => {
  expect(expandProperty('border-block-start')).toBe('border-block-start: $0;')
})

test('border-block-start-color', () => {
  expect(expandProperty('border-block-start-color')).toBe(
    'border-block-start-color: $0;'
  )
})

test('border-block-start-style', () => {
  expect(expandProperty('border-block-start-style')).toBe(
    'border-block-start-style: $0;'
  )
})

test('border-block-start-width', () => {
  expect(expandProperty('border-block-start-width')).toBe(
    'border-block-start-width: $0;'
  )
})

test('border-block-style', () => {
  expect(expandProperty('border-block-style')).toBe('border-block-style: $0;')
})

test('border-block-width', () => {
  expect(expandProperty('border-block-width')).toBe('border-block-width: $0;')
})

test('border-bottom', () => {
  expect(expandProperty('border-bottom')).toBe('border-bottom: $0;')
})

test('border-bottom-color', () => {
  expect(expandProperty('border-bottom-color')).toBe('border-bottom-color: $0;')
})

test('border-bottom-left-radius', () => {
  expect(expandProperty('border-bottom-left-radius')).toBe(
    'border-bottom-left-radius: $0;'
  )
})

test('border-bottom-right-radius', () => {
  expect(expandProperty('border-bottom-right-radius')).toBe(
    'border-bottom-right-radius: $0;'
  )
})

test('border-bottom-style', () => {
  expect(expandProperty('border-bottom-style')).toBe('border-bottom-style: $0;')
})

test('border-bottom-width', () => {
  expect(expandProperty('border-bottom-width')).toBe('border-bottom-width: $0;')
})

test('border-boundary', () => {
  expect(expandProperty('border-boundary')).toBe('border-boundary: $0;')
})

test('border-clip', () => {
  expect(expandProperty('border-clip')).toBe('border-clip: $0;')
})

test('border-clip-top', () => {
  expect(expandProperty('border-clip-top')).toBe('border-clip-top: $0;')
})

test('border-clip-right', () => {
  expect(expandProperty('border-clip-right')).toBe('border-clip-right: $0;')
})

test('border-clip-bottom', () => {
  expect(expandProperty('border-clip-bottom')).toBe('border-clip-bottom: $0;')
})

test('border-clip-left', () => {
  expect(expandProperty('border-clip-left')).toBe('border-clip-left: $0;')
})

test('border-color', () => {
  expect(expandProperty('border-color')).toBe('border-color: $0;')
})

test('border-collapse', () => {
  expect(expandProperty('border-collapse')).toBe('border-collapse: $0;')
})

test('border-end-end-radius', () => {
  expect(expandProperty('border-end-end-radius')).toBe(
    'border-end-end-radius: $0;'
  )
})

test('border-end-start-radius', () => {
  expect(expandProperty('border-end-start-radius')).toBe(
    'border-end-start-radius: $0;'
  )
})

test('border-image', () => {
  expect(expandProperty('border-image')).toBe('border-image: $0;')
})

test('border-image-outset', () => {
  expect(expandProperty('border-image-outset')).toBe('border-image-outset: $0;')
})

test('border-image-repeat', () => {
  expect(expandProperty('border-image-repeat')).toBe('border-image-repeat: $0;')
})

test('border-image-slice', () => {
  expect(expandProperty('border-image-slice')).toBe('border-image-slice: $0;')
})

test('border-image-source', () => {
  expect(expandProperty('border-image-source')).toBe('border-image-source: $0;')
})

test('border-image-width', () => {
  expect(expandProperty('border-image-width')).toBe('border-image-width: $0;')
})

test('border-inline', () => {
  expect(expandProperty('border-inline')).toBe('border-inline: $0;')
})

test('border-inline-color', () => {
  expect(expandProperty('border-inline-color')).toBe('border-inline-color: $0;')
})

test('border-inline-end', () => {
  expect(expandProperty('border-inline-end')).toBe('border-inline-end: $0;')
})

test('border-inline-end-color', () => {
  expect(expandProperty('border-inline-end-color')).toBe(
    'border-inline-end-color: $0;'
  )
})

test('border-inline-end-style', () => {
  expect(expandProperty('border-inline-end-style')).toBe(
    'border-inline-end-style: $0;'
  )
})

test('border-inline-end-width', () => {
  expect(expandProperty('border-inline-end-width')).toBe(
    'border-inline-end-width: $0;'
  )
})

test('border-inline-start', () => {
  expect(expandProperty('border-inline-start')).toBe('border-inline-start: $0;')
})

test('border-inline-start-color', () => {
  expect(expandProperty('border-inline-start-color')).toBe(
    'border-inline-start-color: $0;'
  )
})

test('border-inline-start-style', () => {
  expect(expandProperty('border-inline-start-style')).toBe(
    'border-inline-start-style: $0;'
  )
})

test('border-inline-start-width', () => {
  expect(expandProperty('border-inline-start-width')).toBe(
    'border-inline-start-width: $0;'
  )
})

test('border-inline-style', () => {
  expect(expandProperty('border-inline-style')).toBe('border-inline-style: $0;')
})

test('border-inline-width', () => {
  expect(expandProperty('border-inline-width')).toBe('border-inline-width: $0;')
})

test('border-left', () => {
  expect(expandProperty('border-left')).toBe('border-left: $0;')
})

test('border-left-color', () => {
  expect(expandProperty('border-left-color')).toBe('border-left-color: $0;')
})

test('border-left-style', () => {
  expect(expandProperty('border-left-style')).toBe('border-left-style: $0;')
})

test('border-left-width', () => {
  expect(expandProperty('border-left-width')).toBe('border-left-width: $0;')
})

test('border-limit', () => {
  expect(expandProperty('border-limit')).toBe('border-limit: $0;')
})

test('border-radius', () => {
  expect(expandProperty('border-radius')).toBe('border-radius: $0;')
})

test('border-right', () => {
  expect(expandProperty('border-right')).toBe('border-right: $0;')
})

test('border-right-color', () => {
  expect(expandProperty('border-right-color')).toBe('border-right-color: $0;')
})

test('border-right-style', () => {
  expect(expandProperty('border-right-style')).toBe('border-right-style: $0;')
})

test('border-right-width', () => {
  expect(expandProperty('border-right-width')).toBe('border-right-width: $0;')
})

test('border-spacing', () => {
  expect(expandProperty('border-spacing')).toBe('border-spacing: $0;')
})

test('border-start-end-radius', () => {
  expect(expandProperty('border-start-end-radius')).toBe(
    'border-start-end-radius: $0;'
  )
})

test('border-start-start-radius', () => {
  expect(expandProperty('border-start-start-radius')).toBe(
    'border-start-start-radius: $0;'
  )
})

test('border-style', () => {
  expect(expandProperty('border-style')).toBe('border-style: $0;')
})

test('border-top', () => {
  expect(expandProperty('border-top')).toBe('border-top: $0;')
})

test('border-top-color', () => {
  expect(expandProperty('border-top-color')).toBe('border-top-color: $0;')
})

test('border-top-left-radius', () => {
  expect(expandProperty('border-top-left-radius')).toBe(
    'border-top-left-radius: $0;'
  )
})

test('border-top-right-radius', () => {
  expect(expandProperty('border-top-right-radius')).toBe(
    'border-top-right-radius: $0;'
  )
})

test('border-top-style', () => {
  expect(expandProperty('border-top-style')).toBe('border-top-style: $0;')
})

test('border-top-width', () => {
  expect(expandProperty('border-top-width')).toBe('border-top-width: $0;')
})

test('border-width', () => {
  expect(expandProperty('border-width')).toBe('border-width: $0;')
})

test('bottom', () => {
  expect(expandProperty('bottom')).toBe('bottom: $0;')
})

test('box-decoration-break', () => {
  expect(expandProperty('box-decoration-break')).toBe(
    'box-decoration-break: $0;'
  )
})

test('box-shadow', () => {
  expect(expandProperty('box-shadow')).toBe('box-shadow: $0;')
})

test('box-sizing', () => {
  expect(expandProperty('box-sizing')).toBe('box-sizing: $0;')
})

test('box-snap', () => {
  expect(expandProperty('box-snap')).toBe('box-snap: $0;')
})

test('break-after', () => {
  expect(expandProperty('break-after')).toBe('break-after: $0;')
})

test('break-before', () => {
  expect(expandProperty('break-before')).toBe('break-before: $0;')
})

test('break-inside', () => {
  expect(expandProperty('break-inside')).toBe('break-inside: $0;')
})

test('caption-side', () => {
  expect(expandProperty('caption-side')).toBe('caption-side: $0;')
})

test('caret', () => {
  expect(expandProperty('caret')).toBe('caret: $0;')
})

test('caret-animation', () => {
  expect(expandProperty('caret-animation')).toBe('caret-animation: $0;')
})

test('caret-color', () => {
  expect(expandProperty('cc')).toBe('caret-color: $0;')
  expect(expandProperty('caret-color')).toBe('caret-color: $0;')
})

test('caret-shape', () => {
  expect(expandProperty('caret-shape')).toBe('caret-shape: $0;')
})

test('chains', () => {
  expect(expandProperty('chains')).toBe('chains: $0;')
})

test('clear', () => {
  expect(expandProperty('clear')).toBe('clear: $0;')
})

test('clip-path', () => {
  expect(expandProperty('clip-path')).toBe('clip-path: $0;')
})

test('clip-rule', () => {
  expect(expandProperty('clip-rule')).toBe('clip-rule: $0;')
})

test('color', () => {
  expect(expandProperty('color')).toBe('color: $0;')
})

test('color-adjust', () => {
  expect(expandProperty('color-adjust')).toBe('color-adjust: $0;')
})

test('color-count', () => {
  expect(expandProperty('color-count')).toBe('color-count: $0;')
})

test('color-interpolation-filters', () => {
  expect(expandProperty('color-interpolation-filters')).toBe(
    'color-interpolation-filters: $0;'
  )
})

test('color-scheme', () => {
  expect(expandProperty('color-scheme')).toBe('color-scheme: $0;')
})

test('column-count', () => {
  expect(expandProperty('column-count')).toBe('column-count: $0;')
})

test('column-fill', () => {
  expect(expandProperty('column-fill')).toBe('column-fill: $0;')
})

test('column-gap', () => {
  expect(expandProperty('cg')).toBe('column-gap: $0;')
  expect(expandProperty('column-gap')).toBe('column-gap: $0;')
})

test('column-rule', () => {
  expect(expandProperty('column-rule')).toBe('column-rule: $0;')
})

test('column-rule-color', () => {
  expect(expandProperty('column-rule-color')).toBe('column-rule-color: $0;')
})

test('column-rule-style', () => {
  expect(expandProperty('column-rule-style')).toBe('column-rule-style: $0;')
})

test('column-rule-width', () => {
  expect(expandProperty('column-rule-width')).toBe('column-rule-width: $0;')
})

test('column-span', () => {
  expect(expandProperty('column-span')).toBe('column-span: $0;')
})

test('column-width', () => {
  expect(expandProperty('column-width')).toBe('column-width: $0;')
})

test('columns', () => {
  expect(expandProperty('columns')).toBe('columns: $0;')
})

test('contain', () => {
  expect(expandProperty('cs')).toBe('contain: strict;')
  expect(expandProperty('contain')).toBe('contain: $0;')
})

test('contain-intrinsic-block-size', () => {
  expect(expandProperty('contain-intrinsic-block-size')).toBe(
    'contain-intrinsic-block-size: $0;'
  )
})

test('contain-intrinsic-height', () => {
  expect(expandProperty('contain-intrinsic-height')).toBe(
    'contain-intrinsic-height: $0;'
  )
})

test('contain-intrinsic-inline-size', () => {
  expect(expandProperty('contain-intrinsic-inline-size')).toBe(
    'contain-intrinsic-inline-size: $0;'
  )
})

test('contain-intrinsic-size', () => {
  expect(expandProperty('contain-intrinsic-size')).toBe(
    'contain-intrinsic-size: $0;'
  )
})

test('contain-intrinsic-width', () => {
  expect(expandProperty('contain-intrinsic-width')).toBe(
    'contain-intrinsic-width: $0;'
  )
})

test('container', () => {
  expect(expandProperty('container')).toBe('container: $0;')
})

test('container-name', () => {
  expect(expandProperty('cn')).toBe('container-name: $0;')
  expect(expandProperty('container-name')).toBe('container-name: $0;')
})

test('container-type', () => {
  expect(expandProperty('ct')).toBe('container-type: $0;')
  expect(expandProperty('ctis')).toBe('container-type: inline-size;')
  expect(expandProperty('container-type')).toBe('container-type: $0;')
})

test('content', () => {
  expect(expandProperty('content')).toBe('content: $0;')
})

test('content-visibility', () => {
  expect(expandProperty('content-visibility')).toBe('content-visibility: $0;')
})

test('content-increment', () => {
  expect(expandProperty('content-increment')).toBe('content-increment: $0;')
})

test('content-reset', () => {
  expect(expandProperty('content-reset')).toBe('content-reset: $0;')
})

test('content-set', () => {
  expect(expandProperty('content-set')).toBe('content-set: $0;')
})

test('continue', () => {
  expect(expandProperty('continue')).toBe('continue: $0;')
})

test('copy-into', () => {
  expect(expandProperty('copy-into')).toBe('copy-into: $0;')
})

test('corner-shape', () => {
  expect(expandProperty('corner-shape')).toBe('corner-shape: $0;')
})

test('corners', () => {
  expect(expandProperty('corners')).toBe('corners: $0;')
})

test('counter-increment', () => {
  expect(expandProperty('counter-increment')).toBe('counter-increment: $0;')
})

test('counter-reset', () => {
  expect(expandProperty('counter-reset')).toBe('counter-reset: $0;')
})

test('counter-set', () => {
  expect(expandProperty('counter-set')).toBe('counter-set: $0;')
})

test('cue', () => {
  expect(expandProperty('cue')).toBe('cue: $0;')
})

test('cue-after', () => {
  expect(expandProperty('cue-after')).toBe('cue-after: $0;')
})

test('cue-before', () => {
  expect(expandProperty('cue-before')).toBe('cue-before: $0;')
})

test('cursor', () => {
  expect(expandProperty('cursor')).toBe('cursor: $0;')
})

test('descent-override', () => {
  expect(expandProperty('do')).toBe('descent-override: $0;')
  expect(expandProperty('descent-override')).toBe('descent-override: $0;')
})

test('direction', () => {
  expect(expandProperty('direction')).toBe('direction: $0;')
})

test('display', () => {
  expect(expandProperty('dn')).toBe('display: none;')
  expect(expandProperty('db')).toBe('display: block;')
  expect(expandProperty('display')).toBe('display: $0;')
})

test('display-or-not', () => {
  expect(expandProperty('display-or-not')).toBe('display-or-not: $0;')
})

test('dominant-baseline', () => {
  expect(expandProperty('dominant-baseline')).toBe('dominant-baseline: $0;')
})

test('empty-cells', () => {
  expect(expandProperty('empty-cells')).toBe('empty-cells: $0;')
})

test('elevation', () => {
  expect(expandProperty('elevation')).toBe('elevation: $0;')
})

test('fill', () => {
  expect(expandProperty('fill')).toBe('fill: $0;')
})

test('fill-break', () => {
  expect(expandProperty('fill-break')).toBe('fill-break: $0;')
})

test('fill-color', () => {
  expect(expandProperty('fill-color')).toBe('fill-color: $0;')
})

test('fill-image', () => {
  expect(expandProperty('fill-image')).toBe('fill-image: $0;')
})

test('fill-opacity', () => {
  expect(expandProperty('fill-opacity')).toBe('fill-opacity: $0;')
})

test('fill-origin', () => {
  expect(expandProperty('fill-origin')).toBe('fill-origin: $0;')
})

test('fill-position', () => {
  expect(expandProperty('fill-position')).toBe('fill-position: $0;')
})

test('fill-repeat', () => {
  expect(expandProperty('fill-repeat')).toBe('fill-repeat: $0;')
})

test('fill-rule', () => {
  expect(expandProperty('fill-rule')).toBe('fill-rule: $0;')
})

test('fill-size', () => {
  expect(expandProperty('fill-size')).toBe('fill-size: $0;')
})

test('filter', () => {
  expect(expandProperty('filter')).toBe('filter: $0;')
})

test('flex', () => {
  expect(expandProperty('f1')).toBe('flex: 1;')
  expect(expandProperty('flex')).toBe('flex: $0;')
})

test('flex-basis', () => {
  expect(expandProperty('flex-basis')).toBe('flex-basis: $0;')
})

test('flex-direction', () => {
  expect(expandProperty('fd')).toBe('flex-direction: $0;')
  expect(expandProperty('fdc')).toBe('flex-direction: column;')
  expect(expandProperty('flex-direction')).toBe('flex-direction: $0;')
})

test('flex-flow', () => {
  expect(expandProperty('flex-flow')).toBe('flex-flow: $0;')
})

test('flex-grow', () => {
  expect(expandProperty('flex-grow')).toBe('flex-grow: $0;')
})

test('flex-shrink', () => {
  expect(expandProperty('flex-shrink')).toBe('flex-shrink: $0;')
})

test('flex-wrap', () => {
  expect(expandProperty('fww')).toBe('flex-wrap: wrap;')
  expect(expandProperty('flex-wrap')).toBe('flex-wrap: $0;')
})

test('float', () => {
  expect(expandProperty('float')).toBe('float: $0;')
})

test('float-defer', () => {
  expect(expandProperty('float-defer')).toBe('float-defer: $0;')
})

test('float-offset', () => {
  expect(expandProperty('float-offset')).toBe('float-offset: $0;')
})

test('float-reference', () => {
  expect(expandProperty('float-reference')).toBe('float-reference: $0;')
})

test('flood-color', () => {
  expect(expandProperty('flood-color')).toBe('flood-color: $0;')
})

test('flood-opacity', () => {
  expect(expandProperty('flood-opacity')).toBe('flood-opacity: $0;')
})

test('flow', () => {
  expect(expandProperty('flow')).toBe('flow: $0;')
})

test('flow-from', () => {
  expect(expandProperty('flow-from')).toBe('flow-from: $0;')
})

test('flow-into', () => {
  expect(expandProperty('flow-into')).toBe('flow-into: $0;')
})

test('font', () => {
  expect(expandProperty('font')).toBe('font: $0;')
})

test('font-display', () => {
  expect(expandProperty('fds')).toBe('font-display: swap;')
  expect(expandProperty('font-display')).toBe('font-display: $0;')
})

test('font-family', () => {
  expect(expandProperty('font-family')).toBe('font-family: $0;')
})

test('font-feature-settings', () => {
  expect(expandProperty('font-feature-settings')).toBe(
    'font-feature-settings: $0;'
  )
})

test('font-kerning', () => {
  expect(expandProperty('fk')).toBe('font-kerning: $0;')
  expect(expandProperty('font-kerning')).toBe('font-kerning: $0;')
})

test('font-language-override', () => {
  expect(expandProperty('flo')).toBe('font-language-override: $0;')
  expect(expandProperty('font-language-override')).toBe(
    'font-language-override: $0;'
  )
})

test('font-named-instance', () => {
  expect(expandProperty('fni')).toBe('font-named-instance: $0;')
  expect(expandProperty('font-named-instance')).toBe('font-named-instance: $0;')
})

test('font-optical-sizing', () => {
  expect(expandProperty('font-optical-sizing')).toBe('font-optical-sizing: $0;')
})

test('font-palette', () => {
  expect(expandProperty('font-palette')).toBe('font-palette: $0;')
})

test('font-size', () => {
  expect(expandProperty('fs')).toBe('font-size: $0;')
  expect(expandProperty('font-size')).toBe('font-size: $0;')
})

test('font-size-adjust', () => {
  expect(expandProperty('font-size-adjust')).toBe('font-size-adjust: $0;')
})

test('font-stretch', () => {
  expect(expandProperty('font-stretch')).toBe('font-stretch: $0;')
})

test('font-style', () => {
  expect(expandProperty('font-style')).toBe('font-style: $0;')
})

test('font-synthesis', () => {
  expect(expandProperty('font-synthesis')).toBe('font-synthesis: $0;')
})

test('font-synthesis-small-caps', () => {
  expect(expandProperty('font-synthesis-small-caps')).toBe(
    'font-synthesis-small-caps: $0;'
  )
})

test('font-synthesis-style', () => {
  expect(expandProperty('font-synthesis-style')).toBe(
    'font-synthesis-style: $0;'
  )
})

test('font-synthesis-weight', () => {
  expect(expandProperty('font-synthesis-weight')).toBe(
    'font-synthesis-weight: $0;'
  )
})

test('font-variant', () => {
  expect(expandProperty('font-variant')).toBe('font-variant: $0;')
})

test('font-variant-alternates', () => {
  expect(expandProperty('font-variant-alternates')).toBe(
    'font-variant-alternates: $0;'
  )
})

test('font-variant-caps', () => {
  expect(expandProperty('font-variant-caps')).toBe('font-variant-caps: $0;')
})

test('font-variant-east-asian', () => {
  expect(expandProperty('font-variant-east-asian')).toBe(
    'font-variant-east-asian: $0;'
  )
})

test('font-variant-emoji', () => {
  expect(expandProperty('font-variant-emoji')).toBe('font-variant-emoji: $0;')
})

test('font-variant-ligatures', () => {
  expect(expandProperty('font-variant-ligatures')).toBe(
    'font-variant-ligatures: $0;'
  )
})

test('font-variant-numeric', () => {
  expect(expandProperty('font-variant-numeric')).toBe(
    'font-variant-numeric: $0;'
  )
})

test('font-variant-position', () => {
  expect(expandProperty('font-variant-position')).toBe(
    'font-variant-position: $0;'
  )
})

test('font-variation-settings', () => {
  expect(expandProperty('font-variation-settings')).toBe(
    'font-variation-settings: $0;'
  )
})

test('font-weight', () => {
  expect(expandProperty('fw')).toBe('font-weight: $0;')
  expect(expandProperty('font-weight')).toBe('font-weight: $0;')
})

test('footnote-display', () => {
  expect(expandProperty('footnote-display')).toBe('footnote-display: $0;')
})

test('footnote-policy', () => {
  expect(expandProperty('footnote-policy')).toBe('footnote-policy: $0;')
})

test('forced-color-adjust', () => {
  expect(expandProperty('forced-color-adjust')).toBe('forced-color-adjust: $0;')
})

test('gap', () => {
  expect(expandProperty('g')).toBe('gap: $0;')
  expect(expandProperty('gap')).toBe('gap: $0;')
})

test('glyph-orientation-vertical', () => {
  expect(expandProperty('glyph-orientation-vertical')).toBe(
    'glyph-orientation-vertical: $0;'
  )
})

test('grid', () => {
  expect(expandProperty('grid')).toBe('grid: $0;')
})

test('grid-area', () => {
  expect(expandProperty('grid-area')).toBe('grid-area: $0;')
})

test('grid-auto-columns', () => {
  expect(expandProperty('grid-auto-columns')).toBe('grid-auto-columns: $0;')
})

test('grid-auto-flow', () => {
  expect(expandProperty('grid-auto-flow')).toBe('grid-auto-flow: $0;')
})

test('grid-auto-rows', () => {
  expect(expandProperty('grid-auto-rows')).toBe('grid-auto-rows: $0;')
})

test('grid-column', () => {
  expect(expandProperty('gc')).toBe('grid-column: $0;')
  expect(expandProperty('grid-column')).toBe('grid-column: $0;')
})

test('grid-column-end', () => {
  expect(expandProperty('grid-column-end')).toBe('grid-column-end: $0;')
})

test('grid-column-start', () => {
  expect(expandProperty('grid-column-start')).toBe('grid-column-start: $0;')
})

test('grid-row', () => {
  expect(expandProperty('gr')).toBe('grid-row: $0;')
  expect(expandProperty('grid-row')).toBe('grid-row: $0;')
})

test('grid-row-end', () => {
  expect(expandProperty('grid-row-end')).toBe('grid-row-end: $0;')
})

test('grid-row-start', () => {
  expect(expandProperty('grid-row-start')).toBe('grid-row-start: $0;')
})

test('grid-template', () => {
  expect(expandProperty('grid-template')).toBe('grid-template: $0;')
})

test('grid-template-areas', () => {
  expect(expandProperty('grid-template-areas')).toBe('grid-template-areas: $0;')
})

test('grid-template-columns', () => {
  expect(expandProperty('gtc')).toBe('grid-template-columns: $0;')
  expect(expandProperty('grid-template-columns')).toBe(
    'grid-template-columns: $0;'
  )
})

test('grid-template-rows', () => {
  expect(expandProperty('gtr')).toBe('grid-template-rows: $0;')
  expect(expandProperty('grid-template-rows')).toBe('grid-template-rows: $0;')
})

test('hanging-punctuation', () => {
  expect(expandProperty('hp')).toBe('hanging-punctuation: $0;')
  expect(expandProperty('hanging-punctuation')).toBe('hanging-punctuation: $0;')
})

test('height', () => {
  expect(expandProperty('h')).toBe('height: $0;')
  expect(expandProperty('height')).toBe('height: $0;')
})

test('hyphenate-character', () => {
  expect(expandProperty('hyphenate-character')).toBe('hyphenate-character: $0;')
})

test('hyphenate-limit-chars', () => {
  expect(expandProperty('hyphenate-limit-chars')).toBe(
    'hyphenate-limit-chars: $0;'
  )
})

test('hyphenate-limit-last', () => {
  expect(expandProperty('hyphenate-limit-last')).toBe(
    'hyphenate-limit-last: $0;'
  )
})

test('hyphenate-limit-lines', () => {
  expect(expandProperty('hyphenate-limit-lines')).toBe(
    'hyphenate-limit-lines: $0;'
  )
})

test('hyphenate-limit-zone', () => {
  expect(expandProperty('hyphenate-limit-zone')).toBe(
    'hyphenate-limit-zone: $0;'
  )
})

test('hyphens', () => {
  expect(expandProperty('hyphens')).toBe('hyphens: $0;')
})

test('image-orientation', () => {
  expect(expandProperty('image-orientation')).toBe('image-orientation: $0;')
})

test('image-rendering', () => {
  expect(expandProperty('image-rendering')).toBe('image-rendering: $0;')
})

test('image-resolution', () => {
  expect(expandProperty('image-resolution')).toBe('image-resolution: $0;')
})

test('initial-letter', () => {
  expect(expandProperty('initial-letter')).toBe('initial-letter: $0;')
})

test('initial-letter-align', () => {
  expect(expandProperty('initial-letter-align')).toBe(
    'initial-letter-align: $0;'
  )
})

test('initial-letter-wrap', () => {
  expect(expandProperty('initial-letter-wrap')).toBe('initial-letter-wrap: $0;')
})

test('inline-size', () => {
  expect(expandProperty('inline-size')).toBe('inline-size: $0;')
})

test('inline-sizing', () => {
  expect(expandProperty('inline-sizing')).toBe('inline-sizing: $0;')
})

test('input-security', () => {
  expect(expandProperty('input-security')).toBe('input-security: $0;')
})

test('inset', () => {
  expect(expandProperty('i')).toBe('inset: $0;')
  expect(expandProperty('i0')).toBe('inset: 0;')
  expect(expandProperty('inset')).toBe('inset: $0;')
})

test('inset-block', () => {
  expect(expandProperty('ib')).toBe('inset-block: $0;')
  expect(expandProperty('inset-block')).toBe('inset-block: $0;')
})

test('inset-block-end', () => {
  expect(expandProperty('ibe')).toBe('inset-block-end: $0;')
  expect(expandProperty('inset-block-end')).toBe('inset-block-end: $0;')
})

test('inset-block-start', () => {
  expect(expandProperty('ibs')).toBe('inset-block-start: $0;')
  expect(expandProperty('inset-block-start')).toBe('inset-block-start: $0;')
})

test('inset-inline', () => {
  expect(expandProperty('ii')).toBe('inset-inline: $0;')
  expect(expandProperty('inset-inline')).toBe('inset-inline: $0;')
})

test('inset-inline-end', () => {
  expect(expandProperty('iie')).toBe('inset-inline-end: $0;')
  expect(expandProperty('inset-inline-end')).toBe('inset-inline-end: $0;')
})

test('inset-inline-start', () => {
  expect(expandProperty('iis')).toBe('inset-inline-start: $0;')
  expect(expandProperty('inset-inline-start')).toBe('inset-inline-start: $0;')
})

test('isolation', () => {
  expect(expandProperty('isolation')).toBe('isolation: $0;')
})

test('justify-content', () => {
  expect(expandProperty('jc')).toBe('justify-content: $0;')
  expect(expandProperty('jcc')).toBe('justify-content: center;')
  expect(expandProperty('justify-content')).toBe('justify-content: $0;')
})

test('justify-items', () => {
  expect(expandProperty('ji')).toBe('justify-items: $0;')
  expect(expandProperty('jic')).toBe('justify-items: center;')
  expect(expandProperty('justify-items')).toBe('justify-items: $0;')
})

test('justify-self', () => {
  expect(expandProperty('justify-self')).toBe('justify-self: $0;')
})

test('justify-tracks', () => {
  expect(expandProperty('justify-tracks')).toBe('justify-tracks: $0;')
})

test('leading-trim', () => {
  expect(expandProperty('leading-trim')).toBe('leading-trim: $0;')
})

test('left', () => {
  expect(expandProperty('l')).toBe('left: $0;')
  expect(expandProperty('left')).toBe('left: $0;')
})

test('letter-spacing', () => {
  expect(expandProperty('letter-spacing')).toBe('letter-spacing: $0;')
})

test('lighting-color', () => {
  expect(expandProperty('lighting-color')).toBe('lighting-color: $0;')
})

test('line-break', () => {
  expect(expandProperty('line-break')).toBe('line-break: $0;')
})

test('line-clamp', () => {
  expect(expandProperty('line-clamp')).toBe('line-clamp: $0;')
})

test('line-gap-override', () => {
  expect(expandProperty('line-gap-override')).toBe('line-gap-override: $0;')
})

test('line-grid', () => {
  expect(expandProperty('line-grid')).toBe('line-grid: $0;')
})

test('list-style', () => {
  expect(expandProperty('lsn')).toBe('list-style: none;')
  expect(expandProperty('list-style')).toBe('list-style: $0;')
})

test('line-height', () => {
  expect(expandProperty('lh')).toBe('line-height: $0;')
  expect(expandProperty('line-height')).toBe('line-height: $0;')
})

test('line-height-step', () => {
  expect(expandProperty('line-height-step')).toBe('line-height-step: $0;')
})

test('line-padding', () => {
  expect(expandProperty('line-padding')).toBe('line-padding: $0;')
})

test('line-snap', () => {
  expect(expandProperty('line-snap')).toBe('line-snap: $0;')
})

test('list-style-image', () => {
  expect(expandProperty('list-style-image')).toBe('list-style-image: $0;')
})

test('list-style-position', () => {
  expect(expandProperty('list-style-position')).toBe('list-style-position: $0;')
})

test('list-style-type', () => {
  expect(expandProperty('list-style-type')).toBe('list-style-type: $0;')
})

test('masonry-auto-flow', () => {
  expect(expandProperty('masonry-auto-flow')).toBe('masonry-auto-flow: $0;')
})

test('margin', () => {
  expect(expandProperty('m')).toBe('margin: $0;')
  expect(expandProperty('margin')).toBe('margin: $0;')
})

test('margin-block', () => {
  expect(expandProperty('margin-block')).toBe('margin-block: $0;')
})

test('margin-block-end', () => {
  expect(expandProperty('mbe')).toBe('margin-block-end: $0;')
  expect(expandProperty('margin-block-end')).toBe('margin-block-end: $0;')
})

test('margin-block-start', () => {
  expect(expandProperty('mbs')).toBe('margin-block-start: $0;')
  expect(expandProperty('margin-block-start')).toBe('margin-block-start: $0;')
})

test('margin-bottom', () => {
  expect(expandProperty('mb')).toBe('margin-bottom: $0;')
  expect(expandProperty('margin-bottom')).toBe('margin-bottom: $0;')
})

test('margin-break', () => {
  expect(expandProperty('margin-break')).toBe('margin-break: $0;')
})

test('margin-inline', () => {
  expect(expandProperty('margin-inline')).toBe('margin-inline: $0;')
})

test('margin-inline-end', () => {
  expect(expandProperty('margin-inline-end')).toBe('margin-inline-end: $0;')
})

test('margin-inline-start', () => {
  expect(expandProperty('margin-inline-start')).toBe('margin-inline-start: $0;')
})

test('margin-left', () => {
  expect(expandProperty('ml')).toBe('margin-left: $0;')
  expect(expandProperty('margin-left')).toBe('margin-left: $0;')
})

test('margin-right', () => {
  expect(expandProperty('mr')).toBe('margin-right: $0;')
  expect(expandProperty('margin-right')).toBe('margin-right: $0;')
})

test('margin-top', () => {
  expect(expandProperty('mt')).toBe('margin-top: $0;')
  expect(expandProperty('margin-top')).toBe('margin-top: $0;')
})

test('margin-trim', () => {
  expect(expandProperty('margin-trim')).toBe('margin-trim: $0;')
})

test('marker', () => {
  expect(expandProperty('marker')).toBe('marker: $0;')
})

test('marker-end', () => {
  expect(expandProperty('marker-end')).toBe('marker-end: $0;')
})

test('marker-knockout-left', () => {
  expect(expandProperty('marker-knockout-left')).toBe(
    'marker-knockout-left: $0;'
  )
})

test('marker-knockout-right', () => {
  expect(expandProperty('marker-knockout-right')).toBe(
    'marker-knockout-right: $0;'
  )
})

test('marker-mid', () => {
  expect(expandProperty('marker-mid')).toBe('marker-mid: $0;')
})

test('marker-pattern', () => {
  expect(expandProperty('marker-pattern')).toBe('marker-pattern: $0;')
})

test('marker-segment', () => {
  expect(expandProperty('marker-segment')).toBe('marker-segment: $0;')
})

test('marker-side', () => {
  expect(expandProperty('marker-side')).toBe('marker-side: $0;')
})

test('marker-start', () => {
  expect(expandProperty('marker-start')).toBe('marker-start: $0;')
})

test('mask', () => {
  expect(expandProperty('mask')).toBe('mask: $0;')
})

test('mask-border', () => {
  expect(expandProperty('mask-border')).toBe('mask-border: $0;')
})

test('mask-border-mode', () => {
  expect(expandProperty('mask-border-mode')).toBe('mask-border-mode: $0;')
})

test('mask-border-outset', () => {
  expect(expandProperty('mask-border-outset')).toBe('mask-border-outset: $0;')
})

test('mask-border-repeat', () => {
  expect(expandProperty('mask-border-repeat')).toBe('mask-border-repeat: $0;')
})

test('mask-border-slice', () => {
  expect(expandProperty('mask-border-slice')).toBe('mask-border-slice: $0;')
})

test('mask-border-source', () => {
  expect(expandProperty('mask-border-source')).toBe('mask-border-source: $0;')
})

test('mask-border-width', () => {
  expect(expandProperty('mask-border-width')).toBe('mask-border-width: $0;')
})

test('mask-clip', () => {
  expect(expandProperty('mask-clip')).toBe('mask-clip: $0;')
})

test('mask-composite', () => {
  expect(expandProperty('mask-composite')).toBe('mask-composite: $0;')
})

test('mask-image', () => {
  expect(expandProperty('mi')).toBe('mask-image: $0;')
  expect(expandProperty('mai')).toBe('mask-image: $0;')
  expect(expandProperty('mask-image')).toBe('mask-image: $0;')
})

test('mask-mode', () => {
  expect(expandProperty('mask-mode')).toBe('mask-mode: $0;')
})

test('mask-origin', () => {
  expect(expandProperty('mask-origin')).toBe('mask-origin: $0;')
})

test('mask-position', () => {
  expect(expandProperty('mask-position')).toBe('mask-position: $0;')
})

test('mask-repeat', () => {
  expect(expandProperty('mask-repeat')).toBe('mask-repeat: $0;')
})

test('mask-size', () => {
  expect(expandProperty('mask-size')).toBe('mask-size: $0;')
})

test('mask-type', () => {
  expect(expandProperty('mask-type')).toBe('mask-type: $0;')
})

test('max-block-size', () => {
  expect(expandProperty('max-block-size')).toBe('max-block-size: $0;')
})

test('max-height', () => {
  expect(expandProperty('mah')).toBe('max-height: $0;')
  expect(expandProperty('max-height')).toBe('max-height: $0;')
})

test('max-inline-size', () => {
  expect(expandProperty('max-inline-size')).toBe('max-inline-size: $0;')
})

test('max-lines', () => {
  expect(expandProperty('max-lines')).toBe('max-lines: $0;')
})

test('max-width', () => {
  expect(expandProperty('max-width')).toBe('max-width: $0;')
})

test('min-block-size', () => {
  expect(expandProperty('min-block-size')).toBe('min-block-size: $0;')
})

test('min-height', () => {
  expect(expandProperty('min-height')).toBe('min-height: $0;')
})

test('min-inline-size', () => {
  expect(expandProperty('min-inline-size')).toBe('min-inline-size: $0;')
})

test('min-intrinsic-sizing', () => {
  expect(expandProperty('min-intrinsic-sizing')).toBe(
    'min-intrinsic-sizing: $0;'
  )
})

test('min-width', () => {
  expect(expandProperty('min-width')).toBe('min-width: $0;')
})

test('mix-blend-mode', () => {
  expect(expandProperty('mbm')).toBe('mix-blend-mode: $0;')
  expect(expandProperty('mix-blend-mode')).toBe('mix-blend-mode: $0;')
})

test('nav-down', () => {
  expect(expandProperty('nav-down')).toBe('nav-down: $0;')
})

test('nav-left', () => {
  expect(expandProperty('nav-left')).toBe('nav-left: $0;')
})

test('nav-right', () => {
  expect(expandProperty('nav-right')).toBe('nav-right: $0;')
})

test('nav-up', () => {
  expect(expandProperty('nav-up')).toBe('nav-up: $0;')
})

test('object-fit', () => {
  expect(expandProperty('of')).toBe('object-fit: $0;')
  expect(expandProperty('ofc')).toBe('object-fit: cover;')
  expect(expandProperty('object-fit')).toBe('object-fit: $0;')
})

test('object-overflow', () => {
  expect(expandProperty('object-overflow')).toBe('object-overflow: $0;')
})

test('object-position', () => {
  expect(expandProperty('object-position')).toBe('object-position: $0;')
})

test('object-view-box', () => {
  expect(expandProperty('ovb')).toBe('object-view-box: $0;')
  expect(expandProperty('object-view-box')).toBe('object-view-box: $0;')
})

test('offset', () => {
  expect(expandProperty('offset')).toBe('offset: $0;')
})

test('offset-anchor', () => {
  expect(expandProperty('offset-anchor')).toBe('offset-anchor: $0;')
})

test('offset-distance', () => {
  expect(expandProperty('offset-distance')).toBe('offset-distance: $0;')
})

test('offset-path', () => {
  expect(expandProperty('offset-path')).toBe('offset-path: $0;')
})

test('offset-position', () => {
  expect(expandProperty('offset-position')).toBe('offset-position: $0;')
})

test('offset-rotate', () => {
  expect(expandProperty('offset-rotate')).toBe('offset-rotate: $0;')
})

test('opacity', () => {
  expect(expandProperty('o')).toBe('opacity: $0;')
  expect(expandProperty('opacity')).toBe('opacity: $0;')
})

test('order', () => {
  expect(expandProperty('order')).toBe('order: $0;')
})

test('orphans', () => {
  expect(expandProperty('orphans')).toBe('orphans: $0;')
})

test('outline', () => {
  expect(expandProperty('on')).toBe('outline: none;')
  expect(expandProperty('outline')).toBe('outline: $0;')
})

test('outline-color', () => {
  expect(expandProperty('outline-color')).toBe('outline-color: $0;')
})

test('outline-offset', () => {
  expect(expandProperty('outline-offset')).toBe('outline-offset: $0;')
})

test('outline-style', () => {
  expect(expandProperty('outline-style')).toBe('outline-style: $0;')
})

test('outline-width', () => {
  expect(expandProperty('outline-width')).toBe('outline-width: $0;')
})

test('overflow', () => {
  expect(expandProperty('oh')).toBe('overflow: hidden;')
  expect(expandProperty('overflow')).toBe('overflow: $0;')
})

test('overflow-anchor', () => {
  expect(expandProperty('overflow-anchor')).toBe('overflow-anchor: $0;')
})

test('overflow-block', () => {
  expect(expandProperty('overflow-block')).toBe('overflow-block: $0;')
})

test('overflow-clip-margin', () => {
  expect(expandProperty('overflow-clip-margin')).toBe(
    'overflow-clip-margin: $0;'
  )
})

test('overflow-inline', () => {
  expect(expandProperty('overflow-inline')).toBe('overflow-inline: $0;')
})

test('overflow-x', () => {
  expect(expandProperty('oxh')).toBe('overflow-x: hidden;')
  expect(expandProperty('overflow-x')).toBe('overflow-x: $0;')
})

test('overflow-y', () => {
  expect(expandProperty('oyh')).toBe('overflow-y: hidden;')
  expect(expandProperty('overflow-y')).toBe('overflow-y: $0;')
})

test('overflow-wrap', () => {
  expect(expandProperty('overflow-wrap')).toBe('overflow-wrap: $0;')
})

test('override-colors', () => {
  expect(expandProperty('override-colors')).toBe('override-colors: $0;')
})

test('overscroll-behavior', () => {
  expect(expandProperty('obc')).toBe('overscroll-behavior: contain;')
  expect(expandProperty('overscroll-behavior')).toBe('overscroll-behavior: $0;')
})

test('overscroll-behavior-block', () => {
  expect(expandProperty('overscroll-behavior-block')).toBe(
    'overscroll-behavior-block: $0;'
  )
})

test('overscroll-behavior-inline', () => {
  expect(expandProperty('overscroll-behavior-inline')).toBe(
    'overscroll-behavior-inline: $0;'
  )
})

test('overscroll-behavior-x', () => {
  expect(expandProperty('overscroll-behavior-x')).toBe(
    'overscroll-behavior-x: $0;'
  )
})

test('overscroll-behavior-y', () => {
  expect(expandProperty('overscroll-behavior-y')).toBe(
    'overscroll-behavior-y: $0;'
  )
})

test('padding', () => {
  expect(expandProperty('p')).toBe('padding: $0;')
  expect(expandProperty('padding')).toBe('padding: $0;')
})

test('padding-block', () => {
  expect(expandProperty('padding-block')).toBe('padding-block: $0;')
})

test('padding-block-end', () => {
  expect(expandProperty('padding-block-end')).toBe('padding-block-end: $0;')
})

test('padding-block-start', () => {
  expect(expandProperty('padding-block-start')).toBe('padding-block-start: $0;')
})

test('padding-bottom', () => {
  expect(expandProperty('padding-bottom')).toBe('padding-bottom: $0;')
})

test('padding-inline', () => {
  expect(expandProperty('padding-inline')).toBe('padding-inline: $0;')
})

test('padding-inline-end', () => {
  expect(expandProperty('padding-inline-end')).toBe('padding-inline-end: $0;')
})

test('padding-inline-start', () => {
  expect(expandProperty('padding-inline-start')).toBe(
    'padding-inline-start: $0;'
  )
})

test('padding-left', () => {
  expect(expandProperty('padding-left')).toBe('padding-left: $0;')
})

test('padding-right', () => {
  expect(expandProperty('padding-right')).toBe('padding-right: $0;')
})

test('padding-top', () => {
  expect(expandProperty('padding-top')).toBe('padding-top: $0;')
})

test('page', () => {
  expect(expandProperty('page')).toBe('page: $0;')
})

test('paint-order', () => {
  expect(expandProperty('paint-order')).toBe('paint-order: $0;')
})

test('pause', () => {
  expect(expandProperty('pause')).toBe('pause: $0;')
})

test('pause-after', () => {
  expect(expandProperty('pause-after')).toBe('pause-after: $0;')
})

test('pause-before', () => {
  expect(expandProperty('pause-before')).toBe('pause-before: $0;')
})

test('perspective', () => {
  expect(expandProperty('perspective')).toBe('perspective: $0;')
})

test('perspective-origin', () => {
  expect(expandProperty('perspective-origin')).toBe('perspective-origin: $0;')
})

test('pitch', () => {
  expect(expandProperty('pitch')).toBe('pitch: $0;')
})

test('pitch-range', () => {
  expect(expandProperty('pitch-range')).toBe('pitch-range: $0;')
})

test('place-content', () => {
  expect(expandProperty('pc')).toBe('place-content: $0;')
  expect(expandProperty('place-content')).toBe('place-content: $0;')
})

test('place-items', () => {
  expect(expandProperty('pi')).toBe('place-items: $0;')
  expect(expandProperty('pic')).toBe('place-items: center;')
  expect(expandProperty('place-items')).toBe('place-items: $0;')
})

test('place-self', () => {
  expect(expandProperty('place-self')).toBe('place-self: $0;')
})

test('play-during', () => {
  expect(expandProperty('play-during')).toBe('play-during: $0;')
})

test('pointer-events', () => {
  expect(expandProperty('pen')).toBe('pointer-events: none;')
  expect(expandProperty('pe')).toBe('pointer-events: $0;')
  expect(expandProperty('pointer-events')).toBe('pointer-events: $0;')
})

test('position', () => {
  expect(expandProperty('ps')).toBe('position: $0;')
  expect(expandProperty('pos')).toBe('position: $0;')
  expect(expandProperty('posa')).toBe('position: absolute;')
  expect(expandProperty('poa')).toBe('position: absolute;')
  expect(expandProperty('posrel')).toBe('position: relative;')
  expect(expandProperty('position')).toBe('position: $0;')
})

test('print-color-adjust', () => {
  expect(expandProperty('print-color-adjust')).toBe('print-color-adjust: $0;')
})

test('property-name', () => {
  expect(expandProperty('property-name')).toBe('property-name: $0;')
})

test('quotes', () => {
  expect(expandProperty('quotes')).toBe('quotes: $0;')
})

test('region-fragment', () => {
  expect(expandProperty('region-fragment')).toBe('region-fragment: $0;')
})

test('resize', () => {
  expect(expandProperty('rn')).toBe('resize: none;')
  expect(expandProperty('resize')).toBe('resize: $0;')
})

test('rest', () => {
  expect(expandProperty('rest')).toBe('rest: $0;')
})

test('rest-after', () => {
  expect(expandProperty('rest-after')).toBe('rest-after: $0;')
})

test('rest-before', () => {
  expect(expandProperty('rest-before')).toBe('rest-before: $0;')
})

test('right', () => {
  expect(expandProperty('r')).toBe('right: $0;')
  expect(expandProperty('right')).toBe('right: $0;')
})

test('rotate', () => {
  expect(expandProperty('rotate')).toBe('rotate: $0;')
})

test('row-gap', () => {
  expect(expandProperty('rg')).toBe('row-gap: $0;')
  expect(expandProperty('row-gap')).toBe('row-gap: $0;')
})

test('ruby-align', () => {
  expect(expandProperty('ruby-align')).toBe('ruby-align: $0;')
})

test('ruby-merge', () => {
  expect(expandProperty('ruby-merge')).toBe('ruby-merge: $0;')
})

test('ruby-overhang', () => {
  expect(expandProperty('ruby-overhang')).toBe('ruby-overhang: $0;')
})

test('ruby-span', () => {
  expect(expandProperty('ruby-span')).toBe('ruby-span: $0;')
})

test('ruby-position', () => {
  expect(expandProperty('ruby-position')).toBe('ruby-position: $0;')
})

test('running', () => {
  expect(expandProperty('running')).toBe('running: $0;')
})

test('scale', () => {
  expect(expandProperty('scale')).toBe('scale: $0;')
})

test('scroll-behavior', () => {
  expect(expandProperty('sbs')).toBe('scroll-behavior: smooth;')
  expect(expandProperty('scroll-behavior')).toBe('scroll-behavior: $0;')
})

test('scroll-margin', () => {
  expect(expandProperty('sm')).toBe('scroll-margin: $0;')
  expect(expandProperty('scroll-margin')).toBe('scroll-margin: $0;')
})

test('scroll-margin-block', () => {
  expect(expandProperty('scroll-margin-block')).toBe('scroll-margin-block: $0;')
})

test('scroll-margin-block-end', () => {
  expect(expandProperty('scroll-margin-block-end')).toBe(
    'scroll-margin-block-end: $0;'
  )
})

test('scroll-margin-block-start', () => {
  expect(expandProperty('scroll-margin-block-start')).toBe(
    'scroll-margin-block-start: $0;'
  )
})

test('scroll-margin-bottom', () => {
  expect(expandProperty('scroll-margin-bottom')).toBe(
    'scroll-margin-bottom: $0;'
  )
})

test('scroll-margin-inline', () => {
  expect(expandProperty('scroll-margin-inline')).toBe(
    'scroll-margin-inline: $0;'
  )
})

test('scroll-margin-inline-end', () => {
  expect(expandProperty('scroll-margin-inline-end')).toBe(
    'scroll-margin-inline-end: $0;'
  )
})

test('scroll-margin-inline-start', () => {
  expect(expandProperty('scroll-margin-inline-start')).toBe(
    'scroll-margin-inline-start: $0;'
  )
})

test('scroll-margin-left', () => {
  expect(expandProperty('scroll-margin-left')).toBe('scroll-margin-left: $0;')
})

test('scroll-margin-right', () => {
  expect(expandProperty('scroll-margin-right')).toBe('scroll-margin-right: $0;')
})

test('scroll-margin-top', () => {
  expect(expandProperty('scroll-margin-top')).toBe('scroll-margin-top: $0;')
})

test('scroll-padding', () => {
  expect(expandProperty('scroll-padding')).toBe('scroll-padding: $0;')
})

test('scroll-padding-block', () => {
  expect(expandProperty('scroll-padding-block')).toBe(
    'scroll-padding-block: $0;'
  )
})

test('scroll-padding-block-end', () => {
  expect(expandProperty('scroll-padding-block-end')).toBe(
    'scroll-padding-block-end: $0;'
  )
})

test('scroll-padding-block-start', () => {
  expect(expandProperty('scroll-padding-block-start')).toBe(
    'scroll-padding-block-start: $0;'
  )
})

test('scroll-padding-bottom', () => {
  expect(expandProperty('scroll-padding-bottom')).toBe(
    'scroll-padding-bottom: $0;'
  )
})

test('scroll-padding-inline', () => {
  expect(expandProperty('scroll-padding-inline')).toBe(
    'scroll-padding-inline: $0;'
  )
})

test('scroll-padding-inline-end', () => {
  expect(expandProperty('scroll-padding-inline-end')).toBe(
    'scroll-padding-inline-end: $0;'
  )
})

test('scroll-padding-inline-start', () => {
  expect(expandProperty('scroll-padding-inline-start')).toBe(
    'scroll-padding-inline-start: $0;'
  )
})

test('scroll-padding-left', () => {
  expect(expandProperty('scroll-padding-left')).toBe('scroll-padding-left: $0;')
})

test('scroll-padding-right', () => {
  expect(expandProperty('scroll-padding-right')).toBe(
    'scroll-padding-right: $0;'
  )
})

test('scroll-padding-top', () => {
  expect(expandProperty('scroll-padding-top')).toBe('scroll-padding-top: $0;')
})

test('scroll-snap-align', () => {
  expect(expandProperty('scroll-snap-align')).toBe('scroll-snap-align: $0;')
})

test('scroll-snap-stop', () => {
  expect(expandProperty('scroll-snap-stop')).toBe('scroll-snap-stop: $0;')
})

test('scroll-snap-type', () => {
  expect(expandProperty('scroll-snap-type')).toBe('scroll-snap-type: $0;')
})

test('scrollbar', () => {
  expect(expandProperty('scrollbar')).toBe('scrollbar: $0;')
})

test('scrollbar-color', () => {
  expect(expandProperty('scrollbar-color')).toBe('scrollbar-color: $0;')
})

test('scrollbar-gutter', () => {
  expect(expandProperty('scrollbar-gutter')).toBe('scrollbar-gutter: $0;')
})

test('scrollbar-width', () => {
  expect(expandProperty('scrollbar-width')).toBe('scrollbar-width: $0;')
})

test('shape-image-threshold', () => {
  expect(expandProperty('shape-image-threshold')).toBe(
    'shape-image-threshold: $0;'
  )
})

test('shape-margin', () => {
  expect(expandProperty('shape-margin')).toBe('shape-margin: $0;')
})

test('shape-inside', () => {
  expect(expandProperty('shape-inside')).toBe('shape-inside: $0;')
})

test('shape-outside', () => {
  expect(expandProperty('shape-outside')).toBe('shape-outside: $0;')
})

test('shape-padding', () => {
  expect(expandProperty('shape-padding')).toBe('shape-padding: $0;')
})

test('spatial-navigation-action', () => {
  expect(expandProperty('spatial-navigation-action')).toBe(
    'spatial-navigation-action: $0;'
  )
})

test('spatial-navigation-contain', () => {
  expect(expandProperty('spatial-navigation-contain')).toBe(
    'spatial-navigation-contain: $0;'
  )
})

test('spatial-navigation-function', () => {
  expect(expandProperty('spatial-navigation-function')).toBe(
    'spatial-navigation-function: $0;'
  )
})

test('speak', () => {
  expect(expandProperty('speak')).toBe('speak: $0;')
})

test('speak-as', () => {
  expect(expandProperty('speak-as')).toBe('speak-as: $0;')
})

test('speak-header', () => {
  expect(expandProperty('speak-header')).toBe('speak-header: $0;')
})

test('speak-numeral', () => {
  expect(expandProperty('speak-numeral')).toBe('speak-numeral: $0;')
})

test('speak-punctuation', () => {
  expect(expandProperty('speak-punctuation')).toBe('speak-punctuation: $0;')
})

test('speech-rate', () => {
  expect(expandProperty('speech-rate')).toBe('speech-rate: $0;')
})

test('src', () => {
  expect(expandProperty('src')).toBe('src: $0;')
})

test('string-set', () => {
  expect(expandProperty('string-set')).toBe('string-set: $0;')
})

test('stroke', () => {
  expect(expandProperty('stroke')).toBe('stroke: $0;')
})

test('stroke-align', () => {
  expect(expandProperty('stroke-align')).toBe('stroke-align: $0;')
})

test('stroke-alignment', () => {
  expect(expandProperty('stroke-alignment')).toBe('stroke-alignment: $0;')
})

test('stroke-break', () => {
  expect(expandProperty('stroke-break')).toBe('stroke-break: $0;')
})

test('stroke-color', () => {
  expect(expandProperty('stroke-color')).toBe('stroke-color: $0;')
})

test('stroke-dasharray', () => {
  expect(expandProperty('stroke-dasharray')).toBe('stroke-dasharray: $0;')
})

test('stroke-dashadjust', () => {
  expect(expandProperty('stroke-dashadjust')).toBe('stroke-dashadjust: $0;')
})

test('stroke-dash-corner', () => {
  expect(expandProperty('stroke-dash-corner')).toBe('stroke-dash-corner: $0;')
})

test('stroke-dashcorner', () => {
  expect(expandProperty('stroke-dashcorner')).toBe('stroke-dashcorner: $0;')
})

test('stroke-dash-justify', () => {
  expect(expandProperty('stroke-dash-justify')).toBe('stroke-dash-justify: $0;')
})

test('stroke-dashoffset', () => {
  expect(expandProperty('stroke-dashoffset')).toBe('stroke-dashoffset: $0;')
})

test('stroke-image', () => {
  expect(expandProperty('stroke-image')).toBe('stroke-image: $0;')
})

test('stroke-miterlimit', () => {
  expect(expandProperty('stroke-miterlimit')).toBe('stroke-miterlimit: $0;')
})

test('stroke-opacity', () => {
  expect(expandProperty('stroke-opacity')).toBe('stroke-opacity: $0;')
})

test('stroke-origin', () => {
  expect(expandProperty('stroke-origin')).toBe('stroke-origin: $0;')
})

test('stroke-position', () => {
  expect(expandProperty('stroke-position')).toBe('stroke-position: $0;')
})

test('stroke-repeat', () => {
  expect(expandProperty('stroke-repeat')).toBe('stroke-repeat: $0;')
})

test('stroke-size', () => {
  expect(expandProperty('stroke-size')).toBe('stroke-size: $0;')
})

test('stroke-linecap', () => {
  expect(expandProperty('stroke-linecap')).toBe('stroke-linecap: $0;')
})

test('stroke-linejoin', () => {
  expect(expandProperty('stroke-linejoin')).toBe('stroke-linejoin: $0;')
})

test('stroke-width', () => {
  expect(expandProperty('stroke-width')).toBe('stroke-width: $0;')
})

test('tab-size', () => {
  expect(expandProperty('tab-size')).toBe('tab-size: $0;')
})

test('table-layout', () => {
  expect(expandProperty('table-layout')).toBe('table-layout: $0;')
})

test('text-align', () => {
  expect(expandProperty('ta')).toBe('text-align: $0;')
  expect(expandProperty('tac')).toBe('text-align: center;')
  expect(expandProperty('tal')).toBe('text-align: left;')
  expect(expandProperty('tar')).toBe('text-align: right;')
  expect(expandProperty('text-align')).toBe('text-align: $0;')
})

test('text-align-all', () => {
  expect(expandProperty('text-align-all')).toBe('text-align-all: $0;')
})

test('text-align-last', () => {
  expect(expandProperty('text-align-last')).toBe('text-align-last: $0;')
})

test('text-combine-upright', () => {
  expect(expandProperty('text-combine-upright')).toBe(
    'text-combine-upright: $0;'
  )
})

test('text-decoration', () => {
  expect(expandProperty('td')).toBe('text-decoration: $0;')
  expect(expandProperty('tdn')).toBe('text-decoration: none;')
  expect(expandProperty('tdu')).toBe('text-decoration: underline;')
  expect(expandProperty('text-decoration')).toBe('text-decoration: $0;')
})

test('text-decoration-color', () => {
  expect(expandProperty('text-decoration-color')).toBe(
    'text-decoration-color: $0;'
  )
})

test('text-decoration-line', () => {
  expect(expandProperty('text-decoration-line')).toBe(
    'text-decoration-line: $0;'
  )
})

test('text-decoration-skip', () => {
  expect(expandProperty('text-decoration-skip')).toBe(
    'text-decoration-skip: $0;'
  )
})

test('text-decoration-skip-box', () => {
  expect(expandProperty('text-decoration-skip-box')).toBe(
    'text-decoration-skip-box: $0;'
  )
})

test('text-decoration-skip-ink', () => {
  expect(expandProperty('text-decoration-skip-ink')).toBe(
    'text-decoration-skip-ink: $0;'
  )
})

test('text-decoration-skip-inset', () => {
  expect(expandProperty('text-decoration-skip-inset')).toBe(
    'text-decoration-skip-inset: $0;'
  )
})

test('text-decoration-skip-self', () => {
  expect(expandProperty('text-decoration-skip-self')).toBe(
    'text-decoration-skip-self: $0;'
  )
})

test('text-decoration-skip-spaces', () => {
  expect(expandProperty('text-decoration-skip-spaces')).toBe(
    'text-decoration-skip-spaces: $0;'
  )
})

test('text-decoration-style', () => {
  expect(expandProperty('text-decoration-style')).toBe(
    'text-decoration-style: $0;'
  )
})

test('text-decoration-thickness', () => {
  expect(expandProperty('text-decoration-thickness')).toBe(
    'text-decoration-thickness: $0;'
  )
})

test('text-edge', () => {
  expect(expandProperty('text-edge')).toBe('text-edge: $0;')
})

test('text-emphasis', () => {
  expect(expandProperty('text-emphasis')).toBe('text-emphasis: $0;')
})

test('text-emphasis-color', () => {
  expect(expandProperty('text-emphasis-color')).toBe('text-emphasis-color: $0;')
})

test('text-emphasis-position', () => {
  expect(expandProperty('text-emphasis-position')).toBe(
    'text-emphasis-position: $0;'
  )
})

test('text-emphasis-skip', () => {
  expect(expandProperty('text-emphasis-skip')).toBe('text-emphasis-skip: $0;')
})

test('text-emphasis-style', () => {
  expect(expandProperty('text-emphasis-style')).toBe('text-emphasis-style: $0;')
})

test('text-group-align', () => {
  expect(expandProperty('text-group-align')).toBe('text-group-align: $0;')
})

test('text-indent', () => {
  expect(expandProperty('text-indent')).toBe('text-indent: $0;')
})

test('text-justify', () => {
  expect(expandProperty('text-justify')).toBe('text-justify: $0;')
})

test('text-orientation', () => {
  expect(expandProperty('text-orientation')).toBe('text-orientation: $0;')
})

test('text-overflow', () => {
  expect(expandProperty('toe')).toBe('text-overflow: ellipsis;')
  expect(expandProperty('text-overflow')).toBe('text-overflow: $0;')
})

test('text-rendering', () => {
  expect(expandProperty('text-rendering')).toBe('text-rendering: $0;')
})

test('text-size-adjust', () => {
  expect(expandProperty('text-size-adjust')).toBe('text-size-adjust: $0;')
  expect(expandProperty('tsa')).toBe('text-size-adjust: $0;')
})

test('text-shadow', () => {
  expect(expandProperty('text-shadow')).toBe('text-shadow: $0;')
})

test('text-space-collapse', () => {
  expect(expandProperty('text-space-collapse')).toBe('text-space-collapse: $0;')
})

test('text-space-trim', () => {
  expect(expandProperty('text-space-trim')).toBe('text-space-trim: $0;')
})

test('text-spacing', () => {
  expect(expandProperty('text-spacing')).toBe('text-spacing: $0;')
})

test('text-stroke', () => {
  expect(expandProperty('text-stroke')).toBe('text-stroke: $0;')
})

test('text-transform', () => {
  expect(expandProperty('ttu')).toBe('text-transform: uppercase;')
  expect(expandProperty('tt')).toBe('text-transform: $0;')
  expect(expandProperty('text-transform')).toBe('text-transform: $0;')
})

test('text-underline-offset', () => {
  expect(expandProperty('text-underline-offset')).toBe(
    'text-underline-offset: $0;'
  )
})

test('text-underline-position', () => {
  expect(expandProperty('text-underline-position')).toBe(
    'text-underline-position: $0;'
  )
})

test('text-wrap', () => {
  expect(expandProperty('text-wrap')).toBe('text-wrap: $0;')
})

test('top', () => {
  expect(expandProperty('top')).toBe('top: $0;')
})

test('touch-action', () => {
  expect(expandProperty('tam')).toBe('touch-action: manipulation;')
  expect(expandProperty('tan')).toBe('touch-action: none;')
  expect(expandProperty('touch-action')).toBe('touch-action: $0;')
})

test('transform', () => {
  expect(expandProperty('transform')).toBe('transform: $0;')
})

test('transform-box', () => {
  expect(expandProperty('transform-box')).toBe('transform-box: $0;')
})

test('transform-origin', () => {
  expect(expandProperty('to')).toBe('transform-origin: $0;')
  expect(expandProperty('toc')).toBe('transform-origin: center;')
  expect(expandProperty('transform-origin')).toBe('transform-origin: $0;')
})

test('transform-style', () => {
  expect(expandProperty('transform-style')).toBe('transform-style: $0;')
})

test('translate', () => {
  expect(expandProperty('translate')).toBe('translate: $0;')
})

test('transition', () => {
  expect(expandProperty('transition')).toBe('transition: $0;')
})

test('transition-delay', () => {
  expect(expandProperty('transition-delay')).toBe('transition-delay: $0;')
})

test('transition-duration', () => {
  expect(expandProperty('transition-duration')).toBe('transition-duration: $0;')
})

test('transition-property', () => {
  expect(expandProperty('transition-property')).toBe('transition-property: $0;')
})

test('transition-timing-function', () => {
  expect(expandProperty('transition-timing-function')).toBe(
    'transition-timing-function: $0;'
  )
  expect(expandProperty('ttf')).toBe('transition-timing-function: $0;')
})

test('unicode-bidi', () => {
  expect(expandProperty('unicode-bidi')).toBe('unicode-bidi: $0;')
})

test('unicode-range', () => {
  expect(expandProperty('unicode-range')).toBe('unicode-range: $0;')
})

test('user-select', () => {
  expect(expandProperty('us')).toBe('user-select: $0;')
  expect(expandProperty('usn')).toBe('user-select: none;')
  expect(expandProperty('user-select')).toBe('user-select: $0;')
})

test('vertical-align', () => {
  expect(expandProperty('va')).toBe('vertical-align: $0;')
  expect(expandProperty('vertical-align')).toBe('vertical-align: $0;')
})

test('visibility', () => {
  expect(expandProperty('visibility')).toBe('visibility: $0;')
})

test('voice-balance', () => {
  expect(expandProperty('voice-balance')).toBe('voice-balance: $0;')
})

test('voice-duration', () => {
  expect(expandProperty('voice-duration')).toBe('voice-duration: $0;')
})

test('voice-family', () => {
  expect(expandProperty('voice-family')).toBe('voice-family: $0;')
})

test('voice-pitch', () => {
  expect(expandProperty('voice-pitch')).toBe('voice-pitch: $0;')
})

test('voice-range', () => {
  expect(expandProperty('voice-range')).toBe('voice-range: $0;')
})

test('voice-rate', () => {
  expect(expandProperty('voice-rate')).toBe('voice-rate: $0;')
})

test('voice-stress', () => {
  expect(expandProperty('voice-stress')).toBe('voice-stress: $0;')
})

test('voice-volume', () => {
  expect(expandProperty('voice-volume')).toBe('voice-volume: $0;')
})

test('white-space', () => {
  expect(expandProperty('white-space')).toBe('white-space: $0;')
})

test('will-change', () => {
  expect(expandProperty('wit')).toBe('will-change: transform;')
  expect(expandProperty('wio')).toBe('will-change: opacity;')
  expect(expandProperty('will-change')).toBe('will-change: $0;')
})

test('widows', () => {
  expect(expandProperty('widows')).toBe('widows: $0;')
})

test('width', () => {
  expect(expandProperty('w')).toBe('width: $0;')
  expect(expandProperty('width')).toBe('width: $0;')
})

test('word-boundary-detection', () => {
  expect(expandProperty('word-boundary-detection')).toBe(
    'word-boundary-detection: $0;'
  )
})

test('word-boundary-expansion', () => {
  expect(expandProperty('word-boundary-expansion')).toBe(
    'word-boundary-expansion: $0;'
  )
})

test('word-break', () => {
  expect(expandProperty('word-break')).toBe('word-break: $0;')
})

test('word-spacing', () => {
  expect(expandProperty('ws')).toBe('word-spacing: $0;')
  expect(expandProperty('word-spacing')).toBe('word-spacing: $0;')
})

test('word-wrap', () => {
  expect(expandProperty('ww')).toBe('word-wrap: $0;')
  expect(expandProperty('word-wrap')).toBe('word-wrap: $0;')
})

test('wrap-after', () => {
  expect(expandProperty('wrap-after')).toBe('wrap-after: $0;')
})

test('wrap-before', () => {
  expect(expandProperty('wrap-before')).toBe('wrap-before: $0;')
})

test('wrap-flow', () => {
  expect(expandProperty('wrap-flow')).toBe('wrap-flow: $0;')
})

test('wrap-inside', () => {
  expect(expandProperty('wrap-inside')).toBe('wrap-inside: $0;')
})

test('wrap-through', () => {
  expect(expandProperty('wrap-through')).toBe('wrap-through: $0;')
})

test('writing-mode', () => {
  expect(expandProperty('writing-mode')).toBe('writing-mode: $0;')
})

test('z-index', () => {
  expect(expandProperty('z')).toBe('z-index: $0;')
  expect(expandProperty('z-index')).toBe('z-index: $0;')
  // expect(expandProperty('zindex')).toBe('zindex: $0;')
})
