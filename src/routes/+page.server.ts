import type { Actions } from './$types';
import { DATABASE_NAME } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { encryptUserId, hashPassword, validatePassword } from '../db/security';
import clientPromise from '../db/mongo'
import ip from "ip";
import type { PageServerLoad } from './$types'


const client = await clientPromise;
const db = client.db(DATABASE_NAME);

export const data = await db
    .collection<Project>("projects")
    .find({})
    .toArray();
    