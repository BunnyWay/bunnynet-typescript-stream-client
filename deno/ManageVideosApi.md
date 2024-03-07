# .ManageVideosApi

All URIs are relative to *https://video.bunnycdn.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**videoAddCaption**](ManageVideosApi.md#videoAddCaption) | **POST** /library/{libraryId}/videos/{videoId}/captions/{srclang} | Add Caption
[**videoCreateVideo**](ManageVideosApi.md#videoCreateVideo) | **POST** /library/{libraryId}/videos | Create Video
[**videoDeleteCaption**](ManageVideosApi.md#videoDeleteCaption) | **DELETE** /library/{libraryId}/videos/{videoId}/captions/{srclang} | Delete Caption
[**videoDeleteVideo**](ManageVideosApi.md#videoDeleteVideo) | **DELETE** /library/{libraryId}/videos/{videoId} | Delete Video
[**videoFetchNewVideo**](ManageVideosApi.md#videoFetchNewVideo) | **POST** /library/{libraryId}/videos/fetch | Fetch Video
[**videoGetVideo**](ManageVideosApi.md#videoGetVideo) | **GET** /library/{libraryId}/videos/{videoId} | Get Video
[**videoGetVideoHeatmap**](ManageVideosApi.md#videoGetVideoHeatmap) | **GET** /library/{libraryId}/videos/{videoId}/heatmap | Get Video Heatmap
[**videoGetVideoPlayData**](ManageVideosApi.md#videoGetVideoPlayData) | **GET** /library/{libraryId}/videos/{videoId}/play | Get Video play data
[**videoGetVideoStatistics**](ManageVideosApi.md#videoGetVideoStatistics) | **GET** /library/{libraryId}/statistics | Get Video Statistics
[**videoList**](ManageVideosApi.md#videoList) | **GET** /library/{libraryId}/videos | List Videos
[**videoReencodeVideo**](ManageVideosApi.md#videoReencodeVideo) | **POST** /library/{libraryId}/videos/{videoId}/reencode | Reencode Video
[**videoRepackage**](ManageVideosApi.md#videoRepackage) | **GET** /library/{libraryId}/videos/{videoId}/repackage | Repackage Video
[**videoSetThumbnail**](ManageVideosApi.md#videoSetThumbnail) | **POST** /library/{libraryId}/videos/{videoId}/thumbnail | Set Thumbnail
[**videoTranscribeVideo**](ManageVideosApi.md#videoTranscribeVideo) | **POST** /library/{libraryId}/videos/{videoId}/transcribe | Transcribe video
[**videoUpdateVideo**](ManageVideosApi.md#videoUpdateVideo) | **POST** /library/{libraryId}/videos/{videoId} | Update Video
[**videoUploadVideo**](ManageVideosApi.md#videoUploadVideo) | **PUT** /library/{libraryId}/videos/{videoId} | Upload Video


# **videoAddCaption**
> StatusModel videoAddCaption(videoAddCaptionRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoAddCaptionRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
  // string
  srclang: "srclang_example",
  // VideoAddCaptionRequest
  videoAddCaptionRequest: null,
};

apiInstance.videoAddCaption(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoAddCaptionRequest** | **VideoAddCaptionRequest**|  |
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined
 **srclang** | [**string**] |  | defaults to undefined


### Return type

**StatusModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The caption was successfuly uploaded |  -  |
**400** | Failed uploading the captions |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoCreateVideo**
> VideoModel videoCreateVideo(videoCreateVideoRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoCreateVideoRequest = {
  // number
  libraryId: 1,
  // VideoCreateVideoRequest
  videoCreateVideoRequest: null,
};

apiInstance.videoCreateVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoCreateVideoRequest** | **VideoCreateVideoRequest**|  |
 **libraryId** | [**number**] |  | defaults to undefined


### Return type

**VideoModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The video was successfuly created and returned as the response. |  -  |
**401** | The request authorization failed |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoDeleteCaption**
> StatusModel videoDeleteCaption()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoDeleteCaptionRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
  // string
  srclang: "srclang_example",
};

apiInstance.videoDeleteCaption(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined
 **srclang** | [**string**] |  | defaults to undefined


### Return type

**StatusModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The caption was successfuly deleted |  -  |
**400** | Failed deleting the captions |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoDeleteVideo**
> StatusModel videoDeleteVideo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoDeleteVideoRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
};

apiInstance.videoDeleteVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined


### Return type

**StatusModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The video was successfuly deleted |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoFetchNewVideo**
> StatusModel videoFetchNewVideo(videoFetchNewVideoRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoFetchNewVideoRequest = {
  // number
  libraryId: 1,
  // VideoFetchNewVideoRequest
  videoFetchNewVideoRequest: null,
  // string (optional)
  collectionId: "collectionId_example",
  // number | (Optional) Video time in ms to extract the main video thumbnail. (optional)
  thumbnailTime: 1,
};

apiInstance.videoFetchNewVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoFetchNewVideoRequest** | **VideoFetchNewVideoRequest**|  |
 **libraryId** | [**number**] |  | defaults to undefined
 **collectionId** | [**string**] |  | (optional) defaults to undefined
 **thumbnailTime** | [**number**] | (Optional) Video time in ms to extract the main video thumbnail. | (optional) defaults to undefined


### Return type

**StatusModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The video was successfuly fetched |  -  |
**400** | Failed fetching the video |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoGetVideo**
> VideoModel videoGetVideo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoGetVideoRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
};

apiInstance.videoGetVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined


### Return type

**VideoModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The details of the requested video |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoGetVideoHeatmap**
> VideoHeatmapModel videoGetVideoHeatmap()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoGetVideoHeatmapRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
};

apiInstance.videoGetVideoHeatmap(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined


### Return type

**VideoHeatmapModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The heatmap details of the requested video |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoGetVideoPlayData**
> VideoPlayDataModel videoGetVideoPlayData()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoGetVideoPlayDataRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
  // string (optional)
  token: "",
  // number (optional)
  expires: 0,
};

apiInstance.videoGetVideoPlayData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to ''
 **expires** | [**number**] |  | (optional) defaults to 0


### Return type

**VideoPlayDataModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The play data of the requested video |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoGetVideoStatistics**
> VideoStatisticsModel videoGetVideoStatistics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoGetVideoStatisticsRequest = {
  // number
  libraryId: 1,
  // Date | (Optional) The start date of the statistics. If no value is passed, the last 30 days will be returned. (optional)
  dateFrom: new Date('1970-01-01T00:00:00.00Z'),
  // Date | (Optional) The end date of the statistics. If no value is passed, the last 30 days will be returned. (optional)
  dateTo: new Date('1970-01-01T00:00:00.00Z'),
  // boolean | (Optional) If true, the statistics data will be returned in hourly groupping. (optional)
  hourly: false,
  // string | (Optional) The GUID of the video for which the statistics will be returned (optional)
  videoGuid: "videoGuid_example",
};

apiInstance.videoGetVideoStatistics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **dateFrom** | [**Date**] | (Optional) The start date of the statistics. If no value is passed, the last 30 days will be returned. | (optional) defaults to undefined
 **dateTo** | [**Date**] | (Optional) The end date of the statistics. If no value is passed, the last 30 days will be returned. | (optional) defaults to undefined
 **hourly** | [**boolean**] | (Optional) If true, the statistics data will be returned in hourly groupping. | (optional) defaults to false
 **videoGuid** | [**string**] | (Optional) The GUID of the video for which the statistics will be returned | (optional) defaults to undefined


### Return type

**VideoStatisticsModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The heatmap details of the requested video |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoList**
> PaginationListOfVideoModel videoList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoListRequest = {
  // number
  libraryId: 1,
  // number (optional)
  page: 1,
  // number (optional)
  itemsPerPage: 100,
  // string (optional)
  search: "",
  // string (optional)
  collection: "",
  // string (optional)
  orderBy: "date",
};

apiInstance.videoList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **itemsPerPage** | [**number**] |  | (optional) defaults to 100
 **search** | [**string**] |  | (optional) defaults to ''
 **collection** | [**string**] |  | (optional) defaults to ''
 **orderBy** | [**string**] |  | (optional) defaults to 'date'


### Return type

**PaginationListOfVideoModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of videos for the current parameters |  -  |
**401** | The request authorization failed |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoReencodeVideo**
> VideoModel videoReencodeVideo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoReencodeVideoRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
};

apiInstance.videoReencodeVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined


### Return type

**VideoModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The details of the requested video |  -  |
**400** | Original file is missing |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoRepackage**
> VideoModel videoRepackage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoRepackageRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
  // boolean | Marks whether previous file versions should be kept in storage, allows for faster repackage later on. Default is true. (optional)
  keepOriginalFiles: true,
};

apiInstance.videoRepackage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined
 **keepOriginalFiles** | [**boolean**] | Marks whether previous file versions should be kept in storage, allows for faster repackage later on. Default is true. | (optional) defaults to true


### Return type

**VideoModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The details of the requested video |  -  |
**400** | Enterprise DRM is disabled for the library, repackaging not available |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoSetThumbnail**
> StatusModel videoSetThumbnail()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoSetThumbnailRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
  // string (optional)
  thumbnailUrl: "thumbnailUrl_example",
};

apiInstance.videoSetThumbnail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined
 **thumbnailUrl** | [**string**] |  | (optional) defaults to undefined


### Return type

**StatusModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The thumbnail was successfuly set |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoTranscribeVideo**
> StatusModel videoTranscribeVideo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoTranscribeVideoRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
  // string (optional)
  language: "language_example",
  // boolean (optional)
  force: false,
};

apiInstance.videoTranscribeVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined
 **language** | [**string**] |  | (optional) defaults to undefined
 **force** | [**boolean**] |  | (optional) defaults to false


### Return type

**StatusModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The transcription was queued |  -  |
**400** | Invalid request for transcription queue |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoUpdateVideo**
> StatusModel videoUpdateVideo(videoUpdateVideoRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoUpdateVideoRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
  // VideoUpdateVideoRequest
  videoUpdateVideoRequest: null,
};

apiInstance.videoUpdateVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoUpdateVideoRequest** | **VideoUpdateVideoRequest**|  |
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined


### Return type

**StatusModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The thumbnail was successfuly set |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videoUploadVideo**
> StatusModel videoUploadVideo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);

let body:.ManageVideosApiVideoUploadVideoRequest = {
  // number
  libraryId: 1,
  // string
  videoId: "videoId_example",
  // string (optional)
  enabledResolutions: "",
};

apiInstance.videoUploadVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **videoId** | [**string**] |  | defaults to undefined
 **enabledResolutions** | [**string**] |  | (optional) defaults to ''


### Return type

**StatusModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The video was successfuly uploaded |  -  |
**400** | The requested video was already uploaded |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested video was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


