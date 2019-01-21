<template>
  <div>
    <el-row>
      <div v-for="(item, index) in structure" :key="index">
        <el-col :span="span">
          <div class="col">{{item.label}}: {{data[item.config.key]}}</div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ela-board",
  props: {
    span: { type: Number, default: 8 },
    data: { type: Object, required: true },
    structure: { type: Array, required: true }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.col {
  text-align: start;
  margin: 2%
}
</style>
