import type { PageServerLoad } from './$types'

export const data = await db
    .collection<Project>("projects")
    .find({})
    .toArray();
 