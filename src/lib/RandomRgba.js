export default ({ min = 0, max = 255, alpha = 1 } = {}) => {
  const rgb = [0, 0, 0].map(() => Math.floor(Math.random() * max) + min)
  return `rgba(${rgb}, ${alpha})`
}