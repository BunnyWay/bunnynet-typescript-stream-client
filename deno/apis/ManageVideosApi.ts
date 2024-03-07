// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { PaginationListOfVideoModel } from '../models/PaginationListOfVideoModel.ts';
import { StatusModel } from '../models/StatusModel.ts';
import { VideoAddCaptionRequest } from '../models/VideoAddCaptionRequest.ts';
import { VideoCreateVideoRequest } from '../models/VideoCreateVideoRequest.ts';
import { VideoFetchNewVideoRequest } from '../models/VideoFetchNewVideoRequest.ts';
import { VideoHeatmapModel } from '../models/VideoHeatmapModel.ts';
import { VideoModel } from '../models/VideoModel.ts';
import { VideoPlayDataModel } from '../models/VideoPlayDataModel.ts';
import { VideoStatisticsModel } from '../models/VideoStatisticsModel.ts';
import { VideoUpdateVideoRequest } from '../models/VideoUpdateVideoRequest.ts';

/**
 * no description
 */
export class ManageVideosApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     * @param videoAddCaptionRequest 
     */
    public async videoAddCaption(libraryId: number, videoId: string, srclang: string, videoAddCaptionRequest: VideoAddCaptionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoAddCaption", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoAddCaption", "videoId");
        }


        // verify required parameter 'srclang' is not null or undefined
        if (srclang === null || srclang === undefined) {
            throw new RequiredError("ManageVideosApi", "videoAddCaption", "srclang");
        }


        // verify required parameter 'videoAddCaptionRequest' is not null or undefined
        if (videoAddCaptionRequest === null || videoAddCaptionRequest === undefined) {
            throw new RequiredError("ManageVideosApi", "videoAddCaption", "videoAddCaptionRequest");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}/captions/{srclang}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'srclang' + '}', encodeURIComponent(String(srclang)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(videoAddCaptionRequest, "VideoAddCaptionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create Video
     * @param libraryId 
     * @param videoCreateVideoRequest 
     */
    public async videoCreateVideo(libraryId: number, videoCreateVideoRequest: VideoCreateVideoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoCreateVideo", "libraryId");
        }


        // verify required parameter 'videoCreateVideoRequest' is not null or undefined
        if (videoCreateVideoRequest === null || videoCreateVideoRequest === undefined) {
            throw new RequiredError("ManageVideosApi", "videoCreateVideo", "videoCreateVideoRequest");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/videos'
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
            ObjectSerializer.serialize(videoCreateVideoRequest, "VideoCreateVideoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     */
    public async videoDeleteCaption(libraryId: number, videoId: string, srclang: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoDeleteCaption", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoDeleteCaption", "videoId");
        }


        // verify required parameter 'srclang' is not null or undefined
        if (srclang === null || srclang === undefined) {
            throw new RequiredError("ManageVideosApi", "videoDeleteCaption", "srclang");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}/captions/{srclang}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'srclang' + '}', encodeURIComponent(String(srclang)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete Video
     * @param libraryId 
     * @param videoId 
     */
    public async videoDeleteVideo(libraryId: number, videoId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoDeleteVideo", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoDeleteVideo", "videoId");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Fetch Video
     * @param libraryId 
     * @param videoFetchNewVideoRequest 
     * @param collectionId 
     * @param thumbnailTime (Optional) Video time in ms to extract the main video thumbnail.
     */
    public async videoFetchNewVideo(libraryId: number, videoFetchNewVideoRequest: VideoFetchNewVideoRequest, collectionId?: string, thumbnailTime?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoFetchNewVideo", "libraryId");
        }


        // verify required parameter 'videoFetchNewVideoRequest' is not null or undefined
        if (videoFetchNewVideoRequest === null || videoFetchNewVideoRequest === undefined) {
            throw new RequiredError("ManageVideosApi", "videoFetchNewVideo", "videoFetchNewVideoRequest");
        }




        // Path Params
        const localVarPath = '/library/{libraryId}/videos/fetch'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (collectionId !== undefined) {
            requestContext.setQueryParam("collectionId", ObjectSerializer.serialize(collectionId, "string", ""));
        }

        // Query Params
        if (thumbnailTime !== undefined) {
            requestContext.setQueryParam("thumbnailTime", ObjectSerializer.serialize(thumbnailTime, "number", "int32"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(videoFetchNewVideoRequest, "VideoFetchNewVideoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Video
     * @param libraryId 
     * @param videoId 
     */
    public async videoGetVideo(libraryId: number, videoId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoGetVideo", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoGetVideo", "videoId");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Video Heatmap
     * @param libraryId 
     * @param videoId 
     */
    public async videoGetVideoHeatmap(libraryId: number, videoId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoGetVideoHeatmap", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoGetVideoHeatmap", "videoId");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}/heatmap'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Video play data
     * @param libraryId 
     * @param videoId 
     * @param token 
     * @param expires 
     */
    public async videoGetVideoPlayData(libraryId: number, videoId: string, token?: string, expires?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoGetVideoPlayData", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoGetVideoPlayData", "videoId");
        }




        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}/play'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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

    /**
     * Get Video Statistics
     * @param libraryId 
     * @param dateFrom (Optional) The start date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param dateTo (Optional) The end date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param hourly (Optional) If true, the statistics data will be returned in hourly groupping.
     * @param videoGuid (Optional) The GUID of the video for which the statistics will be returned
     */
    public async videoGetVideoStatistics(libraryId: number, dateFrom?: Date, dateTo?: Date, hourly?: boolean, videoGuid?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoGetVideoStatistics", "libraryId");
        }






        // Path Params
        const localVarPath = '/library/{libraryId}/statistics'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (dateFrom !== undefined) {
            requestContext.setQueryParam("dateFrom", ObjectSerializer.serialize(dateFrom, "Date", "date-time"));
        }

        // Query Params
        if (dateTo !== undefined) {
            requestContext.setQueryParam("dateTo", ObjectSerializer.serialize(dateTo, "Date", "date-time"));
        }

        // Query Params
        if (hourly !== undefined) {
            requestContext.setQueryParam("hourly", ObjectSerializer.serialize(hourly, "boolean", ""));
        }

        // Query Params
        if (videoGuid !== undefined) {
            requestContext.setQueryParam("videoGuid", ObjectSerializer.serialize(videoGuid, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List Videos
     * @param libraryId 
     * @param page 
     * @param itemsPerPage 
     * @param search 
     * @param collection 
     * @param orderBy 
     */
    public async videoList(libraryId: number, page?: number, itemsPerPage?: number, search?: string, collection?: string, orderBy?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoList", "libraryId");
        }







        // Path Params
        const localVarPath = '/library/{libraryId}/videos'
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
        if (collection !== undefined) {
            requestContext.setQueryParam("collection", ObjectSerializer.serialize(collection, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("orderBy", ObjectSerializer.serialize(orderBy, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Reencode Video
     * @param libraryId 
     * @param videoId 
     */
    public async videoReencodeVideo(libraryId: number, videoId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoReencodeVideo", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoReencodeVideo", "videoId");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}/reencode'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Repackage Video
     * @param libraryId 
     * @param videoId 
     * @param keepOriginalFiles Marks whether previous file versions should be kept in storage, allows for faster repackage later on. Default is true.
     */
    public async videoRepackage(libraryId: number, videoId: string, keepOriginalFiles?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoRepackage", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoRepackage", "videoId");
        }



        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}/repackage'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (keepOriginalFiles !== undefined) {
            requestContext.setQueryParam("keepOriginalFiles", ObjectSerializer.serialize(keepOriginalFiles, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Set Thumbnail
     * @param libraryId 
     * @param videoId 
     * @param thumbnailUrl 
     */
    public async videoSetThumbnail(libraryId: number, videoId: string, thumbnailUrl?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoSetThumbnail", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoSetThumbnail", "videoId");
        }



        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}/thumbnail'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (thumbnailUrl !== undefined) {
            requestContext.setQueryParam("thumbnailUrl", ObjectSerializer.serialize(thumbnailUrl, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Transcribe video
     * @param libraryId 
     * @param videoId 
     * @param language 
     * @param force 
     */
    public async videoTranscribeVideo(libraryId: number, videoId: string, language?: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoTranscribeVideo", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoTranscribeVideo", "videoId");
        }




        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}/transcribe'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (language !== undefined) {
            requestContext.setQueryParam("language", ObjectSerializer.serialize(language, "string", ""));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update Video
     * @param libraryId 
     * @param videoId 
     * @param videoUpdateVideoRequest 
     */
    public async videoUpdateVideo(libraryId: number, videoId: string, videoUpdateVideoRequest: VideoUpdateVideoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoUpdateVideo", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoUpdateVideo", "videoId");
        }


        // verify required parameter 'videoUpdateVideoRequest' is not null or undefined
        if (videoUpdateVideoRequest === null || videoUpdateVideoRequest === undefined) {
            throw new RequiredError("ManageVideosApi", "videoUpdateVideo", "videoUpdateVideoRequest");
        }


        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(videoUpdateVideoRequest, "VideoUpdateVideoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Upload Video
     * @param libraryId 
     * @param videoId 
     * @param enabledResolutions 
     */
    public async videoUploadVideo(libraryId: number, videoId: string, enabledResolutions?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoUploadVideo", "libraryId");
        }


        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new RequiredError("ManageVideosApi", "videoUploadVideo", "videoId");
        }



        // Path Params
        const localVarPath = '/library/{libraryId}/videos/{videoId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (enabledResolutions !== undefined) {
            requestContext.setQueryParam("enabledResolutions", ObjectSerializer.serialize(enabledResolutions, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ManageVideosApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoAddCaption
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoAddCaptionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Failed uploading the captions", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to videoCreateVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoCreateVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoModel", ""
            ) as VideoModel;
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
            const body: VideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoModel", ""
            ) as VideoModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoDeleteCaption
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoDeleteCaptionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Failed deleting the captions", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to videoDeleteVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoDeleteVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to videoFetchNewVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoFetchNewVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Failed fetching the video", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to videoGetVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoGetVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoModel", ""
            ) as VideoModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoModel", ""
            ) as VideoModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoGetVideoHeatmap
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoGetVideoHeatmapWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoHeatmapModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoHeatmapModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoHeatmapModel", ""
            ) as VideoHeatmapModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VideoHeatmapModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoHeatmapModel", ""
            ) as VideoHeatmapModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoGetVideoPlayData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoGetVideoPlayDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoPlayDataModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoPlayDataModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoPlayDataModel", ""
            ) as VideoPlayDataModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VideoPlayDataModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoPlayDataModel", ""
            ) as VideoPlayDataModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoGetVideoStatistics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoGetVideoStatisticsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoStatisticsModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoStatisticsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoStatisticsModel", ""
            ) as VideoStatisticsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VideoStatisticsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoStatisticsModel", ""
            ) as VideoStatisticsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaginationListOfVideoModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginationListOfVideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginationListOfVideoModel", ""
            ) as PaginationListOfVideoModel;
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
            const body: PaginationListOfVideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginationListOfVideoModel", ""
            ) as PaginationListOfVideoModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoReencodeVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoReencodeVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoModel", ""
            ) as VideoModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Original file is missing", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoModel", ""
            ) as VideoModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoRepackage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoRepackageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoModel", ""
            ) as VideoModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Enterprise DRM is disabled for the library, repackaging not available", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VideoModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoModel", ""
            ) as VideoModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to videoSetThumbnail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoSetThumbnailWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to videoTranscribeVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoTranscribeVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            throw new ApiException<StatusModel>(response.httpStatusCode, "Invalid request for transcription queue", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            throw new ApiException<StatusModel>(response.httpStatusCode, "The request authorization failed", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            throw new ApiException<StatusModel>(response.httpStatusCode, "The requested video was not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            throw new ApiException<StatusModel>(response.httpStatusCode, "Internal Server Error", body, response.headers);
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
     * @params response Response returned by the server for a request to videoUpdateVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoUpdateVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to videoUploadVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async videoUploadVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatusModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatusModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatusModel", ""
            ) as StatusModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was already uploaded", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request authorization failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested video was not found", undefined, response.headers);
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
