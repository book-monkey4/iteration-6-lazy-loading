function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,i){return e&&_defineProperties(n.prototype,e),i&&_defineProperties(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{lXdu:function(n,e,i){"use strict";i.r(e),i.d(e,"BooksModule",(function(){return X}));var t,o,b=i("ofXK"),c=i("tyNb"),r=i("fXoL"),s=i("Mc/V"),a=((o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"onMouseEnter",value:function(){this.isZoomed=!0}},{key:"onMouseLeave",value:function(){this.isZoomed=!1}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275dir=r.Cb({type:o,selectors:[["","bmZoom",""]],hostVars:2,hostBindings:function(n,e){1&n&&r.Tb("mouseenter",(function(){return e.onMouseEnter()}))("mouseleave",(function(){return e.onMouseLeave()})),2&n&&r.zb("small",e.isZoomed)}}),o),u=((t=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"transform",value:function(n){return n?"".concat(n.substr(0,3),"-").concat(n.substr(3)):null}}]),n}()).\u0275fac=function(n){return new(n||t)},t.\u0275pipe=r.Gb({name:"isbn",type:t,pure:!0}),t);function l(n,e){if(1&n&&r.Ib(0,"img",6),2&n){var i=r.Vb();r.Zb("src",i.book.thumbnails[0].url,r.ec)}}function f(n,e){if(1&n&&(r.Mb(0,"div",7),r.ic(1),r.Lb()),2&n){var i=r.Vb();r.xb(1),r.jc(i.book.subtitle)}}function g(n,e){1&n&&(r.Mb(0,"span"),r.ic(1,", "),r.Lb())}function d(n,e){if(1&n&&(r.Mb(0,"span"),r.ic(1),r.gc(2,g,2,0,"span",8),r.Lb()),2&n){var i=e.$implicit,t=e.last;r.xb(1),r.kc(" ",i,""),r.xb(1),r.Zb("ngIf",!t)}}var m,h=((m=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||m)},m.\u0275cmp=r.Bb({type:m,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:10,vars:7,consts:[["class","ui tiny image","bmZoom","",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],["bmZoom","",1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(n,e){1&n&&(r.gc(0,l,1,1,"img",0),r.Mb(1,"div",1),r.Mb(2,"div",2),r.ic(3),r.Lb(),r.gc(4,f,2,1,"div",3),r.Mb(5,"div",4),r.gc(6,d,3,2,"span",5),r.Ib(7,"br"),r.ic(8),r.Wb(9,"isbn"),r.Lb(),r.Lb()),2&n&&(r.Zb("ngIf",e.book.thumbnails&&e.book.thumbnails[0]&&e.book.thumbnails[0].url),r.xb(3),r.jc(e.book.title),r.xb(1),r.Zb("ngIf",e.book.subtitle),r.xb(2),r.Zb("ngForOf",e.book.authors),r.xb(2),r.kc(" ISBN ",r.Xb(9,5,e.book.isbn)," "))},directives:[b.k,b.j,a],pipes:[u],styles:[""]}),m);function k(n,e){if(1&n&&r.Ib(0,"bm-book-list-item",5),2&n){var i=e.$implicit;r.Zb("book",i)("routerLink",i.isbn)}}function v(n,e){1&n&&(r.Mb(0,"p"),r.ic(1,"Es wurden noch keine B\xfccher eingetragen."),r.Lb())}function p(n,e){if(1&n&&(r.Kb(0),r.gc(1,k,1,2,"bm-book-list-item",3),r.gc(2,v,2,0,"p",4),r.Jb()),2&n){var i=e.ngIf;r.xb(1),r.Zb("ngForOf",i),r.xb(1),r.Zb("ngIf",!i.length)}}function y(n,e){1&n&&(r.Mb(0,"div",6),r.Mb(1,"div",7),r.ic(2,"Daten werden geladen..."),r.Lb(),r.Lb())}var I,L,M=((L=function(){function n(e){_classCallCheck(this,n),this.bs=e}return _createClass(n,[{key:"ngOnInit",value:function(){this.books$=this.bs.getAll()}}]),n}()).\u0275fac=function(n){return new(n||L)(r.Hb(s.a))},L.\u0275cmp=r.Bb({type:L,selectors:[["bm-book-list"]],decls:5,vars:4,consts:[[1,"ui","middle","aligned","selection","divided","list"],[4,"ngIf","ngIfElse"],["loading",""],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item",3,"book","routerLink"],[1,"ui","active","dimmer"],[1,"ui","large","text","loader"]],template:function(n,e){if(1&n&&(r.Mb(0,"div",0),r.gc(1,p,3,2,"ng-container",1),r.Wb(2,"async"),r.gc(3,y,3,0,"ng-template",null,2,r.hc),r.Lb()),2&n){var i=r.cc(4);r.xb(1),r.Zb("ngIf",r.Xb(2,2,e.books$))("ngIfElse",i)}},directives:[b.k,b.j,h,c.c],pipes:[b.b],styles:[""]}),L),C=((I=function(){function n(e,i){_classCallCheck(this,n),this.templateRef=e,this.viewContainerRef=i}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;setTimeout((function(){n.viewContainerRef.createEmbeddedView(n.templateRef)}),this.bmDelay)}}]),n}()).\u0275fac=function(n){return new(n||I)(r.Hb(r.K),r.Hb(r.O))},I.\u0275dir=r.Cb({type:I,selectors:[["","bmDelay",""]],inputs:{bmDelay:"bmDelay"}}),I);function w(n,e){if(1&n&&(r.Mb(0,"h3"),r.ic(1),r.Lb()),2&n){var i=r.Vb(2);r.xb(1),r.jc(i.book.subtitle)}}function x(n,e){if(1&n&&(r.Kb(0),r.ic(1),r.Ib(2,"br"),r.Jb()),2&n){var i=e.$implicit;r.xb(1),r.kc(" ",i,"")}}function Z(n,e){1&n&&r.Ib(0,"i",14)}function _(n,e){if(1&n&&(r.Kb(0),r.gc(1,Z,1,0,"i",13),r.Jb()),2&n){var i=e.index;r.xb(1),r.Zb("bmDelay",500+200*i)}}function O(n,e){1&n&&r.Ib(0,"img",15),2&n&&r.Zb("src",e.$implicit.url,r.ec)}var F=function(n){return["../../admin/edit",n]};function B(n,e){if(1&n){var i=r.Nb();r.Mb(0,"div"),r.Mb(1,"h1"),r.ic(2),r.Lb(),r.gc(3,w,2,1,"h3",2),r.Ib(4,"div",3),r.Mb(5,"div",4),r.Mb(6,"div",5),r.Mb(7,"h4"),r.ic(8,"Autoren"),r.Lb(),r.gc(9,x,3,1,"ng-container",6),r.Lb(),r.Mb(10,"div",5),r.Mb(11,"h4"),r.ic(12,"ISBN"),r.Lb(),r.ic(13),r.Wb(14,"isbn"),r.Lb(),r.Mb(15,"div",5),r.Mb(16,"h4"),r.ic(17,"Erschienen"),r.Lb(),r.ic(18),r.Wb(19,"date"),r.Lb(),r.Mb(20,"div",5),r.Mb(21,"h4"),r.ic(22,"Rating"),r.Lb(),r.gc(23,_,2,1,"ng-container",6),r.Lb(),r.Lb(),r.Mb(24,"h4"),r.ic(25,"Beschreibung"),r.Lb(),r.Mb(26,"p"),r.ic(27),r.Lb(),r.Mb(28,"div",7),r.gc(29,O,1,1,"img",8),r.Lb(),r.Mb(30,"button",9),r.Tb("click",(function(){return r.dc(i),r.Vb().removeBook()})),r.Ib(31,"i",10),r.ic(32," Buch l\xf6schen "),r.Lb(),r.Mb(33,"a",11),r.Ib(34,"i",12),r.ic(35," Buch bearbeiten "),r.Lb(),r.Lb()}if(2&n){var t=r.Vb();r.xb(2),r.jc(t.book.title),r.xb(1),r.Zb("ngIf",t.book.subtitle),r.xb(6),r.Zb("ngForOf",t.book.authors),r.xb(4),r.kc(" ",r.Xb(14,9,t.book.isbn)," "),r.xb(5),r.kc(" ",r.Yb(19,11,t.book.published,"longDate")," "),r.xb(5),r.Zb("ngForOf",t.getRating(t.book.rating)),r.xb(4),r.jc(t.book.description),r.xb(2),r.Zb("ngForOf",t.book.thumbnails),r.xb(4),r.Zb("routerLink",r.ac(14,F,t.book.isbn))}}function E(n,e){1&n&&r.Ib(0,"div",16)}var j,D,V,R=[{path:"",component:M},{path:":isbn",component:(j=function(){function n(e,i,t){_classCallCheck(this,n),this.bs=e,this.router=i,this.route=t}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")).subscribe((function(e){return n.book=e}))}},{key:"getRating",value:function(n){return new Array(n)}},{key:"removeBook",value:function(){var n=this;confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe((function(e){return n.router.navigate(["../"],{relativeTo:n.route})}))}}]),n}(),j.\u0275fac=function(n){return new(n||j)(r.Hb(s.a),r.Hb(c.b),r.Hb(c.a))},j.\u0275cmp=r.Bb({type:j,selectors:[["bm-book-details"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],[4,"ngFor","ngForOf"],[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","tiny","red","labeled","icon","button",3,"click"],[1,"remove","icon"],[1,"ui","tiny","yellow","labeled","icon","button",3,"routerLink"],[1,"write","icon"],["class","yellow star icon",4,"bmDelay"],[1,"yellow","star","icon"],[3,"src"],[1,"ui","active","centered","inline","loader"]],template:function(n,e){if(1&n&&(r.gc(0,B,36,16,"div",0),r.gc(1,E,1,0,"ng-template",null,1,r.hc)),2&n){var i=r.cc(2);r.Zb("ngIf",e.book)("ngIfElse",i)}},directives:[b.k,b.j,c.e,C],pipes:[u,b.e],styles:["p[_ngcontent-%COMP%]{white-space:pre-wrap}"]}),j)}],H=((V=function n(){_classCallCheck(this,n)}).\u0275mod=r.Fb({type:V}),V.\u0275inj=r.Eb({factory:function(n){return new(n||V)},providers:[],imports:[[c.f.forChild(R)],c.f]}),V),X=((D=function n(){_classCallCheck(this,n)}).\u0275mod=r.Fb({type:D}),D.\u0275inj=r.Eb({factory:function(n){return new(n||D)},imports:[[b.c,H]]}),D)}}]);