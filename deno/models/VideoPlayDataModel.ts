/**
 * Stream API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@bunny.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { VideoPlayDataModelVideo } from '../models/VideoPlayDataModelVideo.ts';
import { HttpFile } from '../http/http.ts';

export class VideoPlayDataModel {
    'video'?: VideoPlayDataModelVideo | null;
    'captionsPath'?: string | null;
    'seekPath'?: string | null;
    'thumbnailUrl'?: string | null;
    'fallbackUrl'?: string | null;
    'videoPlaylistUrl'?: string | null;
    'originalUrl'?: string | null;
    'previewUrl'?: string | null;
    'controls'?: string | null;
    'enableDRM'?: boolean;
    'drmVersion'?: number;
    'playerKeyColor'?: string | null;
    'vastTagUrl'?: string | null;
    'captionsFontSize'?: number;
    'captionsFontColor'?: string | null;
    'captionsBackground'?: string | null;
    'uiLanguage'?: string | null;
    'allowEarlyPlay'?: boolean;
    'tokenAuthEnabled'?: boolean;
    'enableMP4Fallback'?: boolean;
    'showHeatmap'?: boolean;
    'fontFamily'?: string | null;
    'playbackSpeeds'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "video",
            "baseName": "video",
            "type": "VideoPlayDataModelVideo",
            "format": ""
        },
        {
            "name": "captionsPath",
            "baseName": "captionsPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "seekPath",
            "baseName": "seekPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailUrl",
            "baseName": "thumbnailUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "fallbackUrl",
            "baseName": "fallbackUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoPlaylistUrl",
            "baseName": "videoPlaylistUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalUrl",
            "baseName": "originalUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "previewUrl",
            "baseName": "previewUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "controls",
            "baseName": "controls",
            "type": "string",
            "format": ""
        },
        {
            "name": "enableDRM",
            "baseName": "enableDRM",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "drmVersion",
            "baseName": "drmVersion",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "playerKeyColor",
            "baseName": "playerKeyColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "vastTagUrl",
            "baseName": "vastTagUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "captionsFontSize",
            "baseName": "captionsFontSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "captionsFontColor",
            "baseName": "captionsFontColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "captionsBackground",
            "baseName": "captionsBackground",
            "type": "string",
            "format": ""
        },
        {
            "name": "uiLanguage",
            "baseName": "uiLanguage",
            "type": "string",
            "format": ""
        },
        {
            "name": "allowEarlyPlay",
            "baseName": "allowEarlyPlay",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tokenAuthEnabled",
            "baseName": "tokenAuthEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enableMP4Fallback",
            "baseName": "enableMP4Fallback",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "showHeatmap",
            "baseName": "showHeatmap",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fontFamily",
            "baseName": "fontFamily",
            "type": "string",
            "format": ""
        },
        {
            "name": "playbackSpeeds",
            "baseName": "playbackSpeeds",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VideoPlayDataModel.attributeTypeMap;
    }

    public constructor() {
    }
}

