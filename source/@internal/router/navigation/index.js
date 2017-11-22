import keyChain from "@unction/keychain"

export default function navigation (state) {
  return keyChain([
    "ephemeral",
    "location",
  ])(state)
}
