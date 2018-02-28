// @flow
import(/* webpackChunkName: "userdata" */ './userdata').then(({ default: User }) => {
  const Hello = document.createElement('P')
  Hello.innerText = `Hi ${new User().name} ${User.method()}`
  const body = document.querySelector('body')
  if (body) body.appendChild(Hello)
})
