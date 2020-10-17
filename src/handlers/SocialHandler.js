module.exports = class SocialHandler {
  async element(element) {
    for (let icon of icons) {
      const svg = await fetch(icon.svgURL).then(res => res.text())
      const a = `<a href='${icon.href}'>${svg}</a>`
      element.append(a, { html: true })
      element.removeAttribute('style')
    }
  }
}

const iconBaseURL = 'https://simpleicons.org/icons/'
const icons = [
  {
    href: 'https://twitter.com/The_Sleepy_Dev',
    svgURL: `${iconBaseURL}twitter.svg`,
  },
  {
    href: 'https://www.linkedin.com/in/angel-k-campbell/',
    svgURL: `${iconBaseURL}linkedin.svg`,
  },
  {
    href: 'https://github.com/Kayron013',
    svgURL: `${iconBaseURL}github.svg`,
  },
  {
    href: 'https://stackoverflow.com/users/6027891',
    svgURL: `${iconBaseURL}stackoverflow.svg`,
  },
]
