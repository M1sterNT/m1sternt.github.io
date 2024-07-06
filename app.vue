<template>
  <div class="min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center"> <!-- เปลี่ยนพื้นหลังและสีข้อความ -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl"> <!-- พื้นหลังเข้มสำหรับคอนเทนต์ -->
      <div v-html="contentHtml"></div>

      <div class="mt-6">
        <h2 class="text-xl font-semibold text-gray-100">GitHub Stats</h2>
        <img :src="githubStatsUrl" alt="GitHub Stats" class="mt-4"/>
      </div>
      <div class="mt-6">
        <h2 class="text-xl font-semibold text-gray-100">GitHub Streak</h2>
        <img :src="githubStreakUrl" alt="GitHub Streak" class="mt-4"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getMarkdownContent } from '@/utils/readMarkdown'

const contentHtml = ref('')
const githubStatsUrl = 'https://github-readme-stats.vercel.app/api/top-langs?username=m1sternt&show_icons=true&locale=en&layout=compact' // เปลี่ยน your-username เป็นชื่อผู้ใช้ของคุณ
const githubStreakUrl = 'https://github-readme-streak-stats.herokuapp.com/?user=m1sternt' // เปลี่ยน your-username เป็นชื่อผู้ใช้ของคุณ

onMounted(async () => {
  const { contentHtml: htmlContent } = await getMarkdownContent()
  contentHtml.value = htmlContent
})
</script>


<style>
a {
  color: #1e90ff; /* สีของลิงก์ */
  text-decoration: underline; /* เส้นใต้ลิงก์ */
}
a:hover {
  color: #ff6347; /* สีของลิงก์เมื่อเอาเมาส์ไปชี้ */
}
</style>
