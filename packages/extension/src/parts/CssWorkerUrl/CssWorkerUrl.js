export const getCssWorkerUrl = () => {
  return new URL(
    '../../../../css-worker/src/cssWorkerMain.js',
    import.meta.url
  ).toString()
}
