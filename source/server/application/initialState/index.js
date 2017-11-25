export default function initialState (request) {
  return {ephemeral: {location: {pathname: request.url}}}
}
