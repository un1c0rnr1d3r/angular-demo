import { ServiceProviderImageCategory } from './service-provider-image-category';

export interface ServiceProviderImage {
  id: string;
  url: string;
  category: ServiceProviderImageCategory;
}
