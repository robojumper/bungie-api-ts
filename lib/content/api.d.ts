/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */
import { HttpClient } from '../http';
import { ContentItemPublicContract, ContentTypeDescription, SearchResultOfContentItemPublicContract } from './interfaces';
import { ServerResponse } from '../common';
export interface GetContentTypeParams {
    type: string;
}
/** Gets an object describing a particular variant of content. */
export declare function getContentType(http: HttpClient, params: GetContentTypeParams): Promise<ServerResponse<ContentTypeDescription>>;
export interface GetContentByIdParams {
    /** false */
    head?: boolean;
    id: string;
    locale: string;
}
/** Returns a content item referenced by id */
export declare function getContentById(http: HttpClient, params: GetContentByIdParams): Promise<ServerResponse<ContentItemPublicContract>>;
export interface GetContentByTagAndTypeParams {
    /** Not used. */
    head?: boolean;
    locale: string;
    tag: string;
    type: string;
}
/** Returns the newest item that matches a given tag and Content Type. */
export declare function getContentByTagAndType(http: HttpClient, params: GetContentByTagAndTypeParams): Promise<ServerResponse<ContentItemPublicContract>>;
export interface SearchContentWithTextParams {
    /** Content type tag: Help, News, etc. Supply multiple ctypes separated by space. */
    ctype?: string;
    /** Page number for the search results, starting with page 1. */
    currentpage?: number;
    /** Not used. */
    head?: boolean;
    locale: string;
    /** Word or phrase for the search. */
    searchtext?: string;
    /** For analytics, hint at the part of the app that triggered the search. Optional. */
    source?: string;
    /** Tag used on the content to be searched. */
    tag?: string;
}
/**
 * Gets content based on querystring information passed in. Provides basic search
 * and text search capabilities.
 */
export declare function searchContentWithText(http: HttpClient, params: SearchContentWithTextParams): Promise<ServerResponse<SearchResultOfContentItemPublicContract>>;
export interface SearchContentByTagAndTypeParams {
    /** Page number for the search results starting with page 1. */
    currentpage?: number;
    /** Not used. */
    head?: boolean;
    /** Not used. */
    itemsperpage?: number;
    locale: string;
    tag: string;
    type: string;
}
/** Searches for Content Items that match the given Tag and Content Type. */
export declare function searchContentByTagAndType(http: HttpClient, params: SearchContentByTagAndTypeParams): Promise<ServerResponse<SearchResultOfContentItemPublicContract>>;
export interface SearchHelpArticlesParams {
    searchtext: string;
    size: string;
}
/** Search for Help Articles. */
export declare function searchHelpArticles(http: HttpClient, params: SearchHelpArticlesParams): Promise<ServerResponse<object>>;
