(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{542:function(t,e,r){"use strict";r.r(e);var n=r(41),c=(r(57),r(12),r(8),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("wiki").only(["title","category","description","img","slug","author"]).sortBy("order","asc").fetch();case 3:return n=e.sent,c=n.reduce((function(a,t){return t.category&&(a[t.category]=t.category),a}),{}),o=Object.keys(c).sort((function(a,b){return a.localeCompare(b)})),e.abrupt("return",{items:n,categories:o,article:{slugDir:"wiki"}});case 7:case"end":return e.stop()}}),e)})))()},methods:{categoryItems:function(t){return this.items.filter((function(e){return e.category===t&&e.category}))}},components:{EbtArticleItems:r(85).EbtVue.EbtArticleItems}}),o=r(19),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nuxt-content ebt-toc"},t._l(t.categories,(function(e){return r("div",{key:e},[r("h2",[t._v(t._s(e))]),t._v(" "),r("ebt-article-items",{attrs:{article:t.article,items:t.categoryItems(e)}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);