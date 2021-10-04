import { createHash } from 'crypto'
import { UserConfig } from '@hummin/core'
import { presetAttributify } from '@hummin/preset-attributify'
import { presetDefault } from '@hummin/preset-default'
import plugin from '@hummin/vite'

function getHash(input: string, length = 8) {
  return createHash('sha256')
    .update(input)
    .digest('hex')
    .substr(0, length)
}

export default (obj: UserConfig, key: string) => {
  // 0dc2327d
  if (key !== getHash('mwmwmw'))
    return null

  return plugin({
    presets: [
      presetAttributify(),
      presetDefault(),
    ],
    ...obj,
  })
}
