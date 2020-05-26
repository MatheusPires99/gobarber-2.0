import { container } from "tsyringe";

import IStorageProvider from "./StorageProvider/models/IStorageProvider";
import DiskStorageProvider from "./StorageProvider/implementations/DiskStorageProvider";

import IMailTemplateProvider from "./MailTemplateProvider/models/IMailTemplateProvider";
import HandlebarsMailTemplateProvider from "./MailTemplateProvider/implementations/HandlebarsMailTemplateProvider";

import IMailProvider from "./MailProvider/models/IMailProvider";
import EtherealMailProvider from "./MailProvider/implementations/EtherealMailProvider";

import ICacheProvider from "./CacheProvider/models/ICacheProvider";
import RedisCacheProvider from "./CacheProvider/implementations/RedisCacheProvider";

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  "MailTemplateProvider",
  HandlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  "MailProvider",
  container.resolve(EtherealMailProvider),
);

container.registerInstance<ICacheProvider>(
  "CacheProvider",
  container.resolve(RedisCacheProvider),
);
