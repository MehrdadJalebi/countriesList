(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{451:function(e,t,o){var content=o(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(80).default)("381e5da0",content,!0,{sourceMap:!1})},456:function(e,t,o){"use strict";o(451)},457:function(e,t,o){var n=o(79)((function(i){return i[1]}));n.push([e.i,".filter[data-v-2369e965]{position:relative}.filter .region-filter[data-v-2369e965]{background-color:var(--elements-primary);background-image:none;border:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.1);color:var(--text-primary);font-size:.9rem;height:3.25rem;margin-left:5px;width:10rem}.filter .region-filter[data-v-2369e965]:focus{border:0}.filter .arrow[data-v-2369e965]{position:absolute;right:10px;top:20px}@media screen and (max-width:568px){.filter[data-v-2369e965]{margin-left:0;margin-right:5px}}@media(max-width:414px){.filter .region-filter[data-v-2369e965]{width:45vw}}",""]),n.locals={},e.exports=n},464:function(e,t,o){"use strict";o.r(t);o(2),o(4),o(39);var n={props:{regions:{type:Array,default:function(){return[]}}},data:function(){return{options:[{value:"",text:"Filter by region",disabled:!0},{value:"All",text:"All"}],selectedRegion:""}},watch:{regions:{handler:function(e){var t=this;e&&e.forEach((function(e){t.options.push({value:e,text:e})}))},immediate:!0}},methods:{update:function(){var e=this;this.$emit("loading"),setTimeout((function(){e.$emit("update",e.selectedRegion)}),100)}}},r=(o(456),o(70)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"filter"},[t("b-form-select",{staticClass:"region-filter",attrs:{options:e.options},on:{change:function(t){return e.update()}},model:{value:e.selectedRegion,callback:function(t){e.selectedRegion=t},expression:"selectedRegion"}}),e._v(" "),t("font-awesome-icon",{staticClass:"arrow",attrs:{icon:"fa-angle-down"}})],1)}),[],!1,null,"2369e965",null);t.default=component.exports}}]);