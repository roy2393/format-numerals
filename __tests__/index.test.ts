import {formatNumerals} from "../src/index";

test("Checking Comma separated value for INR", () => {
  expect(formatNumerals(1000, { curr: 'INR' })).toBe("₹1,000");
})

test("Checking NaN value", () => {
  expect(formatNumerals("temp", { curr: 'INR' })).toBe(NaN);
})


test("Checking default config value", () => {
  expect(formatNumerals(100000, {comma: 1})).toBe("1,00,000");
});

test("Checking for floating numbers", () => {
  expect(formatNumerals(100000.53)).toBe("100,000.53");
});

test("Checking for floating numbers", () => {
  expect(formatNumerals(100.53)).toBe("100.53");
});


