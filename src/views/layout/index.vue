<template>
  <div id="layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <li
            class="aside"
            v-for="item in routes[0].children"
            :key="item.path"
            :class="item.path === $route.path ? 'active' : ''"
            @click="$router.push(item.path)"
          >
            {{ item.name }}
          </li>
        </el-aside>
        <el-main>
          <tags @refresh="refresh" />
          <keep-alive>
            <router-view
              v-loading="loading"
              ref="main"
              style="background: #fff; height: calc(100% - 64px); width: calc(100% - 24px); padding: 12px"
            />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { routes } from '@/router'
import tags from './components/tags'
export default {
  components: {
    tags
  },
  data() {
    return {
      routes,
      loading: false
    }
  },
  // 生命周期
  mounted() {
    // 手动塞入当前路由 登录页面完成后迁移至登录后路由获取
    console.log('asyncRouterMap', this.routes)
    this.$store.commit('router/setState', { routes: this.routes })
  },
  methods: {
    // 刷新页面数据方法
    refresh() {
      this.loading = true
      setTimeout(() => {
        Object.assign(this.$refs.main.$data, this.$refs.main.$options.data())
        this.loading = false
      }, 800)
    }
  }
}
</script>
<style lang="scss">
#layout {
  height: 100%;
  width: 100%;
  > section {
    height: 100%;
  }
  .aside {
    height: 40px;
    width: 100%;
    background: #fff;
    list-style-type: none;
    float: left;
    text-align: start;
    text-indent: 24px;
    line-height: 40px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    &:hover {
      color: #1890ff;
    }
    &.active {
      color: #1890ff;
      background: #e6f7ff;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        content: '';
        border-right: 3px solid #1890ff;
      }
    }
  }
}
</style>