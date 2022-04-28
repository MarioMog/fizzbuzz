const FizzbuzzService = require("../../lib/services/FizzbuzzService");
describe("Suit test for FizzbuzzService", () => {
    test("1) applyValidationInExplorer empty object", () => {
        const res = FizzbuzzService.applyValidationInExplorer({});
        expect(res).toMatch("explorer cannot be an empty object");
    });
    test("2) applyValidationInExplorer hasnt score", () => {
        const explorer = {"name": "Woopa1"};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res).toMatch("explorer doesnt have score key");
    });
    test("3) applyValidationInExplorer score isnt a number", () => {
        const explorer = {"name": "Woopa1","score":"a"};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res).toMatch("explorer.score isnt a number");
    });
    test("4) applyValidationInExplorer score%3=score%5=0", () => {
        const explorer = {"name": "Woopa1","score":15};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toMatch("FIZZBUZZ");
    });
    test("5) applyValidationInExplorer score%3=0", () => {
        const explorer = {"name": "Woopa1","score":9};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toMatch("FIZZ");
    });
    test("6) applyValidationInExplorer score%5=0", () => {
        const explorer = {"name": "Woopa1","score":10};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toMatch("BUZZ");
    });
    test("7) applyValidationInExplorer score%3!=0 & score%5=0", () => {
        const explorer = {"name": "Woopa1","score":1};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe(1);
    });
});
