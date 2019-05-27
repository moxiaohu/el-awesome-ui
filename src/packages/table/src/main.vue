<template>
    <el-table v-if="dataList && dataList.length" :data="dataList" border fit highlight-current-row>
      <template v-for="(item, index) in structure">
        <!-- text -->
        <el-table-column :width="item.colWidth" v-if="item.type === 'text' || !item.type" :prop="item.key" :label="(item.label || item.key)" :key="index"></el-table-column>

        <!-- button -->
        <el-table-column :width="item.colWidth" v-else-if="item.type === 'button'" :label="item.label" :key="index">
          <template slot-scope="scope">
            <el-button
              @click="onTableButtonClick(scope.$index, scope.row, item.config.action)"
              v-bind:type="item.config.type"
            >{{item.config.text}}</el-button>
          </template>
        </el-table-column>

        <!-- img from internet -->
        <el-table-column :width="item.colWidth" v-else-if="item.type === 'img'" :label="item.label" :key="index">
          <template slot-scope="scope">
            <img :style="item.config.style" :src="scope.row[item.key]">
          </template>
        </el-table-column>
      </template>
    </el-table>
</template>

<script>
export default {
  name: "ela-table",
  props: {
    dataList: { type: Array, required: false, default: null },
    structure: { type: Array, required: false, default: function () { return [] } }
  },
  watch: {
    // To make code simple, show key in data object if it is not mentioned in this.structure, 
    dataList: function () {
      if(this.dataList.length === 0) {
        return
      }
      const dataKeys = Object.keys(this.dataList[0]);
      dataKeys.forEach((item) => {
        if(!this.structure.find(s => s.key === item)) {
          this.structure.push({
              key: item
          })
        }
      })
    }
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
