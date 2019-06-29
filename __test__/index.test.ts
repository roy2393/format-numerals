import FN from "../src/index";

test("Checking Comma separated value for INR", () => {
  expect(FN.formatNumber(1000, { curr: 'INR' })).toBe("₹1,000");
})

test("Checking NaN value", () => {
  expect(FN.formatNumber("temp", { curr: 'INR' })).toBe(NaN);
})


test("Checking default config value", () => {
  expect(FN.formatNumber(100000)).toBe("$1,00,000");
});

test("Checking for floating numbers", () => {
  expect(FN.formatNumber(100000.53)).toBe("$1,00,000.53");
});

