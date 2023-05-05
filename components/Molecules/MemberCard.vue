<template>
  <div class="flex flex-col items-center">
    <div
      class="w-36 md:w-48 h-36 md:h-48 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4"
    >
      <img
        :src="imagePath"
        loading="lazy"
        alt=""
        class="w-full h-full object-cover object-center"
      />
    </div>
    <transition name="modal">
      <div v-if="modalIsOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <h2>自己紹介</h2>
          <div
            class="w-36 md:w-48 h-36 md:h-48 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4"
          >
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
              loading="lazy"
              alt=""
              class="w-full h-full object-cover object-center"
            />
          </div>
          <p>
            こんにちは、私はAIアシスタントです。あなたの質問に答えたり、手助けをすることができます。
          </p>
          <p>
            こんにちは、私はAIアシスタントです。あなたの質問に答えたり、手助けをすることができます。
          </p>
          <p>
            こんにちは、私はAIアシスタントです。あなたの質問に答えたり、手助けをすることができます。
          </p>
          <button @click="closeModal" class="close-button">×</button>
        </div>
      </div>
    </transition>
    <div class="text-center">
      <div class="text-teal-500 text-base md:text-2xl font-bold text-center">
        {{ name }}
      </div>
      <p class="text-gray-500 text-sm md:text-xl font-bold text-center">
        {{ team }}
      </p>
      <p class="text-gray-500 text-xs text-center">{{ major }}</p>
      <button
        @click="openModal"
        class="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold mt-3 text-center px-4 py-1 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 ease-in"
      >
        詳しく見る
      </button>
      <!-- <span>Hobbies: </span><span class="text-gray-500 text-xs text-start">水球、Scuba diving</span>
      <span>Motivation: </span><span class="text-gray-500 text-xs text-start">高校の時にかつてのiGEM Wasedaが説明会を開いてくれたのがきっかけで加入。勢い。大学入学後に両立が難しくつらかったが、活動していくうちにこのiGEMが好きになりました。次回出場の時は、絶対に表彰台に上りたい...!</span> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imagePath: {
      default:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    },
    name: {},
    team: {},
    major: {},
    motivation: {},
    hobbies: {},
  },
  data() {
    return {
      modalIsOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalIsOpen = true;
    },
    closeModal() {
      this.modalIsOpen = false;
    },
  },
};
</script>
