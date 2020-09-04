/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.8.2
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  CommunityContentSortMode,
  ForumTopicsCategoryFiltersEnum,
  PostSearchResponse
} from '../forum/interfaces.js';
import {
  ServerResponse
} from '../common.js';

export interface GetCommunityContentParams {
  /** The type of media to get */
  mediaFilter: ForumTopicsCategoryFiltersEnum;
  /** Zero based page */
  page: number;
  /** The sort mode. */
  sort: CommunityContentSortMode;
}

/** Returns community content. */
export function getCommunityContent(http: HttpClient, { mediaFilter, page, sort }: GetCommunityContentParams): Promise<ServerResponse<PostSearchResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Get/${sort}/${mediaFilter}/${page}/`
  });
}
