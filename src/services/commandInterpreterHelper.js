const availableCommands = [{
  name: 'clear',
  match: (cmd) => cmd === 'clear'
}, {
  name: 'config',
  match: (cmd) => /^config(\s|$)/.test(cmd)
}, {
  name: 'catch-all',
  match: (_) => true
}]

// First to match wins
const interpret = (cmd) => {
  return availableCommands.reduce((match, candidate) => {
    if (match) return match
    const isMatch = candidate.match(cmd)
    return isMatch ? candidate : null
  }, null)
}

export default {
  interpret
}