import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

 export const routes = [
      {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/login/index.vue")
      },
      {
        path: "/",
        redirect: "/dashboard",
        component: () =>
          import(/* webpackChunkName: "LayOut" */ "../views/LayOut"),
        meta: {
          title: "主面板",
          icon: "dashboard"
        },
        children: [
          {
            name: "DashBoard",
            path: "dashboard",
            meta: {
              title: "主面板",
              icon: "dashboard"
            },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/DashBoard"
              )
          }
        ]
      },
      {
            path: "/artima",
            meta: {
              title: "博文管理",
              icon: "documentation"
            },
            redirect: "/artima/index",
            component: () =>
              import(/* webpackChunkName: "LayOut" */ "../views/LayOut"),
            children: [
              {
                path: "index",
                name: "article",
                meta: {
                  title: "博文管理",
                  icon: "excel"
                },
                component: () =>
                  import(
                    /* webpackChunkName: "article" */ "../views/ArticleManage"
                  )
              },
              {
                path: "newarticle",
                name: "newarticle",
                meta: {
                  title: "新增博文",
                  icon: "excel"
                },
                component: () =>
                  import(
                    /* webpackChunkName: "newarticle" */ "../views/NewArticle"
                  )
              }
            ]
      },
      {
        path: "/message",
        meta: {
          title: "留言管理",
          icon: "clipboard"
        },
        redirect: "/message/index",
        component: () =>
          import(/* webpackChunkName: "LayOut" */ "../views/LayOut"),
        children: [
          {
            path: "articlemsg",
            name: "articlemsg",
            meta: {
              title: "博文留言",
              icon: "wechat"
            },
            component: () =>
              import(
                        /* webpackChunkName: "ArticleMsg" */ "../views/ArticleMsg"
              )
          },
          {
            path: "commonmsg",
            name: "commonmsg",
            meta: {
              title: "其他留言",
              icon: "table"
            },
            component: () =>
              import(
                        /* webpackChunkName: "CommonMsg" */ "../views/CommonMsg"
              )
          }
        ]
      }
        ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
