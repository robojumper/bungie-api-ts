/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.14.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import {
  BungieMembershipType
} from '../common.js';
import {
  GroupUserInfoCard
} from '../groupv2/interfaces.js';
import {
  IgnoreResponse
} from '../platform.js';

/**
 * This contract supplies basic information commonly used to display a minimal
 * amount of information about a user. Take care to not add more properties here
 * unless the property applies in all (or at least the majority) of the situations
 * where UserInfoCard is used. Avoid adding game specific or platform specific
 * details here. In cases where UserInfoCard is a subset of the data needed in a
 * contract, use UserInfoCard as a property of other contracts.
 */
export interface UserInfoCard {
  /**
   * A platform specific additional display name - ex: psn Real Name, bnet Unique
   * Name, etc.
   */
  readonly supplementalDisplayName: string;
  /** URL the Icon if available. */
  readonly iconPath: string;
  /**
   * If there is a cross save override in effect, this value will tell you the type
   * that is overridding this one.
   */
  readonly crossSaveOverride: BungieMembershipType;
  /**
   * The list of Membership Types indicating the platforms on which this Membership
   * can be used.
   *
   * Not in Cross Save = its original membership type. Cross Save Primary = Any
   * membership types it is overridding, and its original membership type Cross Save
   * Overridden = Empty list
   */
  readonly applicableMembershipTypes: BungieMembershipType[];
  /** If True, this is a public user membership. */
  readonly isPublic: boolean;
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
  /** The bungie global display name, if set. */
  readonly bungieGlobalDisplayName: string;
  /** The bungie global display name code, if set. */
  readonly bungieGlobalDisplayNameCode?: number;
}

/**
 * The types of credentials the Accounts system supports. This is the external
 * facing enum used in place of the internal-only Bungie.SharedDefinitions.
 * CredentialType.
 */
export const enum BungieCredentialType {
  None = 0,
  Xuid = 1,
  Psnid = 2,
  Wlid = 3,
  Fake = 4,
  Facebook = 5,
  Google = 8,
  Windows = 9,
  DemonId = 10,
  SteamId = 12,
  BattleNetId = 14,
  StadiaId = 16,
  TwitchId = 18
}

export interface UserSearchPrefixRequest {
  readonly displayNamePrefix: string;
}

export interface GeneralUser {
  readonly membershipId: string;
  readonly uniqueName: string;
  readonly normalizedName: string;
  readonly displayName: string;
  readonly profilePicture: number;
  readonly profileTheme: number;
  readonly userTitle: number;
  readonly successMessageFlags: string;
  readonly isDeleted: boolean;
  readonly about: string;
  readonly firstAccess?: string;
  readonly lastUpdate?: string;
  readonly legacyPortalUID?: string;
  readonly context: UserToUserContext;
  readonly psnDisplayName: string;
  readonly xboxDisplayName: string;
  readonly fbDisplayName: string;
  readonly showActivity?: boolean;
  readonly locale: string;
  readonly localeInheritDefault: boolean;
  readonly lastBanReportId?: string;
  readonly showGroupMessaging: boolean;
  readonly profilePicturePath: string;
  readonly profilePictureWidePath: string;
  readonly profileThemeName: string;
  readonly userTitleDisplay: string;
  readonly statusText: string;
  readonly statusDate: string;
  readonly profileBanExpire?: string;
  readonly blizzardDisplayName: string;
  readonly steamDisplayName: string;
  readonly stadiaDisplayName: string;
  readonly twitchDisplayName: string;
  readonly cachedBungieGlobalDisplayName: string;
  readonly cachedBungieGlobalDisplayNameCode?: number;
}

export interface UserToUserContext {
  readonly isFollowing: boolean;
  readonly ignoreStatus: IgnoreResponse;
  readonly globalIgnoreEndDate?: string;
}

export interface GetCredentialTypesForAccountResponse {
  readonly credentialType: BungieCredentialType;
  readonly credentialDisplayName: string;
  readonly isPublic: boolean;
  readonly credentialAsString: string;
}

export interface UserTheme {
  readonly userThemeId: number;
  readonly userThemeName: string;
  readonly userThemeDescription: string;
}

export interface UserMembershipData {
  /**
   * this allows you to see destiny memberships that are visible and linked to this
   * account (regardless of whether or not they have characters on the world server)
   */
  readonly destinyMemberships: GroupUserInfoCard[];
  /**
   * If this property is populated, it will have the membership ID of the account
   * considered to be "primary" in this user's cross save relationship.
   *
   * If null, this user has no cross save relationship, nor primary account.
   */
  readonly primaryMembershipId?: string;
  readonly bungieNetUser: GeneralUser;
}

export interface HardLinkedUserMembership {
  readonly membershipType: BungieMembershipType;
  readonly membershipId: string;
  readonly CrossSaveOverriddenType: BungieMembershipType;
  readonly CrossSaveOverriddenMembershipId?: string;
}

export interface UserSearchResponse {
  readonly searchResults: UserSearchResponseDetail[];
  readonly page: number;
  readonly hasMore: boolean;
}

export interface UserSearchResponseDetail {
  readonly bungieGlobalDisplayName: string;
  readonly bungieGlobalDisplayNameCode?: number;
  readonly bungieNetMembershipId?: string;
  readonly destinyMemberships: UserInfoCard[];
}

/** Very basic info about a user as returned by the Account server. */
export interface UserMembership {
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
  /** The bungie global display name, if set. */
  readonly bungieGlobalDisplayName: string;
  /** The bungie global display name code, if set. */
  readonly bungieGlobalDisplayNameCode?: number;
}

export interface ExactSearchRequest {
  readonly displayName: string;
  readonly displayNameCode: number;
}

/** The set of all email subscription/opt-in settings and definitions. */
export interface EmailSettings {
  /** Keyed by the name identifier of the opt-in definition. */
  readonly optInDefinitions: { [key: string]: EmailOptInDefinition };
  /** Keyed by the name identifier of the Subscription definition. */
  readonly subscriptionDefinitions: { [key: string]: EmailSubscriptionDefinition };
  /** Keyed by the name identifier of the View definition. */
  readonly views: { [key: string]: EmailViewDefinition };
}

/**
 * Defines a single opt-in category: a wide-scoped permission to send emails for
 * the subject related to the opt-in.
 */
export interface EmailOptInDefinition {
  /** The unique identifier for this opt-in category. */
  readonly name: string;
  /**
   * The flag value for this opt-in category. For historical reasons, this is defined
   * as a flags enum.
   *
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   */
  readonly value: OptInFlags;
  /**
   * If true, this opt-in setting should be set by default in situations where
   * accounts are created without explicit choices about what they're opting into.
   */
  readonly setByDefault: boolean;
  /** Information about the dependent subscriptions for this opt-in. */
  readonly dependentSubscriptions: EmailSubscriptionDefinition[];
}

/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 */
export const enum OptInFlags {
  None = 0,
  Newsletter = 1,
  System = 2,
  Marketing = 4,
  UserResearch = 8,
  CustomerService = 16,
  Social = 32,
  PlayTests = 64,
  PlayTestsLocal = 128,
  Careers = 256
}

/**
 * Defines a single subscription: permission to send emails for a specific, focused
 * subject (generally timeboxed, such as for a specific release of a product or
 * feature).
 */
export interface EmailSubscriptionDefinition {
  /** The unique identifier for this subscription. */
  readonly name: string;
  /** A dictionary of localized text for the EMail Opt-in setting, keyed by the locale. */
  readonly localization: { [key: string]: EMailSettingSubscriptionLocalization };
  /** The bitflag value for this subscription. Should be a unique power of two value. */
  readonly value: string;
}

/**
 * Localized text relevant to a given EMail setting in a given localization. Extra
 * settings specifically for subscriptions.
 */
export interface EMailSettingSubscriptionLocalization {
  readonly unknownUserDescription: string;
  readonly registeredUserDescription: string;
  readonly unregisteredUserDescription: string;
  readonly unknownUserActionText: string;
  readonly knownUserActionText: string;
  readonly title: string;
  readonly description: string;
}

/**
 * Represents a data-driven view for Email settings. Web/Mobile UI can use this
 * data to show new EMail settings consistently without further manual work.
 */
export interface EmailViewDefinition {
  /** The identifier for this view. */
  readonly name: string;
  /** The ordered list of settings to show in this view. */
  readonly viewSettings: EmailViewDefinitionSetting[];
}

export interface EmailViewDefinitionSetting {
  /**
   * The identifier for this UI Setting, which can be used to relate it to custom
   * strings or other data as desired.
   */
  readonly name: string;
  /** A dictionary of localized text for the EMail setting, keyed by the locale. */
  readonly localization: { [key: string]: EMailSettingLocalization };
  /**
   * If true, this setting should be set by default if the user hasn't chosen whether
   * it's set or cleared yet.
   */
  readonly setByDefault: boolean;
  /**
   * The OptInFlags value to set or clear if this setting is set or cleared in the UI.
   * It is the aggregate of all underlying opt-in flags related to this setting.
   *
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   */
  readonly optInAggregateValue: OptInFlags;
  /** The subscriptions to show as children of this setting, if any. */
  readonly subscriptions: EmailSubscriptionDefinition[];
}

/** Localized text relevant to a given EMail setting in a given localization. */
export interface EMailSettingLocalization {
  readonly title: string;
  readonly description: string;
}
