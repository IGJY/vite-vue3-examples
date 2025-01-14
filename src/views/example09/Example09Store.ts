import type { Course } from '@/datasource/Types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { listCourses } from '@/datasource/DataSource'

export const useExample09Store = defineStore('example09', () => {
  const coursesS = ref<Course[]>([])
  const listCoursesA = () => {
    const coursesT = listCourses()
    setTimeout(() => (coursesS.value = coursesT), 1000)
  }

  return { coursesS, listCoursesA }
})
