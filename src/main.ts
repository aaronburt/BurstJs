// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols

class Burst {

    public actualValue: any;
    public expectedValue: any;
    public testName: string;

    private static testsPassed: number = 0;
    private static testFailed: number = 0;

    constructor(testName: string) { this.testName = testName; }

    expect(expectedValue: any){
        this.expectedValue = expectedValue;
        return this;
    }

    assertionFailed(testName: string, expectedValue: any, actualValue: any){
        console.log("\x1b[31m", `Assertion failed: ${this.testName}`)
        console.log("\x1b[31m", `${this.expectedValue} != ${actualValue}`);
        Burst.incrementFailedTestCount();
    }

    assertionPassed(testName: string, expectedValue: any, actualValue: any) {
        console.log("\x1b[32m", `Assertion Passed: ${this.testName}`);
        console.log("\x1b[0m", "");
        Burst.incrementPassedTestCount();
    }

    assert(condition: boolean){
        if(condition){
            this.assertionPassed(this.testName, this.expectedValue, this.actualValue);
        } else {
            this.assertionFailed(this.testName, this.expectedValue, this.actualValue);
        }
    }

    toBeExact(actualValue: any){
        this.actualValue = actualValue;
        this.assert(this.expectedValue === this.actualValue);
    }

    toBe(actualValue: any){
        this.actualValue = actualValue;
        this.assert(this.expectedValue == this.actualValue);
    }

    isNot(actualValue: any){
        this.actualValue = actualValue;
        this.assert(this.expectedValue != this.actualValue);
    }

    isNotExact(actualValue: any){
        this.actualValue = actualValue;
        this.assert(this.expectedValue !== this.actualValue);
    }

    static incrementPassedTestCount(){
        this.testsPassed++;
    }

    static incrementFailedTestCount(){
        this.testFailed++;
    }

    static getTestResult() {
        console.log(`Passed ${this.testsPassed} | Failed ${this.testFailed}`)
    }
}

function describe(testName: string): Burst { return new Burst(testName); }
function testResults(){ Burst.getTestResult(); }

export { describe, testResults };