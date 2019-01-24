<template>
  <div>
    <el-table v-if="dataList && dataList.length" :data="dataList" border fit highlight-current-row>
      <div v-for="(item, index) in structure" :key="index">
        <!-- text -->
        <el-table-column :width="item.colWidth" v-if="item.type === 'text'" :prop="item.config.key" :label="item.label"></el-table-column>

        <!-- button -->
        <el-table-column :width="item.colWidth" v-if="item.type === 'button'" :label="item.label">
          <template slot-scope="scope">
            <el-button
              @click="onTableButtonClick(scope.$index, scope.row, item.config.action)"
              v-bind:type="item.config.type"
            >{{item.config.text}}</el-button>
          </template>
        </el-table-column>

        <!-- img from internet -->
        <el-table-column :width="item.colWidth" v-if="item.type === 'img'" :label="item.label">
          <template slot-scope="scope">
            <img :style="item.config.style" :src="scope.row[item.config.key]">
          </template>
        </el-table-column>
      </div>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ela-table",
  props: {
    dataList: { type: Array, required: false },
    structure: { type: Array, required: true }
  },
  methods: {
    onTableButtonClick(index, item, action) {
      this.$emit("onTableButtonClick", { index, item, action });
    }
  }
};
</script>

<style scoped>
</style>
