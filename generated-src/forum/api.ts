/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.12.2
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  ForumPostSortEnum,
  ForumRecruitmentDetail,
  ForumTopicsCategoryFiltersEnum,
  ForumTopicsQuickDateEnum,
  ForumTopicsSortEnum,
  PostSearchResponse
} from './interfaces.js';
import {
  ServerResponse
} from '../common.js';
import {
  TagResponse
} from '../platform.js';

export interface GetTopicsPagedParams {
  /** A category filter */
  categoryFilter: ForumTopicsCategoryFiltersEnum;
  /** The group, if any. */
  group: string;
  /**
   * Comma seperated list of locales posts must match to return in the result list.
   * Default 'en'
   */
  locales?: string;
  /** Zero paged page number */
  page: number;
  /** Unused */
  pageSize: number;
  /** A date filter. */
  quickDate: ForumTopicsQuickDateEnum;
  /** The sort mode. */
  sort: ForumTopicsSortEnum;
  /** The tags to search, if any. */
  tagstring?: string;
}

/** Get topics from any forum. */
export function getTopicsPaged(http: HttpClient, params: GetTopicsPagedParams): Promise<ServerResponse<PostSearchResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    params: {
      locales: params.locales,
      tagstring: params.tagstring
    }
  });
}

export interface GetCoreTopicsPagedParams {
  /** The category filter. */
  categoryFilter: ForumTopicsCategoryFiltersEnum;
  /**
   * Comma seperated list of locales posts must match to return in the result list.
   * Default 'en'
   */
  locales?: string;
  /** Zero base page */
  page: number;
  /** The date filter. */
  quickDate: ForumTopicsQuickDateEnum;
  /** The sort mode. */
  sort: ForumTopicsSortEnum;
}

/** Gets a listing of all topics marked as part of the core group. */
export function getCoreTopicsPaged(http: HttpClient, params: GetCoreTopicsPagedParams): Promise<ServerResponse<PostSearchResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetCoreTopicsPaged/${params.page}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    params: {
      locales: params.locales
    }
  });
}

export interface GetPostsThreadedPagedParams {
  getParentPost: boolean;
  page: number;
  pageSize: number;
  parentPostId: string;
  replySize: number;
  rootThreadMode: boolean;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
  sortMode: ForumPostSortEnum;
}

/**
 * Returns a thread of posts at the given parent, optionally returning replies to
 * those posts as well as the original parent.
 */
export function getPostsThreadedPaged(http: HttpClient, params: GetPostsThreadedPagedParams): Promise<ServerResponse<PostSearchResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}

export interface GetPostsThreadedPagedFromChildParams {
  childPostId: string;
  page: number;
  pageSize: number;
  replySize: number;
  rootThreadMode: boolean;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
  sortMode: ForumPostSortEnum;
}

/**
 * Returns a thread of posts starting at the topicId of the input childPostId,
 * optionally returning replies to those posts as well as the original parent.
 */
export function getPostsThreadedPagedFromChild(http: HttpClient, params: GetPostsThreadedPagedFromChildParams): Promise<ServerResponse<PostSearchResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}

export interface GetPostAndParentParams {
  childPostId: string;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
}

/** Returns the post specified and its immediate parent. */
export function getPostAndParent(http: HttpClient, params: GetPostAndParentParams): Promise<ServerResponse<PostSearchResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParent/${params.childPostId}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}

export interface GetPostAndParentAwaitingApprovalParams {
  childPostId: string;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
}

/**
 * Returns the post specified and its immediate parent of posts that are awaiting
 * approval.
 */
export function getPostAndParentAwaitingApproval(http: HttpClient, params: GetPostAndParentAwaitingApprovalParams): Promise<ServerResponse<PostSearchResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParentAwaitingApproval/${params.childPostId}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}

export interface GetTopicForContentParams {
  contentId: string;
}

/** Gets the post Id for the given content item's comments, if it exists. */
export function getTopicForContent(http: HttpClient, params: GetTopicForContentParams): Promise<ServerResponse<string>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicForContent/${params.contentId}/`
  });
}

export interface GetForumTagSuggestionsParams {
  /** The partial tag input to generate suggestions from. */
  partialtag?: string;
}

/**
 * Gets tag suggestions based on partial text entry, matching them with other tags
 * previously used in the forums.
 */
export function getForumTagSuggestions(http: HttpClient, params: GetForumTagSuggestionsParams): Promise<ServerResponse<TagResponse[]>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Forum/GetForumTagSuggestions/',
    params: {
      partialtag: params.partialtag
    }
  });
}

export interface GetPollParams {
  /** The post id of the topic that has the poll. */
  topicId: string;
}

/** Gets the specified forum poll. */
export function getPoll(http: HttpClient, params: GetPollParams): Promise<ServerResponse<PostSearchResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/Poll/${params.topicId}/`
  });
}

/**
 * Allows the caller to get a list of to 25 recruitment thread summary information
 * objects.
 */
export function getRecruitmentThreadSummaries(http: HttpClient, body: string[]): Promise<ServerResponse<ForumRecruitmentDetail[]>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Forum/Recruit/Summaries/',
    body
  });
}
