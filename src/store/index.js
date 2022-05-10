import { createStore } from 'vuex';


const store = createStore({
  state:{
    user: { name: 'John Doe', email: 'fake@email.com', username: 'jd123'},
    posts: ['post 1', 'post 2', 'post 3', 'post 4'],
    someString: 'etc'
  },
  getters:{
    // postsCount: state => state.posts.length,
    postsCount(state){
        return state.posts.length
      },
  },
  mutations: {},
  actions:{}
});

export default store;