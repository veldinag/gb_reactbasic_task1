import Message from "../Message";
import {render} from "@testing-library/react";

it('matches snapshot with props', () => {
   const message = {
      id: "001",
      date: "14.09.2021 12:22",
      message: "some message",
      style: "some style",
   }
   const component = render(
     <Message message={message} />
   );
   expect(component).toMatchSnapshot();
});