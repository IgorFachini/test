(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{WfYA:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[i("q-page",[i("q-jumbotron",[i("h1",{staticClass:"q-display-1 capitalize",attrs:{id:"rt-title-el"}},[t._v(t._s(t.destiny.nome.toLowerCase()))]),null==t.destiny.detalhes_atividade?i("div",{staticClass:"text-faded"},[t._v("\n        Realizar entrega entre 14hs e 18hs, itens a serem entregues são 2 caixas grandes do produto que vendemos. Entregar aos cuidados do sr. Igor "+t._s(t.destiny.detalhes_atividade)+"\n      ")]):t._e(),i("hr",{staticClass:"q-hr q-my-lg"}),null!=t.destiny.hr_prev_chegada_ini||null!=t.destiny.hr_prev_chegada_fim?i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("p",{staticClass:"rt_marginLabel text-faded"},[t._v(t._s(null!=t.destiny.hr_prev_chegada_ini?"Previ.chegada:":"Previ.saída:"))]),i("p",{staticClass:"rt_marginLabel"},[t._v(t._s(null!=t.destiny.hr_prev_chegada_ini?t.destiny.hr_prev_chegada_ini:t.destiny.hr_prev_chegada_fim))])]),null!=t.destiny.tempo_max_permanencia?i("div",{staticClass:"col-6"},[i("p",{staticClass:"rt_marginLabel text-faded"},[t._v("Tempo permanencia:")]),i("p",{staticClass:"rt_marginLabel"},[t._v(t._s(t.destiny.tempo_max_permanencia))])]):t._e()]):t._e(),i("div",{staticClass:"q-title q-mb-md capitalize rt_marginLabel"},[t._v(t._s(t.destiny.endereco.toLowerCase()))]),i("div",{attrs:{align:"right"}},[i("q-btn",{attrs:{size:"",outline:"",color:"primary","text-color":"blue",label:"ABRIR ROTA"},on:{click:function(e){t.openRoute()}}})],1),i("hr",{staticClass:"q-hr q-my-lg"}),i("q-btn",{staticClass:"full-width",attrs:{size:"lg",color:t.isDestinyFinalized?"white":"primary","text-color":t.isDestinyFinalized?"blue":"white",icon:t.isDestinyFinalized?"check":"",label:"Ações da Visista "},on:{click:function(e){t.destinyActionModal=!0}}}),i("q-btn",{staticClass:"fixed",staticStyle:{right:"18px",bottom:"18px"},attrs:{round:"",color:"primary",icon:"keyboard_arrow_up"},on:{click:function(e){t.scrollToElement("rt-title-el")}}})],1),i("l-map",{staticClass:"rt_full_map",attrs:{zoom:t.map.zoom,center:t.map.center}},[i("l-tile-layer",{attrs:{url:t.map.url}}),i("l-marker",{attrs:{"lat-lng":t.map.marker}})],1),i("q-modal",{ref:"modalRef",attrs:{minimized:""},model:{value:t.destinyActionModal,callback:function(e){t.destinyActionModal=e},expression:"destinyActionModal"}},[i("div",{staticStyle:{padding:"10px"}},["itinerario"==t.destiny.tipo_destino?i("q-btn",{staticClass:"full-width",attrs:{size:"md",color:t.isCheckIn?"tertiary":"primary",label:"Check-In",disable:t.isCheckIn},on:{click:function(e){t.modalAction(t.CHECK_IN_ACTION)}}}):t._e(),"destino"==t.destiny.tipo_atividade&&t.destiny.questions?i("q-btn",{staticClass:"full-width",attrs:{size:"md",color:t.isAnswerNotValid?"tertiary":"primary",label:"Resultado da Visita",disable:t.isAnswerNotValid},on:{click:function(e){t.modalAction(t.ACTIVITY_ACTION)}}}):t._e(),"itinerario"==t.destiny.tipo_destino?i("q-btn",{staticClass:"full-width",attrs:{size:"md",color:!t.isCheckOut&&t.isCheckIn&&t.isAnswerNotValid?"primary":"tertiary",label:"Check-Out",disable:t.isCheckOut||!t.isCheckIn||!t.isAnswerNotValid},on:{click:function(e){t.modalAction(t.CHECK_OUT_ACTION)}}}):t._e(),i("q-card-separator",{staticStyle:{margin:"3%"}}),i("q-btn",{staticClass:"full-width",attrs:{size:"md",color:"orange",push:"",label:"Abrir Ocorrência"},on:{click:function(e){t.modalAction(t.OCORRENCE_ACTION)}}})],1)]),i("q-modal",{ref:"modalRef",attrs:{minimized:""},model:{value:t.destinyResponseModal,callback:function(e){t.destinyResponseModal=e},expression:"destinyResponseModal"}},[i("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],staticClass:"float-right",attrs:{outline:"",icon:"close"}}),t.destinyResponseModalMode===t.ACTIVITY_ACTION?i("div",[i("div",{staticStyle:{padding:"50px"}},[t._l(t.destiny.questions,function(e){return i("div",{key:e.id+e.label},["numero"==e.tipo||"texto"==e.tipo?i("div",[i("q-field",{attrs:{orientation:"vertical",label:e.label,error:t.$v.activityData[e.nome].$error,"error-label":"Obrigatorio"}},[i("q-input",{attrs:{type:"text"},on:{blur:function(i){t.$v.activityData[e.nome].$touch}},model:{value:t.activityData[e.nome],callback:function(i){t.$set(t.activityData,e.nome,i)},expression:"activityData[activity.nome]"}})],1)],1):t._e(),"opcional"==e.tipo?i("div",[i("q-field",{attrs:{orientation:"vertical",label:e.label,error:t.$v.activityData[e.nome].$error,"error-label":"Obrigatorio"}},[i("q-select",{attrs:{name:e.nome,options:t.buildSelectOptions(e.opcionais)},model:{value:t.activityData[e.nome],callback:function(i){t.$set(t.activityData,e.nome,i)},expression:"activityData[activity.nome]"}})],1)],1):t._e()])}),i("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[i("q-btn",{staticClass:"full-width",attrs:{size:"md",color:"secondary",label:"Enviar respostas"},on:{click:function(e){t.saveAnswer()}}})],1)],2)]):t.destinyResponseModalMode===t.OCORRENCE_ACTION?i("div",[i("div",{staticStyle:{padding:"20px"}},[i("q-field",{attrs:{orientation:"vertical",label:"Ocorrência",error:t.$v.ocurrenceData.ocurrenceType.$error,"error-label":"Obrigatorio"}},[i("q-select",{attrs:{name:"ocurrenceType",options:t.tipoOcorrencias,disable:t.loadingOcurrence},model:{value:t.ocurrenceData.ocurrenceType,callback:function(e){t.$set(t.ocurrenceData,"ocurrenceType",e)},expression:"ocurrenceData.ocurrenceType"}})],1),i("q-field",{attrs:{orientation:"vertical",label:"Titulo da ocorrência",error:t.$v.ocurrenceData.title.$error,"error-label":"Obrigatorio"}},[i("q-input",{attrs:{type:"text",disable:t.loadingOcurrence},on:{blur:t.$v.ocurrenceData.title.$touch},model:{value:t.ocurrenceData.title,callback:function(e){t.$set(t.ocurrenceData,"title",e)},expression:"ocurrenceData.title"}})],1),i("q-btn",{staticClass:"full-width",attrs:{loading:t.loadingOcurrence,color:"secondary",label:"Envir Ocorrencia"},on:{click:function(e){t.sendOcurrence()}}},[i("span",{attrs:{slot:"loading"},slot:"loading"},[i("q-spinner-hourglass",{staticClass:"on-left"}),t._v(" Carregando...\n            ")],1)])],1)]):t._e()],1)],1)],1)},n=[];a._withStripped=!0;var o,s=i("lSNA"),r=i.n(s),c=(i("rGqo"),i("KKXr"),i("MVZn")),l=i.n(c),d=i("RY4O"),u=i("4IOb"),h=i("L2JU"),p=i("ta7f"),y=i("3wHL"),m=i("kNJ9"),v=i("bDO0"),g="checkInAction",f="checkOutAction",_="activityAction",b="ocurrenceAction",C=u["P"].getScrollTarget,O=u["P"].setScrollPosition,k={negative:{color:"negative",message:"Erro",icon:"warning"},positive:{color:"secondary",message:"Sucesso",icon:"tag_faces"},warning:{color:"orange",message:"Alerta",icon:"fas fa-exclamation"}},w={validations:function(){return{activityData:this.actionValidators,ocurrenceData:{required:p["required"],ocurrenceType:{required:p["required"]},title:{required:p["required"]}}}},methods:l()({scrollToElement:function(t){"string"==typeof t&&(t=document.getElementById(t));var e=C(t),i=t.offsetTop-t.scrollHeight,a=500;O(e,i,a)},updateDestiny:function(){this.$store.commit(m["c"],this.destiny)},notifyWithType:function(t,e){var i=k[t];e&&(i.message=e),this.$q.notify(i)},buildSelectOptions:function(t){return t.split(">>").map(function(t){return{label:t,value:t}})},saveAnswer:function(){if(this.$v.$touch(),!this.$v.activityData.$error){this.activityData.latitude=null,this.activityData.longitude=null;var t={};t.AtividadeRespostas=this.activityData,t.AtividadeLatitude=this.activityData.latitude,t.AtividadeLongitude=this.activityData.longitude,t.Atividadeid=this.destiny.id,t.TipoDestino=this.destiny.tipo_destino,t.TipoAtividade=this.destiny.tipo_atividade,null==window.localStorage.getItem("destiny-"+this.destiny.id)&&(window.localStorage.setItem("destiny-"+this.destiny.id,JSON.stringify(t)),this.destiny.answered=!0),this.notifyWithType("positive","Atividade salva, faça check-out para enviar as respostas."),this.destinyResponseModal=!1}},sendOcurrence:function(){var t=this;if(console.log("sendOcurrence"),this.$v.ocurrenceData.$touch(),!this.$v.ocurrenceData.$error){this.loadingOcurrence=!0;var e={};e.destinoId=this.destiny.id_destino,e.titulo=this.ocurrenceData.title,e.itinerarioId=this.destiny.id.split("-")[0],e.tipoOcorrencia=this.ocurrenceData.ocurrenceType.split("-"),e.tipoOcorrenciaId=e.tipoOcorrencia[0],e.tipoOcorrencia=e.tipoOcorrencia[1],this.$axios.post("op_app/integra_mobile/ocorrencia",{hash:"1733c525889b5d00ef9d8e1fed3ef817",dados:e}).then(function(e){console.log("ocorrencia return",e);var i=e.data;i.login?(t.notifyWithType("positive",i.mensagem),t.destinyResponseModal=!1):t.notifyWithType("negative",i.mensagem),t.loadingOcurrence=!1}).catch(function(e){t.notifyWithType("negative","Erro ao enviar ocorrencia."),console.log("ocorrencia err",e),t.loadingOcurrence=!1})}}},Object(h["b"])([v["c"],v["d"]]),{modalAction:function(t){var e=this;switch(console.log("modalAction",t),t){case g:this.$q.loading.show({message:"Carregando"}),this.checkIn(this.destiny).then(function(t){return e.destiny.checkinsync=!0},function(t){return e.destiny.checkinsync=!1}).finally(function(){e.$q.loading.hide(),e.notifyWithType("positive","Check-In realizado com sucesso, faça check-Out para enviar para o RotaExata."),e.destiny.checkin=!0,e.updateDestiny()});break;case f:this.$q.loading.show({message:"Carregando"}),console.log("case CHECK_OUT_ACTION:"),this.checkOut(this.destiny).then(function(t){console.log("result checkout",t),e.notifyWithType("positive","Check-Out realizado com sucesso."),e.destiny.checkoutsync=!0},function(t){console.log("err checkout",t),e.notifyWithType("warning","Falha ao realizar Check-Out, salvo para sicronizar posteriormente."),e.destiny.checkoutsync=!1}).finally(function(){e.$q.loading.hide(),e.destinyActionModal=!1,e.destiny.checkout=!0,e.updateDestiny(),e.$router.push("/")});break;case _:case b:this.destinyResponseModal=!0,this.destinyResponseModalMode=t,t===b&&(this.loadingOcurrence=!0,this.$axios.post("op_app/integra_mobile/getTipoOcorrencias",{hash:"1733c525889b5d00ef9d8e1fed3ef817"}).then(function(t){console.log("ocorrences return",t);var i=t.data;i.login&&(e.tipoOcorrencias=i.tipoOcorrencias.map(function(t){return{label:t.tipo,value:"".concat(t._id.$id,"-").concat(t.tipo)}})),e.loadingOcurrence=!1}).catch(function(t){console.log("ocorrences err",t),e.loadingOcurrence=!1}));break;default:break}},openRoute:function(){Object(u["O"])("https://www.google.com/maps/dir/Current+Location/".concat(this.destiny.latitude,",").concat(this.destiny.longitude))}}),components:{LMap:d["LMap"],LTileLayer:d["LTileLayer"],LMarker:d["LMarker"]},data:function(){return l()({tipoOcorrencias:[],loadingOcurrence:!1,activityData:{},ocurrenceData:{ocurrenceType:{},title:""}},{CHECK_IN_ACTION:g,CHECK_OUT_ACTION:f,ACTIVITY_ACTION:_,OCORRENCE_ACTION:b},{destinyActionModal:!1,destinyResponseModal:!1,destinyResponseModalMode:"",map:{url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",center:L.latLng(0,0),marker:L.latLng(0,0),zoom:16}})},computed:(o={},r()(o,y["b"],function(){return this.$store.getters[y["b"]](this.$route.params.id)}),r()(o,"actionValidators",function(){var t={};return this.destiny.questions.forEach(function(e){t[e.nome]={required:p["required"]}}),t}),r()(o,"isDestinyFinalized",function(){return this.destiny.checkin&&this.destiny.checkout}),r()(o,"isCheckIn",function(){return this.destiny.checkin||null!=window.localStorage.getItem("checkin-".concat(this.destiny.id))}),r()(o,"isCheckOut",function(){return this.destiny.checkout||null!=window.localStorage.getItem("checkout-".concat(this.destiny.id))}),r()(o,"isAnswer",function(){return!(!this.destiny||!this.destiny.answered)||!!this.destiny&&null!=window.localStorage.getItem("destiny-"+this.destiny.id)}),r()(o,"isAnswerNotValid",function(){return this.isAnswer||!this.isCheckIn||this.isCheckOut}),o),beforeCreate:function(){console.log("url query PageDestiny",this.$route.params)},mounted:function(){if(this.destiny){var t={lat:this.destiny.latitude,lng:this.destiny.longitude};this.map.center=L.latLng(t.lat,t.lng),this.map.marker=L.latLng(t.lat,t.lng)}console.log("this PageDestiny",this)}},A=w,q=(i("pr5S"),i("KHd+")),T=Object(q["a"])(A,a,n,!1,null,null,null);e["default"]=T.exports},"n/5v":function(t,e,i){},pr5S:function(t,e,i){"use strict";var a=i("n/5v"),n=i.n(a);n.a}}]);