import { redirect } from '@/i18n/routing'

export default function Web() {
  redirect({ href: '/main', locale: 'ko' })
}
