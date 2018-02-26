// @flow
import(/* webpackChunkName: "userdata" */ './userdata').then(({ default: User }) => {
  const Hello = document.createElement('P')
  Hello.innerText = `Hi ${User.name}`
  const body = document.querySelector('body')
  if (body) body.appendChild(Hello)
})
