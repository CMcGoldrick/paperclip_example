var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      title: "",
      body: ""
    };
  },
  created: function() {},
  methods: {
    uploadFile: function(event) {
      if (event.target.files.length > 0) {
        var formData = new FormData();
        formData.append("title", this.title);
        formData.append("body", this.body);
        formData.append("image", event.target.files[0]);

        axios
          .post("http://localhost:3000/posts", formData)
          .then(function(response) {
            console.log(response);
            this.title = "";
            this.body = "";
            event.target.value = "";
          }.bind(this));
      }
    }
  },
  computed: {}
};

var PostsShowPage = {
  template: "#posts-show-page",
  data: function() {
    return {
      image: "/no-image.jpg"
    };
  },
  created: function() {
    axios
    .get("/posts/" + this.$route.params.id )
    .then(function(response) {
      this.image = response.data.image
    }.bind(this));
  },
  methods: {
  },
  computed: {}
};

var router = new VueRouter({
  routes: [
  { path: "/", component: HomePage },
  { path: "/posts/:id", component: PostsShowPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});