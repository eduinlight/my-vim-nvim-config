Vim�UnDo� �@˾�� 5xD�)�\��Rh5�z@8�pa/7  4       �          ,       ,   ,   ,    _J   
 _�                      _    ����                                                                                                                                                                                                                                                                                                                                                             ^��     �      $      a      { resource: 'INTEGRATION__FARES__GROUPED__ROUTES', meta, integrationSettings, pageContext }5�_�                      a    ����                                                                                                                                                                                                                                                                                                                                                             ^��    �      $      c      { resource: 'INTEGRATION__FARES__GROUPED__ROUTES', meta, integrationSettings, pageContext,  }5�_�                   	        ����                                                                                                                                                                                                                                                                                                                                                             ^�!�     �    
  $       5�_�                   	        ����                                                                                                                                                                                                                                                                                                                                                             ^�!�     �    
  $       5�_�                   	        ����                                                                                                                                                                                                                                                                                                                                                             ^�!�     �    
  $       5�_�                   	        ����                                                                                                                                                                                                                                                                                                                                                             ^�!�     �      $      h      { resource: 'INTEGRATION__FARES__GROUPED__ROUTES', meta, integrationSettings, pageContext, cache }5�_�      	              �   R    ����                                                                                                                                                                                                                                                                                                                                                             ^�"     �   �   �  *      Xconst getFares = (filter, integrationSettings, withAgreggations, meta, pageContext) => {5�_�      
           	   �        ����                                                                                                                                                                                                                                                                                                                                                             ^�"#     �   �   �  *       5�_�   	              
   �        ����                                                                                                                                                                                                                                                                                                                                                             ^�"#     �   �   �  *       5�_�   
                 �        ����                                                                                                                                                                                                                                                                                                                                                             ^�"#     �   �   �  *       5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             ^�"#     �   �   �  *       5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             ^�"$    �   �   �  *      {const getFares = (filter, integrationSettings, withAgreggations, meta, pageContext, cache = false, cacheDuration = -1) => {5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             ^�$Q     �      2              cache5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             ^�$Q     �       2              cache,5�_�                   2        ����                                                                                                                                                                                                                                                                                                                                                             ^�$U     �  1  3  3       5�_�                   2        ����                                                                                                                                                                                                                                                                                                                                                             ^�$U     �  1  3  3       5�_�                   2        ����                                                                                                                                                                                                                                                                                                                                                             ^�$V    �  1  3  3       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^�$b     �      3       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^�$b     �      3       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^�$c   	 �      3       5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  3        cacheDuration = -15�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  3        cacheDuration = 15�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  3        cacheDuration = 5�_�                    �   %    ����                                                                                                                                                                                                                                                                                                                                                             _J     �      
  3    5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�                     �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�      !               �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�       "           !   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �      �  4   �   Eimport {NO_DURATION_DEFINED} from '../../helpers/axiosWrapper/cache';   /**   @ * Makes sure the fares response is complain with a basic schema    * @param {*} fares    */   (const validateFaresResponse = fares => {   4  const validation = { isValid: true, message: '' };   (  if (!fares || !Array.isArray(fares)) {       validation.isValid = false;       return {         isValid: false,         data: fares,   ;      message: 'INTEGRATION__FARES: Fares must be an Array'       };     }     if (fares.length > 0) {       const fareItem = fares[0];   4    if (!fareItem.origin || !fareItem.destination) {         return {           isValid: false,           data: fareItem,           message:   a          'INTEGRATION__FARES: FareItem SCHEMA is invalid, please check Fares API documentation.'         };       }     }     return validation;   };       /**   8 * The group-routes API does not returns the journeyType   > * so this map allows us to use query sent parameters to do it    */   const journeyTypeMap = {     ROUND_TRIP: 'rt',     ONE_WAY: 'ow',     MULTI_CITY: 'mc',     EACH_WAY: 'ew'   };       /**   = * The group routes API returns the data in non linear format   E * so this function will intend normalize the data for the components    * @param {*} faresRawData    * @param {*} query    */   ;const transformAgreggationData = (faresRawData, query) => {   0  const { uiDatesYearsAdjustmentPatch } = query;     const fares = [];      faresRawData.forEach(fare => {   *    let newFare = Object.assign({}, fare);           let { searchDate } = fare;       // For date in safary y ie   \    if (searchDate && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+[+|-]\d{4}/.test(searchDate))   ]      searchDate = `${searchDate.substring(0, searchDate.length - 2)}:${searchDate.substring(           searchDate.length - 2   
      )}`;   B    newFare = Object.assign({}, newFare, { ...fare, searchDate });       =    newFare.journeyType = journeyTypeMap[newFare.flightType];   <    if (newFare.redemption && newFare.formattedTotalPrice) {   G      newFare.redemption.formattedAmount = newFare.formattedTotalPrice;       }       newFare.index = getUuid();       newFare.destinationImage =   (      newFare.destinationAirportImage ||   %      newFare.destinationCityImage ||   &      newFare.destinationStateImage ||   (      newFare.destinationCountryImage ||   %      newFare.destinationRegionImage;   >    yearAdjustmentPatch(newFare, uiDatesYearsAdjustmentPatch);       fares.push(newFare);     });         return fares;   };       )const getSortingComparator = sorting => {     if (sorting) {        if (sorting.usdTotalPrice) {   8      if (sorting.usdTotalPrice.toLowerCase() === 'asc')   F        return (a, b) => (a.usdTotalPrice < b.usdTotalPrice ? -1 : 1);   9      if (sorting.usdTotalPrice.toLowerCase() === 'desc')   F        return (a, b) => (a.usdTotalPrice > b.usdTotalPrice ? -1 : 1);   '    } else if (sorting.departureDate) {   8      if (sorting.departureDate.toLowerCase() === 'asc')           return (a, b) => {   Q          if (dayjs(a.departureDate).isBefore(dayjs(b.departureDate))) return -1;   O          if (dayjs(a.departureDate).isAfter(dayjs(b.departureDate))) return 1;             return 0;   
        };       }     }     return undefined;   };       /**   = * The group routes API returns the data in non linear format   E * so this function will intend normalize the data for the components    * @param {*} routesRawData    * @param {*} query    */   1const transformData = (routesRawData, query) => {   0  const { uiDatesYearsAdjustmentPatch } = query;     const fares = routesRawData   	    .map(         ({           fares: rawFares,            destinationAirportImage,           destinationCityImage,           destinationStateImage,            destinationCountryImage,           destinationRegionImage,           ...route         }) => {   :        return rawFares.map(({ flightType, ...fare }) => {   $          let { searchDate } = fare;   )          // Workaround for Safari and IE   b          if (searchDate && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+[+|-]\d{4}/.test(searchDate))   c            searchDate = `${searchDate.substring(0, searchDate.length - 2)}:${searchDate.substring(   #              searchDate.length - 2               )}`;             const newFare = {               ...route,               ...fare,   4            journeyType: journeyTypeMap[flightType],               searchDate,               index: getUuid(),               destinationImage:   (              destinationAirportImage ||   %              destinationCityImage ||   &              destinationStateImage ||   (              destinationCountryImage ||   $              destinationRegionImage             };   D          yearAdjustmentPatch(newFare, uiDatesYearsAdjustmentPatch);             return newFare;           });         }       )   5    .reduce((a, b) => a.concat(b), []); // arr.flat()   C  const sortingComparator = getSortingComparator(query.sorting[0]);     if (sortingComparator) {   )    return fares.sort(sortingComparator);     }     return fares;   };       /**   / * Retrieve fares from the GroupRoutes Endpoint    * @param {*} filter   ! * @param {*} integrationSettings    */   Uconst getFaresWithAgreggation = (filter, integrationSettings, meta, pageContext) => {   +  return new Promise((resolve, reject) => {       if (!integrationSettings) {   T      const MESSAGE = `INTEGRATION__FARES: **integrationSettings** not especified.`;         logger.error(MESSAGE);         reject(MESSAGE);       }       J    const { v2FaresAggregations: faresApiSettings } = integrationSettings;   %    const filterCopy = { ...filter };           if (         !faresApiSettings ||   !      !faresApiSettings.method ||   #      !faresApiSettings.endPoint ||         !faresApiSettings.headers       ) {   l      const MESSAGE = `INTEGRATION__FARES: **integrationSettings.faresAggregations** configuration issues.`;         logger.error(MESSAGE);         reject(MESSAGE);       }       /    filterCopy.departure = getDateRangeAsDates(         filterCopy.departure,         'YYYY-MM-DD',         'INTEGRATION__FARES'       );       if (filterCopy.return) {   .      filterCopy.return = getDateRangeAsDates(           filterCopy.return,           'YYYY-MM-DD',           'INTEGRATION__FARES'         );       }           axiosWrapper(         {   (        method: faresApiSettings.method,   ,        url: `${faresApiSettings.endPoint}`,   1        headers: { ...faresApiSettings.headers },   6        data: transformRequestAgreggations(filterCopy)         },   ^      { resource: 'INTEGRATION__FARES__AGGREGATIONS', meta, integrationSettings, pageContext }       )         .then(response => {   @        const validation = validateFaresResponse(response.data);   !        if (validation.isValid) {   ]          logger.info('INTEGRATION__FARES__AGGREGATIONS: Successful request', response.data);   H          const fares = transformAgreggationData(response.data, filter);             resolve(fares);           } else {   <          logger.error(validation.message, validation.data);              reject(response.data);   	        }         })         .catch(err => {           reject(err);   	      });     });   };       /**   / * Retrieve fares from the GroupRoutes Endpoint    * @param {*} filter   ! * @param {*} integrationSettings    */   const getFares = (   	  filter,     integrationSettings,     withAgreggations,     meta,     pageContext,     cache = false,   &  cacheDuration = NO_DURATION_DEFINED 5�_�   !   #           "   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   "   $           #   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   #   %           $   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   $   &           %   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   %   '           &   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   &   (           '   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   '   )           (   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   (   *           )   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   )   +           *   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   *   ,           +   �        ����                                                                                                                                                                                                                                                                                                                                                             _J     �   �   �  4       5�_�   +               ,   �        ����                                                                                                                                                                                                                                                                                                                                                             _J   
 �   �   �  4       5�_�                     �   R    ����                                                                                                                                                                                                                                                                                                                                                             ^��    �   �   �  $      gconst getFares = (filter, integrationSettings, withAgreggations, meta, pageContext, cache = false) => {5��