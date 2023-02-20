//convert date string to mm/dd/yyyy
export function stringToDate({dateStr, seperator = '/'}) {
  const date = new Date(dateStr);
  let a =
    ('0' + (date.getMonth() + 1)).slice(-2) +
    seperator +
    ('0' + date.getDate()).slice(-2) +
    seperator +
    date.getFullYear();
  return a;
}
export function mddyyyyStrToDate(dateStr) {
  const date = new Date();
  if (dateStr) {
    const array = dateStr.split('/');
    date.setMonth(Number(array[0]));
    date.setDate(Number(array[1]));
    date.setFullYear(Number(array[2]));
    return date;
  } else {
    return null;
  }
}

//convert date string to yyyy-mm-dd
export function stringToDateYearMonthDate({dateStr, seperator = '-'}) {
  const date = dateStr.split('/');
  let a = date[2] + seperator + date[0] + seperator + date[1];
  return a;
}

// convert string number to 10000 - 10,000
export function numberToCommaSeperated({value}) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// convert number 110000.11 to $1,10,000
export function FormattedNumber(value) {
  if (value) {
    var number = Math.round(value);
    number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    number = '$' + number;
    return number;
  } else {
    number = '$' + 0;
    return number;
  }
}

// convert number 110000.11 to $1,10,000.00
export function FormattedPrice(value) {
  if (value) {
    var number = parseFloat(value).toFixed(2);
    number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    number = '$' + number;
    return number;
  } else {
    number = '$0.00';
    return number;
  }
}
// convert phoneNumber to (111) 111-1111
export function FormattedPhoneNumber(value) {
  return value
    .replace(/\D+/g, '')
    .replace(/^(\d{3})(\d{3})(\d{4}).*/, '($1) $2-$3');
}

//convert number 12662.55 to $12,663
export function FormattedValue(value) {
  if (value > 0) {
    var number = parseFloat(value).toFixed(0);
    number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    number = '$' + number;
    return number;
  }
  //convert number -45.42 to -$45
  if (value < 0) {
    var number = parseFloat(value).toFixed(0);
    number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    number = 0 - number;
    number = '-$' + number;
    return number;
  } else {
    number = '$0';
    return number;
  }
}
export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

export function toPascalCase(string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`,
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [month, day, year].join('/');
}

export const getBaseUrlFromUrl = ({url}) => {
  var pathArray = url.split('/');
  var protocol = pathArray[0];
  var host = pathArray[2];
  var url = protocol + '//' + host;
  return url;
};

export function checkAvailability(productInfo) {
  return productInfo?.skus?.map(skuInfo => {
    const dropShip = skuInfo?.dropShip === 'Y';

    const {backOrder, inStock, stockLevel} = skuInfo;

    const isDropShipSku =
      dropShip && (skuInfo?.dropShip === 'N' || stockLevel > 0);

    const isTemporaryDiscountined = skuInfo?.discontinuedCode === 'Y';

    return {
      ...skuInfo,

      isSkuAvailable: inStock || backOrder || isDropShipSku,
    };
  });
}
