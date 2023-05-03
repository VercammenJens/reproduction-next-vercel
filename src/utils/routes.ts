import { Language } from '@/types/language'
import { ROUTES } from '@/constants/routes'

export const routes = (lang: string): Record<string, string> => ({
  home: `/${lang}`,
  move: `/${lang}/${ROUTES.MOVE[lang as Language]}`,
})
