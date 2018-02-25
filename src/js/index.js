const User = { name: 'User' }
const Hello = document.createElement('P')
Hello.innerText = `Hi ${User.name}`
document.querySelector('body').appendChild(Hello)
