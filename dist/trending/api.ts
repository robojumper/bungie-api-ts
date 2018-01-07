/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  SearchResultOfTrendingEntryServerResponse,
  TrendingCategoriesServerResponse,
  TrendingDetailServerResponse
} from './responses';
import {
  TrendingEntryType
} from './interfaces';

/**
 * Returns trending items for Bungie.net, collapsed into the first page of items
 * per category. For pagination within a category, call GetTrendingCategory.
 */
export async function getTrendingCategories(http: HttpClient): Promise<TrendingCategoriesServerResponse> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Trending/Categories/'
  });
}

export interface GetTrendingCategoryParams {
  /** The ID of the category for whom you want additional results. */
  categoryId: string;
  /** The page # of results to return. */
  pageNumber: number;
}

/** Returns paginated lists of trending items for a category. */
export async function getTrendingCategory(http: HttpClient, params: GetTrendingCategoryParams): Promise<SearchResultOfTrendingEntryServerResponse> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Categories/${params.categoryId}/${params.pageNumber}/`
  });
}

export interface GetTrendingEntryDetailParams {
  /** The identifier for the entity to be returned. */
  identifier: string;
  /** The type of entity to be returned. */
  trendingEntryType: TrendingEntryType;
}

/**
 * Returns the detailed results for a specific trending entry. Note that trending
 * entries are uniquely identified by a combination of *both* the TrendingEntryType
 * *and* the identifier: the identifier alone is not guaranteed to be globally
 * unique.
 */
export async function getTrendingEntryDetail(http: HttpClient, params: GetTrendingEntryDetailParams): Promise<TrendingDetailServerResponse> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Details/${params.trendingEntryType}/${params.identifier}/`
  });
}
