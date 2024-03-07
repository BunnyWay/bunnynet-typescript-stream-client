// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CollectionModel } from '../models/CollectionModel.ts';
import { CollectionUpdateCollectionRequest } from '../models/CollectionUpdateCollectionRequest.ts';
import { PaginationListOfCollectionModel } from '../models/PaginationListOfCollectionModel.ts';
import { StatusModel } from '../models/StatusModel.ts';

/**
 * no description
 */
export class ManageCollectionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Collection
     * @param libraryId 
     * @param collectionUpdateCollectionRequest 
     */
    public async collectionCreateCollection(libraryId: number, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionCreateCollection", "libraryId");
        }


        // verify required parameter 'collectionUpdateCollectionRequest' is not null or undefined
        if (collectionUpdateCollectionRequest === null || collectionUpdateCollectionRequest === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionCreateCollection", "collectionUpdateCollectionRequest");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/collections'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(collectionUpdateCollectionRequest, "CollectionUpdateCollectionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AccessKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete Collection
     * @param libraryId 
     * @param collectionId 
     */
    public async collectionDeleteCollection(libraryId: number, collectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionDeleteCollection", "libraryId");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionDeleteCollection", "collectionId");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/collections/{collectionId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'collectionId' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AccessKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Collection
     * @param libraryId 
     * @param collectionId 
     * @param includeThumbnails 
     */
    public async collectionGetCollection(libraryId: number, collectionId: string, includeThumbnails?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionGetCollection", "libraryId");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionGetCollection", "collectionId");
        }



        // Path Params
        const localVarPath = '/library/{libraryId}/collections/{collectionId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'collectionId' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeThumbnails !== undefined) {
            requestContext.setQueryParam("includeThumbnails", ObjectSerializer.serialize(includeThumbnails, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AccessKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Collection List
     * @param libraryId 
     * @param page 
     * @param itemsPerPage 
     * @param search 
     * @param orderBy 
     * @param includeThumbnails 
     */
    public async collectionList(libraryId: number, page?: number, itemsPerPage?: number, search?: string, orderBy?: string, includeThumbnails?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionList", "libraryId");
        }







        // Path Params
        const localVarPath = '/library/{libraryId}/collections'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", "int32"));
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("orderBy", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (includeThumbnails !== undefined) {
            requestContext.setQueryParam("includeThumbnails", ObjectSerializer.serialize(includeThumbnails, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AccessKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update Collection
     * @param libraryId 
     * @param collectionId 
     * @param collectionUpdateCollectionRequest 
     */
    public async collectionUpdateCollection(libraryId: number, collectionId: string, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionUpdateCollection", "libraryId");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionUpdateCollection", "collectionId");
        }


        // verify required parameter 'collectionUpdateCollectionRequest' is not null or undefined
        if (collectionUpdateCollectionRequest === null || collectionUpdateCollectionRequest === undefined) {
            throw new RequiredError("ManageCollectionsApi", "collectionUpdateCollection", "collectionUpdateCollectionRequest");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/collections/{collectionId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'collectionId' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(collectionUpdateCollectionRequest, "CollectionUpdateCollectionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AccessKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ManageCollectionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to collectionCreateCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async collectionCreateCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionModel", ""
            ) as CollectionModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionModel", ""
            ) as CollectionModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to collectionDeleteCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async collectionDeleteCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested collection was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to collectionGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async collectionGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionModel", ""
            ) as CollectionModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested collection was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionModel", ""
            ) as CollectionModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to collectionList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async collectionListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaginationListOfCollectionModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginationListOfCollectionModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginationListOfCollectionModel", ""
            ) as PaginationListOfCollectionModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PaginationListOfCollectionModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginationListOfCollectionModel", ""
            ) as PaginationListOfCollectionModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to collectionUpdateCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async collectionUpdateCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested collection was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
