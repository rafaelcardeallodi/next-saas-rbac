import { Role } from '@acl/auth'

import { api } from './api-client'

interface getPendingInvitesResponse {
  invites: {
    organization: {
      name: string
    }
    id: string
    email: string
    role: Role
    createdAt: string
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
  }[]
}

export async function getPendingInvites() {
  const result = await api
    .get(`pending-invites`)
    .json<getPendingInvitesResponse>()

  return result
}
