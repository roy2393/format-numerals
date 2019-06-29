import CURRENCY_CODES from "./currency_codes";

function numberWithCommas(x) {
  x = x.toString();
  let afterPoint = "";
  if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
  x = Math.floor(x);
  x = x.toString();
  let lastThree = x.substring(x.length - 3);
  const otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = `,${lastThree}`;
  const res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

  return res;
}

const DEFAULT_CURR = "USD";
function sanitizeConfig(config: ConfigProps): ConfigProps {
  if (typeof config !== "object" || !config.curr) {
    return {
      curr: DEFAULT_CURR
    };
  }

  return config;
}

function sanitizeInput(amount:number): number {
  if(typeof amount !== 'number') {
    return null;
  }
  return amount;
}

interface ConfigProps {
  curr: string;
}
export default {
  formatNumber: (amount: number, config?: ConfigProps) => {
    const sanitizedConfigs: ConfigProps = sanitizeConfig(config);
    const sanitizedAmount = sanitizeInput(amount);
    if (sanitizedAmount === null) {
      return NaN;
    }
    return `${
      CURRENCY_CODES[sanitizedConfigs.curr].symbol
      }${numberWithCommas(sanitizedAmount)}`;
  }
};
