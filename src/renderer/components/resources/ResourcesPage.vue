<template>
  <div>
    <div class="console">
      <console-page v-on:updateList="updateList"></console-page>
    </div>
    <el-table ref="table" stripe :data="imagelist" class="el-table-filter"
      highlight-current-row @row-click="handleCurrentChange">
        <el-table-column
          fixed
          type="index"
          label="序号"
          width="50"
          align="center">
        </el-table-column>
        <el-table-column
          prop="file_name"
          label="文件名称"
          width="150"
          align="center">
        </el-table-column>
        <el-table-column
          prop="pic"
          label="缩略图"
          width="150"
          align="center">
          <template slot-scope="{row}">
          <img :src="`file://${row.pic}`"  min-width="30" height="30" />
          </template>
        </el-table-column>
        <el-table-column
          prop="count"
          label="数量"
          width="70"
          align="center">
        </el-table-column>
        <el-table-column
          prop="path"
          label="文件地址">
          <template slot-scope="{row}">
          <div v-for="o in row.path" :key="o" class="text item">
          {{ o }}
          </div>
          </template>
        </el-table-column>
      </el-table>
      <resource-detail-page :rdvisible.sync="rdvisible" v-bind:params="resourceDetail.params"></resource-detail-page>
  </div>
</template>

<script>
  import ConsolePage from './ConsolePage'
  import CommandLine from '../../../util/CommandLine.js'
  import ResourceDetailPage from './ResourceDetailPage'
  export default {
    name: 'image-page',
    components: {
      ConsolePage,
      ResourceDetailPage
    },
    data () {
      return {
        project: {
          name: '',
          path: '',
          user: '',
          type: 'image',
          branch: ''
        },
        imagelist: [],
        rdvisible: false,
        resourceDetail: {}
      }
    },
    methods: {
      updateList: function (dataList) {
        console.log(dataList)
        this.imagelist = dataList
        this.loading = false
      },
      updateType: function (type) {
        console.log(type)
      },
      handleClose: function (val) {
        console.log('handleClose')
        this.rdvisible = false
      },
      handleCurrentChange (row) {
        console.log(this.rdvisible)
        this.resourceDetail.params = row
        this.rdvisible = true
        console.log(this.rdvisible)
      },
      onCancel () {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      },
      get: CommandLine.get
    }
  }
</script>

<style scoped>

.console {
  width: 100%;
  height: 160px;
  position: fixed;
}

.el-table-filter {
  width: 100%;
  height: 100%;
  top: 160px;
  position: fixed;
  overflow-y: scroll;
  overflow-x: scroll;
}

.image-console-container {
  width: 100vw;
  height: 140px;
  background-color: #f5f7fa;
}

.image-menu-item-background {
  width: 120px;
  display: flex;
  left: 0px;
  right: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.image-menu-item-title {
  flex: 1;
  width: 210px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text {
    font-size: 12px;
  }

  .item {
    padding: 10px 0;
  }

  .box-card {
    width: 480px;
  }

</style>
