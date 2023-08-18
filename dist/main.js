// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
class Burst {
    actualValue;
    expectedValue;
    testName;
    static testsPassed = 0;
    static testFailed = 0;
    constructor(testName) { this.testName = testName; }
    expect(expectedValue) {
        this.expectedValue = expectedValue;
        return this;
    }
    assertionFailed(testName, expectedValue, actualValue) {
        console.log("\x1b[31m", `Assertion failed: ${this.testName}`);
        console.log("\x1b[31m", `${this.expectedValue} != ${actualValue}`);
        Burst.incrementFailedTestCount();
    }
    assertionPassed(testName, expectedValue, actualValue) {
        console.log("\x1b[32m", `Assertion Passed: ${this.testName}`);
        console.log("\x1b[0m", "");
        Burst.incrementPassedTestCount();
    }
    assert(condition) {
        if (condition) {
            this.assertionPassed(this.testName, this.expectedValue, this.actualValue);
        }
        else {
            this.assertionFailed(this.testName, this.expectedValue, this.actualValue);
        }
    }
    toBeExact(actualValue) {
        this.actualValue = actualValue;
        this.assert(this.expectedValue === this.actualValue);
    }
    toBe(actualValue) {
        this.actualValue = actualValue;
        this.assert(this.expectedValue == this.actualValue);
    }
    isNot(actualValue) {
        this.actualValue = actualValue;
        this.assert(this.expectedValue != this.actualValue);
    }
    isNotExact(actualValue) {
        this.actualValue = actualValue;
        this.assert(this.expectedValue !== this.actualValue);
    }
    static incrementPassedTestCount() {
        this.testsPassed++;
    }
    static incrementFailedTestCount() {
        this.testFailed++;
    }
    static getTestResult() {
        console.log(`Passed ${this.testsPassed} | Failed ${this.testFailed}`);
    }
}
function describe(testName) { return new Burst(testName); }
function testResults() { Burst.getTestResult(); }
export { describe, testResults };
