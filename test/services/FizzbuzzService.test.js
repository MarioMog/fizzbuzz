const FizzbuzzService = require("../../lib/services/FizzbuzzService");
describe("Suit test for FizzbuzzService", () => {
    test("1.1) applyValidationInExplorer empty object", () => {
        const res = FizzbuzzService.applyValidationInExplorer({});
        expect(res).toMatch("explorer cannot be an empty object");
    });
    test("1.2) applyValidationInExplorer hasnt score", () => {
        const explorer = {"name": "Woopa1"};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res).toMatch("explorer doesnt have score key");
    });
    test("1.3) applyValidationInExplorer score isnt a number", () => {
        const explorer = {"name": "Woopa1","score":"a"};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res).toMatch("explorer.score isnt a number");
    });
    test("1.4) applyValidationInExplorer score%3=score%5=0", () => {
        const explorer = {"name": "Woopa1","score":15};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toMatch("FIZZBUZZ");
    });
    test("1.5) applyValidationInExplorer score%3=0", () => {
        const explorer = {"name": "Woopa1","score":9};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toMatch("FIZZ");
    });
    test("1.6) applyValidationInExplorer score%5=0", () => {
        const explorer = {"name": "Woopa1","score":10};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toMatch("BUZZ");
    });
    test("1.7) applyValidationInExplorer score%3!=0 & score%5=0", () => {
        const explorer = {"name": "Woopa1","score":1};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe(1);
    });
    
    test("2.1) applyValidationInNumber score isnt a number", () => {
        const res = FizzbuzzService.applyValidationInNumber("a");
        expect(res).toMatch("param number isnt a number");
    });
    test("2.2) applyValidationInNumber score%3=score%5=0", () => {
        const res = FizzbuzzService.applyValidationInNumber(15);
        expect(res).toMatch("FIZZBUZZ");
    });
    test("2.3) applyValidationInNumber score%3=0", () => {
        const res = FizzbuzzService.applyValidationInNumber(9);
        expect(res).toMatch("FIZZ");
    });
    test("2.4) applyValidationInNumber score%5=0", () => {
        const res = FizzbuzzService.applyValidationInNumber(10);
        expect(res).toMatch("BUZZ");
    });
    test("2.5) applyValidationInNumber score%3!=0 & score%5=0", () => {
        const res = FizzbuzzService.applyValidationInNumber(1);
        expect(res).toBe(1);
    });
});
