const input = []
process.stdin.setEncoding('utf8')
process.stdin.on('data', c => {
  console.error('INPUT', {c})
  input.push(c)
})
process.stdin.on('end', () => {
  process.stdout.write(
    input.join('').replace(
      /\[gh ([^\/]+\/[^\]\/ ]+)(?: ([^\] ]+)(?: ([^\]]+))?)?\]/g,
      (_0, repo, url, text = url) => {
        if (!url) {
          const [user, ...proj] = repo.split('/')
          url = `https://${user}.github.io/${proj.join('/')}`
          text = proj.join('/')
        }
        return `[${text}](${url}) ([${repo}](https://github.com/${repo}))`
      }
    )
  )
})
