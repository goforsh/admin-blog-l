<template>
  <div class='l-edit'>
    <el-input class="l-edit__line" placeholder="请输入标题" v-model="article.topci">
        <template slot="prepend">博文标题</template>
    </el-input>

    <el-input class="l-edit__line" placeholder="请输入概述" v-model="article.abstract">
        <template slot="prepend">博文概述</template>
    </el-input>

    <el-upload
        class="l-edit__line"
        action="#"
        list-type="picture-card"
        :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
        <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
        >
        <span class="el-upload-list__item-actions">
            <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
            >
            <i class="el-icon-zoom-in"></i>
            </span>
            <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
            >
            <i class="el-icon-download"></i>
            </span>
            <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
            >
            <i class="el-icon-delete"></i>
            </span>
        </span>
        </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

<Tinymce></Tinymce>
  </div>
</template>

<script>
import Tinymce from '../Tinymce';
export default {
  name: '',
  data(){
    return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        article:{
            topic:'',
            abstract: '',
            content: ''
        }

    }
  },
  components: {
      Tinymce
  },
  created(){},
  mounted(){},
  methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
  }
}
</script>
<style lang='scss' scoped>
.l-edit {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
}
</style>
