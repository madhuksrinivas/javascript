// PART 10: ERROR HANDLING

// 10.1 Try-Catch Basics
try {
  console.log("Executing potentially dangerous code...");
  throw new Error("Custom error message");
} catch (error) {
  console.error("Caught an error:", error.message);
}

console.log("Code continues after try-catch");

// 10.2 Try-Catch-Finally
// finally always runs regardless of success or failure
try {
  console.log("Try block executed");
  throw new Error("Intentional error");
} catch (error) {
  console.log("Catch block executed:", error.message);
} finally {
  console.log("Finally block always executes");
}

// 10.3 Custom Error Classes
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateUser(userData) {
  if (!userData.name) {
    throw new ValidationError("Name is required", "name");
  }
  return true;
}

try {
  validateUser({ name: "" });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation failed for ${error.field}: ${error.message}`);
  }
}

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// Executing potentially dangerous code...
// Caught an error: Custom error message
// Code continues after try-catch
// Try block executed
// Catch block executed: Intentional error
// Finally block always executes
// Validation failed for name: Name is required
