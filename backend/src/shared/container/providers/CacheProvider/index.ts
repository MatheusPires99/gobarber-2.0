import { container } from "tsyringe";

import ICacheProvider from "./models/ICacheProvider";
import RedisCacheProvider from "./implementations/RedisCacheProvider";

container.registerSingleton<ICacheProvider>(
  "CacheProvider",
  RedisCacheProvider,
);
