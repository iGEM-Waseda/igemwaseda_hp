<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-10"
    v-show="showPopup"
  >
    <div
      class="fixed inset-0 bg-black opacity-50"
      @click="closePopup"
    ></div>

    <div class="bg-white p-6 rounded-lg shadow-lg w-96 z-50">
      <button
        class="text-gray-800 absolute top-2 right-2"
        @click="closePopup"
      >
        あああ
      </button>
      <h2 class="text-xl font-semibold mb-4">自己紹介</h2>
      <p class="text-gray-700">
        こんにちは、私の名前は山田太郎です。東京でウェブ開発者として働いています。Vue.jsとTailwind CSSが大好きです！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showPopup: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>
