import { Role } from '@acl/auth'

import { api } from './api-client'

interface GetMembersResponse {
  members: {
    userId: string
    id: string
    role: Role
    name: string | null
    email: string
    avatarUrl: string | null
  }[]
}

export async function getMembers(org: string) {
  const result = await api
    .get(`organizations/${org}/members`)
    .json<GetMembersResponse>()

  return result
}