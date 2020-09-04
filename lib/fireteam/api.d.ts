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
  FireteamDateRange,
  FireteamPlatform,
  FireteamPublicSearchOption,
  FireteamResponse,
  FireteamSlotSearch,
  SearchResultOfFireteamResponse,
  SearchResultOfFireteamSummary,
} from './interfaces.js';
import { ServerResponse } from '../common.js';
export interface GetActivePrivateClanFireteamCountParams {
  /** The group id of the clan. */
  groupId: string;
}
/**
 * Gets a count of all active non-public fireteams for the specified clan. Maximum
 * value returned is 25.
 */
export declare function getActivePrivateClanFireteamCount(
  http: HttpClient,
  { groupId }: GetActivePrivateClanFireteamCountParams
): Promise<ServerResponse<number>>;
export interface GetAvailableClanFireteamsParams {
  /** The activity type to filter by. */
  activityType: number;
  /** The date range to grab available fireteams. */
  dateRange: FireteamDateRange;
  /** The group id of the clan. */
  groupId: string;
  /** An optional language filter. */
  langFilter?: string;
  /** Zero based page */
  page: number;
  /** The platform filter. */
  platform: FireteamPlatform;
  /** Determines public/private filtering. */
  publicOnly: FireteamPublicSearchOption;
  /** Filters based on available slots */
  slotFilter: FireteamSlotSearch;
}
/**
 * Gets a listing of all of this clan's fireteams that are have available slots.
 * Caller is not checked for join criteria so caching is maximized.
 */
export declare function getAvailableClanFireteams(
  http: HttpClient,
  {
    activityType,
    dateRange,
    groupId,
    page,
    platform,
    publicOnly,
    slotFilter,
    ...params
  }: GetAvailableClanFireteamsParams
): Promise<ServerResponse<SearchResultOfFireteamSummary>>;
export interface SearchPublicAvailableClanFireteamsParams {
  /** The activity type to filter by. */
  activityType: number;
  /** The date range to grab available fireteams. */
  dateRange: FireteamDateRange;
  /** An optional language filter. */
  langFilter?: string;
  /** Zero based page */
  page: number;
  /** The platform filter. */
  platform: FireteamPlatform;
  /** Filters based on available slots */
  slotFilter: FireteamSlotSearch;
}
/**
 * Gets a listing of all public fireteams starting now with open slots. Caller is
 * not checked for join criteria so caching is maximized.
 */
export declare function searchPublicAvailableClanFireteams(
  http: HttpClient,
  {
    activityType,
    dateRange,
    page,
    platform,
    slotFilter,
    ...params
  }: SearchPublicAvailableClanFireteamsParams
): Promise<ServerResponse<SearchResultOfFireteamSummary>>;
export interface GetMyClanFireteamsParams {
  /**
   * If true, filter by clan. Otherwise, ignore the clan and show all of the user's
   * fireteams.
   */
  groupFilter?: boolean;
  /**
   * The group id of the clan. (This parameter is ignored unless the optional query
   * parameter groupFilter is true).
   */
  groupId: string;
  /** If true, return fireteams that have been closed. */
  includeClosed: boolean;
  /** An optional language filter. */
  langFilter?: string;
  /** Deprecated parameter, ignored. */
  page: number;
  /** The platform filter. */
  platform: FireteamPlatform;
}
/**
 * Gets a listing of all clan fireteams that caller is an applicant, a member, or
 * an alternate of.
 */
export declare function getMyClanFireteams(
  http: HttpClient,
  { groupId, includeClosed, page, platform, ...params }: GetMyClanFireteamsParams
): Promise<ServerResponse<SearchResultOfFireteamResponse>>;
export interface GetClanFireteamParams {
  /** The unique id of the fireteam. */
  fireteamId: string;
  /** The group id of the clan. */
  groupId: string;
}
/** Gets a specific clan fireteam. */
export declare function getClanFireteam(
  http: HttpClient,
  { fireteamId, groupId }: GetClanFireteamParams
): Promise<ServerResponse<FireteamResponse>>;
