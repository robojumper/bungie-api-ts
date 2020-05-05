/**
 * Bungie.Net API
 * these helper functions and definitions are based off the structure of DestinyManifest
 * in the bungie API spec, but are not explicity defined endpoints in the spec.
 *
 * They were last hand-checked for OpenAPI spec version 2.8.0,
 * and have been automatically tested for the latest OpenAPI spec version 2.8.0
 * please let us know if there's any typing issues with them.
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */
import { HttpClient } from '../http';
import {
  DestinyPlaceDefinition,
  DestinyActivityDefinition,
  DestinyActivityTypeDefinition,
  DestinyClassDefinition,
  DestinyGenderDefinition,
  DestinyInventoryBucketDefinition,
  DestinyRaceDefinition,
  DestinyTalentGridDefinition,
  DestinyUnlockDefinition,
  DestinyMaterialRequirementSetDefinition,
  DestinySandboxPerkDefinition,
  DestinyStatGroupDefinition,
  DestinyProgressionMappingDefinition,
  DestinyFactionDefinition,
  DestinyVendorGroupDefinition,
  DestinyRewardSourceDefinition,
  DestinyUnlockValueDefinition,
  DestinyItemCategoryDefinition,
  DestinyDamageTypeDefinition,
  DestinyActivityModeDefinition,
  DestinyActivityGraphDefinition,
  DestinyCollectibleDefinition,
  DestinyStatDefinition,
  DestinyItemTierTypeDefinition,
  DestinyMetricDefinition,
  DestinyPlugSetDefinition,
  DestinyPresentationNodeDefinition,
  DestinyRecordDefinition,
  DestinyDestinationDefinition,
  DestinyEquipmentSlotDefinition,
  DestinyInventoryItemDefinition,
  DestinyLocationDefinition,
  DestinyLoreDefinition,
  DestinyObjectiveDefinition,
  DestinyProgressionDefinition,
  DestinyProgressionLevelRequirementDefinition,
  DestinySeasonDefinition,
  DestinySeasonPassDefinition,
  DestinySocketCategoryDefinition,
  DestinySocketTypeDefinition,
  DestinyTraitDefinition,
  DestinyTraitCategoryDefinition,
  DestinyVendorDefinition,
  DestinyMilestoneDefinition,
  DestinyActivityModifierDefinition,
  DestinyReportReasonCategoryDefinition,
  DestinyArtifactDefinition,
  DestinyBreakerTypeDefinition,
  DestinyChecklistDefinition,
  DestinyEnergyTypeDefinition,
  DestinyManifest,
} from './interfaces';
/**
 * this describes a big object holding several tables of hash-keyed DestinyDefinitions.
 * this is roughly what you get if you decode the gigantic, single-json manifest blob,
 * but also just what we use here to dole out single-table, typed definitions
 */
export interface AllDestinyManifestComponents {
  DestinyPlaceDefinition: {
    [key: number]: DestinyPlaceDefinition;
  };
  DestinyActivityDefinition: {
    [key: number]: DestinyActivityDefinition;
  };
  DestinyActivityTypeDefinition: {
    [key: number]: DestinyActivityTypeDefinition;
  };
  DestinyClassDefinition: {
    [key: number]: DestinyClassDefinition;
  };
  DestinyGenderDefinition: {
    [key: number]: DestinyGenderDefinition;
  };
  DestinyInventoryBucketDefinition: {
    [key: number]: DestinyInventoryBucketDefinition;
  };
  DestinyRaceDefinition: {
    [key: number]: DestinyRaceDefinition;
  };
  DestinyTalentGridDefinition: {
    [key: number]: DestinyTalentGridDefinition;
  };
  DestinyUnlockDefinition: {
    [key: number]: DestinyUnlockDefinition;
  };
  DestinyMaterialRequirementSetDefinition: {
    [key: number]: DestinyMaterialRequirementSetDefinition;
  };
  DestinySandboxPerkDefinition: {
    [key: number]: DestinySandboxPerkDefinition;
  };
  DestinyStatGroupDefinition: {
    [key: number]: DestinyStatGroupDefinition;
  };
  DestinyProgressionMappingDefinition: {
    [key: number]: DestinyProgressionMappingDefinition;
  };
  DestinyFactionDefinition: {
    [key: number]: DestinyFactionDefinition;
  };
  DestinyVendorGroupDefinition: {
    [key: number]: DestinyVendorGroupDefinition;
  };
  DestinyRewardSourceDefinition: {
    [key: number]: DestinyRewardSourceDefinition;
  };
  DestinyUnlockValueDefinition: {
    [key: number]: DestinyUnlockValueDefinition;
  };
  DestinyItemCategoryDefinition: {
    [key: number]: DestinyItemCategoryDefinition;
  };
  DestinyDamageTypeDefinition: {
    [key: number]: DestinyDamageTypeDefinition;
  };
  DestinyActivityModeDefinition: {
    [key: number]: DestinyActivityModeDefinition;
  };
  DestinyActivityGraphDefinition: {
    [key: number]: DestinyActivityGraphDefinition;
  };
  DestinyCollectibleDefinition: {
    [key: number]: DestinyCollectibleDefinition;
  };
  DestinyStatDefinition: {
    [key: number]: DestinyStatDefinition;
  };
  DestinyItemTierTypeDefinition: {
    [key: number]: DestinyItemTierTypeDefinition;
  };
  DestinyMetricDefinition: {
    [key: number]: DestinyMetricDefinition;
  };
  DestinyPlugSetDefinition: {
    [key: number]: DestinyPlugSetDefinition;
  };
  DestinyPresentationNodeDefinition: {
    [key: number]: DestinyPresentationNodeDefinition;
  };
  DestinyRecordDefinition: {
    [key: number]: DestinyRecordDefinition;
  };
  DestinyDestinationDefinition: {
    [key: number]: DestinyDestinationDefinition;
  };
  DestinyEquipmentSlotDefinition: {
    [key: number]: DestinyEquipmentSlotDefinition;
  };
  DestinyInventoryItemDefinition: {
    [key: number]: DestinyInventoryItemDefinition;
  };
  DestinyLocationDefinition: {
    [key: number]: DestinyLocationDefinition;
  };
  DestinyLoreDefinition: {
    [key: number]: DestinyLoreDefinition;
  };
  DestinyObjectiveDefinition: {
    [key: number]: DestinyObjectiveDefinition;
  };
  DestinyProgressionDefinition: {
    [key: number]: DestinyProgressionDefinition;
  };
  DestinyProgressionLevelRequirementDefinition: {
    [key: number]: DestinyProgressionLevelRequirementDefinition;
  };
  DestinySeasonDefinition: {
    [key: number]: DestinySeasonDefinition;
  };
  DestinySeasonPassDefinition: {
    [key: number]: DestinySeasonPassDefinition;
  };
  DestinySocketCategoryDefinition: {
    [key: number]: DestinySocketCategoryDefinition;
  };
  DestinySocketTypeDefinition: {
    [key: number]: DestinySocketTypeDefinition;
  };
  DestinyTraitDefinition: {
    [key: number]: DestinyTraitDefinition;
  };
  DestinyTraitCategoryDefinition: {
    [key: number]: DestinyTraitCategoryDefinition;
  };
  DestinyVendorDefinition: {
    [key: number]: DestinyVendorDefinition;
  };
  DestinyMilestoneDefinition: {
    [key: number]: DestinyMilestoneDefinition;
  };
  DestinyActivityModifierDefinition: {
    [key: number]: DestinyActivityModifierDefinition;
  };
  DestinyReportReasonCategoryDefinition: {
    [key: number]: DestinyReportReasonCategoryDefinition;
  };
  DestinyArtifactDefinition: {
    [key: number]: DestinyArtifactDefinition;
  };
  DestinyBreakerTypeDefinition: {
    [key: number]: DestinyBreakerTypeDefinition;
  };
  DestinyChecklistDefinition: {
    [key: number]: DestinyChecklistDefinition;
  };
  DestinyEnergyTypeDefinition: {
    [key: number]: DestinyEnergyTypeDefinition;
  };
}
export declare type DestinyManifestComponentName = keyof AllDestinyManifestComponents;
export declare type DestinyManifestSlice<K extends Readonly<DestinyManifestComponentName[]>> = Pick<
  AllDestinyManifestComponents,
  K[number]
>;
/**
 * given a STRING table name, returns that TYPE, so that you can write a function like:
 * func<K extends DestinyManifestComponentName>(arg0:K):DestinyDefinitionFrom<K>{...}
 * i.e.
 * func('DestinyInventoryItemDefinition') will return type DestinyInventoryItemDefinition
 */
export declare type DestinyDefinitionFrom<
  K extends DestinyManifestComponentName
> = AllDestinyManifestComponents[K][number];
export interface GetAllDestinyManifestComponentsParams {
  destinyManifest: DestinyManifest;
  language: string;
}
/** fetches the enormous combined JSON manifest file */
export declare function getAllDestinyManifestComponents(
  http: HttpClient,
  params: GetAllDestinyManifestComponentsParams
): Promise<AllDestinyManifestComponents>;
export interface GetDestinyManifestComponentParams<T extends DestinyManifestComponentName> {
  destinyManifest: DestinyManifest;
  tableName: T;
  language: string;
}
/**
 * fetches and returns a single table (Component) from the d2 manifest
 * i.e. DestinyInventoryItemDefinition / DestinyObjectiveDefinition /
 * DestinyVendorDefinition / DestinySeasonDefinition / etc.
 */
export declare function getDestinyManifestComponent<T extends DestinyManifestComponentName>(
  http: HttpClient,
  params: GetDestinyManifestComponentParams<T>
): Promise<AllDestinyManifestComponents[T]>;
export interface GetDestinyManifestSliceParams<T extends DestinyManifestComponentName[]> {
  destinyManifest: DestinyManifest;
  tableNames: T;
  language: string;
}
/** bundles multiple single tables into a properly typed object with table keys */
export declare function getDestinyManifestSlice<T extends DestinyManifestComponentName[]>(
  http: HttpClient,
  params: GetDestinyManifestSliceParams<T>
): Promise<DestinyManifestSlice<T>>;
