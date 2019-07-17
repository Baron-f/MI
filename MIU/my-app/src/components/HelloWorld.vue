<template>
  <div class="hello">
      <h1>{{text}}</h1>
      <h1>
        如果要使用子组件
      过程分为4步
      1.创建子组件的文件并写相关内容
      2.先引用
      3.在调用
      4.最后使用
      </h1>
  <!-- 使用 -->


  </div>
</template>

<script>
// 引用组件
// import 给引用的文件起个名字但是建议首字母大写 from '引用那个文件路径可以不带后缀'

export default {
  name: 'HelloWorld',
  data () {
    return {
     text:"你好世界"
    }
  }
  // 调用 为什么只写一个Zi呢 是因为在es6中如果键和值相同  只需要谢一个就可以了

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
