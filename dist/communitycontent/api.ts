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
  BungieMembershipType
} from '../common';
import {
  CommunityContentSortMode,
  ForumTopicsCategoryFiltersEnum
} from '../forum/interfaces';
import {
  CommunityLiveStatusServerResponse,
  SearchResultOfCommunityLiveStatusServerResponse
} from './responses';
import {
  CommunityStatusSort
} from './interfaces';
import {
  PartnershipType
} from '../platform';
import {
  PostSearchResponseServerResponse
} from '../forum/responses';

export interface GetCommunityContentParams {
  /** The type of media to get */
  mediaFilter: ForumTopicsCategoryFiltersEnum;
  /** Zero based page */
  page: number;
  /** The sort mode. */
  sort: CommunityContentSortMode;
}

/** Returns community content. */
export async function getCommunityContent(http: HttpClient, params: GetCommunityContentParams): Promise<PostSearchResponseServerResponse> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`
  });
}

export interface GetCommunityLiveStatusesParams {
  /**
   * The hash of the Activity Mode for which streams should be retrieved. Don't pass
   * it in or pass 0 to not filter by mode.
   */
  modeHash?: number;
  /** Zero based page. */
  page: number;
  /** The type of partnership for which the status should be returned. */
  partnershipType: PartnershipType;
  /** The sort mode. */
  sort: CommunityStatusSort;
  /**
   * The locale for streams you'd like to see. Don't pass this to fall back on your
   * BNet locale. Pass 'ALL' to not filter by locale.
   */
  streamLocale?: string;
}

/** Returns info about community members who are live streaming. */
export async function getCommunityLiveStatuses(http: HttpClient, params: GetCommunityLiveStatusesParams): Promise<SearchResultOfCommunityLiveStatusServerResponse> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Live/All/${params.partnershipType}/${params.sort}/${params.page}/`,
    params: {
      modeHash: params.modeHash,
      streamLocale: params.streamLocale
    }
  });
}

export interface GetCommunityLiveStatusesForClanmatesParams {
  /** Zero based page. */
  page: number;
  /** The type of partnership for which the status should be returned. */
  partnershipType: PartnershipType;
  /** The sort mode. */
  sort: CommunityStatusSort;
}

/** Returns info about community members who are live streaming in your clans. */
export async function getCommunityLiveStatusesForClanmates(http: HttpClient, params: GetCommunityLiveStatusesForClanmatesParams): Promise<SearchResultOfCommunityLiveStatusServerResponse> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Live/Clan/${params.partnershipType}/${params.sort}/${params.page}/`
  });
}

export interface GetCommunityLiveStatusesForFriendsParams {
  /** Zero based page. */
  page: number;
  /** The type of partnership for which the status should be returned. */
  partnershipType: PartnershipType;
  /** The sort mode. */
  sort: CommunityStatusSort;
}

/** Returns info about community members who are live streaming among your friends. */
export async function getCommunityLiveStatusesForFriends(http: HttpClient, params: GetCommunityLiveStatusesForFriendsParams): Promise<SearchResultOfCommunityLiveStatusServerResponse> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Live/Friends/${params.partnershipType}/${params.sort}/${params.page}/`
  });
}

export interface GetFeaturedCommunityLiveStatusesParams {
  /** Zero based page. */
  page: number;
  /** The type of partnership for which the status should be returned. */
  partnershipType: PartnershipType;
  /** The sort mode. */
  sort: CommunityStatusSort;
  /**
   * The locale for streams you'd like to see. Don't pass this to fall back on your
   * BNet locale. Pass 'ALL' to not filter by locale.
   */
  streamLocale?: string;
}

/** Returns info about Featured live streams. */
export async function getFeaturedCommunityLiveStatuses(http: HttpClient, params: GetFeaturedCommunityLiveStatusesParams): Promise<SearchResultOfCommunityLiveStatusServerResponse> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Live/Featured/${params.partnershipType}/${params.sort}/${params.page}/`,
    params: {
      streamLocale: params.streamLocale
    }
  });
}

export interface GetStreamingStatusForMemberParams {
  /** The membershipId related to that type. */
  membershipId: number;
  /** The type of account for which info will be extracted. */
  membershipType: BungieMembershipType;
  /** The type of partnership for which info will be extracted. */
  partnershipType: PartnershipType;
}

/** Gets the Live Streaming status of a particular Account and Membership Type. */
export async function getStreamingStatusForMember(http: HttpClient, params: GetStreamingStatusForMemberParams): Promise<CommunityLiveStatusServerResponse> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Live/Users/${params.partnershipType}/${params.membershipType}/${params.membershipId}/`
  });
}
