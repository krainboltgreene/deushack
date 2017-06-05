import "babel-polyfill"

import environment from "./environment"

const REFRESH_WAIT_TIME = 900000

window.env = environment(
  [...document.querySelectorAll("meta[type='environment']")]
)


return render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("application")
)
