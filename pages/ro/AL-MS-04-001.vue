<template>
  <div class="AL-MS-04-001">
    <div class="container">
      <div class="content" id="content">
        <div class="section">
          <!-- <h1 class="title-h1"><span>해외로밍 목록</span></h1> -->
          <h2 class="ro-nav-title">해외로밍 신청</h2>
          <MyInfoMenu></MyInfoMenu>

          <div class="banner-swiper-wrap">
            <SwiperRoamingBnr class="type-indicator-1" :items="state.roamingBannerData" />
          </div>

          <h3 class="ro-sec-title sticky">알닷의 로밍 상품이에요</h3>
          <div class="scroll-sticky" ref="scrollSticky">
            <Tag :data="frontData.tag.categorySample7" :option="{ type: 'expandedResize', multi: false }" />
          </div>
          <Card :items="state.roamingProductData" />
          <div class="box-round type-outline has-pd has-title">
            <h3 class="ro-sec-title">알닷의 로밍 상품이에요</h3>
            <ul class="adbvice-list">
              <li class="item info-1">
                <NuxtLink to="/" class="bg-vivid-blue">
                  <i class="icon"><img src="/images/roaming/icons/ico_earth_mobile.svg" alt="" /></i>
                  <p class="text">
                    <strong>해외 로밍 이런 게 좋아요!</strong><br />
                    해외에서도 내 번호 그대로<br class="pc_hide" />
                    한국에 있을 때랑 똑같이 사용해요
                  </p>
                </NuxtLink>
              </li>
              <li class="item info-2">
                <NuxtLink to="/" class="bg-vivid-pink">
                  <i class="icon"><img src="/images/roaming/icons/ico_carrier.svg" alt="" /></i>
                  <p class="text">
                    <strong>해외 로밍 이렇게 써보세요</strong><br />
                    출국 전, 해외에서, 귀국 후<br class="pc_hide" />
                    필요사항 자세히 알려드려요
                  </p>
                </NuxtLink>
              </li>
              <li class="item info-3">
                <NuxtLink to="/" class="bg-vivid-green">
                  <i class="icon"><img src="/images/roaming/icons/ico_passport_2.svg" alt="" /></i>
                  <p class="text">
                    <strong>해외 로밍 자주 하는 질문이에요</strong><br />
                    해외 로밍 궁금한 게 있으세요?<br class="pc_hide" />
                    여기서 확인해 보세요.
                  </p>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="box-round type-outline has-pd has-title">
            <h3 class="ro-sec-title">도움이 필요해요</h3>
            <ul class="adbvice-list type-pc-hr">
              <li class="item info-1">
                <NuxtLink to="/" class="bg-vivid-yellow">
                  <i class="icon"><img src="/images/roaming/icons/ico_mobile_talk.svg" alt="" /></i>
                  <p class="text">
                    <strong>카카오 로밍 상담</strong><br />
                    24시간 열려있어요
                  </p>
                </NuxtLink>
              </li>
              <li class="item info-1">
                <NuxtLink to="/" class="bg-vivid-apricot">
                  <i class="icon"><img src="/images/roaming/icons/ico_earth_airline.svg" alt="" /></i>
                  <p class="text">
                    <strong>로밍센터 찾기</strong><br />
                    로밍 센터 위치를 확인하세요
                  </p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import SwiperRoamingBnr from "@/components/SwiperRoamingBnr.vue";
import Card from "@/components/CardRoaming.vue";
import Tag from "@/components/Tag.vue";

interface TagCategoryItem {
  selected: boolean;
  disabled: boolean;
  title: string;
}
interface TagCategory {
  select: { title: string; selected: boolean }[];
  data: TagCategoryItem[];
}
interface FrontDataTag {
  categorySample7: TagCategory;
}
interface FrontData {
  tag: FrontDataTag;
}

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const props = defineProps<{
  frontData: FrontData;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "해외로밍",
  wrapClass: "selfcare roaming",
});

const scrollSticky = ref<HTMLHtmlElement | null>(null);
const scrollStickyOffsetTop = ref(0);
const classStickyName = "sticky-active";
window.addEventListener("scroll", function (e) {
  if (!front.isMobile() || !scrollSticky.value) return;
  if (scrollSticky.value!.getBoundingClientRect().top <= 52) {
    scrollSticky.value.classList.add(classStickyName);
  } else if (scrollSticky.value.classList.contains(classStickyName)) {
    scrollSticky.value.classList.remove(classStickyName);
  }
});
onMounted(async () => {
  emit("setLayout", layout);
});

//  Mock Data
const state = reactive({
  roamingBannerData: [
    {
      mobileImage: "/images/data/roaming/@data_banner_mw.png",
      pcImage: "/images/data/roaming/@data_banner_pc.png",
      altText: "",
    },
    {
      mobileImage: "/images/data/roaming/@data_banner_mw.png",
      pcImage: "/images/data/roaming/@data_banner_pc.png",
      altText: "",
    },
    {
      mobileImage: "/images/data/roaming/@data_banner_mw.png",
      pcImage: "/images/data/roaming/@data_banner_pc.png",
      altText: "",
    },
  ],
  roamingProductData: [
    {
      id: 1,
      prdName: "로밍패스 3GB",
      prdLink: "/",
      prdPrice: "29,000원",
      flag: {
        favorite: true,
        recommend: true,
      },
      detailList: {
        period: "로밍패스 8GB",
        data: "3GB",
        country: "83개국",
      },
      btns: {
        apply: true,
        change: false,
      },
    },
    {
      id: 2,
      prdName: "로밍패스 13GB",
      prdLink: "/",
      prdPrice: "29,000원",
      flag: {
        favorite: true,
        recommend: false,
      },
      detailList: {
        period: "-",
        data: "3GB",
        country: "-",
      },
      btns: {
        apply: true,
        change: false,
      },
    },
    {
      id: 3,
      prdName: "제로 프리미엄(일반형)",
      prdLink: "/",
      prdPrice: "29,000원",
      flag: {
        favorite: false,
        recommend: true,
      },
      detailList: {
        period: "최대 100분",
        data: "3GB",
        country: "83개국",
      },
      btns: {
        apply: true,
        change: false,
      },
    },
    {
      id: 4,
      prdName: "하루 데이터 로밍",
      prdLink: "/",
      prdPrice: "29,000원",
      flag: {
        favorite: true,
        recommend: true,
      },
      detailList: {
        period: "최대 100분",
        data: "3GB",
        country: "83개국",
      },
      btns: {
        apply: true,
        change: false,
      },
    },
  ],
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-001.scss" as *;
</style>
