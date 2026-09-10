/*
 * Publisher data access helpers for building the static game catalog.
 * These queries read publisher records from the local SQLite database and
 * return the typed publisher objects used by Astro pages at build time.
 */
import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Returns every publisher sorted alphabetically by name.
 *
 * @param db - Database connection used to read publisher rows.
 * @returns A list of publishers ordered by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
