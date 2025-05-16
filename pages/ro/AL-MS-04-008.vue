<template>
  <div class="AL-MS-04-008">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">해외로밍 부가서비스 팝업 리스트</h2>

        <div class="section">
          <h3 class="tit02">pc -</h3>

          <ul>
            <li v-for="(pop, idx) in popButtons" :key="idx" style="margin-top: 11px">
              <button ref="partnerName" class="btn-rounded" @click="handlePopup(pop.popState, true)">
                {{ pop.name }}
              </button>
            </li>
          </ul>
        </div>

        <!------------------- popup ------------------->
        <Popup
          title="해외 로밍 신청"
          :isOpen="popState.pop0"
          @update:isOpen="popState.pop0 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400801 />
        </Popup>

        <Popup
          title="해외 로밍 신청"
          :isOpen="popState.pop1"
          @update:isOpen="popState.pop1 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400802 />
        </Popup>

        <Popup
          title="해외 로밍 신청 완료"
          :isOpen="popState.pop2"
          @update:isOpen="popState.pop2 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400803 />
        </Popup>

        <Popup
          title="해외 로밍 해지"
          :isOpen="popState.pop3"
          @update:isOpen="popState.pop3 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400804 />
        </Popup>

        <Popup
          title="해외 로밍 해지 완료"
          :isOpen="popState.pop4"
          @update:isOpen="popState.pop4 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400805 />
        </Popup>

        <!------------------- // popup  ------------------->

        <div class="section">
          <h3 class="tit02">mobile -</h3>

          <ul>
            <li>
              <NuxtLink to="/ro/AL-MS-04-008-01" class="btn lg c01">ALMS0400501 - 해외로밍 부가서비스(신청전)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-008-02" class="btn lg c01"
                >ALMS0400502 - 해외로밍 부가서비스(최종정보확인)</NuxtLink
              >
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-008-03" class="btn lg c01"
                >ALMS0400503 - 해외로밍 부가서비스(정보입력)</NuxtLink
              >
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-008-04" class="btn lg c01">ALMS0400504 - 해외로밍 부가서비스(해지전)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-008-05" class="btn lg c01"
                >ALMS0400504 - 해외로밍 부가서비스(해지완료)</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ALMS0400801 from "@/pages/ro/popup/ALMS0400801";
import ALMS0400802 from "@/pages/ro/popup/ALMS0400802";
import ALMS0400803 from "@/pages/ro/popup/ALMS0400803";
import ALMS0400804 from "@/pages/ro/popup/ALMS0400804";
import ALMS0400805 from "@/pages/ro/popup/ALMS0400805";

import Popup from "@/components/v2/common/Popup";

import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const emit = defineEmits(["setLayout"]);
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "해외 로밍 신청",
  wrapClass: "selfcare roaming",
});

/*팝업 상태 관리  */
const popState = ref({
  pop0: false,
  pop1: false, // 번호 변경
  pop2: false,
  pop3: false,
  pop4: false,
});

const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};

/*팝업 클릭 목업 버튼*/
const popButtons = ref([
  { name: "ALMS0400801 - 해외로밍 부가서비스(신청전)", popState: "pop0" },
  { name: "ALMS0400802 - 해외로밍 부가서비스(최종정보확인)", popState: "pop1" },
  { name: "ALMS0400803 - 해외로밍 부가서비스(가입완료)", popState: "pop2" },
  { name: "ALMS0400804 - 해외로밍 부가서비스(해지전)", popState: "pop3" },
  { name: "ALMS0400805 - 해외로밍 부가서비스(해지완료)", popState: "pop4" },
]);

onMounted(async () => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-008.scss" as *;
</style>
