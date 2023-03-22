<template>
  <div class="flex flex-col items-center">
    <div class="w-36 md:w-48 h-36 md:h-48 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
      <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="" class="w-full h-full object-cover object-center" />
    </div>
    <div>
      <div class="text-teal-500 text-base md:text-2xl font-bold text-center">{{ name }}</div>
      <p class="text-gray-500 text-sm md:text-xl font-bold text-center">{{ team }}</p>
      <p class="text-gray-500 text-xs text-center">{{ major }}</p>
      <!-- <span>Hobbies: </span><span class="text-gray-500 text-xs text-start">水球、Scuba diving</span>
      <span>Motivation: </span><span class="text-gray-500 text-xs text-start">高校の時にかつてのiGEM Wasedaが説明会を開いてくれたのがきっかけで加入。勢い。大学入学後に両立が難しくつらかったが、活動していくうちにこのiGEMが好きになりました。次回出場の時は、絶対に表彰台に上りたい...!</span> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {}, 
    team: {}, 
    major: {}, 
    motivation: {}, 
    hobbies: {}
  }
}
</script>