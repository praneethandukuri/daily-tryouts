import { convertNumberToString } from "./convertNumberToString.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("should give A", () => {
  assertEquals(convertNumberToString(1), "A");
});

Deno.test("should give B", () => {
  assertEquals(convertNumberToString(2), "B");
});
