import type { Actions } from './$types';
import { DATABASE_NAME } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { encryptUserId, hashPassword, validatePassword } from '$db/security';
import clientPromise from "$db/mongo";
import ip from "ip";


import type { PageServerLoad } from "./$types";
import getUser from "$db/getUser";

export const load: PageServerLoad = async () => {
  const db = database ?? (await clientPromise).db(DATABASE_NAME);
  const data = await db
    .collection<Project>("projects")
    .find({})
    .toArray();
  return {
    projects: data.map(v => ({ ...v, _id: v._id.toString() }))
  }
};