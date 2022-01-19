<template>
  <div class="editor-box">
    <!-- bidirectional data binding（双向数据绑定） -->
    <div
      class="quill-editor"
      :v-model="content"
      v-quill:myQuillEditor="editorOption"
    ></div>

    <!-- Or manually control the data synchronization（手动控制数据流）  -->
    <div
      class="quill-editor"
      :content="content"
      @change="onEditorChange($event)"
      v-quill:myQuillEditor="editorOption"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CreationCenter",
  data() {
    return {
      content: "<p>example content</p>",
      editorOption: {
        /* quill options */
      },
    };
  },
  mounted() {
    console.log("this is current quill instance object", this.myQuillEditor);
  },
  methods: {
    onEditorChange(event) {
      console.log("onEditorChange");
    },
  },
  // Omit the same parts as in the following component sample code
  // ...
};
</script>

<style lang="less" scoped>

</style>