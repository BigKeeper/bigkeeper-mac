<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <div class="welcome">
      Efficiency improvement for iOS&Android modular development.
    </div>
    <main>
      <div class="left-side">
        <div class="doc">
          <div class="title">Getting Started</div>
          <el-button type="primary" @click="pfvisible = true" round>Add your first project</el-button>
        </div>
      </div>
      <div class="right-side">
        <div class="doc">
          <div class="title">About us</div>
          <el-button icon="el-icon-star-on" type="success" @click="open('https://github.com/eleme/bigkeeper')" round>Star</el-button>
          <el-button @click="open('https://github.com/orgs/BigKeeper/people')" round>Team</el-button>
        </div>
      </div>
    </main>
    <project-form v-bind:pfvisible.sync="pfvisible"></project-form>
  </div>
</template>

<script>
  import ProjectForm from '../project/ProjectForm'
  export default {
    name: 'landing-page',
    data () {
      return {
        pfvisible: false
      }
    },
    components: { ProjectForm },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      push (link) {
        this.$router.push(link)
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .right-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 18px;
    margin-bottom: 50px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  /* .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  } */
</style>
