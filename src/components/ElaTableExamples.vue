<template>
  <div>
    <ela-table
      v-bind:structure="structure1"
      v-bind:dataList="list.displayedData"
      v-on:onTableButtonClick="onTableButtonClick($event)"/>

       <el-pagination
      layout="prev, pager, next"
      @current-change="onPageChange"
      :page-size="list.pageSize"
      :total="list.total"/>
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

    },
    onPageChange(page) {
      console.log(page)

      this.list.page = page
      this.list.displayedData = this.list.data.slice((this.list.page - 1) * this.list.pageSize,
            this.list.page * this.list.pageSize)
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
      list: {
          total: 0,
          pageSize: 4,
          page: 1,
          data: [],
          displayedData: [],
        }
    };
  },
   mounted() {
     const apiResponseData = [
        {
          content: "名称1"
        },
        {
          content: "名称2"
        },
        {
          content: "名称3"
        },
        {
          content: "名称4"
        },
        {
          content: "名称5"
        },
        {
          content: "名称6"
        }
      ]

      this.list.data = apiResponseData;
      this.list.total = this.list.data.length

      this.list.displayedData = this.list.data.slice((this.list.page - 1) * this.list.pageSize,
            this.list.page * this.list.pageSize)
  }
};
</script>

<style scoped>
</style>
