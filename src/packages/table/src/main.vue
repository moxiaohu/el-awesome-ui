<template>
  <div>
    <el-table v-if="dataList && dataList.length" :data="dataList" border fit highlight-current-row>
      <div v-for="(item, index) in structure" :key="index">

        <!-- text -->
        <el-table-column v-if="item.type === 'text'" :prop="item.config.key" :label="item.label"></el-table-column>

        <!-- button -->
        <el-table-column v-if="item.type === 'button'" :label="item.label">
          <template slot-scope="scope">
            <el-button
              @click="onClickTableItem(scope.$index, scope.row, item.config.action)"
              v-bind:type="item.config.type">{{item.config.text}}</el-button>
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
    onClickTableItem(index, item, action) {
      this.$emit("onClickItem", { index, item, action });
    }
  }
};
</script>

<style scoped>
</style>
