# .ManageCollectionsApi

All URIs are relative to *https://video.bunnycdn.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionCreateCollection**](ManageCollectionsApi.md#collectionCreateCollection) | **POST** /library/{libraryId}/collections | Create Collection
[**collectionDeleteCollection**](ManageCollectionsApi.md#collectionDeleteCollection) | **DELETE** /library/{libraryId}/collections/{collectionId} | Delete Collection
[**collectionGetCollection**](ManageCollectionsApi.md#collectionGetCollection) | **GET** /library/{libraryId}/collections/{collectionId} | Get Collection
[**collectionList**](ManageCollectionsApi.md#collectionList) | **GET** /library/{libraryId}/collections | Get Collection List
[**collectionUpdateCollection**](ManageCollectionsApi.md#collectionUpdateCollection) | **POST** /library/{libraryId}/collections/{collectionId} | Update Collection


# **collectionCreateCollection**
> CollectionModel collectionCreateCollection(collectionUpdateCollectionRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageCollectionsApi(configuration);

let body:.ManageCollectionsApiCollectionCreateCollectionRequest = {
  // number
  libraryId: 1,
  // CollectionUpdateCollectionRequest
  collectionUpdateCollectionRequest: null,
};

apiInstance.collectionCreateCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionUpdateCollectionRequest** | **CollectionUpdateCollectionRequest**|  |
 **libraryId** | [**number**] |  | defaults to undefined


### Return type

**CollectionModel**

### Authorization

[AccessKey](README.md#AccessKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection was successfuly created |  -  |
**401** | The request authorization failed |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **collectionDeleteCollection**
> StatusModel collectionDeleteCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageCollectionsApi(configuration);

let body:.ManageCollectionsApiCollectionDeleteCollectionRequest = {
  // number
  libraryId: 1,
  // string
  collectionId: "collectionId_example",
};

apiInstance.collectionDeleteCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**StatusModel**

### Authorization

[AccessKey](README.md#AccessKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection was successfuly deleted |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested collection was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **collectionGetCollection**
> CollectionModel collectionGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageCollectionsApi(configuration);

let body:.ManageCollectionsApiCollectionGetCollectionRequest = {
  // number
  libraryId: 1,
  // string
  collectionId: "collectionId_example",
  // boolean (optional)
  includeThumbnails: false,
};

apiInstance.collectionGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | [**number**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **includeThumbnails** | [**boolean**] |  | (optional) defaults to false


### Return type

**CollectionModel**

### Authorization

[AccessKey](README.md#AccessKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The details of the requested collection |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested collection was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **collectionList**
> PaginationListOfCollectionModel collectionList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageCollectionsApi(configuration);

let body:.ManageCollectionsApiCollectionListRequest = {
  // number
  libraryId: 1,
  // number (optional)
  page: 1,
  // number (optional)
  itemsPerPage: 100,
  // string (optional)
  search: "",
  // string (optional)
  orderBy: "date",
  // boolean (optional)
  includeThumbnails: false,
};

apiInstance.collectionList(body).then((data:any) => {
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
 **orderBy** | [**string**] |  | (optional) defaults to 'date'
 **includeThumbnails** | [**boolean**] |  | (optional) defaults to false


### Return type

**PaginationListOfCollectionModel**

### Authorization

[AccessKey](README.md#AccessKey)

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

# **collectionUpdateCollection**
> StatusModel collectionUpdateCollection(collectionUpdateCollectionRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageCollectionsApi(configuration);

let body:.ManageCollectionsApiCollectionUpdateCollectionRequest = {
  // number
  libraryId: 1,
  // string
  collectionId: "collectionId_example",
  // CollectionUpdateCollectionRequest
  collectionUpdateCollectionRequest: null,
};

apiInstance.collectionUpdateCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionUpdateCollectionRequest** | **CollectionUpdateCollectionRequest**|  |
 **libraryId** | [**number**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**StatusModel**

### Authorization

[AccessKey](README.md#AccessKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection was successfuly updated |  -  |
**401** | The request authorization failed |  -  |
**404** | The requested collection was not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


