import { Role } from '@acl/auth'

import { api } from './api-client'

interface getInviteResponse {
  invite: {
    id: string
    email: string
    role: Role
    createdAt: string
    organization: {
      name: string
    }
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
  }
}

export async function getInvite(inviteId: string) {
  const result = await api.get(`invites/${inviteId}`).json<getInviteResponse>()

  return result
}
