/*
 * Category data-access helpers for the static game catalog.
 * The page uses these records to build accessible filter options at build time.
 */
import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { categories } from '../../db/schema';
import type { Category } from '../types/game';

/**
 * Returns every category sorted alphabetically by name.
 *
 * @param db - Database connection used to read category rows.
 * @returns A list of categories ordered by name.
 */
export async function getAllCategories(db: Database): Promise<Category[]> {
    return db
        .select({ id: categories.id, name: categories.name })
        .from(categories)
        .orderBy(asc(categories.name));
}
