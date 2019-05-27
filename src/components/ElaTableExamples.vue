<template>
  <div>
    <ela-table
      v-bind:structure="structure"
      v-bind:dataList="list.displayedData"
      v-on:onTableButtonClick="onTableButtonClick($event)"
    />

    <el-pagination
      layout="prev, pager, next"
      @current-change="onPageChange"
      :page-size="list.pageSize"
      :total="list.total"
    />
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
      console.log(page);

      this.list.page = page;
      this.list.displayedData = this.list.data.slice(
        (this.list.page - 1) * this.list.pageSize,
        this.list.page * this.list.pageSize
      );
    }
  },
  data() {
    return {
      structure: [
        {
          key: "content"
        },
        {
          type: "text",
          label: "内容",
          key: "content"
        },
        {
          type: "button",
          label: "操作",
          colWidth: 150,
          config: {
            text: "添加",
            action: "add",
            type: "primary" // <el-button> type
          }
        },
        {
          type: "button",
          label: "操作",
          colWidth: 150,
          config: {
            text: "删除",
            action: "delete",
            type: "danger" // <el-button> type
          }
        },
        {
          type: "img",
          label: "Web img/gif",
          colWidth: 150,
          key: "webIcon1",
          config: {
            style: {
              width: "80px",
              height: "80px",
              background: "#dfdfdf"
            }
          }
        },
        {
          type: "img",
          label: "Local Icon",
          colWidth: 150,
          key: "localIcon1",
          config: {
            style: {
              width: "50px",
              height: "50px",
              background: "#dfdfdf"
            }
          }
        }
      ],
      list: {
        total: 0,
        pageSize: 4,
        page: 1,
        data: [],
        displayedData: []
      }
    };
  },
  async mounted() {
    // get data
    const apiResponseData = [
      {
        content: "这个是第一行数据的内容",
        icon: "https://cdn2.thecatapi.com/images/21g.gif",
      },
      {
        content: "这个是第二行数据的内容",
        icon: "https://cdn2.thecatapi.com/images/3k4.gif",
        heihei: "https://cdn2.thecatapi.com/images/3k4.gif"
      },
      {
        content: "这个是第三行数据的内容",
        icon: "https://cdn2.thecatapi.com/images/2jh.jpg"
      },
      {
        content: "这个是第四行数据的内容",
        icon: "https://cdn2.thecatapi.com/images/1lc.jpg"
      },
      {
        content: "这个是第五行数据的内容",
        icon: "https://cdn2.thecatapi.com/images/121.jpg"
      },
      {
        content: "这个是第六行数据的内容",
        icon: "https://cdn2.thecatapi.com/images/3mo.jpg"
      }
    ];

    
    this.list.data = await apiResponseData.map(item => {
      // set web icon
      item.webIcon1 = item.icon;
      delete item.icon

      // set local icon
      item.localIcon1 = require("../assets/logo.png");
      return item;
    });
    this.list.total = this.list.data.length;

    this.list.displayedData = this.list.data.slice(
      (this.list.page - 1) * this.list.pageSize,
      this.list.page * this.list.pageSize
    );
  }
};
</script>

<style scoped>
</style>
