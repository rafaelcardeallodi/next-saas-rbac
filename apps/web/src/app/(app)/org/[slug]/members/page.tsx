import { ability } from '@/auth/auth'

import { Invites } from './invites'
import { MemberList } from './member-list'

export default async function Members() {
  const permissions = await ability()

  const canGetInvites = permissions?.can('get', 'Invite')
  const catGetMembers = permissions?.can('get', 'User')

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Members</h1>

      <div className="space-y-4">
        {canGetInvites && <Invites />}
        {catGetMembers && <MemberList />}
      </div>
    </div>
  )
}