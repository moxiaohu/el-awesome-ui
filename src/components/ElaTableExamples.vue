<template>
  <div>
    <ela-table
      v-bind:structure="structure1"
      v-bind:dataList="data1"
      v-on:onTableButtonClick="onTableButtonClick($event)"
    ></ela-table>
  </div>
</template>

<script>
export default {
  name: "ElaTableExamples",
  components: {},
  methods: {
    onTableButtonClick({ index, item, action }) {
      /* eslint-disable no-console */
      console.log(`index: ${index}`);
      console.log(`item json: ${JSON.stringify(item)}`);
      console.log(`action: ${action}`);
      // handle click events here...

    }
  },
  data() {
    return {
      structure1: [
        {
          type: "text",
          label: "内容",
          config: {
            key: "content"
          }
        },
        {
          type: "button",
          label: "操作",
          config: {
            text: "添加",
            action: "add",
            type: "primary" // <el-button> type
          }
        },
        {
          type: "button",
          label: "操作",
          config: {
            text: "删除",
            action: "delete",
            type: "danger" // <el-button> type
          }
        },
      ],
      data1: [
        {
          content: "名称1"
        },
        {
          content: "名称2"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
