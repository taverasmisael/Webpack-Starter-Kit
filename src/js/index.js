import(/* webpackChunkName: "userdata" */ './userdata').then(({ default: User }) => {
  const Hello = document.createElement('P')
  Hello.innerText = `Hi ${User.name}`
  document.querySelector('body').appendChild(Hello)
})
