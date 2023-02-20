export default {
  INTERNET_DISCONNECTED: 'Please check your connection',
  ADD_GIFT_CARD_ERROR: 'Card number does not match with CIN Number.',
  ZERO_DOLLAR_ITEM_ERROR:
    'Cannot add $0 item to the bag. Any GWP will automatically be sent to the customer.',
};

export const CONFIG_API_URL = 'https://osp-qa.nmgcloudapps.com'; // environment changes.

export const PAYMENT_IFRAME_HEIGHT = 316;

export const LOYALTY_CARD_TYPES = {
  NEX: 'NEX',
  IN_CIRCLE_PERK: 'InCircle Perk',
};

export const SHORT_CARD_TYPE_DICT = {
  VISA: 'VIC',
  MASTERCARD: 'MCC',
  'AMERICAN EXPRESS': 'AXC',
  "DINERS' CLUB": 'DCC',
  DISCOVER: 'NVC',
  JCB: 'JCB',
  'NEIMAN MARCUS': 'PLC',
  'BERGDORF GOODMAN': 'PLC',
  PAYPAL: 'PPC',
  'CHINA UNIONPAY': 'CUP',
  BG: 'PLC',
  NM: 'PLC',
};

export const DEFAULT_PROMO_CODES = ['FREESL2', 'OSPGW'];

export const USER_SESSION = 'user_session';

export const States = [
  {
    name: 'Alabama',
    value: 'AL',
  },
  {
    name: 'Alaska',
    value: 'AK',
  },
  {
    name: 'American Samoa',
    value: 'AS',
  },
  {
    name: 'Arizona',
    value: 'AZ',
  },
  {
    name: 'Arkansas',
    value: 'AR',
  },
  {
    name: 'Armed Forces Atlantic',
    value: 'AA',
  },
  {
    name: 'Armed Forces Europe',
    value: 'AE',
  },
  {
    name: 'Armed Forces Pacific',
    value: 'AP',
  },
  {
    name: 'California',
    value: 'CA',
  },
  {
    name: 'Colorado',
    value: 'CO',
  },
  {
    name: 'Connecticut',
    value: 'CT',
  },
  {
    name: 'Delaware',
    value: 'DE',
  },
  {
    name: 'District Of Columbia',
    value: 'DC',
  },
  {
    name: 'Florida',
    value: 'FL',
  },
  {
    name: 'Georgia',
    value: 'GA',
  },
  {
    name: 'Guam',
    value: 'GU',
  },
  {
    name: 'Hawaii',
    value: 'HI',
  },
  {
    name: 'Idaho',
    value: 'ID',
  },
  {
    name: 'Illinois',
    value: 'IL',
  },
  {
    name: 'Indiana',
    value: 'IN',
  },
  {
    name: 'Iowa',
    value: 'IA',
  },
  {
    name: 'Kansas',
    value: 'KS',
  },
  {
    name: 'Kentucky',
    value: 'KY',
  },
  {
    name: 'Louisiana',
    value: 'LA',
  },
  {
    name: 'Maine',
    value: 'ME',
  },
  {
    name: 'Maryland',
    value: 'MD',
  },
  {
    name: 'Massachusetts',
    value: 'MA',
  },
  {
    name: 'Michigan',
    value: 'MI',
  },
  {
    name: 'Minnesota',
    value: 'MN',
  },
  {
    name: 'Mississippi',
    value: 'MS',
  },
  {
    name: 'Missouri',
    value: 'MO',
  },
  {
    name: 'Montana',
    value: 'MT',
  },
  {
    name: 'Nebraska',
    value: 'NE',
  },
  {
    name: 'Nevada',
    value: 'NV',
  },
  {
    name: 'New Hampshire',
    value: 'NH',
  },
  {
    name: 'New Jersey',
    value: 'NJ',
  },
  {
    name: 'New Mexico',
    value: 'NM',
  },
  {
    name: 'New York',
    value: 'NY',
  },
  {
    name: 'North Carolina',
    value: 'NC',
  },
  {
    name: 'North Dakota',
    value: 'ND',
  },
  {
    name: 'Ohio',
    value: 'OH',
  },
  {
    name: 'Oklahoma',
    value: 'OK',
  },
  {
    name: 'Oregon',
    value: 'OR',
  },
  {
    name: 'Palau',
    value: 'PW',
  },
  {
    name: 'Pennsylvania',
    value: 'PA',
  },
  {
    name: 'Puerto Rico',
    value: 'PR',
  },
  {
    name: 'Rhode Island',
    value: 'RI',
  },
  {
    name: 'South Carolina',
    value: 'SC',
  },
  {
    name: 'South Dakota',
    value: 'SD',
  },
  {
    name: 'Tennessee',
    value: 'TN',
  },
  {
    name: 'Texas',
    value: 'TX',
  },
  {
    name: 'Utah',
    value: 'UT',
  },
  {
    name: 'Vermont',
    value: 'VT',
  },
  {
    name: 'Virgin Islands',
    value: 'VI',
  },
  {
    name: 'Virginia',
    value: 'VA',
  },
  {
    name: 'Washington',
    value: 'WA',
  },
  {
    name: 'West Virginia',
    value: 'WV',
  },
  {
    name: 'Wisconsin',
    value: 'WI',
  },
  {
    name: 'Wyoming',
    value: 'WY',
  },
];

export const shipmentMethodsMap = [
  {
    id: 'SL0',
    name: 'Same Day Delivery',
    term: 'Order by noon, weekdays only',
    value: '35.00',
  },
  {
    id: 'SL1',
    name: 'Next Business Day',
    term: '1-2 business days',
    value: '25.00',
  },
  {
    id: 'SL2',
    name: 'Two Day Shipping',
    term: '2-3 business days',
    value: '15.00',
  },
  {
    id: 'SL3',
    name: 'Standard Delivery',
    term: '3-5 business days',
    value: '0.00',
  },
  {
    id: 'SL4',
    name: 'Economy',
    term: '5-8 business days',
    value: '0.00',
  },
];

export const shipmentMethodsMapStoreSends = [
  {
    id: 'SL0',
    name: 'Same Day Delivery',
    term: 'Order by noon, weekdays only',
    value: '35.00',
  },
  {
    id: 'SL1',
    name: 'Surface',
    term: '1-2 business days',
    value: 'Free',
  },
  {
    id: 'SL2',
    name: 'Messenger',
    term: '3-5 hours once brought to shipping',
    value: '30.00',
  },
  {
    id: 'SL3',
    name: 'Next day',
    term: 'Delivered the next day by 8pm',
    value: '20.00',
  },
  {
    id: 'SL4',
    name: 'Next day Am or Saturday',
    term: 'Next day by noon',
    value: '35.00',
  },
  {
    id: 'SL5',
    name: '2nd Day Air',
    term: '',
    value: '15.00',
  },
  {
    id: 'SL7',
    name: 'Oversize /Puerto Rico',
    term: '5-7 Business days',
    value: '50.00',
  },
];

export const AD_GROUP_LIST = [
  {name: 'G_OSP_NM_STORE_MANAGER', label: 'Store Manager', brand: 'NM'},
  {name: 'G_OSP_NM_DIGITAL_STYLIST', label: 'Digital Stylist', brand: 'NM'},
  {name: 'G_OSP_NM_STYLIST_MANAGER', label: 'Stylist Manager', brand: 'NM'},
  {name: 'G_OSP_NM_STORE_ASSOCIATE', label: 'Store Associate', brand: 'NM'},
  {
    name: 'G_OSP_NM_DIGITAL_ClIENT_ADVISOR',
    label: 'Digital Client Advisor',
    brand: 'NM',
  },
  {
    name: 'G_OSP_NM_STORE_GENERAL_MANAGER',
    label: 'General Manager',
    brand: 'NM',
  },
  {name: 'G_OSP_BG_STORE_ASSOCIATE', label: 'Store Associate', brand: 'BG'},
  {
    name: 'G_OSP_BG_STORE_GENERAL_MANAGER',
    label: 'General Manager',
    brand: 'BG',
  },
  {name: 'G_OSP_BG_STORE_MANAGER', label: 'Store Manager', brand: 'BG'},
  {name: 'G_OSP_BG_INSTORE_SALES', label: 'Instore Sales', brand: 'BG'},
  {name: 'G_OSP_CONVOS', label: 'Convos user', brand: 'NM'},
  {name: 'G_OSP_BG_CONVOS', label: 'Convos user', brand: 'BG'},

  // Test AD groups
  {
    name: 'G_OSP_NM_STORE_ASSOCIATE_TEST',
    label: 'Store Associate Test',
    brand: 'NM',
  },
  {
    name: 'G_OSP_NM_STORE_MANAGER_TEST',
    label: 'Store Manager Test',
    brand: 'NM',
  },
  {
    name: 'G_OSP_DigitalStylist_TEST',
    label: 'Digital Stylist Test',
    brand: 'NM',
  },
  {
    name: 'G_OSP_NM_STYLIST_MANAGER_TEST',
    label: 'Stylist Manager Test',
    brand: 'NM',
  },
  {
    name: 'G_OSP_BG_STORE_ASSOCIATE_TEST',
    label: 'Store Associate Test',
    brand: 'BG',
  },
  {
    name: 'G_OSP_BG_STORE_MANAGER_TEST',
    label: 'Store Manager Test',
    brand: 'BG',
  },
  {
    name: 'G_OSP_BG_STORE_GENERAL_MANAGER_TEST',
    label: 'Store General Manager Test',
    brand: 'BG',
  },
  {
    name: 'G_OSP_BG_INSTORE_SALES_TEST',
    label: 'Instore Sales Test',
    brand: 'BG',
  },
  {name: 'G_OSP_CONVOS_TEST', label: 'Convos user test', brand: 'NM'},
  {name: 'G_OSP_BG_CONVOS_TEST', label: 'Convos user test', brand: 'BG'},
];

export const PACKAGING_TYPES = {
  NO_PACKAGING: 'NO',
  GIFT_PACKAGING: '500',
};

export const GIFT_NOTE_TYPES = {
  NO_GIFT_NOTE: '0',
  FREE_BLANK_NOTE: '1',
  FREE_CUSTOM_MESSAGE: '2',
};

export const PRICE_ADJUST = {
  MAX_PRICE: 0.3,
  ERROR_MSG: 'Cannot adjust more than 30%',
  INVALID_MSG: 'Invalid adjustment',
  ERROR_MSG_MAX_LENGTH_256: 'Max length is 256 symbols',
  ERROR_MSG_REQUIRED: 'Required',
  CONCIERGE_TYPES: [
    {value: 'DOLLAR', name: 'Dollar Off'},
    {value: 'PERCENT', name: 'Percent Off'},
    {value: 'OVERRIDE', name: 'Price override'},
  ],
  TYPES: [
    {value: 'DOLLAR', name: 'Dollar Off'},
    {value: 'PERCENT', name: 'Percent Off'},
    {value: 'OVERRIDE', name: 'Price override'},
    {value: 'ADJUSTMENT', name: 'Price Adjustment'},
  ],
  TYPES_CHARS: {
    DOLLAR: '- $',
    PERCENT: '%',
    OVERRIDE: '$',
    ADJUSTMENT: '$$',
  },
  CONCIERGE_REASONS: [
    {value: 'Competitive Price Match', name: 'Competitive Price Match'},
    {value: 'Omni Price Match', name: 'Omni Price Match'},
    {value: 'Promotion Error', name: 'Promotion Error'},
  ],
  REASONS: [
    {value: 'Competitive Price Match', name: 'Competitive Price Match'},
    {value: 'Omni Price Match', name: 'Omni Price Match'},
    {value: 'Promotion Error', name: 'Promotion Error'},
    {value: 'Incorrect Dollar Value', name: 'Incorrect Dollar Value'},
  ],
  PAYLOAD: {
    DOLLAR: 'DOLLAR_OFF',
    PERCENT: 'PERCENT_OFF',
    OVERRIDE: 'MARKDOWN_NEWPRICE',
    ADJUSTMENT: 'ADD_NEWPRICE',
  },
};

export const SIGNATURE_PAGE_VALIDATION = {
  INVALID_PHONE_NO: 'Invalid Phone Number',
  ERROR_MSG_REQUIRED: 'Required',
};

export const PRODUCT_ROOT_CATEGORY_IDS = {
  BG: {
    men: 'cat202802',
    women: 'cat01',
    home: 't2cat392904',
  },
  NM: {
    men: 'cat000470',
    women: 'cat01',
    home: 'cat000553',
  },
};

export const PLP_SORTING_FILTERS = [
  {
    name: 'Price: Lowest first',
    value: 'Price: Lowest first',
    sortBy: 'PRICE',
    sortDirection: 'ASC',
  },
  {
    name: 'Price: Highest first',
    value: 'Price: Highest first',
    sortBy: 'PRICE',
    sortDirection: 'DESC',
  },
  {
    name: 'Newest first',
    value: 'Newest first',
    sortBy: 'CREATED',
    sortDirection: 'DESC',
  },
  {
    name: 'Oldest first',
    value: 'Oldest first',
    sortBy: 'CREATED',
    sortDirection: 'ASC',
  },
];

export const PLP_FILTERS_OPTIONS = [
  {
    name: 'Availability',
    value: 'Availability',
    key: 'availability',
    pnavigation: 'ProductAvaliabilityFilter',
  },
  {
    name: 'Designer',
    value: 'Designer',
    key: 'brands',
    pnavigation: 'ProductDesignerFilter',
  },
  {
    name: 'Color',
    value: 'Color',
    key: 'colors',
    pnavigation: 'ProductColorFilter',
  },
  {
    name: 'Price',
    value: 'Price',
    key: 'priceTypes',
    pnavigation: 'ProductPriceFilter',
  },
  {
    name: 'Size',
    value: 'Size',
    key: 'sizeLabels,sizes',
    pnavigation: 'ProductAvaliabilityFilter',
  },
  {
    name: 'Style',
    value: 'style',
    key: 'styles',
    pnavigation: 'ProductAvaliabilityFilter',
  },
];

export const CLIENT_GROUPS_SORT_OPTIONS = [
  {
    name: 'Newest First',
    value: 'Newest First',
  },
  {
    name: 'Oldest First',
    value: 'Oldest First',
  },
  {
    name: 'A to Z',
    value: 'A to Z',
  },
  {
    name: 'Clients: Most to least',
    value: 'CLients: Most to least',
  },
  {
    name: 'Clients: Least to most',
    value: 'CLients: Least to most',
  },
];

export const CLIENT_LIST_SORTING_FILTERS = [
  {
    name: 'Newest first',
    value: 'Newest first',
    sortBy: 'newestFirst',
  },
  {
    name: 'Oldest first',
    value: 'Oldest first',
    sortBy: 'oldestFirst',
  },
  {
    name: 'First Name',
    value: 'Alphabetical - First Name',
    sortBy: 'alphabet',
  },
  {
    name: 'Last Name',
    value: 'Alphabetical - Last Name',
    sortBy: 'lastName',
  },
  {
    name: 'Annual Spend: Lowest first',
    value: 'Annual Spend: Lowest first',
    sortBy: 'annualSpendAsc',
  },
  {
    name: 'Annual Spend: Highest first',
    value: 'Annual Spend: Highest first',
    sortBy: 'annualSpendDesc',
  },
];

export const RECENT_ORDERS_SORTING_FILTERS = [
  {
    name: 'Newest - Oldest',
    value: 'Newest - Oldest',
  },
  {
    name: 'Oldest - Newest',
    value: 'Oldest - Newest',
  },
  {
    name: '$$$ - $',
    value: '$$$ - $',
  },
  {
    name: '$ - $$$',
    value: '$ - $$$',
  },
];

export const DIVISIONS_LIST = {
  11: "Women's Apparel",
  14: 'Contemporary Apparel',
  15: "Children's",
  18: 'Intimate Apparel',
  21: 'Gifts & Home',
  34: 'Ladies Shoes',
  35: 'Designer Handbags',
  36: 'Fashion Accessories',
  44: "Men's",
  53: 'Beauty',
  56: 'Jewelry',
  81: 'Fine Apparel',
  98: 'Non Retail',
};

export const clientAssetsQueryParams = {
  promo: 'PROMO',
  point: 'POINT',
};

export const CLIENT_FILTER_OPTIONS = {
  INCIRCLE_LEVEL: {label: 'InCircle Level', key: 'inCircleLevel'},
  CONTACTED: {label: 'Contacted', key: 'contactedFrom'},
  SHOPPED: {label: 'Shopped', key: 'shoppedFrom'},
  MARKETING_EVENT: {label: 'Marketing Event', key: ''},
  DESIGNER: {label: 'Designer', key: 'designers'},
  DIVISIONS: {label: 'Divisions', key: 'divisions'},
  BADGES: {label: 'Badges', key: 'withNoBadges'},
  GIFT_CARDS_AVAILABLE: {label: 'Gift Cards Available', key: 'withAssets'},
};

export const PROP_TYPE_ROLES_ENUM = [
  'back_of_house',
  'stylist',
  'stylist_manager',
  'store_associate',
  'store_manager',
  'store_general_manager',
  'client_advisor',
  'instore_sales',
];

export {default as STORE_LIST} from './stores';
export {default as STORE_PHONE_LIST} from './storePhoneNumbers';

export const associateTitleArray = [
  {
    label: 'Personal Stylist',
    value: 'Personal Stylist',
  },
  {
    label: 'Client Advisor',
    value: 'Client Advisor',
  },
  {
    label: 'Personal Shopper',
    value: 'Personal Shopper',
  },
  {
    label: 'Associate Stylist',
    value: 'Associate Stylist',
  },
  {
    label: 'Senior Personal Styling Assistant',
    value: 'Senior Personal Styling Assistant',
  },
  {
    label: 'Specialist',
    value: 'Specialist',
  },
  {
    label: 'Digital Personal Shopper',
    value: 'Digital Personal Shopper',
  },
  {
    label: 'Digital Personal Stylist',
    value: 'Digital Personal Stylist',
  },
  {
    label: 'Digital Personal Advisor',
    value: 'Digital Personal Advisor',
  },
  {
    label: 'Customer Experience Specialist',
    value: 'Customer Experience Specialist',
  },
  {
    label: 'Lead Docent',
    value: 'Lead Docent',
  },
  {
    label: 'Docent',
    value: 'Docent',
  },
];

export const associateDepartmentArray = [
  {
    label: 'Handbags & Accessories',
    value: 'Handbags & Accessories',
  },
  {
    label: 'Bridal',
    value: 'Bridal',
  },
  {
    label: 'Little BG',
    value: 'Little BG',
  },
  {
    label: 'Contemporary Collections',
    value: 'Contemporary Collections',
  },
  {
    label: 'Beauty',
    value: 'Beauty',
  },
  {
    label: 'European Designer Collections',
    value: 'European Designer Collections',
  },
  {
    label: 'Advanced Designer Collections',
    value: 'Advanced Designer Collections',
  },
  {
    label: 'Jewelry',
    value: 'Jewelry',
  },
  {
    label: 'Decorative Home',
    value: 'Decorative Home',
  },
  {
    label: 'Couture Collections',
    value: 'Couture Collections',
  },
  {
    label: 'Modernist Collections',
    value: 'Modernist Collections',
  },
  {
    label: "Linda's Shop",
    value: "Linda's Shop",
  },
  {
    label: 'Lingerie',
    value: 'Lingerie',
  },
  {
    label: "Ladies' Shoe",
    value: "Ladies' Shoe",
  },
  {
    label: 'Luxury Sportswear & Furnishings',
    value: 'Luxury Sportswear & Furnishings',
  },
  {
    label: "Men's Tailored Clothing",
    value: "Men's Tailored Clothing",
  },
  {
    label: 'Studio Services',
    value: 'Studio Services',
  },
  {
    label: "Men's Designer Sportswear",
    value: "Men's Designer Sportswear",
  },
  {
    label: "Men's Shoes",
    value: "Men's Shoes",
  },
  {
    label: 'Personal Stylist',
    value: 'Personal Stylist',
  },
];

export const NO_IMAGE_AVAILABLE = {
  NM: 'https://neimanmarcus.scene7.com/is/image/NeimanMarcus/vnt_error',
  BG: '../assets/images/no_image_available_bg.png',
};

export const BG_BRAND_IDENTIFIER = 'G_OSP_BG';
export const BRAND_PROFILES = {BG: 'BG', NM: 'NM'};
export const BRAND_NAMES = {NM: 'Neiman Marcus', BG: 'Bergdorf Goodman'};

export const ORDER_HISTORY_SORT_OPTIONS = [
  {title: 'NEWEST', sortBy: 'orderDate', sortType: 'desc'},
  {title: 'OLDEST', sortBy: 'orderDate', sortType: 'asc'},
  {title: '$$$ - $', sortBy: 'orderTotal', sortType: 'desc'},
  {title: '$ - $$$', sortBy: 'orderTotal', sortType: 'asc'},
];

export const ACHIVEMENTS = {
  rung2: {
    title: 'Full-Price Achievement',
    description: 'Purchased at least two full-priced items in last 36 months',
    image: require('../assets/achievementsIcons/ic_full_price.svg'),
  },

  rung3: {
    title: 'Wardrobe Achievement',
    description: 'Shopped in 5+ divisions in the last 36 months',
    image: require('../assets/achievementsIcons/ic_wardrobe.svg'),
  },

  rung4: {
    title: 'Upsell Achievement',
    description:
      'Made at least two single-item purchases of $1,000 or more in last 36 months',
    image: require('../assets/achievementsIcons/ic_upsell.svg'),
  },

  rung5: {
    title: 'Relationship Achievement',
    description: 'Client has at least one dedicated associate',
    image: require('../assets/achievementsIcons/ic_relationship.svg'),
  },

  rung6: {
    title: 'Big Ticket Achievement',
    description:
      'Made a single-item purchase of $50,000 or more in last 36 months',
    image: require('../assets/achievementsIcons/ic_big_ticket.svg'),
  },
};

export const SALES_FILTERS_OPTIONS = [
  {
    name: 'Department',
    value: 'Department',
  },
  {
    name: 'Designer',
    value: 'Designer',
  },
  {
    name: 'Channel',
    value: 'Channel',
  },
];
export const SALES_DATE_SORT_OPTIONS = [
  {
    id: 'Today',
    title: 'Today',
    value: 'TODAY',
  },
  {
    id: 'Week to Date',
    title: 'Week to Date',
    value: 'WEEK_TO_DATE',
  },
  {
    id: 'Month to Date',
    title: 'Month to Date',
    value: 'MONTH_TO_DATE',
  },
  {
    id: 'Quarter to Date',
    title: 'Quarter to Date',
    value: 'QUARTER_TO_DATE',
  },
  {
    id: 'Season to Date',
    title: 'Season to Date',
    value: 'SEASON_TO_DATE',
  },
  {
    id: 'Year to Date',
    title: 'Year to Date',
    value: 'YEAR_TO_DATE',
  },
  {
    id: 'Custom Range',
    title: 'Custom Range',
    value: 'CUSTOM',
  },
];

export const NOTIFY_ME_OPTIONS = [
  {
    value: '24h',
    name: 'Tomorrow',
  },
  {
    value: '7d',
    name: 'Next Week',
  },
  {
    value: '30d',
    name: 'Next Month',
  },
];

export const SELECTE_DATE_NETSALES = [
  {
    id: 1,
    value: 'WEEK_TO_DATE',
    title: 'This Week',
  },
  {
    id: 2,
    value: 'MONTH_TO_DATE',
    title: 'This Month',
  },
  {
    id: 3,
    value: 'QUARTER_TO_DATE',
    title: 'This Quarter',
  },
  {
    id: 4,
    value: 'YEAR_TO_DATE',
    title: 'This Year',
  },
];

export const SELECTE_DATE_SALES_DETAILS = [
  {
    id: 1,
    value: 'QUARTER_TO_DATE',
    title: 'This Quarter',
  },
  {
    id: 2,
    value: 'YEAR_TO_DATE',
    title: 'This Year',
  },
];

export const PERFORMANCE_ASSOCIATE_FILTER = [
  {
    value: 'WEEK_TO_DATE',
    name: 'This Week',
  },
  {
    value: 'MONTH_TO_DATE',
    name: 'This Month',
  },
  {
    value: 'QUARTER_TO_DATE',
    name: 'This Quarter',
  },
  {
    value: 'YEAR_TO_DATE',
    name: 'This Year',
  },
];

export const DEFAULT_COUNTRY_SELECTED = {
  value: 'US',
  name: 'United States',
};

export const GROUPS = {
  MANAGER: 'G_OSP_Manager',
  STYLIST: 'G_OSP_DigitalStylist',
  TESTER: 'G_OSP_DigitalStylist_TEST',
};

export const ROLES = {
  MANAGER: 'manager',
  STYLIST: 'stylist',
  CLIENT: 'client',
  TESTER: 'tester',
};

export const SUPERUSER_AD_GROUP = 'G_OSP_SUPERUSER';

export const OSP_PRODUCT_SHARE_EXPIRY_DATE = 30;

export const DAYS_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
export const OSP_PRODUCT_SHARE_EXPIRY = 'osp_lxts';

export const NON_CONNECT_ISSUES_HELP_DESK_PHONE = '+1 (844) 664-4040';

export const CREATE_A_LOOK_ARRAY = [
  {
    id: 'CreatenewLook',
    title: 'Create new Look',
    value: 'Create new Look',
  },
  {
    id: 'AddtoexistingLook',
    title: 'Add to existing Look',
    value: 'Add to existing Look',
  },
  {
    id: 'CreateLookfromselectedProduct ',
    title: 'Create Look from selected Product ',
    value: 'Create Look from selected Product ',
  },
  {
    id: 'Auto-populateHead-to-toeLook',
    title: 'Auto-populate Head-to-toe Look',
    value: 'Auto-populate Head-to-toe Look',
  },
  {
    id: 'Auto-populatewithSimilarProducts',
    title: 'Auto-populate with Similar Products',
    value: 'Auto-populate with Similar Products',
  },
];
