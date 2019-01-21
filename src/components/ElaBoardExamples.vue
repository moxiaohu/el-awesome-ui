<template>
  <div>
   <ela-board :structure="structure" :data="data"></ela-board>
  </div>
</template>

<script>
export default {
  name: "ElaBoardExamples",
  components: {},
  methods: {
  },
  data() {
    return {
      structure: [
        {
          type: "text",
          label: "姓名",
          config: {
            key: "name"
          }
        },
        {
          type: "text",
          label: "年龄",
          config: {
            key: "age"
          }
        },
        {
          type: "text",
          label: "籍贯",
          config: {
            key: "area"
          }
        }
      ],
      data: {
        name: "小虎",
        age: "18",
        area: "江苏"
      }
    };
  },
   mounted() {}
};
</script>

<style scoped>
</style>
