import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { CaptionModel } from '../models/CaptionModel.ts';
import { CaptionModelAdd } from '../models/CaptionModelAdd.ts';
import { ChapterModel } from '../models/ChapterModel.ts';
import { CollectionModel } from '../models/CollectionModel.ts';
import { CollectionUpdateCollectionRequest } from '../models/CollectionUpdateCollectionRequest.ts';
import { CreateVideoModel } from '../models/CreateVideoModel.ts';
import { FetchVideoRequest } from '../models/FetchVideoRequest.ts';
import { IssueCodes } from '../models/IssueCodes.ts';
import { MetaTagModel } from '../models/MetaTagModel.ts';
import { MomentModel } from '../models/MomentModel.ts';
import { PaginationListOfCollectionModel } from '../models/PaginationListOfCollectionModel.ts';
import { PaginationListOfVideoModel } from '../models/PaginationListOfVideoModel.ts';
import { Severity } from '../models/Severity.ts';
import { StatusModel } from '../models/StatusModel.ts';
import { TranscodingMessageModel } from '../models/TranscodingMessageModel.ts';
import { UpdateCollectionModel } from '../models/UpdateCollectionModel.ts';
import { UpdateVideoModel } from '../models/UpdateVideoModel.ts';
import { VideoAddCaptionRequest } from '../models/VideoAddCaptionRequest.ts';
import { VideoCreateVideoRequest } from '../models/VideoCreateVideoRequest.ts';
import { VideoFetchNewVideoRequest } from '../models/VideoFetchNewVideoRequest.ts';
import { VideoHeatmapModel } from '../models/VideoHeatmapModel.ts';
import { VideoModel } from '../models/VideoModel.ts';
import { VideoModelStatus } from '../models/VideoModelStatus.ts';
import { VideoOEmbedModel } from '../models/VideoOEmbedModel.ts';
import { VideoPlayDataModel } from '../models/VideoPlayDataModel.ts';
import { VideoPlayDataModelVideo } from '../models/VideoPlayDataModelVideo.ts';
import { VideoStatisticsModel } from '../models/VideoStatisticsModel.ts';
import { VideoUpdateVideoRequest } from '../models/VideoUpdateVideoRequest.ts';

import { ManageCollectionsApiRequestFactory, ManageCollectionsApiResponseProcessor} from "../apis/ManageCollectionsApi.ts";
export class ObservableManageCollectionsApi {
    private requestFactory: ManageCollectionsApiRequestFactory;
    private responseProcessor: ManageCollectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ManageCollectionsApiRequestFactory,
        responseProcessor?: ManageCollectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ManageCollectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ManageCollectionsApiResponseProcessor();
    }

    /**
     * Create Collection
     * @param libraryId 
     * @param collectionUpdateCollectionRequest 
     */
    public collectionCreateCollectionWithHttpInfo(libraryId: number, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Observable<HttpInfo<CollectionModel>> {
        const requestContextPromise = this.requestFactory.collectionCreateCollection(libraryId, collectionUpdateCollectionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionCreateCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Collection
     * @param libraryId 
     * @param collectionUpdateCollectionRequest 
     */
    public collectionCreateCollection(libraryId: number, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Observable<CollectionModel> {
        return this.collectionCreateCollectionWithHttpInfo(libraryId, collectionUpdateCollectionRequest, _options).pipe(map((apiResponse: HttpInfo<CollectionModel>) => apiResponse.data));
    }

    /**
     * Delete Collection
     * @param libraryId 
     * @param collectionId 
     */
    public collectionDeleteCollectionWithHttpInfo(libraryId: number, collectionId: string, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.collectionDeleteCollection(libraryId, collectionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionDeleteCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Collection
     * @param libraryId 
     * @param collectionId 
     */
    public collectionDeleteCollection(libraryId: number, collectionId: string, _options?: Configuration): Observable<StatusModel> {
        return this.collectionDeleteCollectionWithHttpInfo(libraryId, collectionId, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

    /**
     * Get Collection
     * @param libraryId 
     * @param collectionId 
     * @param includeThumbnails 
     */
    public collectionGetCollectionWithHttpInfo(libraryId: number, collectionId: string, includeThumbnails?: boolean, _options?: Configuration): Observable<HttpInfo<CollectionModel>> {
        const requestContextPromise = this.requestFactory.collectionGetCollection(libraryId, collectionId, includeThumbnails, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionGetCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Collection
     * @param libraryId 
     * @param collectionId 
     * @param includeThumbnails 
     */
    public collectionGetCollection(libraryId: number, collectionId: string, includeThumbnails?: boolean, _options?: Configuration): Observable<CollectionModel> {
        return this.collectionGetCollectionWithHttpInfo(libraryId, collectionId, includeThumbnails, _options).pipe(map((apiResponse: HttpInfo<CollectionModel>) => apiResponse.data));
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
    public collectionListWithHttpInfo(libraryId: number, page?: number, itemsPerPage?: number, search?: string, orderBy?: string, includeThumbnails?: boolean, _options?: Configuration): Observable<HttpInfo<PaginationListOfCollectionModel>> {
        const requestContextPromise = this.requestFactory.collectionList(libraryId, page, itemsPerPage, search, orderBy, includeThumbnails, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionListWithHttpInfo(rsp)));
            }));
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
    public collectionList(libraryId: number, page?: number, itemsPerPage?: number, search?: string, orderBy?: string, includeThumbnails?: boolean, _options?: Configuration): Observable<PaginationListOfCollectionModel> {
        return this.collectionListWithHttpInfo(libraryId, page, itemsPerPage, search, orderBy, includeThumbnails, _options).pipe(map((apiResponse: HttpInfo<PaginationListOfCollectionModel>) => apiResponse.data));
    }

    /**
     * Update Collection
     * @param libraryId 
     * @param collectionId 
     * @param collectionUpdateCollectionRequest 
     */
    public collectionUpdateCollectionWithHttpInfo(libraryId: number, collectionId: string, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.collectionUpdateCollection(libraryId, collectionId, collectionUpdateCollectionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionUpdateCollectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Collection
     * @param libraryId 
     * @param collectionId 
     * @param collectionUpdateCollectionRequest 
     */
    public collectionUpdateCollection(libraryId: number, collectionId: string, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Observable<StatusModel> {
        return this.collectionUpdateCollectionWithHttpInfo(libraryId, collectionId, collectionUpdateCollectionRequest, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

}

import { ManageVideosApiRequestFactory, ManageVideosApiResponseProcessor} from "../apis/ManageVideosApi.ts";
export class ObservableManageVideosApi {
    private requestFactory: ManageVideosApiRequestFactory;
    private responseProcessor: ManageVideosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ManageVideosApiRequestFactory,
        responseProcessor?: ManageVideosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ManageVideosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ManageVideosApiResponseProcessor();
    }

    /**
     * Add Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     * @param videoAddCaptionRequest 
     */
    public videoAddCaptionWithHttpInfo(libraryId: number, videoId: string, srclang: string, videoAddCaptionRequest: VideoAddCaptionRequest, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.videoAddCaption(libraryId, videoId, srclang, videoAddCaptionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoAddCaptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     * @param videoAddCaptionRequest 
     */
    public videoAddCaption(libraryId: number, videoId: string, srclang: string, videoAddCaptionRequest: VideoAddCaptionRequest, _options?: Configuration): Observable<StatusModel> {
        return this.videoAddCaptionWithHttpInfo(libraryId, videoId, srclang, videoAddCaptionRequest, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

    /**
     * Create Video
     * @param libraryId 
     * @param videoCreateVideoRequest 
     */
    public videoCreateVideoWithHttpInfo(libraryId: number, videoCreateVideoRequest: VideoCreateVideoRequest, _options?: Configuration): Observable<HttpInfo<VideoModel>> {
        const requestContextPromise = this.requestFactory.videoCreateVideo(libraryId, videoCreateVideoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoCreateVideoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Video
     * @param libraryId 
     * @param videoCreateVideoRequest 
     */
    public videoCreateVideo(libraryId: number, videoCreateVideoRequest: VideoCreateVideoRequest, _options?: Configuration): Observable<VideoModel> {
        return this.videoCreateVideoWithHttpInfo(libraryId, videoCreateVideoRequest, _options).pipe(map((apiResponse: HttpInfo<VideoModel>) => apiResponse.data));
    }

    /**
     * Delete Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     */
    public videoDeleteCaptionWithHttpInfo(libraryId: number, videoId: string, srclang: string, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.videoDeleteCaption(libraryId, videoId, srclang, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoDeleteCaptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     */
    public videoDeleteCaption(libraryId: number, videoId: string, srclang: string, _options?: Configuration): Observable<StatusModel> {
        return this.videoDeleteCaptionWithHttpInfo(libraryId, videoId, srclang, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

    /**
     * Delete Video
     * @param libraryId 
     * @param videoId 
     */
    public videoDeleteVideoWithHttpInfo(libraryId: number, videoId: string, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.videoDeleteVideo(libraryId, videoId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoDeleteVideoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Video
     * @param libraryId 
     * @param videoId 
     */
    public videoDeleteVideo(libraryId: number, videoId: string, _options?: Configuration): Observable<StatusModel> {
        return this.videoDeleteVideoWithHttpInfo(libraryId, videoId, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

    /**
     * Fetch Video
     * @param libraryId 
     * @param videoFetchNewVideoRequest 
     * @param collectionId 
     * @param thumbnailTime (Optional) Video time in ms to extract the main video thumbnail.
     */
    public videoFetchNewVideoWithHttpInfo(libraryId: number, videoFetchNewVideoRequest: VideoFetchNewVideoRequest, collectionId?: string, thumbnailTime?: number, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.videoFetchNewVideo(libraryId, videoFetchNewVideoRequest, collectionId, thumbnailTime, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoFetchNewVideoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch Video
     * @param libraryId 
     * @param videoFetchNewVideoRequest 
     * @param collectionId 
     * @param thumbnailTime (Optional) Video time in ms to extract the main video thumbnail.
     */
    public videoFetchNewVideo(libraryId: number, videoFetchNewVideoRequest: VideoFetchNewVideoRequest, collectionId?: string, thumbnailTime?: number, _options?: Configuration): Observable<StatusModel> {
        return this.videoFetchNewVideoWithHttpInfo(libraryId, videoFetchNewVideoRequest, collectionId, thumbnailTime, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

    /**
     * Get Video
     * @param libraryId 
     * @param videoId 
     */
    public videoGetVideoWithHttpInfo(libraryId: number, videoId: string, _options?: Configuration): Observable<HttpInfo<VideoModel>> {
        const requestContextPromise = this.requestFactory.videoGetVideo(libraryId, videoId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoGetVideoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Video
     * @param libraryId 
     * @param videoId 
     */
    public videoGetVideo(libraryId: number, videoId: string, _options?: Configuration): Observable<VideoModel> {
        return this.videoGetVideoWithHttpInfo(libraryId, videoId, _options).pipe(map((apiResponse: HttpInfo<VideoModel>) => apiResponse.data));
    }

    /**
     * Get Video Heatmap
     * @param libraryId 
     * @param videoId 
     */
    public videoGetVideoHeatmapWithHttpInfo(libraryId: number, videoId: string, _options?: Configuration): Observable<HttpInfo<VideoHeatmapModel>> {
        const requestContextPromise = this.requestFactory.videoGetVideoHeatmap(libraryId, videoId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoGetVideoHeatmapWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Video Heatmap
     * @param libraryId 
     * @param videoId 
     */
    public videoGetVideoHeatmap(libraryId: number, videoId: string, _options?: Configuration): Observable<VideoHeatmapModel> {
        return this.videoGetVideoHeatmapWithHttpInfo(libraryId, videoId, _options).pipe(map((apiResponse: HttpInfo<VideoHeatmapModel>) => apiResponse.data));
    }

    /**
     * Get Video play data
     * @param libraryId 
     * @param videoId 
     * @param token 
     * @param expires 
     */
    public videoGetVideoPlayDataWithHttpInfo(libraryId: number, videoId: string, token?: string, expires?: number, _options?: Configuration): Observable<HttpInfo<VideoPlayDataModel>> {
        const requestContextPromise = this.requestFactory.videoGetVideoPlayData(libraryId, videoId, token, expires, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoGetVideoPlayDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Video play data
     * @param libraryId 
     * @param videoId 
     * @param token 
     * @param expires 
     */
    public videoGetVideoPlayData(libraryId: number, videoId: string, token?: string, expires?: number, _options?: Configuration): Observable<VideoPlayDataModel> {
        return this.videoGetVideoPlayDataWithHttpInfo(libraryId, videoId, token, expires, _options).pipe(map((apiResponse: HttpInfo<VideoPlayDataModel>) => apiResponse.data));
    }

    /**
     * Get Video Statistics
     * @param libraryId 
     * @param dateFrom (Optional) The start date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param dateTo (Optional) The end date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param hourly (Optional) If true, the statistics data will be returned in hourly groupping.
     * @param videoGuid (Optional) The GUID of the video for which the statistics will be returned
     */
    public videoGetVideoStatisticsWithHttpInfo(libraryId: number, dateFrom?: Date, dateTo?: Date, hourly?: boolean, videoGuid?: string, _options?: Configuration): Observable<HttpInfo<VideoStatisticsModel>> {
        const requestContextPromise = this.requestFactory.videoGetVideoStatistics(libraryId, dateFrom, dateTo, hourly, videoGuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoGetVideoStatisticsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Video Statistics
     * @param libraryId 
     * @param dateFrom (Optional) The start date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param dateTo (Optional) The end date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param hourly (Optional) If true, the statistics data will be returned in hourly groupping.
     * @param videoGuid (Optional) The GUID of the video for which the statistics will be returned
     */
    public videoGetVideoStatistics(libraryId: number, dateFrom?: Date, dateTo?: Date, hourly?: boolean, videoGuid?: string, _options?: Configuration): Observable<VideoStatisticsModel> {
        return this.videoGetVideoStatisticsWithHttpInfo(libraryId, dateFrom, dateTo, hourly, videoGuid, _options).pipe(map((apiResponse: HttpInfo<VideoStatisticsModel>) => apiResponse.data));
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
    public videoListWithHttpInfo(libraryId: number, page?: number, itemsPerPage?: number, search?: string, collection?: string, orderBy?: string, _options?: Configuration): Observable<HttpInfo<PaginationListOfVideoModel>> {
        const requestContextPromise = this.requestFactory.videoList(libraryId, page, itemsPerPage, search, collection, orderBy, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoListWithHttpInfo(rsp)));
            }));
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
    public videoList(libraryId: number, page?: number, itemsPerPage?: number, search?: string, collection?: string, orderBy?: string, _options?: Configuration): Observable<PaginationListOfVideoModel> {
        return this.videoListWithHttpInfo(libraryId, page, itemsPerPage, search, collection, orderBy, _options).pipe(map((apiResponse: HttpInfo<PaginationListOfVideoModel>) => apiResponse.data));
    }

    /**
     * Reencode Video
     * @param libraryId 
     * @param videoId 
     */
    public videoReencodeVideoWithHttpInfo(libraryId: number, videoId: string, _options?: Configuration): Observable<HttpInfo<VideoModel>> {
        const requestContextPromise = this.requestFactory.videoReencodeVideo(libraryId, videoId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoReencodeVideoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reencode Video
     * @param libraryId 
     * @param videoId 
     */
    public videoReencodeVideo(libraryId: number, videoId: string, _options?: Configuration): Observable<VideoModel> {
        return this.videoReencodeVideoWithHttpInfo(libraryId, videoId, _options).pipe(map((apiResponse: HttpInfo<VideoModel>) => apiResponse.data));
    }

    /**
     * Repackage Video
     * @param libraryId 
     * @param videoId 
     * @param keepOriginalFiles Marks whether previous file versions should be kept in storage, allows for faster repackage later on. Default is true.
     */
    public videoRepackageWithHttpInfo(libraryId: number, videoId: string, keepOriginalFiles?: boolean, _options?: Configuration): Observable<HttpInfo<VideoModel>> {
        const requestContextPromise = this.requestFactory.videoRepackage(libraryId, videoId, keepOriginalFiles, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoRepackageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Repackage Video
     * @param libraryId 
     * @param videoId 
     * @param keepOriginalFiles Marks whether previous file versions should be kept in storage, allows for faster repackage later on. Default is true.
     */
    public videoRepackage(libraryId: number, videoId: string, keepOriginalFiles?: boolean, _options?: Configuration): Observable<VideoModel> {
        return this.videoRepackageWithHttpInfo(libraryId, videoId, keepOriginalFiles, _options).pipe(map((apiResponse: HttpInfo<VideoModel>) => apiResponse.data));
    }

    /**
     * Set Thumbnail
     * @param libraryId 
     * @param videoId 
     * @param thumbnailUrl 
     */
    public videoSetThumbnailWithHttpInfo(libraryId: number, videoId: string, thumbnailUrl?: string, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.videoSetThumbnail(libraryId, videoId, thumbnailUrl, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoSetThumbnailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set Thumbnail
     * @param libraryId 
     * @param videoId 
     * @param thumbnailUrl 
     */
    public videoSetThumbnail(libraryId: number, videoId: string, thumbnailUrl?: string, _options?: Configuration): Observable<StatusModel> {
        return this.videoSetThumbnailWithHttpInfo(libraryId, videoId, thumbnailUrl, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

    /**
     * Transcribe video
     * @param libraryId 
     * @param videoId 
     * @param language 
     * @param force 
     */
    public videoTranscribeVideoWithHttpInfo(libraryId: number, videoId: string, language?: string, force?: boolean, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.videoTranscribeVideo(libraryId, videoId, language, force, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoTranscribeVideoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Transcribe video
     * @param libraryId 
     * @param videoId 
     * @param language 
     * @param force 
     */
    public videoTranscribeVideo(libraryId: number, videoId: string, language?: string, force?: boolean, _options?: Configuration): Observable<StatusModel> {
        return this.videoTranscribeVideoWithHttpInfo(libraryId, videoId, language, force, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

    /**
     * Update Video
     * @param libraryId 
     * @param videoId 
     * @param videoUpdateVideoRequest 
     */
    public videoUpdateVideoWithHttpInfo(libraryId: number, videoId: string, videoUpdateVideoRequest: VideoUpdateVideoRequest, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.videoUpdateVideo(libraryId, videoId, videoUpdateVideoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoUpdateVideoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Video
     * @param libraryId 
     * @param videoId 
     * @param videoUpdateVideoRequest 
     */
    public videoUpdateVideo(libraryId: number, videoId: string, videoUpdateVideoRequest: VideoUpdateVideoRequest, _options?: Configuration): Observable<StatusModel> {
        return this.videoUpdateVideoWithHttpInfo(libraryId, videoId, videoUpdateVideoRequest, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

    /**
     * Upload Video
     * @param libraryId 
     * @param videoId 
     * @param enabledResolutions 
     */
    public videoUploadVideoWithHttpInfo(libraryId: number, videoId: string, enabledResolutions?: string, _options?: Configuration): Observable<HttpInfo<StatusModel>> {
        const requestContextPromise = this.requestFactory.videoUploadVideo(libraryId, videoId, enabledResolutions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videoUploadVideoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload Video
     * @param libraryId 
     * @param videoId 
     * @param enabledResolutions 
     */
    public videoUploadVideo(libraryId: number, videoId: string, enabledResolutions?: string, _options?: Configuration): Observable<StatusModel> {
        return this.videoUploadVideoWithHttpInfo(libraryId, videoId, enabledResolutions, _options).pipe(map((apiResponse: HttpInfo<StatusModel>) => apiResponse.data));
    }

}

import { OEmbedApiRequestFactory, OEmbedApiResponseProcessor} from "../apis/OEmbedApi.ts";
export class ObservableOEmbedApi {
    private requestFactory: OEmbedApiRequestFactory;
    private responseProcessor: OEmbedApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OEmbedApiRequestFactory,
        responseProcessor?: OEmbedApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OEmbedApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OEmbedApiResponseProcessor();
    }

    /**
     * @param url 
     * @param maxWidth 
     * @param maxHeight 
     * @param token 
     * @param expires 
     */
    public oEmbedGetOEmbedWithHttpInfo(url?: string, maxWidth?: number, maxHeight?: number, token?: string, expires?: number, _options?: Configuration): Observable<HttpInfo<VideoOEmbedModel>> {
        const requestContextPromise = this.requestFactory.oEmbedGetOEmbed(url, maxWidth, maxHeight, token, expires, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.oEmbedGetOEmbedWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param url 
     * @param maxWidth 
     * @param maxHeight 
     * @param token 
     * @param expires 
     */
    public oEmbedGetOEmbed(url?: string, maxWidth?: number, maxHeight?: number, token?: string, expires?: number, _options?: Configuration): Observable<VideoOEmbedModel> {
        return this.oEmbedGetOEmbedWithHttpInfo(url, maxWidth, maxHeight, token, expires, _options).pipe(map((apiResponse: HttpInfo<VideoOEmbedModel>) => apiResponse.data));
    }

}
