import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { Role } from './roles'

type PermissionsByRole = (
  user: unknown,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(_, { can }) {
    can('manage', 'all')
  },
  MEMBER(_, { can }) {
    // can('invite', 'User')
    can('create', 'Project')
  },
  BILLING() {},
}
