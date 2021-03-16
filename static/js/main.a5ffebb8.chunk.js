(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__9faSW",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3D-Kc"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1vNhs",Modal:"Modal_Modal__RQ0NT"}},24:function(e,t,a){e.exports={Button:"Button_Button__2n1S1"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__36vHA"}},30:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),o=a.n(c),l=(a(30),a(4)),i=a(5),u=a(7),s=a(6),h=a(8),m=a.n(h),d=a(0),g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:m.a.Searchbar,children:Object(d.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(d.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:m.a.SearchFormInput,value:this.state.query,onChange:this.handleChange,type:"text"})]})})}}]),a}(n.Component),b=a(14),j=a(11),p=a.n(j),y=function(e){var t=e.imgItem,a=e.largeImgUrl,n=e.onHandleClick,r=t.id,c=t.webformatURL;return Object(d.jsx)("li",{className:p.a.ImageGalleryItem,onClick:function(){return n(a)},children:Object(d.jsx)("img",{src:c,alt:r,className:p.a.ImageGalleryItemImage})})},f=a(23),O=a.n(f),v=(a(52),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{type:"Circles",color:"#00BFFF",height:40,width:40})})}}]),a}(r.a.Component)),S=a(24),I=a.n(S),_=function(e){var t=e.onHandleClick;return Object(d.jsx)("button",{type:"button",className:I.a.Button,onClick:t,children:"Load more"})},x=a(12),k=a.n(x),w=document.querySelector("#modal-root"),C=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onHandleClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onHandleClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(d.jsx)("div",{className:k.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:k.a.Modal,children:this.props.children})}),w)}}]),a}(n.Component),F=a(13),q=a.n(F);q.a.defaults.baseURL="https://pixabay.com/api/";var G=function(e){var t=e.query,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,c="?q=".concat(a,"&page=").concat(r,"&key=").concat("19826807-5678a17c69c5850135e2e3194","&image_type=photo&orientation=horizontal&per_page=").concat(12);return q.a.get(c).then((function(e){return e.data.hits}))},B=a(25),M=a.n(B),N=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:1,images:[],isLoading:!1,error:null,showModal:!1,largeImgUrl:null},e.fetchGallery=function(){var t=e.props.query,a=e.state.currentPage;e.setState({isLoading:!0}),setTimeout((function(){G({query:t,currentPage:a}).then((function(a){0===a.length&&alert("Sorry! ".concat(t," is not found")),e.setState((function(e){return{images:[].concat(Object(b.a)(e.images),Object(b.a)(a)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))}),250)},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}})),e.setState({largeImgUrl:null})},e.handleClickImage=function(t){e.toggleModal(),e.setState({largeImgUrl:t})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.query!==this.props.query&&this.setState({currentPage:1,images:[],error:null},(function(){return a.fetchGallery()})),t.currentPage!==this.state.currentPage&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.isLoading,r=t.showModal,c=t.largeImgUrl,o=a.length>11&&!n;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:M.a.ImageGallery,children:a.map((function(t){return Object(d.jsx)(y,{imgItem:t,largeImgUrl:t.largeImageURL,onHandleClick:e.handleClickImage},t.id)}))}),r&&Object(d.jsx)(C,{onHandleClose:this.toggleModal,children:Object(d.jsx)("img",{src:c,alt:""})}),n&&Object(d.jsx)(v,{}),o&&Object(d.jsx)(_,{onHandleClick:this.fetchGallery})]})}}]),a}(n.Component),L=(a(70),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.onChangeQuery=function(t){e.setState({query:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{onSubmit:this.onChangeQuery}),Object(d.jsx)(N,{query:this.state.query})]})}}]),a}(n.Component));a(71);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1zi1E",SearchForm:"Searchbar_SearchForm__2_Fn4",SearchFormButton:"Searchbar_SearchFormButton__S8pdx",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__TTRwt",SearchFormInput:"Searchbar_SearchFormInput__2K5r0"}}},[[72,1,2]]]);
//# sourceMappingURL=main.a5ffebb8.chunk.js.map