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

/**
* 0 = Undefined 1 = StreamLengthsDifference 2 = TranscodingWarnings 3 = IncompatibleResolution 4 = InvalidFramerate 5 = VideoExceededMaxDuration 6 = AudioExceededMaxDuration 7 = OriginalCorrupted
*/
export enum IssueCodes {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7
}
