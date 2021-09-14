const input = document.querySelector('.input')
const btn = document.querySelector('.button')

console.log(input, btn)

async function req(url) {
  const response = await fetch(`https://api.github.com/users/${url}`)
  const data = await response.json()

  const repos = await fetch(`https://api.github.com/users/${url}/repos`)
  .then(res => res.json())

  console.log(repos)

  document.querySelector('.data').innerHTML = `
  <article>
    <h1>ola ${data.name}</h1>
    <img src=${data.avatar_url} alt="ultimo projeto" />
    <p>seu ultimo projeto foi "${repos[0].name}"?</p>
  </article>
`

}

btn.addEventListener('click', e => {
req(input.value)


})