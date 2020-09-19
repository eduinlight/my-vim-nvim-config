Vim�UnDo� Ǿ�;]n.G����
Y�i/�]Q74��   �                                   _G�     _�                              ����                                                                                                                                                                                                                                                                                                                                                             _G�    �          �   i   -import IUser from "../interfases/user.model";   3import NotiService from "../services/noti.service";   4import useDeepLinkRemove from "./useDeepLinkRemove";   (import useUserData from "./useUserData";   0import useAddInvited from "./api/useAddInvited";   8import useUserHistoryLogic from "./useUserHistoryLogic";   $import useRoutes from "./useRoutes";   4import useTranslate from "./translate/useTranslate";       Dconst useDeepLinkRedirectInvitation = (deeplink: DeeplinkState) => {   1  const { type: deeplinkType, value } = deeplink;   7  const { loading, getHistory } = useGetHistory(value);   !  const dispatch = useDispatch();   <  const user = useTypedSelector((store) => store.auth.user);   K  const histories = useTypedSelector((store) => store.histories.histories);   1  const { removeDeeplink } = useDeepLinkRemove();   %  const { isLogged } = useUserData();   )  const { addInvited } = useAddInvited();   O  const { goToHistoryList, goToInvitedWelcome, goToEditHistory } = useRoutes();   K  const { isUserInvitedTo, userHasUploadOneVideo } = useUserHistoryLogic();   '  const { translate } = useTranslate();       )  const handleError = useCallback(() => {   6    NotiService.danger(translate("clappyNotOppened"));     }, [translate]);       )  const saveHistoryOnStore = useCallback(       (history: IHistory) => {   6      dispatch(HistoriesActions.setSelected(history));   (      const index = histories.findIndex(   0        (_history) => _history.id === history.id         );         if (index !== -1) {   0        dispatch(HistoriesActions.add(history));         }       },       [dispatch, histories]     );       %  const handleFinished = useCallback(       (history: IHistory) => {   :      goToHistoryList({ finishedHistory: history }, true);       },       [goToHistoryList]     );       #  const handleErased = useCallback(       (history: IHistory) => {   :      goToHistoryList({ finishedHistory: history }, true);       },       [goToHistoryList]     );       ,  const handleInvitedReditect = useCallback(       (history: IHistory) => {   "      saveHistoryOnStore(history);   4      if (history.state === EHistoryState.PENDING) {           addInvited(history);         }       
      if (   3        history.state === EHistoryState.FINISHED &&            isUserInvitedTo(history)   	      ) {            handleFinished(history);         } else if (   2        history.state === EHistoryState.PENDING &&   &        userHasUploadOneVideo(history)   	      ) {   5        goToEditHistory({ needReload: false }, true);         } else {   %        goToInvitedWelcome({}, true);         }       },       [         addInvited,         goToEditHistory,         goToInvitedWelcome,         handleFinished,         isUserInvitedTo,         saveHistoryOnStore,         userHasUploadOneVideo       ]     );       ,  const handleCreatorReditect = useCallback(       (history: IHistory) => {   4      if (history.state === EHistoryState.PENDING) {   $        saveHistoryOnStore(history);   5        goToEditHistory({ needReload: false }, true);   <      } else if (history.state === EHistoryState.FINISHED) {            handleFinished(history);         } else {           handleErased(history);         }       },   G    [goToEditHistory, handleErased, handleFinished, saveHistoryOnStore]     );         useEffect(() => {   4    if (deeplinkType === "invitation" && isLogged) {         getHistory(value)           .then((data) => {   +          const history = data as IHistory;   :          const historyCreator = history.creator as IUser;5��