<template>
  <div class="container-fluid">
    <div class="row">

      <!-- <div v-for="b in blogs" class="col-12 col-md-3 p-4"> -->

      <div class="col-md-10 text-center rounded p-2 d-flex">

        <img src="https://thiscatdoesnotexist.com" class="img-fluid rounded-circle elevated-2 p-2 profile-pic">
        <h5 class="mt-4">author</h5>
      </div>
      <div>
        <b class="fs-3">blog title</b>

      </div>
      <br>

      <!-- <h5>{{blog.title}}</h5>
            <h6></h6> -->


      <!-- </div> -->



    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js';

export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs();
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.profile-pic {
  height: 14vh;
  width: 14vh;
}
</style>
