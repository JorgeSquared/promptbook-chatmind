import { expect } from "expect";
import { submitContactForm } from "./api";

async function testSubmitContactForm() {
  const result = await submitContactForm({
    name: "Test User",
    email: "test@example.com",
    message: "This is a test message"
  });
  
  expect(result).toHaveProperty("success");
  expect(result.success).toBe(true);
  expect(result).toHaveProperty("message");
  expect(typeof result.message).toBe("string");
}

type TestResult = {
  passedTests: string[];
  failedTests: { name: string; error: string }[];
};

export async function _runApiTests() {
  const result: TestResult = { passedTests: [], failedTests: [] };

  try {
    await testSubmitContactForm();
    result.passedTests.push("testSubmitContactForm");
  } catch (error) {
    result.failedTests.push({
      name: "testSubmitContactForm",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }

  return result;
} 