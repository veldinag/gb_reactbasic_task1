import {addMessage} from "../actions";
import messagesReducer from "../reducer";

describe("test messagesReducer", () => {
   it("addMessage action", () => {
      const chatId = "chat001";
      const message = "Test message";
      const style = "someStyle";
      const recieved = messagesReducer(undefined, addMessage(chatId, message, style));
      const expected = {
         messageList: {
            chat001: [{
               id: "id",
               date: "date",
               message: "Test message",
               style: "someStyle",
            }]
         }
      }
      expect(recieved).toEqual(expected);
   });
});