// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { VideoOEmbedModel } from '../models/VideoOEmbedModel.ts';

/**
 * no description
 */
export class OEmbedApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param url 
     * @param maxWidth 
     * @param maxHeight 
     * @param token 
     * @param expires 
     */
    public async oEmbedGetOEmbed(url?: string, maxWidth?: number, maxHeight?: number, token?: string, expires?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/OEmbed';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "string", ""));
        }

        // Query Params
        if (maxWidth !== undefined) {
            requestContext.setQueryParam("maxWidth", ObjectSerializer.serialize(maxWidth, "number", "int32"));
        }

        // Query Params
        if (maxHeight !== undefined) {
            requestContext.setQueryParam("maxHeight", ObjectSerializer.serialize(maxHeight, "number", "int32"));
        }

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (expires !== undefined) {
            requestContext.setQueryParam("expires", ObjectSerializer.serialize(expires, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OEmbedApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to oEmbedGetOEmbed
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async oEmbedGetOEmbedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoOEmbedModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoOEmbedModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoOEmbedModel", ""
            ) as VideoOEmbedModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VideoOEmbedModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoOEmbedModel", ""
            ) as VideoOEmbedModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
