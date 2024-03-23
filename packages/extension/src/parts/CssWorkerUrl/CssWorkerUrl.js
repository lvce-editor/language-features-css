export const getCssWorkerUrl = () => {
  return new URL(
    '../../../../css-worker/src/cssWorkerMain.ts',
    import.meta.url
  ).toString()
}
