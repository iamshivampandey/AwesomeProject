// USER PROFILE
export const PROFILE_EMAIL_SIGNATURE =
  'osp-email-templates-svc/v1/renderEmailTemplate/email-signature';
export const PROFILE_EMAIL_SIGNATURE_DATA =
  'osp-email-templates-svc/v1/emailSignatureData';
export const ASSOCIATE_WIDGET_API = 'osp-associate-hierarchy/associate/widget';
export const GET_CONCIERGE_ITEMS = 'osp-cart/v1/CUST_ID@concierge';
export const GET_SFL_ITEMS_API = 'osp-cart/v1/CUST_ID@conciergeSaveForLater';
export const GET_SHOOPING_BAG_ITEMS = 'osp-cart/v1/CUST_ID@personal';
export const GET_PRODUCT_DETAILS = 'osp-products/v4/?product_id=';
export const GET_SHOPPING_BAG_PRODUCTS_DETAIL_API =
  'osp-products/v3/?product_id=';
export const GET_CUSTOMER_PROFILE = 'osp-profile/v1/customers/CUST_ID';
export const ADD_REMOVE_PRODUCT_API = '/osp-cart/v1/CUST_ID@concierge';
export const ADD_REMOVE_SFL_PRODUCT_API =
  '/osp-cart/v1/CUST_ID@conciergeSaveForLater';
export const ADD_GIFT_CARD_API = '/payment/addGiftCard';
export const REVIEW_ORDER_API = '/order/v1/review';
export const PLACE_ORDER_API = '/order/v1/submit';
export const GET_LOYALTY_DATA_API = '/osp-profile/v1/loyalty';
export const GET_CLIENT_PROFILE = '/osp-profile/v3/profiles';
export const CREATE_ACCOUNT_URL = '/osp-profile/v1/profiles';
export const CREATE_ACCOUNT_URL_EMAIL = '/osp-profile/v1/customerByEmail';
export const FETCH_STORES = 'osp-store-location/v1/stores/?freeFormAddress=';
export const FETCH_CURBSIDE_ADDRESS_API = 'osp-store-location/v1/stores/';

//NEW STORE TRANSCATION
export const GET_PRODUCT_DETAILS_NST = 'osp-products/v3/pos/product/';

export const FETCH_BILLING_ADDRESS = 'osp-profile/v1/customers/';

export const POST_REVIEW_ORDER_API = 'order/v3/review/pos';
export const POST_PRODUCT_DETAILS_API = 'osp-catalog/v5/product';

export const PLACE_ORDER_STORE_TAKES_API = 'order/v1/pos/submit/takes';
export const PLACE_ORDER_STORE_SENDS_API = 'order/v1/pos/submit/sends';

export const SEND_MAIL_API = 'inbox/v2/messages';

// Client Related API

// Get all clients
export const GET_ALL_CLIENT_LIST = '/osp-cc-customers/v2/customers?';

// Get client account details
export const GET_CLIENT_ACCOUNTS =
  '/osp-profile/v3/profiles/PROFILE_ID?internalStorage=true';

// client groups
export const CLIENT_GROUPS_API = '/osp-cc-groups/v2/groups?defaultGroups=false';

// create, update and delete group
export const CREATE_UPDATE_DELETE_GROUPS_API = '/osp-cc-groups/v2/groups';

// get default client groups
export const GET_CLIENTS_DEFAULT_GROUPS = 'osp-cc-groups/v2/defaultGroups';

// client list for group
export const GROUPS_CLIENT_LIST_API =
  '/osp-cc-groups/v2/groups/GROUP_ID/customers';

export const ADD_FAMILY_API = id =>
  `osp-profile/v1/customers/${id}/info/relatives`;

// Special dates
export const ADD_DATE_SPECIAL_API = id =>
  `osp-profile/v1/customers/${id}/info/dates`;

// Update Info
export const UPDATE_INFO_API = id => `osp-profile/v1/customers/${id}/info`;

export const UPDATE_ADDRESS_API = id =>
  `osp-profile/v1/customers/${id}/addresses`;

// filter-options API
export const POST_FILTER_OPTION = '/osp-catalog/v5/filter-options';

// product-details API
export const GET_PDP_PRODUCT_DETAILS =
  '/osp-products/v4/productdetails/PROD_ID';

// associate order history api
export const ASSOCIATE_ORDER_HISTORY_API =
  '/osp-order-history/v2/retrieve/associateOrders';

// Client order history api
export const CLIENT_ORDER_HISTORY_API =
  '/osp-order-history/v2/retrieve/customerOrders';

export const ORDER_METRICS_DETAILS = '/osp-order-history/v2/ID/OrderMetrics';

export const POST_SUBMIT_PAYMENT_API = '/payment/submitPayment';
export const PAYMENT_API = '/osp-profile/v1/customers/';
export const ADD_AN_ADDRESS_API =
  '/osp-profile/v1/customers/PROFILEID/shipping';

// Create, get, delete notes api
export const NOTES_API = '/osp-profile/v1/customers/profileId/notes/';

export const GET_CLIENT_ORDER_DETAILS =
  '/osp-order-history/v3/fetchOrderDetails/order/ORDER_ID/channel/CHANNEL_NAME';

// Get, Create reminder api
export const REMINDER_API = '/osp-reminders/v1/reminders/';

export const GET_SCORECARD_DATA =
  '/osp-associate-scorecard/v1/finalscorecard/id/details';

// get reminder api
export const GET_REMINDER_API =
  '/osp-reminders/v1/reminders?profileId=profileIds';

// dashboard reminder count api
export const GET_REMINDERS_COUNT = '/osp-reminders/v1/dashboard';

// Update reminder api
export const UPDATE_REMINDER_API = '/osp-reminders/v1/reminders/reminderId';

export const GET_ALTERATION_COUNT =
  '/osp-alterations-service/v1/alterations/count';
export const GET_ALTERATION_SEARCH =
  '/osp-alterations-service/v1/alterations/search';
export const GET_ALTERATION_DETAILS =
  '/osp-alterations-service/v1/alterations/ID:';

export const GET_SALES_COUNT =
  '/osp-associate-performance/v3/data/ASSOCIATE_ID/sales';

// API for Sales matrics under Performance
export const POST_SALES_METRICS =
  '/osp-associate-performance/v4/data/ASSOCIATE_ID/metrics';

// API for associates order items (transactions)
export const POST_ASSOCIATE_ORDER_ITEMS =
  '/osp-associate-performance/v3/data/ASSOCIATE_ID/associateOrderItemsV2';

// API for filters in Sales
export const POST_SALES_FILTERS =
  '/osp-associate-performance/v2/data/ASSOCIATE_ID/filter-options';
export const GET_SCORECARD_COUNT =
  '/osp-associate-scorecard/v1/scorecard/ASSOCIATE_ID/outreach?timePeriod=';

export const POST_SALES_CLIENTS =
  '/osp-associate-performance/v1/associate/ASSOCIATE_ID/sales/metrics/clients';
export const IFRAME_API = '/payment/iframeUrl';

export const GET_NM_PROFILE_PAYMENT_UCA =
  '/uca-payment/associate/v1/profiles/PROFILE_ID/payments';
export const GET_NM_PROFILE_ADDRESS_UCA =
  '/uca-address/associate/v1/profiles/PROFILE_ID/addresses';
export const GET_NM_PROFILE_ATTRIBUTTES_UCA =
  '/accounts/v1/associates/ASSOCIATE_ID/customers/PROFILE_ID/attributes';

export const GET_BG_PROFILE_PAYMENT_UCA =
  '/uca-payment/associate/v1/profiles/PROFILE_ID/payments';
export const GET_BG_PROFILE_ADDRESS_UCA =
  '/uca-address/associate/v1/profiles/PROFILE_ID/addresses';
export const GET_BG_PROFILE_ATTRIBUTTES_UCA =
  '/accounts/v1/associates/ASSOCIATE_ID/customers/PROFILE_ID/attributes';

export const ZERO_DOLLAR_AUTH_API = '/payment/submitPayment';

export const ADD_CUSTOMER_CARD_API =
  '/osp-profile/v1/customers/PROFILE_ID/payments';

// API  to subscribe to a product
export const ADD_TO_WATCHLIST_API = '/osp-sku-tracker/v2/subscription';
export const CREATE_ACCOUNT_BY_EMAIL = '/osp-profile/v1/customerByEmail';

export const EMAIL_CLIENT_DATA_CORRECTION =
  'osp-email-templates-svc/v1/renderEmailTemplate/email-client-data-correction';

export const PRODUCT_CATEGORIES_API = 'osp-catalog/v3/categories';

export const GET_GROUPS_DETAIL_API = '/osp-cc-groups/v2/groups/';

export const GET_SIMILAR_PRODUCTS =
  'https://neimanmarcus.stylyze.com/api/v4/styleboards/from-similar-products?accId=ACC_ID&subProductId=ITEM_ID';

export const GET_MEMO_ASSOCIATE =
  '/osp-memo-service/v1/associate/memoMetrics?associatePin=ASSOCIATE_ID';

export const GET_MEMO_ITEM = '/osp-memo-service/v1/associate/memoItems';

export const GET_MEMO_DETAIL = '/osp-memo-service/v1/memoDetails';

export const GET_MEMO_ITEM_SEARCH = '/osp-memo-servicev1/associate/memoItems';

export const GET_PRODUCT_WISHLIST = '/osp-sku-tracker/v1/skuTrackers';

export const GET_PRODUCT_DETAIL = '/osp-products/v3/productdetails';

export const GET_SAVED_CLIENT_LIST = '/osp-profile/v3/profiles';

export const GET_WISHLIST_PRODUCT_DELETE = '/osp-sku-tracker/v1/skuTracker/sku';

export const GET_REMOVE_CLIENT_WISHLIST = 'osp-sku-tracker/v1/skuTracker/sku';

export const GET_SMS_LOOK_TEMPLATE =
  '/osp-email-templates-svc/v1/generateLooksPreview/LOOKID_EXPIRY_DATE?template=sms-look-template';

export const CONCIERGE_RESTRICTION_API =
  '/osp-products/v1/vendor/VENDOR_ID/restrictions';
