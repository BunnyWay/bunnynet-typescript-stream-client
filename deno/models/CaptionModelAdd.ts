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

import { HttpFile } from '../http/http.ts';

export class CaptionModelAdd {
    /**
    * The unique srclang shortcode for the caption
    */
    'srclang'?: string | null;
    /**
    * The text description label for the caption
    */
    'label'?: string | null;
    /**
    * Base64 encoded captions file
    */
    'captionsFile'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "srclang",
            "baseName": "srclang",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "captionsFile",
            "baseName": "captionsFile",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaptionModelAdd.attributeTypeMap;
    }

    public constructor() {
    }
}

