export const LOCALE = 'LOCALE';
export const LOCATION = 'LOCATION';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const ALL = 'all';
export const DEFAULT_PAGE_SIZE = Number(
  process.env.VUE_APP_PAGE_SIZE || 10
);
export const CUSTOMER = 'CUSTOMER';
export const CHANNEL = 'CHANNEL';

export const CART_METADATA = {
  CART_METADATA_KEY: 'dovetech-cartMetadata',
  COUPON_CODES: 'dovetech-couponCodes',
  CART_ACTION: 'dovetech-cartAction',
};
