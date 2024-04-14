import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'

import { ProjectSubject } from './subjects/project'
import { UserSubject } from './subjects/user'

type AppAbilities = UserSubject | ProjectSubject | ['manage', 'all']

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

const { build, can, cannot } = new AbilityBuilder(createAppAbility)

can('invite', 'User')
cannot('delete', 'User')

export const ability = build()
