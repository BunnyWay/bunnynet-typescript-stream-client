import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

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
import { ObservableManageCollectionsApi } from './ObservableAPI.ts';

import { ManageCollectionsApiRequestFactory, ManageCollectionsApiResponseProcessor} from "../apis/ManageCollectionsApi.ts";
export class PromiseManageCollectionsApi {
    private api: ObservableManageCollectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ManageCollectionsApiRequestFactory,
        responseProcessor?: ManageCollectionsApiResponseProcessor
    ) {
        this.api = new ObservableManageCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Collection
     * @param libraryId 
     * @param collectionUpdateCollectionRequest 
     */
    public collectionCreateCollectionWithHttpInfo(libraryId: number, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Promise<HttpInfo<CollectionModel>> {
        const result = this.api.collectionCreateCollectionWithHttpInfo(libraryId, collectionUpdateCollectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Create Collection
     * @param libraryId 
     * @param collectionUpdateCollectionRequest 
     */
    public collectionCreateCollection(libraryId: number, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Promise<CollectionModel> {
        const result = this.api.collectionCreateCollection(libraryId, collectionUpdateCollectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete Collection
     * @param libraryId 
     * @param collectionId 
     */
    public collectionDeleteCollectionWithHttpInfo(libraryId: number, collectionId: string, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.collectionDeleteCollectionWithHttpInfo(libraryId, collectionId, _options);
        return result.toPromise();
    }

    /**
     * Delete Collection
     * @param libraryId 
     * @param collectionId 
     */
    public collectionDeleteCollection(libraryId: number, collectionId: string, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.collectionDeleteCollection(libraryId, collectionId, _options);
        return result.toPromise();
    }

    /**
     * Get Collection
     * @param libraryId 
     * @param collectionId 
     * @param includeThumbnails 
     */
    public collectionGetCollectionWithHttpInfo(libraryId: number, collectionId: string, includeThumbnails?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionModel>> {
        const result = this.api.collectionGetCollectionWithHttpInfo(libraryId, collectionId, includeThumbnails, _options);
        return result.toPromise();
    }

    /**
     * Get Collection
     * @param libraryId 
     * @param collectionId 
     * @param includeThumbnails 
     */
    public collectionGetCollection(libraryId: number, collectionId: string, includeThumbnails?: boolean, _options?: Configuration): Promise<CollectionModel> {
        const result = this.api.collectionGetCollection(libraryId, collectionId, includeThumbnails, _options);
        return result.toPromise();
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
    public collectionListWithHttpInfo(libraryId: number, page?: number, itemsPerPage?: number, search?: string, orderBy?: string, includeThumbnails?: boolean, _options?: Configuration): Promise<HttpInfo<PaginationListOfCollectionModel>> {
        const result = this.api.collectionListWithHttpInfo(libraryId, page, itemsPerPage, search, orderBy, includeThumbnails, _options);
        return result.toPromise();
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
    public collectionList(libraryId: number, page?: number, itemsPerPage?: number, search?: string, orderBy?: string, includeThumbnails?: boolean, _options?: Configuration): Promise<PaginationListOfCollectionModel> {
        const result = this.api.collectionList(libraryId, page, itemsPerPage, search, orderBy, includeThumbnails, _options);
        return result.toPromise();
    }

    /**
     * Update Collection
     * @param libraryId 
     * @param collectionId 
     * @param collectionUpdateCollectionRequest 
     */
    public collectionUpdateCollectionWithHttpInfo(libraryId: number, collectionId: string, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.collectionUpdateCollectionWithHttpInfo(libraryId, collectionId, collectionUpdateCollectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Update Collection
     * @param libraryId 
     * @param collectionId 
     * @param collectionUpdateCollectionRequest 
     */
    public collectionUpdateCollection(libraryId: number, collectionId: string, collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.collectionUpdateCollection(libraryId, collectionId, collectionUpdateCollectionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableManageVideosApi } from './ObservableAPI.ts';

import { ManageVideosApiRequestFactory, ManageVideosApiResponseProcessor} from "../apis/ManageVideosApi.ts";
export class PromiseManageVideosApi {
    private api: ObservableManageVideosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ManageVideosApiRequestFactory,
        responseProcessor?: ManageVideosApiResponseProcessor
    ) {
        this.api = new ObservableManageVideosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     * @param videoAddCaptionRequest 
     */
    public videoAddCaptionWithHttpInfo(libraryId: number, videoId: string, srclang: string, videoAddCaptionRequest: VideoAddCaptionRequest, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.videoAddCaptionWithHttpInfo(libraryId, videoId, srclang, videoAddCaptionRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     * @param videoAddCaptionRequest 
     */
    public videoAddCaption(libraryId: number, videoId: string, srclang: string, videoAddCaptionRequest: VideoAddCaptionRequest, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.videoAddCaption(libraryId, videoId, srclang, videoAddCaptionRequest, _options);
        return result.toPromise();
    }

    /**
     * Create Video
     * @param libraryId 
     * @param videoCreateVideoRequest 
     */
    public videoCreateVideoWithHttpInfo(libraryId: number, videoCreateVideoRequest: VideoCreateVideoRequest, _options?: Configuration): Promise<HttpInfo<VideoModel>> {
        const result = this.api.videoCreateVideoWithHttpInfo(libraryId, videoCreateVideoRequest, _options);
        return result.toPromise();
    }

    /**
     * Create Video
     * @param libraryId 
     * @param videoCreateVideoRequest 
     */
    public videoCreateVideo(libraryId: number, videoCreateVideoRequest: VideoCreateVideoRequest, _options?: Configuration): Promise<VideoModel> {
        const result = this.api.videoCreateVideo(libraryId, videoCreateVideoRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     */
    public videoDeleteCaptionWithHttpInfo(libraryId: number, videoId: string, srclang: string, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.videoDeleteCaptionWithHttpInfo(libraryId, videoId, srclang, _options);
        return result.toPromise();
    }

    /**
     * Delete Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     */
    public videoDeleteCaption(libraryId: number, videoId: string, srclang: string, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.videoDeleteCaption(libraryId, videoId, srclang, _options);
        return result.toPromise();
    }

    /**
     * Delete Video
     * @param libraryId 
     * @param videoId 
     */
    public videoDeleteVideoWithHttpInfo(libraryId: number, videoId: string, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.videoDeleteVideoWithHttpInfo(libraryId, videoId, _options);
        return result.toPromise();
    }

    /**
     * Delete Video
     * @param libraryId 
     * @param videoId 
     */
    public videoDeleteVideo(libraryId: number, videoId: string, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.videoDeleteVideo(libraryId, videoId, _options);
        return result.toPromise();
    }

    /**
     * Fetch Video
     * @param libraryId 
     * @param videoFetchNewVideoRequest 
     * @param collectionId 
     * @param thumbnailTime (Optional) Video time in ms to extract the main video thumbnail.
     */
    public videoFetchNewVideoWithHttpInfo(libraryId: number, videoFetchNewVideoRequest: VideoFetchNewVideoRequest, collectionId?: string, thumbnailTime?: number, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.videoFetchNewVideoWithHttpInfo(libraryId, videoFetchNewVideoRequest, collectionId, thumbnailTime, _options);
        return result.toPromise();
    }

    /**
     * Fetch Video
     * @param libraryId 
     * @param videoFetchNewVideoRequest 
     * @param collectionId 
     * @param thumbnailTime (Optional) Video time in ms to extract the main video thumbnail.
     */
    public videoFetchNewVideo(libraryId: number, videoFetchNewVideoRequest: VideoFetchNewVideoRequest, collectionId?: string, thumbnailTime?: number, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.videoFetchNewVideo(libraryId, videoFetchNewVideoRequest, collectionId, thumbnailTime, _options);
        return result.toPromise();
    }

    /**
     * Get Video
     * @param libraryId 
     * @param videoId 
     */
    public videoGetVideoWithHttpInfo(libraryId: number, videoId: string, _options?: Configuration): Promise<HttpInfo<VideoModel>> {
        const result = this.api.videoGetVideoWithHttpInfo(libraryId, videoId, _options);
        return result.toPromise();
    }

    /**
     * Get Video
     * @param libraryId 
     * @param videoId 
     */
    public videoGetVideo(libraryId: number, videoId: string, _options?: Configuration): Promise<VideoModel> {
        const result = this.api.videoGetVideo(libraryId, videoId, _options);
        return result.toPromise();
    }

    /**
     * Get Video Heatmap
     * @param libraryId 
     * @param videoId 
     */
    public videoGetVideoHeatmapWithHttpInfo(libraryId: number, videoId: string, _options?: Configuration): Promise<HttpInfo<VideoHeatmapModel>> {
        const result = this.api.videoGetVideoHeatmapWithHttpInfo(libraryId, videoId, _options);
        return result.toPromise();
    }

    /**
     * Get Video Heatmap
     * @param libraryId 
     * @param videoId 
     */
    public videoGetVideoHeatmap(libraryId: number, videoId: string, _options?: Configuration): Promise<VideoHeatmapModel> {
        const result = this.api.videoGetVideoHeatmap(libraryId, videoId, _options);
        return result.toPromise();
    }

    /**
     * Get Video play data
     * @param libraryId 
     * @param videoId 
     * @param token 
     * @param expires 
     */
    public videoGetVideoPlayDataWithHttpInfo(libraryId: number, videoId: string, token?: string, expires?: number, _options?: Configuration): Promise<HttpInfo<VideoPlayDataModel>> {
        const result = this.api.videoGetVideoPlayDataWithHttpInfo(libraryId, videoId, token, expires, _options);
        return result.toPromise();
    }

    /**
     * Get Video play data
     * @param libraryId 
     * @param videoId 
     * @param token 
     * @param expires 
     */
    public videoGetVideoPlayData(libraryId: number, videoId: string, token?: string, expires?: number, _options?: Configuration): Promise<VideoPlayDataModel> {
        const result = this.api.videoGetVideoPlayData(libraryId, videoId, token, expires, _options);
        return result.toPromise();
    }

    /**
     * Get Video Statistics
     * @param libraryId 
     * @param dateFrom (Optional) The start date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param dateTo (Optional) The end date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param hourly (Optional) If true, the statistics data will be returned in hourly groupping.
     * @param videoGuid (Optional) The GUID of the video for which the statistics will be returned
     */
    public videoGetVideoStatisticsWithHttpInfo(libraryId: number, dateFrom?: Date, dateTo?: Date, hourly?: boolean, videoGuid?: string, _options?: Configuration): Promise<HttpInfo<VideoStatisticsModel>> {
        const result = this.api.videoGetVideoStatisticsWithHttpInfo(libraryId, dateFrom, dateTo, hourly, videoGuid, _options);
        return result.toPromise();
    }

    /**
     * Get Video Statistics
     * @param libraryId 
     * @param dateFrom (Optional) The start date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param dateTo (Optional) The end date of the statistics. If no value is passed, the last 30 days will be returned.
     * @param hourly (Optional) If true, the statistics data will be returned in hourly groupping.
     * @param videoGuid (Optional) The GUID of the video for which the statistics will be returned
     */
    public videoGetVideoStatistics(libraryId: number, dateFrom?: Date, dateTo?: Date, hourly?: boolean, videoGuid?: string, _options?: Configuration): Promise<VideoStatisticsModel> {
        const result = this.api.videoGetVideoStatistics(libraryId, dateFrom, dateTo, hourly, videoGuid, _options);
        return result.toPromise();
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
    public videoListWithHttpInfo(libraryId: number, page?: number, itemsPerPage?: number, search?: string, collection?: string, orderBy?: string, _options?: Configuration): Promise<HttpInfo<PaginationListOfVideoModel>> {
        const result = this.api.videoListWithHttpInfo(libraryId, page, itemsPerPage, search, collection, orderBy, _options);
        return result.toPromise();
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
    public videoList(libraryId: number, page?: number, itemsPerPage?: number, search?: string, collection?: string, orderBy?: string, _options?: Configuration): Promise<PaginationListOfVideoModel> {
        const result = this.api.videoList(libraryId, page, itemsPerPage, search, collection, orderBy, _options);
        return result.toPromise();
    }

    /**
     * Reencode Video
     * @param libraryId 
     * @param videoId 
     */
    public videoReencodeVideoWithHttpInfo(libraryId: number, videoId: string, _options?: Configuration): Promise<HttpInfo<VideoModel>> {
        const result = this.api.videoReencodeVideoWithHttpInfo(libraryId, videoId, _options);
        return result.toPromise();
    }

    /**
     * Reencode Video
     * @param libraryId 
     * @param videoId 
     */
    public videoReencodeVideo(libraryId: number, videoId: string, _options?: Configuration): Promise<VideoModel> {
        const result = this.api.videoReencodeVideo(libraryId, videoId, _options);
        return result.toPromise();
    }

    /**
     * Repackage Video
     * @param libraryId 
     * @param videoId 
     * @param keepOriginalFiles Marks whether previous file versions should be kept in storage, allows for faster repackage later on. Default is true.
     */
    public videoRepackageWithHttpInfo(libraryId: number, videoId: string, keepOriginalFiles?: boolean, _options?: Configuration): Promise<HttpInfo<VideoModel>> {
        const result = this.api.videoRepackageWithHttpInfo(libraryId, videoId, keepOriginalFiles, _options);
        return result.toPromise();
    }

    /**
     * Repackage Video
     * @param libraryId 
     * @param videoId 
     * @param keepOriginalFiles Marks whether previous file versions should be kept in storage, allows for faster repackage later on. Default is true.
     */
    public videoRepackage(libraryId: number, videoId: string, keepOriginalFiles?: boolean, _options?: Configuration): Promise<VideoModel> {
        const result = this.api.videoRepackage(libraryId, videoId, keepOriginalFiles, _options);
        return result.toPromise();
    }

    /**
     * Set Thumbnail
     * @param libraryId 
     * @param videoId 
     * @param thumbnailUrl 
     */
    public videoSetThumbnailWithHttpInfo(libraryId: number, videoId: string, thumbnailUrl?: string, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.videoSetThumbnailWithHttpInfo(libraryId, videoId, thumbnailUrl, _options);
        return result.toPromise();
    }

    /**
     * Set Thumbnail
     * @param libraryId 
     * @param videoId 
     * @param thumbnailUrl 
     */
    public videoSetThumbnail(libraryId: number, videoId: string, thumbnailUrl?: string, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.videoSetThumbnail(libraryId, videoId, thumbnailUrl, _options);
        return result.toPromise();
    }

    /**
     * Transcribe video
     * @param libraryId 
     * @param videoId 
     * @param language 
     * @param force 
     */
    public videoTranscribeVideoWithHttpInfo(libraryId: number, videoId: string, language?: string, force?: boolean, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.videoTranscribeVideoWithHttpInfo(libraryId, videoId, language, force, _options);
        return result.toPromise();
    }

    /**
     * Transcribe video
     * @param libraryId 
     * @param videoId 
     * @param language 
     * @param force 
     */
    public videoTranscribeVideo(libraryId: number, videoId: string, language?: string, force?: boolean, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.videoTranscribeVideo(libraryId, videoId, language, force, _options);
        return result.toPromise();
    }

    /**
     * Update Video
     * @param libraryId 
     * @param videoId 
     * @param videoUpdateVideoRequest 
     */
    public videoUpdateVideoWithHttpInfo(libraryId: number, videoId: string, videoUpdateVideoRequest: VideoUpdateVideoRequest, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.videoUpdateVideoWithHttpInfo(libraryId, videoId, videoUpdateVideoRequest, _options);
        return result.toPromise();
    }

    /**
     * Update Video
     * @param libraryId 
     * @param videoId 
     * @param videoUpdateVideoRequest 
     */
    public videoUpdateVideo(libraryId: number, videoId: string, videoUpdateVideoRequest: VideoUpdateVideoRequest, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.videoUpdateVideo(libraryId, videoId, videoUpdateVideoRequest, _options);
        return result.toPromise();
    }

    /**
     * Upload Video
     * @param libraryId 
     * @param videoId 
     * @param enabledResolutions 
     */
    public videoUploadVideoWithHttpInfo(libraryId: number, videoId: string, enabledResolutions?: string, _options?: Configuration): Promise<HttpInfo<StatusModel>> {
        const result = this.api.videoUploadVideoWithHttpInfo(libraryId, videoId, enabledResolutions, _options);
        return result.toPromise();
    }

    /**
     * Upload Video
     * @param libraryId 
     * @param videoId 
     * @param enabledResolutions 
     */
    public videoUploadVideo(libraryId: number, videoId: string, enabledResolutions?: string, _options?: Configuration): Promise<StatusModel> {
        const result = this.api.videoUploadVideo(libraryId, videoId, enabledResolutions, _options);
        return result.toPromise();
    }


}



import { ObservableOEmbedApi } from './ObservableAPI.ts';

import { OEmbedApiRequestFactory, OEmbedApiResponseProcessor} from "../apis/OEmbedApi.ts";
export class PromiseOEmbedApi {
    private api: ObservableOEmbedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OEmbedApiRequestFactory,
        responseProcessor?: OEmbedApiResponseProcessor
    ) {
        this.api = new ObservableOEmbedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param url 
     * @param maxWidth 
     * @param maxHeight 
     * @param token 
     * @param expires 
     */
    public oEmbedGetOEmbedWithHttpInfo(url?: string, maxWidth?: number, maxHeight?: number, token?: string, expires?: number, _options?: Configuration): Promise<HttpInfo<VideoOEmbedModel>> {
        const result = this.api.oEmbedGetOEmbedWithHttpInfo(url, maxWidth, maxHeight, token, expires, _options);
        return result.toPromise();
    }

    /**
     * @param url 
     * @param maxWidth 
     * @param maxHeight 
     * @param token 
     * @param expires 
     */
    public oEmbedGetOEmbed(url?: string, maxWidth?: number, maxHeight?: number, token?: string, expires?: number, _options?: Configuration): Promise<VideoOEmbedModel> {
        const result = this.api.oEmbedGetOEmbed(url, maxWidth, maxHeight, token, expires, _options);
        return result.toPromise();
    }


}



