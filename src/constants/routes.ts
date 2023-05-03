import { Language } from '@/types/language'

export const ROUTES = {
  MOVE: {
    [Language.DUTCH]: 'verhuizen',
    [Language.FRENCH]: 'deplacer'
  }
} as const
