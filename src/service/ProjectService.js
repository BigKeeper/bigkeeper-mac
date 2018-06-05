var ProjectService = {

  add: function (project) {
    if (this.project(project.path) !== null) {
      return false
    }

    var projects = this.projects()
    projects.push(project)

    const Store = require('electron-store')
    const store = new Store()
    store.set('projects', projects)

    return true
  },

  delete: function (index) {
    var projects = this.projects()

    let project = projects[index]
    let current = this.current()
    if (current.path === project.path) {
      return false
    }
    projects.splice(index, 1)

    const Store = require('electron-store')
    const store = new Store()
    store.set('projects', projects)

    return true
  },

  update: function (project) {
    let projects = this.projects()
    let length = projects.length
    for (var i = 0; i < length; i++) {
      let tmp = projects[i]
      if (project.path === tmp.path) {
        projects[i] = project
      }
    }

    const Store = require('electron-store')
    const store = new Store()
    store.set('projects', projects)
  },

  project: function (path) {
    let projects = this.projects()
    let length = projects.length
    for (var i = 0; i < length; i++) {
      let project = projects[i]
      if (project.path === path) {
        return project
      }
    }
    return null
  },

  projects: function () {
    const Store = require('electron-store')
    const store = new Store()

    var projects = store.get('projects')
    if (projects === null || projects === undefined) {
      console.log('here')
      projects = []
    }
    return projects
  },

  clear: function () {
    const Store = require('electron-store')
    const store = new Store()
    console.log('clear')
    store.clear()
  },

  current: function () {
    const Store = require('electron-store')
    const store = new Store()

    return store.get('current')
  },

  setCurrent: function (project) {
    const Store = require('electron-store')
    const store = new Store()
    store.set('current', project)
  },

  getCurrentVersion: function () {

  }
}

module.exports = ProjectService
