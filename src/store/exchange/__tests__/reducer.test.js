import exchangeReducer from "../reducer";
import {getExchangeSuccessAction} from "../actions";

describe("test exchangeReducer", () => {
    it("getExchangeSuccessAction test", () => {
        const testData = {
            id: "001",
            text: "some text",
        }
        const recieved = exchangeReducer(undefined, getExchangeSuccessAction(testData));
        const expected = {
            data: {
                id: "001",
                text: "some text",
            },
            loading: false,
            error: undefined,

        };
        expect(recieved).toEqual(expected);
    });
});