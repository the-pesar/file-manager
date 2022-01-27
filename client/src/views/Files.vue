<template>
  <n-row gutter="12">
    <n-col
      v-for="(file, i) in files"
      :key="i"
      style="margin: 7.5px 0px"
      :span="3"
    >
      <file
        v-if="file.type === 'file'"
        :name="file.name"
        :suffix="file.suffix"
        :size="file.size"
      ></file>
      <directory
        v-if="file.type === 'directory'"
        :name="file.name"
        @click="getContent(path + '/' + file.name)"
      ></directory>
    </n-col>
  </n-row>
</template>

<script>
import { ref, defineComponent } from "vue";
import File from "@/components/File.vue";
import Directory from "@/components/Directory.vue";
import axios from "axios";

const path = ref("test/foolder/xf");
const files = ref();

const getContent = (p) => {
  console.log(p);
  path.value = p;
  axios
    .post("http://127.0.0.1:3000/v1/get-content", { path: p })
    .then(({ data }) => {
      files.value = data.content;
    });
};

export default defineComponent({
  setup() {
    getContent(path.value);
    return { files, path, getContent };
  },
  components: { File, Directory },
});
export { path, getContent };
</script>
