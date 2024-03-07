# Deno

The [Deno](https://github.com/denoland/deno) client is genrated using the (currently) experimental [typescript generator](https://openapi-generator.tech/docs/generators/typescript).


## Known issues

Generated markdown files are missing identifiers in certain places. For example:

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManageVideosApi(configuration);
```

## Example

```typescript
let videoApi = new ManageVideosApi(createConfiguration(
    {
        authMethods: {
            "AccessKey": "STREAM_ACCESS_KEY"
        }
    }
));

console.log(JSON.stringify(await videoApi.videoList(libraryId)));
```
