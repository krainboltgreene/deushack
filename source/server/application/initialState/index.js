export default function initialState (request) {
  return {
    resources: {},
    ephemeral: {location: {pathname: request.url}},
  }
}
