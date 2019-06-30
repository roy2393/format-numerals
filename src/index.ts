const CURRENCY_CODES =  require("./currency_codes");

/**
 * Function returns comma separated string of numbers
 * based on their config params
 * @param {*} x
 * @returns
 */
function numberWithCommas(num: number, config: ConfigProps) {
  let val = num.toString();
  let afterPoint = "";
  if (val.indexOf(".") > 0) {
    afterPoint = val.substring(val.indexOf("."), val.length);
  }
  val = Math.floor(num).toString();

  if (config.comma === 1) {
    let lastThree = val.substring(val.length - 3);
    const otherNumbers = val.substring(0, val.length - 3);
    if (otherNumbers != "") lastThree = `,${lastThree}`;
    const result =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      lastThree +
      afterPoint;

    return result;
  }
  return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + afterPoint;
}

function sanitizeConfig(config: ConfigProps): ConfigProps {
  if (typeof config !== "object") {
    return {};
  }

  return config;
}

function sanitizeInput(amount: number): number {
  if (typeof amount !== "number") {
    return null;
  }
  return amount;
}

interface ConfigProps {
  curr?: string;
  comma?: 0 | 1;
}
module.exports = function(amount: number, config?: ConfigProps) {
  const sanitizedConfigs: ConfigProps = sanitizeConfig(config);
  const sanitizedAmount = sanitizeInput(amount);
  if (sanitizedAmount === null) {
    return NaN;
  }
  if (sanitizedConfigs.curr) {
    return `${CURRENCY_CODES[sanitizedConfigs.curr]}${numberWithCommas(
      sanitizedAmount,
      sanitizedConfigs
    )}`;
  }

  return `${numberWithCommas(sanitizedAmount, sanitizedConfigs)}`;
}
