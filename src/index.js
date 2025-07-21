import './assets/scss/app.scss';
import './assets/scss/main.scss';

//components
import FormGroup from './components/FormGroup.vue';
import DataView from './components/DataView.vue';
import AudioPlayer from './components/AudioPlayer.vue';
import VoidMessage from './components/VoidMessage.vue';
import UploadDragAndDrop from './components/UploadDragAndDrop.vue';
import PaginatorComponent from './components/PaginatorComponent.vue';
import AppBreadcrumb from './components/AppBreadcrumb.vue';
import AutoResizeTextArea from './components/AutoResizeTextArea.vue';
import ConfirmationModal from './components/ConfirmationModal.vue';
import ChatMessageView from './components/ChatMessageView.vue';
import TabsComponent from './profile/resume/TabsComponent.vue';
import CheckboxComponent from './profile/CheckboxComponent.vue';
import CardHome from './home/CardHome.vue';
import RingAudio from './components/RingAudio.vue'
import DropdownComponent from './templates/DropdownComponent.vue'

//animations
import AudioPulseAnimation from './animations/AudioPulseAnimation.vue';
import DotPulseAnimation from './animations/DotPulseAnimation.vue';

//formatters
import timestampFormatter from './utils/formatter/timestampFormatter.js';
import phoneFormatter from './utils/formatter/phoneFormatter.js';
import monthYearFormatter from './utils/formatter/monthYearFormatter.js';

//base64
import UTF8ArrToStr from './utils/base64/UTF8ArrToStr.js';
import b64ToUint6 from './utils/base64/b64ToUint6.js';
import base64DecToArr from './utils/base64/base64DecToArr.js';
import base64EncArr from './utils/base64/base64EncArr.js';
import strToUTF8Arr from './utils/base64/strToUTF8Arr.js';
import toBase64 from './utils/base64/toBase64.js';
import uint6ToB64 from './utils/base64/uint6ToB64.js';

//timeFormatter
import ConversationTime from './utils/timeFormatter/ConversationTime.js';

//helpers
import Slugfy from './utils/helpers/Slugfy.js';
import filteredArray from './utils/helpers/filteredArray.js';
import formFields from './utils/helpers/formFields.js';
import generateColors from './utils/helpers/generateColors.js';
import isEmail from './utils/helpers/isEmail.js';
import isOnArray from './utils/helpers/isOnArray.js';
import isUrl from './utils/helpers/isUrl.js';
import orderBy from './utils/helpers/orderBy.js';
import planArray from './utils/helpers/planArray.js';
import planObjectKeyAndValue from './utils/helpers/planObjectKeyAndValue.js';
import regexTest from './utils/helpers/regexTest.js';
import revertSlugfy from './utils/helpers/revertSlugfy.js';
import validateForm from './utils/helpers/validateForm.js';

//useSearch
import searchBiggerThen from './composables/useSearch/searchBiggerThen.js';
import searchContains from './composables/useSearch/searchContains.js';
import searchDateIgual from './composables/useSearch/searchDateIgual.js';
import searchIguals from './composables/useSearch/searchIguals.js';
import searchLessThen from './composables/useSearch/searchLessThen.js';

//uselsMobile
import useIsMobile from './composables/useIsMobile.js';

//useMicPermission
import useMicPermission from './composables/useMicPermission.js';


import { mask } from 'vue-the-mask';


export { FormGroup,
          DataView,
          AudioPlayer,
          VoidMessage, 
          UploadDragAndDrop, 
          PaginatorComponent,
          AppBreadcrumb,
          AutoResizeTextArea,
          ConfirmationModal,
          AudioPulseAnimation,
          DotPulseAnimation,
          ChatMessageView,
          TabsComponent,
          CheckboxComponent,
          CardHome,
          RingAudio,
          DropdownComponent,
          timestampFormatter,
          phoneFormatter,
          monthYearFormatter,
          Slugfy,
          filteredArray,
          formFields,
          generateColors,
          isEmail,
          isOnArray,
          isUrl,
          orderBy,
          planArray,
          planObjectKeyAndValue,
          regexTest,
          revertSlugfy,
          validateForm,
          UTF8ArrToStr,
          b64ToUint6,
          base64DecToArr,
          base64EncArr,
          strToUTF8Arr,
          toBase64,
          uint6ToB64,
          ConversationTime,
          searchBiggerThen,
          searchContains,
          searchDateIgual,
          searchIguals,
          searchLessThen,
          useMicPermission,
          useIsMobile
        };

export default {
  install(app) {

    app.directive('mask', mask);

    app.component('FormGroup', FormGroup);
    app.component('DataView', DataView);
    app.component('AudioPlayer', AudioPlayer);
    app.component('VoidMessage', VoidMessage);
    app.component('UploadDragAndDrop', UploadDragAndDrop);
    app.component('PaginatorComponent', PaginatorComponent);
    app.component('AppBreadcrumb', AppBreadcrumb);
    app.component('AutoResizeTextArea', AutoResizeTextArea);
    app.component('ConfirmationModal', ConfirmationModal);
    app.component('AudioPulseAnimation', AudioPulseAnimation);
    app.component('DotPulseAnimation', DotPulseAnimation);
    app.component('ChatMessageView', ChatMessageView);
    app.component('TabsComponent', TabsComponent);
    app.component('CheckboxComponent', CheckboxComponent);
    app.component('CardHome', CardHome);
    app.component('RingAudio', RingAudio);
    app.component('DropdownComponent', DropdownComponent);
  }
};
