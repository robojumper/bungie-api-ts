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
  ForumPostSortEnum,
  ForumRecruitmentDetail,
  ForumTopicsCategoryFiltersEnum,
  ForumTopicsQuickDateEnum,
  ForumTopicsSortEnum,
  PostSearchResponse,
} from './interfaces.js';
import { ServerResponse } from '../common.js';
import { TagResponse } from '../platform.js';
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
export declare function getTopicsPaged(
  http: HttpClient,
  { categoryFilter, group, page, pageSize, quickDate, sort, ...params }: GetTopicsPagedParams
): Promise<ServerResponse<PostSearchResponse>>;
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
export declare function getCoreTopicsPaged(
  http: HttpClient,
  { categoryFilter, page, quickDate, sort, ...params }: GetCoreTopicsPagedParams
): Promise<ServerResponse<PostSearchResponse>>;
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
export declare function getPostsThreadedPaged(
  http: HttpClient,
  {
    getParentPost,
    page,
    pageSize,
    parentPostId,
    replySize,
    rootThreadMode,
    sortMode,
    ...params
  }: GetPostsThreadedPagedParams
): Promise<ServerResponse<PostSearchResponse>>;
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
export declare function getPostsThreadedPagedFromChild(
  http: HttpClient,
  {
    childPostId,
    page,
    pageSize,
    replySize,
    rootThreadMode,
    sortMode,
    ...params
  }: GetPostsThreadedPagedFromChildParams
): Promise<ServerResponse<PostSearchResponse>>;
export interface GetPostAndParentParams {
  childPostId: string;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
}
/** Returns the post specified and its immediate parent. */
export declare function getPostAndParent(
  http: HttpClient,
  { childPostId, ...params }: GetPostAndParentParams
): Promise<ServerResponse<PostSearchResponse>>;
export interface GetPostAndParentAwaitingApprovalParams {
  childPostId: string;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
}
/**
 * Returns the post specified and its immediate parent of posts that are awaiting
 * approval.
 */
export declare function getPostAndParentAwaitingApproval(
  http: HttpClient,
  { childPostId, ...params }: GetPostAndParentAwaitingApprovalParams
): Promise<ServerResponse<PostSearchResponse>>;
export interface GetTopicForContentParams {
  contentId: string;
}
/** Gets the post Id for the given content item's comments, if it exists. */
export declare function getTopicForContent(
  http: HttpClient,
  { contentId }: GetTopicForContentParams
): Promise<ServerResponse<string>>;
export interface GetForumTagSuggestionsParams {
  /** The partial tag input to generate suggestions from. */
  partialtag?: string;
}
/**
 * Gets tag suggestions based on partial text entry, matching them with other tags
 * previously used in the forums.
 */
export declare function getForumTagSuggestions(
  http: HttpClient,
  { ...params }: GetForumTagSuggestionsParams
): Promise<ServerResponse<TagResponse[]>>;
export interface GetPollParams {
  /** The post id of the topic that has the poll. */
  topicId: string;
}
/** Gets the specified forum poll. */
export declare function getPoll(
  http: HttpClient,
  { topicId }: GetPollParams
): Promise<ServerResponse<PostSearchResponse>>;
/**
 * Allows the caller to get a list of to 25 recruitment thread summary information
 * objects.
 */
export declare function getRecruitmentThreadSummaries(
  http: HttpClient,
  body: string[]
): Promise<ServerResponse<ForumRecruitmentDetail[]>>;
