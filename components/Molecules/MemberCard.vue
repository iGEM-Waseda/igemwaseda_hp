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
          <transition name="modal">
            <div
              v-if="modalIsOpen"
              class="fixed inset-0 bg-opacity-75 bg-gray-400 flex items-center justify-center"
              @click.self="closeModal"
            >
              <div class="w-72 md:w-96 bg-white rounded-lg p-6 relative">
                <div
                  class="w-32 md:w-36 h-32 md:h-36 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4 mx-auto"
                >
                  <img
                    :src="imagePath"
                    loading="lazy"
                    alt=""
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <h2
                  class="text-2xl text-center text-teal-500 font-semibold mb-4"
                >
                  {{ name }}
                </h2>
                <p><b>担当</b>: {{ team }}</p>
                <p><b>所属</b>: {{ major }}</p>
                <p v-if="hobbies"><b>趣味</b>: {{ hobbies }}</p>
                <p v-if="introText"><b>一言</b>: {{ introText }}</p>
                <button
                  @click="closeModal"
                  class="absolute top-4 right-4 text-xl cursor-pointer"
                >
                  ×
                </button>
              </div>
            </div>
          </transition>
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
        class="bg-teal-500 text-white font-semibold mt-3 text-center px-4 py-1 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 ease-in"
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
    introText: {},
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

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
