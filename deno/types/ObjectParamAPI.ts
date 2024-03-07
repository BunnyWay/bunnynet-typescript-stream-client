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

import { ObservableManageCollectionsApi } from "./ObservableAPI.ts";
import { ManageCollectionsApiRequestFactory, ManageCollectionsApiResponseProcessor} from "../apis/ManageCollectionsApi.ts";

export interface ManageCollectionsApiCollectionCreateCollectionRequest {
    /**
     * 
     * @type number
     * @memberof ManageCollectionsApicollectionCreateCollection
     */
    libraryId: number
    /**
     * 
     * @type CollectionUpdateCollectionRequest
     * @memberof ManageCollectionsApicollectionCreateCollection
     */
    collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest
}

export interface ManageCollectionsApiCollectionDeleteCollectionRequest {
    /**
     * 
     * @type number
     * @memberof ManageCollectionsApicollectionDeleteCollection
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageCollectionsApicollectionDeleteCollection
     */
    collectionId: string
}

export interface ManageCollectionsApiCollectionGetCollectionRequest {
    /**
     * 
     * @type number
     * @memberof ManageCollectionsApicollectionGetCollection
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageCollectionsApicollectionGetCollection
     */
    collectionId: string
    /**
     * 
     * @type boolean
     * @memberof ManageCollectionsApicollectionGetCollection
     */
    includeThumbnails?: boolean
}

export interface ManageCollectionsApiCollectionListRequest {
    /**
     * 
     * @type number
     * @memberof ManageCollectionsApicollectionList
     */
    libraryId: number
    /**
     * 
     * @type number
     * @memberof ManageCollectionsApicollectionList
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof ManageCollectionsApicollectionList
     */
    itemsPerPage?: number
    /**
     * 
     * @type string
     * @memberof ManageCollectionsApicollectionList
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof ManageCollectionsApicollectionList
     */
    orderBy?: string
    /**
     * 
     * @type boolean
     * @memberof ManageCollectionsApicollectionList
     */
    includeThumbnails?: boolean
}

export interface ManageCollectionsApiCollectionUpdateCollectionRequest {
    /**
     * 
     * @type number
     * @memberof ManageCollectionsApicollectionUpdateCollection
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageCollectionsApicollectionUpdateCollection
     */
    collectionId: string
    /**
     * 
     * @type CollectionUpdateCollectionRequest
     * @memberof ManageCollectionsApicollectionUpdateCollection
     */
    collectionUpdateCollectionRequest: CollectionUpdateCollectionRequest
}

export class ObjectManageCollectionsApi {
    private api: ObservableManageCollectionsApi

    public constructor(configuration: Configuration, requestFactory?: ManageCollectionsApiRequestFactory, responseProcessor?: ManageCollectionsApiResponseProcessor) {
        this.api = new ObservableManageCollectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Collection
     * @param param the request object
     */
    public collectionCreateCollectionWithHttpInfo(param: ManageCollectionsApiCollectionCreateCollectionRequest, options?: Configuration): Promise<HttpInfo<CollectionModel>> {
        return this.api.collectionCreateCollectionWithHttpInfo(param.libraryId, param.collectionUpdateCollectionRequest,  options).toPromise();
    }

    /**
     * Create Collection
     * @param param the request object
     */
    public collectionCreateCollection(param: ManageCollectionsApiCollectionCreateCollectionRequest, options?: Configuration): Promise<CollectionModel> {
        return this.api.collectionCreateCollection(param.libraryId, param.collectionUpdateCollectionRequest,  options).toPromise();
    }

    /**
     * Delete Collection
     * @param param the request object
     */
    public collectionDeleteCollectionWithHttpInfo(param: ManageCollectionsApiCollectionDeleteCollectionRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.collectionDeleteCollectionWithHttpInfo(param.libraryId, param.collectionId,  options).toPromise();
    }

    /**
     * Delete Collection
     * @param param the request object
     */
    public collectionDeleteCollection(param: ManageCollectionsApiCollectionDeleteCollectionRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.collectionDeleteCollection(param.libraryId, param.collectionId,  options).toPromise();
    }

    /**
     * Get Collection
     * @param param the request object
     */
    public collectionGetCollectionWithHttpInfo(param: ManageCollectionsApiCollectionGetCollectionRequest, options?: Configuration): Promise<HttpInfo<CollectionModel>> {
        return this.api.collectionGetCollectionWithHttpInfo(param.libraryId, param.collectionId, param.includeThumbnails,  options).toPromise();
    }

    /**
     * Get Collection
     * @param param the request object
     */
    public collectionGetCollection(param: ManageCollectionsApiCollectionGetCollectionRequest, options?: Configuration): Promise<CollectionModel> {
        return this.api.collectionGetCollection(param.libraryId, param.collectionId, param.includeThumbnails,  options).toPromise();
    }

    /**
     * Get Collection List
     * @param param the request object
     */
    public collectionListWithHttpInfo(param: ManageCollectionsApiCollectionListRequest, options?: Configuration): Promise<HttpInfo<PaginationListOfCollectionModel>> {
        return this.api.collectionListWithHttpInfo(param.libraryId, param.page, param.itemsPerPage, param.search, param.orderBy, param.includeThumbnails,  options).toPromise();
    }

    /**
     * Get Collection List
     * @param param the request object
     */
    public collectionList(param: ManageCollectionsApiCollectionListRequest, options?: Configuration): Promise<PaginationListOfCollectionModel> {
        return this.api.collectionList(param.libraryId, param.page, param.itemsPerPage, param.search, param.orderBy, param.includeThumbnails,  options).toPromise();
    }

    /**
     * Update Collection
     * @param param the request object
     */
    public collectionUpdateCollectionWithHttpInfo(param: ManageCollectionsApiCollectionUpdateCollectionRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.collectionUpdateCollectionWithHttpInfo(param.libraryId, param.collectionId, param.collectionUpdateCollectionRequest,  options).toPromise();
    }

    /**
     * Update Collection
     * @param param the request object
     */
    public collectionUpdateCollection(param: ManageCollectionsApiCollectionUpdateCollectionRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.collectionUpdateCollection(param.libraryId, param.collectionId, param.collectionUpdateCollectionRequest,  options).toPromise();
    }

}

import { ObservableManageVideosApi } from "./ObservableAPI.ts";
import { ManageVideosApiRequestFactory, ManageVideosApiResponseProcessor} from "../apis/ManageVideosApi.ts";

export interface ManageVideosApiVideoAddCaptionRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoAddCaption
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoAddCaption
     */
    videoId: string
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoAddCaption
     */
    srclang: string
    /**
     * 
     * @type VideoAddCaptionRequest
     * @memberof ManageVideosApivideoAddCaption
     */
    videoAddCaptionRequest: VideoAddCaptionRequest
}

export interface ManageVideosApiVideoCreateVideoRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoCreateVideo
     */
    libraryId: number
    /**
     * 
     * @type VideoCreateVideoRequest
     * @memberof ManageVideosApivideoCreateVideo
     */
    videoCreateVideoRequest: VideoCreateVideoRequest
}

export interface ManageVideosApiVideoDeleteCaptionRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoDeleteCaption
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoDeleteCaption
     */
    videoId: string
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoDeleteCaption
     */
    srclang: string
}

export interface ManageVideosApiVideoDeleteVideoRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoDeleteVideo
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoDeleteVideo
     */
    videoId: string
}

export interface ManageVideosApiVideoFetchNewVideoRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoFetchNewVideo
     */
    libraryId: number
    /**
     * 
     * @type VideoFetchNewVideoRequest
     * @memberof ManageVideosApivideoFetchNewVideo
     */
    videoFetchNewVideoRequest: VideoFetchNewVideoRequest
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoFetchNewVideo
     */
    collectionId?: string
    /**
     * (Optional) Video time in ms to extract the main video thumbnail.
     * @type number
     * @memberof ManageVideosApivideoFetchNewVideo
     */
    thumbnailTime?: number
}

export interface ManageVideosApiVideoGetVideoRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoGetVideo
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoGetVideo
     */
    videoId: string
}

export interface ManageVideosApiVideoGetVideoHeatmapRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoGetVideoHeatmap
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoGetVideoHeatmap
     */
    videoId: string
}

export interface ManageVideosApiVideoGetVideoPlayDataRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoGetVideoPlayData
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoGetVideoPlayData
     */
    videoId: string
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoGetVideoPlayData
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoGetVideoPlayData
     */
    expires?: number
}

export interface ManageVideosApiVideoGetVideoStatisticsRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoGetVideoStatistics
     */
    libraryId: number
    /**
     * (Optional) The start date of the statistics. If no value is passed, the last 30 days will be returned.
     * @type Date
     * @memberof ManageVideosApivideoGetVideoStatistics
     */
    dateFrom?: Date
    /**
     * (Optional) The end date of the statistics. If no value is passed, the last 30 days will be returned.
     * @type Date
     * @memberof ManageVideosApivideoGetVideoStatistics
     */
    dateTo?: Date
    /**
     * (Optional) If true, the statistics data will be returned in hourly groupping.
     * @type boolean
     * @memberof ManageVideosApivideoGetVideoStatistics
     */
    hourly?: boolean
    /**
     * (Optional) The GUID of the video for which the statistics will be returned
     * @type string
     * @memberof ManageVideosApivideoGetVideoStatistics
     */
    videoGuid?: string
}

export interface ManageVideosApiVideoListRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoList
     */
    libraryId: number
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoList
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoList
     */
    itemsPerPage?: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoList
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoList
     */
    collection?: string
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoList
     */
    orderBy?: string
}

export interface ManageVideosApiVideoReencodeVideoRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoReencodeVideo
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoReencodeVideo
     */
    videoId: string
}

export interface ManageVideosApiVideoRepackageRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoRepackage
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoRepackage
     */
    videoId: string
    /**
     * Marks whether previous file versions should be kept in storage, allows for faster repackage later on. Default is true.
     * @type boolean
     * @memberof ManageVideosApivideoRepackage
     */
    keepOriginalFiles?: boolean
}

export interface ManageVideosApiVideoSetThumbnailRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoSetThumbnail
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoSetThumbnail
     */
    videoId: string
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoSetThumbnail
     */
    thumbnailUrl?: string
}

export interface ManageVideosApiVideoTranscribeVideoRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoTranscribeVideo
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoTranscribeVideo
     */
    videoId: string
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoTranscribeVideo
     */
    language?: string
    /**
     * 
     * @type boolean
     * @memberof ManageVideosApivideoTranscribeVideo
     */
    force?: boolean
}

export interface ManageVideosApiVideoUpdateVideoRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoUpdateVideo
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoUpdateVideo
     */
    videoId: string
    /**
     * 
     * @type VideoUpdateVideoRequest
     * @memberof ManageVideosApivideoUpdateVideo
     */
    videoUpdateVideoRequest: VideoUpdateVideoRequest
}

export interface ManageVideosApiVideoUploadVideoRequest {
    /**
     * 
     * @type number
     * @memberof ManageVideosApivideoUploadVideo
     */
    libraryId: number
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoUploadVideo
     */
    videoId: string
    /**
     * 
     * @type string
     * @memberof ManageVideosApivideoUploadVideo
     */
    enabledResolutions?: string
}

export class ObjectManageVideosApi {
    private api: ObservableManageVideosApi

    public constructor(configuration: Configuration, requestFactory?: ManageVideosApiRequestFactory, responseProcessor?: ManageVideosApiResponseProcessor) {
        this.api = new ObservableManageVideosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Caption
     * @param param the request object
     */
    public videoAddCaptionWithHttpInfo(param: ManageVideosApiVideoAddCaptionRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.videoAddCaptionWithHttpInfo(param.libraryId, param.videoId, param.srclang, param.videoAddCaptionRequest,  options).toPromise();
    }

    /**
     * Add Caption
     * @param param the request object
     */
    public videoAddCaption(param: ManageVideosApiVideoAddCaptionRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.videoAddCaption(param.libraryId, param.videoId, param.srclang, param.videoAddCaptionRequest,  options).toPromise();
    }

    /**
     * Create Video
     * @param param the request object
     */
    public videoCreateVideoWithHttpInfo(param: ManageVideosApiVideoCreateVideoRequest, options?: Configuration): Promise<HttpInfo<VideoModel>> {
        return this.api.videoCreateVideoWithHttpInfo(param.libraryId, param.videoCreateVideoRequest,  options).toPromise();
    }

    /**
     * Create Video
     * @param param the request object
     */
    public videoCreateVideo(param: ManageVideosApiVideoCreateVideoRequest, options?: Configuration): Promise<VideoModel> {
        return this.api.videoCreateVideo(param.libraryId, param.videoCreateVideoRequest,  options).toPromise();
    }

    /**
     * Delete Caption
     * @param param the request object
     */
    public videoDeleteCaptionWithHttpInfo(param: ManageVideosApiVideoDeleteCaptionRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.videoDeleteCaptionWithHttpInfo(param.libraryId, param.videoId, param.srclang,  options).toPromise();
    }

    /**
     * Delete Caption
     * @param param the request object
     */
    public videoDeleteCaption(param: ManageVideosApiVideoDeleteCaptionRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.videoDeleteCaption(param.libraryId, param.videoId, param.srclang,  options).toPromise();
    }

    /**
     * Delete Video
     * @param param the request object
     */
    public videoDeleteVideoWithHttpInfo(param: ManageVideosApiVideoDeleteVideoRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.videoDeleteVideoWithHttpInfo(param.libraryId, param.videoId,  options).toPromise();
    }

    /**
     * Delete Video
     * @param param the request object
     */
    public videoDeleteVideo(param: ManageVideosApiVideoDeleteVideoRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.videoDeleteVideo(param.libraryId, param.videoId,  options).toPromise();
    }

    /**
     * Fetch Video
     * @param param the request object
     */
    public videoFetchNewVideoWithHttpInfo(param: ManageVideosApiVideoFetchNewVideoRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.videoFetchNewVideoWithHttpInfo(param.libraryId, param.videoFetchNewVideoRequest, param.collectionId, param.thumbnailTime,  options).toPromise();
    }

    /**
     * Fetch Video
     * @param param the request object
     */
    public videoFetchNewVideo(param: ManageVideosApiVideoFetchNewVideoRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.videoFetchNewVideo(param.libraryId, param.videoFetchNewVideoRequest, param.collectionId, param.thumbnailTime,  options).toPromise();
    }

    /**
     * Get Video
     * @param param the request object
     */
    public videoGetVideoWithHttpInfo(param: ManageVideosApiVideoGetVideoRequest, options?: Configuration): Promise<HttpInfo<VideoModel>> {
        return this.api.videoGetVideoWithHttpInfo(param.libraryId, param.videoId,  options).toPromise();
    }

    /**
     * Get Video
     * @param param the request object
     */
    public videoGetVideo(param: ManageVideosApiVideoGetVideoRequest, options?: Configuration): Promise<VideoModel> {
        return this.api.videoGetVideo(param.libraryId, param.videoId,  options).toPromise();
    }

    /**
     * Get Video Heatmap
     * @param param the request object
     */
    public videoGetVideoHeatmapWithHttpInfo(param: ManageVideosApiVideoGetVideoHeatmapRequest, options?: Configuration): Promise<HttpInfo<VideoHeatmapModel>> {
        return this.api.videoGetVideoHeatmapWithHttpInfo(param.libraryId, param.videoId,  options).toPromise();
    }

    /**
     * Get Video Heatmap
     * @param param the request object
     */
    public videoGetVideoHeatmap(param: ManageVideosApiVideoGetVideoHeatmapRequest, options?: Configuration): Promise<VideoHeatmapModel> {
        return this.api.videoGetVideoHeatmap(param.libraryId, param.videoId,  options).toPromise();
    }

    /**
     * Get Video play data
     * @param param the request object
     */
    public videoGetVideoPlayDataWithHttpInfo(param: ManageVideosApiVideoGetVideoPlayDataRequest, options?: Configuration): Promise<HttpInfo<VideoPlayDataModel>> {
        return this.api.videoGetVideoPlayDataWithHttpInfo(param.libraryId, param.videoId, param.token, param.expires,  options).toPromise();
    }

    /**
     * Get Video play data
     * @param param the request object
     */
    public videoGetVideoPlayData(param: ManageVideosApiVideoGetVideoPlayDataRequest, options?: Configuration): Promise<VideoPlayDataModel> {
        return this.api.videoGetVideoPlayData(param.libraryId, param.videoId, param.token, param.expires,  options).toPromise();
    }

    /**
     * Get Video Statistics
     * @param param the request object
     */
    public videoGetVideoStatisticsWithHttpInfo(param: ManageVideosApiVideoGetVideoStatisticsRequest, options?: Configuration): Promise<HttpInfo<VideoStatisticsModel>> {
        return this.api.videoGetVideoStatisticsWithHttpInfo(param.libraryId, param.dateFrom, param.dateTo, param.hourly, param.videoGuid,  options).toPromise();
    }

    /**
     * Get Video Statistics
     * @param param the request object
     */
    public videoGetVideoStatistics(param: ManageVideosApiVideoGetVideoStatisticsRequest, options?: Configuration): Promise<VideoStatisticsModel> {
        return this.api.videoGetVideoStatistics(param.libraryId, param.dateFrom, param.dateTo, param.hourly, param.videoGuid,  options).toPromise();
    }

    /**
     * List Videos
     * @param param the request object
     */
    public videoListWithHttpInfo(param: ManageVideosApiVideoListRequest, options?: Configuration): Promise<HttpInfo<PaginationListOfVideoModel>> {
        return this.api.videoListWithHttpInfo(param.libraryId, param.page, param.itemsPerPage, param.search, param.collection, param.orderBy,  options).toPromise();
    }

    /**
     * List Videos
     * @param param the request object
     */
    public videoList(param: ManageVideosApiVideoListRequest, options?: Configuration): Promise<PaginationListOfVideoModel> {
        return this.api.videoList(param.libraryId, param.page, param.itemsPerPage, param.search, param.collection, param.orderBy,  options).toPromise();
    }

    /**
     * Reencode Video
     * @param param the request object
     */
    public videoReencodeVideoWithHttpInfo(param: ManageVideosApiVideoReencodeVideoRequest, options?: Configuration): Promise<HttpInfo<VideoModel>> {
        return this.api.videoReencodeVideoWithHttpInfo(param.libraryId, param.videoId,  options).toPromise();
    }

    /**
     * Reencode Video
     * @param param the request object
     */
    public videoReencodeVideo(param: ManageVideosApiVideoReencodeVideoRequest, options?: Configuration): Promise<VideoModel> {
        return this.api.videoReencodeVideo(param.libraryId, param.videoId,  options).toPromise();
    }

    /**
     * Repackage Video
     * @param param the request object
     */
    public videoRepackageWithHttpInfo(param: ManageVideosApiVideoRepackageRequest, options?: Configuration): Promise<HttpInfo<VideoModel>> {
        return this.api.videoRepackageWithHttpInfo(param.libraryId, param.videoId, param.keepOriginalFiles,  options).toPromise();
    }

    /**
     * Repackage Video
     * @param param the request object
     */
    public videoRepackage(param: ManageVideosApiVideoRepackageRequest, options?: Configuration): Promise<VideoModel> {
        return this.api.videoRepackage(param.libraryId, param.videoId, param.keepOriginalFiles,  options).toPromise();
    }

    /**
     * Set Thumbnail
     * @param param the request object
     */
    public videoSetThumbnailWithHttpInfo(param: ManageVideosApiVideoSetThumbnailRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.videoSetThumbnailWithHttpInfo(param.libraryId, param.videoId, param.thumbnailUrl,  options).toPromise();
    }

    /**
     * Set Thumbnail
     * @param param the request object
     */
    public videoSetThumbnail(param: ManageVideosApiVideoSetThumbnailRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.videoSetThumbnail(param.libraryId, param.videoId, param.thumbnailUrl,  options).toPromise();
    }

    /**
     * Transcribe video
     * @param param the request object
     */
    public videoTranscribeVideoWithHttpInfo(param: ManageVideosApiVideoTranscribeVideoRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.videoTranscribeVideoWithHttpInfo(param.libraryId, param.videoId, param.language, param.force,  options).toPromise();
    }

    /**
     * Transcribe video
     * @param param the request object
     */
    public videoTranscribeVideo(param: ManageVideosApiVideoTranscribeVideoRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.videoTranscribeVideo(param.libraryId, param.videoId, param.language, param.force,  options).toPromise();
    }

    /**
     * Update Video
     * @param param the request object
     */
    public videoUpdateVideoWithHttpInfo(param: ManageVideosApiVideoUpdateVideoRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.videoUpdateVideoWithHttpInfo(param.libraryId, param.videoId, param.videoUpdateVideoRequest,  options).toPromise();
    }

    /**
     * Update Video
     * @param param the request object
     */
    public videoUpdateVideo(param: ManageVideosApiVideoUpdateVideoRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.videoUpdateVideo(param.libraryId, param.videoId, param.videoUpdateVideoRequest,  options).toPromise();
    }

    /**
     * Upload Video
     * @param param the request object
     */
    public videoUploadVideoWithHttpInfo(param: ManageVideosApiVideoUploadVideoRequest, options?: Configuration): Promise<HttpInfo<StatusModel>> {
        return this.api.videoUploadVideoWithHttpInfo(param.libraryId, param.videoId, param.enabledResolutions,  options).toPromise();
    }

    /**
     * Upload Video
     * @param param the request object
     */
    public videoUploadVideo(param: ManageVideosApiVideoUploadVideoRequest, options?: Configuration): Promise<StatusModel> {
        return this.api.videoUploadVideo(param.libraryId, param.videoId, param.enabledResolutions,  options).toPromise();
    }

}

import { ObservableOEmbedApi } from "./ObservableAPI.ts";
import { OEmbedApiRequestFactory, OEmbedApiResponseProcessor} from "../apis/OEmbedApi.ts";

export interface OEmbedApiOEmbedGetOEmbedRequest {
    /**
     * 
     * @type string
     * @memberof OEmbedApioEmbedGetOEmbed
     */
    url?: string
    /**
     * 
     * @type number
     * @memberof OEmbedApioEmbedGetOEmbed
     */
    maxWidth?: number
    /**
     * 
     * @type number
     * @memberof OEmbedApioEmbedGetOEmbed
     */
    maxHeight?: number
    /**
     * 
     * @type string
     * @memberof OEmbedApioEmbedGetOEmbed
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof OEmbedApioEmbedGetOEmbed
     */
    expires?: number
}

export class ObjectOEmbedApi {
    private api: ObservableOEmbedApi

    public constructor(configuration: Configuration, requestFactory?: OEmbedApiRequestFactory, responseProcessor?: OEmbedApiResponseProcessor) {
        this.api = new ObservableOEmbedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public oEmbedGetOEmbedWithHttpInfo(param: OEmbedApiOEmbedGetOEmbedRequest = {}, options?: Configuration): Promise<HttpInfo<VideoOEmbedModel>> {
        return this.api.oEmbedGetOEmbedWithHttpInfo(param.url, param.maxWidth, param.maxHeight, param.token, param.expires,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public oEmbedGetOEmbed(param: OEmbedApiOEmbedGetOEmbedRequest = {}, options?: Configuration): Promise<VideoOEmbedModel> {
        return this.api.oEmbedGetOEmbed(param.url, param.maxWidth, param.maxHeight, param.token, param.expires,  options).toPromise();
    }

}
