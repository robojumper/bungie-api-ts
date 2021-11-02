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
import { BungieMembershipType, ServerResponse } from '../common.js';
import {
  ClanBanner,
  EntityActionResult,
  GetGroupsForMemberResponse,
  GroupApplicationListRequest,
  GroupApplicationRequest,
  GroupApplicationResponse,
  GroupBanRequest,
  GroupDateRange,
  GroupEditAction,
  GroupMemberLeaveResult,
  GroupMembershipSearchResponse,
  GroupNameSearchRequest,
  GroupOptionalConversation,
  GroupOptionalConversationAddRequest,
  GroupOptionalConversationEditRequest,
  GroupOptionsEditAction,
  GroupPotentialMemberStatus,
  GroupPotentialMembershipSearchResponse,
  GroupQuery,
  GroupResponse,
  GroupSearchResponse,
  GroupTheme,
  GroupType,
  GroupV2Card,
  GroupsForMemberFilter,
  RuntimeGroupMemberType,
  SearchResultOfGroupBan,
  SearchResultOfGroupMember,
  SearchResultOfGroupMemberApplication,
} from './interfaces.js';
/** Returns a list of all available group avatars for the signed-in user. */
export declare function getAvailableAvatars(
  http: HttpClient
): Promise<
  ServerResponse<{
    [key: number]: string;
  }>
>;
/** Returns a list of all available group themes. */
export declare function getAvailableThemes(http: HttpClient): Promise<ServerResponse<GroupTheme[]>>;
export interface GetUserClanInviteSettingParams {
  /** The Destiny membership type of the account we wish to access settings. */
  mType: BungieMembershipType;
}
/**
 * Gets the state of the user's clan invite preferences for a particular membership
 * type - true if they wish to be invited to clans, false otherwise.
 */
export declare function getUserClanInviteSetting(
  http: HttpClient,
  params: GetUserClanInviteSettingParams
): Promise<ServerResponse<boolean>>;
export interface GetRecommendedGroupsParams {
  /** Requested range in which to pull recommended groups */
  createDateRange: GroupDateRange;
  /** Type of groups requested */
  groupType: GroupType;
}
/**
 * Gets groups recommended for you based on the groups to whom those you follow
 * belong.
 */
export declare function getRecommendedGroups(
  http: HttpClient,
  params: GetRecommendedGroupsParams
): Promise<ServerResponse<GroupV2Card[]>>;
/** Search for Groups. */
export declare function groupSearch(
  http: HttpClient,
  body: GroupQuery
): Promise<ServerResponse<GroupSearchResponse>>;
export interface GetGroupParams {
  /** Requested group's id. */
  groupId: string;
}
/** Get information about a specific group of the given ID. */
export declare function getGroup(
  http: HttpClient,
  params: GetGroupParams
): Promise<ServerResponse<GroupResponse>>;
export interface GetGroupByNameParams {
  /** Exact name of the group to find. */
  groupName: string;
  /** Type of group to find. */
  groupType: GroupType;
}
/** Get information about a specific group with the given name and type. */
export declare function getGroupByName(
  http: HttpClient,
  params: GetGroupByNameParams
): Promise<ServerResponse<GroupResponse>>;
/**
 * Get information about a specific group with the given name and type. The POST
 * version.
 */
export declare function getGroupByNameV2(
  http: HttpClient,
  body: GroupNameSearchRequest
): Promise<ServerResponse<GroupResponse>>;
export interface GetGroupOptionalConversationsParams {
  /** Requested group's id. */
  groupId: string;
}
/** Gets a list of available optional conversation channels and their settings. */
export declare function getGroupOptionalConversations(
  http: HttpClient,
  params: GetGroupOptionalConversationsParams
): Promise<ServerResponse<GroupOptionalConversation[]>>;
export interface EditGroupParams {
  /** Group ID of the group to edit. */
  groupId: string;
}
/**
 * Edit an existing group. You must have suitable permissions in the group to
 * perform this operation. This latest revision will only edit the fields you pass
 * in - pass null for properties you want to leave unaltered.
 */
export declare function editGroup(
  http: HttpClient,
  params: EditGroupParams,
  body: GroupEditAction
): Promise<ServerResponse<number>>;
export interface EditClanBannerParams {
  /** Group ID of the group to edit. */
  groupId: string;
}
/**
 * Edit an existing group's clan banner. You must have suitable permissions in the
 * group to perform this operation. All fields are required.
 */
export declare function editClanBanner(
  http: HttpClient,
  params: EditClanBannerParams,
  body: ClanBanner
): Promise<ServerResponse<number>>;
export interface EditFounderOptionsParams {
  /** Group ID of the group to edit. */
  groupId: string;
}
/**
 * Edit group options only available to a founder. You must have suitable
 * permissions in the group to perform this operation.
 */
export declare function editFounderOptions(
  http: HttpClient,
  params: EditFounderOptionsParams,
  body: GroupOptionsEditAction
): Promise<ServerResponse<number>>;
export interface AddOptionalConversationParams {
  /** Group ID of the group to edit. */
  groupId: string;
}
/**
 * Add a new optional conversation/chat channel. Requires admin permissions to the
 * group.
 */
export declare function addOptionalConversation(
  http: HttpClient,
  params: AddOptionalConversationParams,
  body: GroupOptionalConversationAddRequest
): Promise<ServerResponse<string>>;
export interface EditOptionalConversationParams {
  /** Conversation Id of the channel being edited. */
  conversationId: string;
  /** Group ID of the group to edit. */
  groupId: string;
}
/**
 * Edit the settings of an optional conversation/chat channel. Requires admin
 * permissions to the group.
 */
export declare function editOptionalConversation(
  http: HttpClient,
  params: EditOptionalConversationParams,
  body: GroupOptionalConversationEditRequest
): Promise<ServerResponse<string>>;
export interface GetMembersOfGroupParams {
  /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
  currentpage: number;
  /** The ID of the group. */
  groupId: string;
  /** Filter out other member types. Use None for all members. */
  memberType?: RuntimeGroupMemberType;
  /**
   * The name fragment upon which a search should be executed for members with
   * matching display or unique names.
   */
  nameSearch?: string;
}
/** Get the list of members in a given group. */
export declare function getMembersOfGroup(
  http: HttpClient,
  params: GetMembersOfGroupParams
): Promise<ServerResponse<SearchResultOfGroupMember>>;
export interface GetAdminsAndFounderOfGroupParams {
  /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
  currentpage: number;
  /** The ID of the group. */
  groupId: string;
}
/** Get the list of members in a given group who are of admin level or higher. */
export declare function getAdminsAndFounderOfGroup(
  http: HttpClient,
  params: GetAdminsAndFounderOfGroupParams
): Promise<ServerResponse<SearchResultOfGroupMember>>;
export interface EditGroupMembershipParams {
  /** ID of the group to which the member belongs. */
  groupId: string;
  /** Membership ID to modify. */
  membershipId: string;
  /** Membership type of the provide membership ID. */
  membershipType: BungieMembershipType;
  /** New membertype for the specified member. */
  memberType: RuntimeGroupMemberType;
}
/**
 * Edit the membership type of a given member. You must have suitable permissions
 * in the group to perform this operation.
 */
export declare function editGroupMembership(
  http: HttpClient,
  params: EditGroupMembershipParams
): Promise<ServerResponse<number>>;
export interface KickMemberParams {
  /** Group ID to kick the user from. */
  groupId: string;
  /** Membership ID to kick. */
  membershipId: string;
  /** Membership type of the provided membership ID. */
  membershipType: BungieMembershipType;
}
/**
 * Kick a member from the given group, forcing them to reapply if they wish to re-
 * join the group. You must have suitable permissions in the group to perform this
 * operation.
 */
export declare function kickMember(
  http: HttpClient,
  params: KickMemberParams
): Promise<ServerResponse<GroupMemberLeaveResult>>;
export interface BanMemberParams {
  /** Group ID that has the member to ban. */
  groupId: string;
  /** Membership ID of the member to ban from the group. */
  membershipId: string;
  /** Membership type of the provided membership ID. */
  membershipType: BungieMembershipType;
}
/**
 * Bans the requested member from the requested group for the specified period of
 * time.
 */
export declare function banMember(
  http: HttpClient,
  params: BanMemberParams,
  body: GroupBanRequest
): Promise<ServerResponse<number>>;
export interface UnbanMemberParams {
  groupId: string;
  /** Membership ID of the member to unban from the group */
  membershipId: string;
  /** Membership type of the provided membership ID. */
  membershipType: BungieMembershipType;
}
/** Unbans the requested member, allowing them to re-apply for membership. */
export declare function unbanMember(
  http: HttpClient,
  params: UnbanMemberParams
): Promise<ServerResponse<number>>;
export interface GetBannedMembersOfGroupParams {
  /** Page number (starting with 1). Each page has a fixed size of 50 entries. */
  currentpage: number;
  /** Group ID whose banned members you are fetching */
  groupId: string;
}
/**
 * Get the list of banned members in a given group. Only accessible to group Admins
 * and above. Not applicable to all groups. Check group features.
 */
export declare function getBannedMembersOfGroup(
  http: HttpClient,
  params: GetBannedMembersOfGroupParams
): Promise<ServerResponse<SearchResultOfGroupBan>>;
export interface AbdicateFoundershipParams {
  /** The new founder for this group. Must already be a group admin. */
  founderIdNew: string;
  /** The target group id. */
  groupId: string;
  /** Membership type of the provided founderIdNew. */
  membershipType: BungieMembershipType;
}
/**
 * An administrative method to allow the founder of a group or clan to give up
 * their position to another admin permanently.
 */
export declare function abdicateFoundership(
  http: HttpClient,
  params: AbdicateFoundershipParams
): Promise<ServerResponse<boolean>>;
export interface GetPendingMembershipsParams {
  /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
  currentpage: number;
  /** ID of the group. */
  groupId: string;
}
/**
 * Get the list of users who are awaiting a decision on their application to join a
 * given group. Modified to include application info.
 */
export declare function getPendingMemberships(
  http: HttpClient,
  params: GetPendingMembershipsParams
): Promise<ServerResponse<SearchResultOfGroupMemberApplication>>;
export interface GetInvitedIndividualsParams {
  /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
  currentpage: number;
  /** ID of the group. */
  groupId: string;
}
/** Get the list of users who have been invited into the group. */
export declare function getInvitedIndividuals(
  http: HttpClient,
  params: GetInvitedIndividualsParams
): Promise<ServerResponse<SearchResultOfGroupMemberApplication>>;
export interface ApproveAllPendingParams {
  /** ID of the group. */
  groupId: string;
}
/** Approve all of the pending users for the given group. */
export declare function approveAllPending(
  http: HttpClient,
  params: ApproveAllPendingParams,
  body: GroupApplicationRequest
): Promise<ServerResponse<EntityActionResult[]>>;
export interface DenyAllPendingParams {
  /** ID of the group. */
  groupId: string;
}
/** Deny all of the pending users for the given group. */
export declare function denyAllPending(
  http: HttpClient,
  params: DenyAllPendingParams,
  body: GroupApplicationRequest
): Promise<ServerResponse<EntityActionResult[]>>;
export interface ApprovePendingForListParams {
  /** ID of the group. */
  groupId: string;
}
/** Approve all of the pending users for the given group. */
export declare function approvePendingForList(
  http: HttpClient,
  params: ApprovePendingForListParams,
  body: GroupApplicationListRequest
): Promise<ServerResponse<EntityActionResult[]>>;
export interface ApprovePendingParams {
  /** ID of the group. */
  groupId: string;
  /** The membership id being approved. */
  membershipId: string;
  /** Membership type of the supplied membership ID. */
  membershipType: BungieMembershipType;
}
/**
 * Approve the given membershipId to join the group/clan as long as they have
 * applied.
 */
export declare function approvePending(
  http: HttpClient,
  params: ApprovePendingParams,
  body: GroupApplicationRequest
): Promise<ServerResponse<boolean>>;
export interface DenyPendingForListParams {
  /** ID of the group. */
  groupId: string;
}
/** Deny all of the pending users for the given group that match the passed-in . */
export declare function denyPendingForList(
  http: HttpClient,
  params: DenyPendingForListParams,
  body: GroupApplicationListRequest
): Promise<ServerResponse<EntityActionResult[]>>;
export interface GetGroupsForMemberParams {
  /** Filter apply to list of joined groups. */
  filter: GroupsForMemberFilter;
  /** Type of group the supplied member founded. */
  groupType: GroupType;
  /** Membership ID to for which to find founded groups. */
  membershipId: string;
  /** Membership type of the supplied membership ID. */
  membershipType: BungieMembershipType;
}
/** Get information about the groups that a given member has joined. */
export declare function getGroupsForMember(
  http: HttpClient,
  params: GetGroupsForMemberParams
): Promise<ServerResponse<GetGroupsForMemberResponse>>;
export interface RecoverGroupForFounderParams {
  /** Type of group the supplied member founded. */
  groupType: GroupType;
  /** Membership ID to for which to find founded groups. */
  membershipId: string;
  /** Membership type of the supplied membership ID. */
  membershipType: BungieMembershipType;
}
/**
 * Allows a founder to manually recover a group they can see in game but not on
 * bungie.net
 */
export declare function recoverGroupForFounder(
  http: HttpClient,
  params: RecoverGroupForFounderParams
): Promise<ServerResponse<GroupMembershipSearchResponse>>;
export interface GetPotentialGroupsForMemberParams {
  /** Filter apply to list of potential joined groups. */
  filter: GroupPotentialMemberStatus;
  /** Type of group the supplied member applied. */
  groupType: GroupType;
  /** Membership ID to for which to find applied groups. */
  membershipId: string;
  /** Membership type of the supplied membership ID. */
  membershipType: BungieMembershipType;
}
/**
 * Get information about the groups that a given member has applied to or been
 * invited to.
 */
export declare function getPotentialGroupsForMember(
  http: HttpClient,
  params: GetPotentialGroupsForMemberParams
): Promise<ServerResponse<GroupPotentialMembershipSearchResponse>>;
export interface IndividualGroupInviteParams {
  /** ID of the group you would like to join. */
  groupId: string;
  /** Membership id of the account being invited. */
  membershipId: string;
  /** MembershipType of the account being invited. */
  membershipType: BungieMembershipType;
}
/** Invite a user to join this group. */
export declare function individualGroupInvite(
  http: HttpClient,
  params: IndividualGroupInviteParams,
  body: GroupApplicationRequest
): Promise<ServerResponse<GroupApplicationResponse>>;
export interface IndividualGroupInviteCancelParams {
  /** ID of the group you would like to join. */
  groupId: string;
  /** Membership id of the account being cancelled. */
  membershipId: string;
  /** MembershipType of the account being cancelled. */
  membershipType: BungieMembershipType;
}
/** Cancels a pending invitation to join a group. */
export declare function individualGroupInviteCancel(
  http: HttpClient,
  params: IndividualGroupInviteCancelParams
): Promise<ServerResponse<GroupApplicationResponse>>;
