import {useSelector} from "react-redux";
import {chatsSelector} from "../../store/chats/selectors";
import {currentChatIdSelector} from "../../store/utils/selectors";

const ChatsRedirect = ({chatId}) => {
    const chats = useSelector(chatsSelector)
    const lastChatId = useSelector(currentChatIdSelector)
    const index = chats.findIndex(item => item.id === chatId)

    if (!lastChatId) {
       if (!chatId) {
           return <div></div>
       } else {

       }
    }



}

export default ChatsRedirect