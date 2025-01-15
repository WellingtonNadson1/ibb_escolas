/**
 * @type {string[]}
 */

export const publicRoutes: string[] = [
  '/',
  '/login',
  '/auth/new-verification',
]

/**
 * @type {string[]}
 */
export const privateRoutesCentral: string[] = [
  '/dashboard',
  '/dashboard/escolas',
  '/dashboard/aulas',
  '/dashboard/aulas/[id]/aula',
  '/dashboard/turmas',
  '/dashboard/turmas/[id]/turma',
  '/escolas',
]

/**
 * @type {string[]}
 */
export const privateRoutes: string[] = [
  '/notification',
  '/auth',
  // "/vistoriador",
]

/**
 * @type {string[]}
 */
export const authRoutes: string[] = ['/login', '/auth/new-verification', '/']

/**
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth'

/**
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/dashboard'
export const DEFAULT_LOGIN_REDIRECT_CELULA: string = '/celula'
export const DEFAULT_LOGIN_REDIRECT_SUPERVISOR: string = '/supervisao'
export const DEFAULT_LOGIN_REDIRECT_SUPERVISOR_LIDER: string = '/celula'
