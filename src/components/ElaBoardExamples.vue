<template>
  <div>
    <ela-board :structure="structure" :data="data"></ela-board>
  </div>
</template>

<script>
export default {
  name: "ElaBoardExamples",
  components: {},
  methods: {},
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
        },
        {
          type: "text",
          label: "爱好",
          config: {
            key: "hobby"
          }
        },
        {
          type: "text",
          label: "座右铭",
          config: {
            key: "motto"
          }
        }
      ],
      data: {
        name: "小猪",
        age: "18",
        area: "上海",
        hobby: "dota",
        motto:"热的和狗一样"
      }
    };
  },
  mounted() {}
};
</script>

<style scoped>
</style>
