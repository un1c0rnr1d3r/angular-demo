import { ServiceProviderImage } from './service-provider-image';
import { ServiceProviderType } from './service-provider-type';

export interface ServiceProvider {
  id: string;
  name: string;
  type: ServiceProviderType;
  address: string;
  phoneNumber?: string;
  email?: string;
  images?: Array<ServiceProviderImage>;
  verified: boolean;
  lastModifiedDate: string;
}
