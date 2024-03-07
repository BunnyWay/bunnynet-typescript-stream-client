# .OEmbedApi

All URIs are relative to *https://video.bunnycdn.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oEmbedGetOEmbed**](OEmbedApi.md#oEmbedGetOEmbed) | **GET** /OEmbed | 


# **oEmbedGetOEmbed**
> VideoOEmbedModel oEmbedGetOEmbed()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OEmbedApi(configuration);

let body:.OEmbedApiOEmbedGetOEmbedRequest = {
  // string (optional)
  url: "url_example",
  // number (optional)
  maxWidth: 1,
  // number (optional)
  maxHeight: 1,
  // string (optional)
  token: "",
  // number (optional)
  expires: 0,
};

apiInstance.oEmbedGetOEmbed(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | [**string**] |  | (optional) defaults to undefined
 **maxWidth** | [**number**] |  | (optional) defaults to undefined
 **maxHeight** | [**number**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to ''
 **expires** | [**number**] |  | (optional) defaults to 0


### Return type

**VideoOEmbedModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


