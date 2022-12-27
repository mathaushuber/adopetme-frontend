(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SolicitacoesRecebidas"],{"03f1":function(t,e,a){"use strict";a("9ff5")},2543:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"container pt-6 pb-4"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"card "},[s("div",{staticClass:"card-content"},[s("h1",{staticClass:"is-size-3 is-uppercase has-text-weight-light"},[t._v(" "+t._s(t.user.firstName)+", ")]),s("h1",{staticClass:"is-size-6 has-text-weight-light mb-4 is-uppercase"},[t._v(" Estes são todos os usuários que desejam adotar um pet seu! ")]),t.requestsData.length?s("div",{staticClass:"center mt-1"},[s("b-field",[s("b-switch",{model:{value:t.showCancelled,callback:function(e){t.showCancelled=e},expression:"showCancelled"}},[t._v(" Mostrar solicitações canceladas ")])],1)],1):t._e(),t.requestsData.length?s("div",{staticClass:"columns is-multiline mt-2"},t._l(t.requests,(function(e){return s("div",{key:e.id,staticClass:"column is-half"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left is-relative"}),s("div",{staticClass:"media-content center"},[s("p",{staticClass:"title is-4"},[t._v(" Solicitação "+t._s(e.id)+" "),e.approvedAt||e.cancelledAt?t._e():s("b-tag",{attrs:{type:"is-primary"}},[t._v("Aguardando")]),e.approvedAt?s("b-tag",{attrs:{type:"is-success"}},[t._v("Aprovada")]):t._e(),e.cancelledAt?s("b-tag",{attrs:{type:"is-danger"}},[t._v("Rejeitada")]):t._e()],1)])]),s("div",{staticClass:"columns mt-1"},[s("div",{staticClass:"column"},[s("p",{staticClass:"title is-4"},[t._v(" "+t._s(e.petData.name)+" "),s("span",{staticClass:"is-size-6 is-italic has-text-weight-light"},[t._v(" "+t._s(t.calculateAge(e.petData._birthdayDate))+" ")]),s("span",{staticClass:"is-size-6 is-italic has-text-weight-light"},[s("p",[t._v(" "+t._s(t.petSizeTransform(e.petData._size))+" ")])])]),s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"/detalhes/"+e.petData.id}},[s("div",{staticClass:"card-image"},[s("b-image",{staticClass:"image",attrs:{src:t.getPetPhoto(e.petData),"src-fallback":"https://via.placeholder.com/468x350?text=Foto+não+disponível",ratio:"5by3"}})],1)])],1),s("div",{staticClass:"mt-5"},[t._v(" "+t._s(e.petData.simpleDescription)+" ")])]),s("div",{staticClass:"column"},[s("p",{staticClass:"title is-4 center"},[t._v(" "+t._s(e.adopterData.firstName)+" "+t._s(e.adopterData.lastName)+" "),s("span",[s("p",{staticClass:"title is-4"},[s("a",{attrs:{href:e.adopterData.facebookProfile}},[s("b-icon",{attrs:{icon:"facebook",size:"is-medium"}})],1)])]),s("span",{},[s("b-image",{staticClass:"image is-128x128 content has-text-centered center mt-2",attrs:{src:t.processUserLink(e.adopterData.photoUri),rounded:!0}}),s("b-rate",{staticClass:"is-justify-content-center",attrs:{disabled:"",icon:"paw"},model:{value:e.adopterData.adopterRating.average,callback:function(a){t.$set(e.adopterData.adopterRating,"average",a)},expression:"\n                                request.adopterData.adopterRating.average\n                              "}})],1)]),s("p",{staticClass:"title is-4"},[t._v(" Recebida há: "),s("span",{staticClass:"is-size-6 has-text-weight-light"},[t._v(" "+t._s(t.calculateAge(e._createdAt))+" ")])])])]),s("div",{staticClass:"content center"},[s("b-button",{attrs:{type:"is-primary is-uppercase"},on:{click:function(a){t.selectedRequest=e,t.modalProfile=!0}}},[t._v("Dados do Adotante ")]),e.approvedAt?s("b-button",{staticClass:"ml-2",attrs:{type:"is-warning is-uppercase",disabled:e.hasRated,"icon-left":e.hasRated?"paw":""},on:{click:function(a){t.selectedRequest=e,t.modalRate=!0}}},[s("span",[t._v(" "+t._s(e.hasRated?e.hasRated.score:"Avaliar")+" ")])]):t._e(),s("span"),e.approvedAt||e.cancelledAt?s("b-button",{staticClass:"ml-2",attrs:{disabled:"",type:"is-primary"}},[s("b-icon",{attrs:{icon:"check"}})],1):s("b-button",{staticClass:"ml-2",attrs:{type:"is-primary"},on:{click:function(a){return t.approve(e.id)}}},[s("b-icon",{attrs:{icon:"check"}})],1),e.approvedAt||e.cancelledAt?s("b-button",{staticClass:"ml-2",attrs:{disabled:"",type:"is-danger"}},[s("b-icon",{attrs:{icon:"close"}})],1):s("b-button",{staticClass:"ml-2",attrs:{type:"is-danger"},on:{click:function(a){return t.rejection(e.id)}}},[s("b-icon",{attrs:{icon:"close"}})],1)],1)])])])})),0):s("section",{staticClass:"hero"},[s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"is-size-4"},[t._v(" Nenhuma solicitação de adoção recebida! ")]),s("img",{attrs:{src:a("a0a1"),alt:"",srcset:""}}),s("b-button",{staticClass:"mr-4",attrs:{tag:"router-link",to:{path:"/cadastro-pet"},type:"is-primary"}},[t._v(" Adicionar Pet ")]),s("b-button",{staticClass:"mr-4",attrs:{tag:"router-link",to:{path:"/my-pets"},type:"is-primary"}},[t._v(" Editar Pets ")])],1)]),t.selectedRequest.adopterData?s("b-modal",{attrs:{width:640,scroll:"keep"},model:{value:t.modalProfile,callback:function(e){t.modalProfile=e},expression:"modalProfile"}},[s("div",{staticClass:"card"},[s("figure",{staticClass:"image"},[s("b-image",{staticClass:"image",attrs:{src:t.processUserLink(t.selectedRequest.adopterData.photoUri),"src-fallback":"https://via.placeholder.com/468x350?text=Foto+não+disponível",ratio:"4by3"}})],1),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("b-image",{staticClass:"image",attrs:{src:t.processUserLink(t.selectedRequest.adopterData.photoUri),"src-fallback":"https://via.placeholder.com/468x350?text=Foto+não+disponível",ratio:"4by3"}})],1)]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(" "+t._s(t.selectedRequest.adopterData.firstName)+" "+t._s(t.selectedRequest.adopterData.lastName)+" ")]),s("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.selectedRequest.adopterData.email)+" ")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h1",{staticClass:"is-size-4 has-text-weight-bold"},[t._v(" Idade ")]),s("p",[t._v(" "+t._s(t.calculateAge(t.selectedRequest.adopterData._birthdayDate))+" ")])]),s("div",{staticClass:"column"},[s("h1",{staticClass:"is-size-4 has-text-weight-bold"},[t._v(" Telefone ")]),s("p",[t._v(t._s(t.selectedRequest.adopterData.phone))])]),s("div",{staticClass:"column"},[s("h1",{staticClass:"is-size-4 has-text-weight-bold"},[t._v(" Nota ")]),s("b-rate",{staticClass:"is-justify-content-center",attrs:{disabled:"",icon:"paw"},model:{value:t.selectedRequest.adopterData.adopterRating.average,callback:function(e){t.$set(t.selectedRequest.adopterData.adopterRating,"average",e)},expression:"\n                            selectedRequest.adopterData.adopterRating.average\n                          "}})],1),s("div",{staticClass:"column"},[s("h1",{staticClass:"is-size-4 has-text-weight-bold"},[t._v(" Endereço ")]),s("p",[t._v(t._s(t.selectedRequest.adopterData.address))])])]),s("small",[t._v("Usuário do app há: "+t._s(t.calculateAge(t.selectedRequest.adopterData._createdAt)))])])])])]):t._e(),t.selectedRequest.adopterData?s("b-modal",{attrs:{width:640,scroll:"keep"},model:{value:t.modalRate,callback:function(e){t.modalRate=e},expression:"modalRate"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("b-image",{staticClass:"image",attrs:{src:t.processUserLink(t.selectedRequest.adopterData.photoUri),"src-fallback":"https://via.placeholder.com/468x350?text=Foto+não+disponível",ratio:"4by3"}})],1)]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(" "+t._s(t.selectedRequest.adopterData.firstName)+" "+t._s(t.selectedRequest.adopterData.lastName)+" ")]),s("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.selectedRequest.adopterData.email)+" ")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h1",{staticClass:"is-size-4 has-text-weight-bold center"},[t._v(" Nota ")]),s("b-rate",{staticClass:"is-justify-content-center",attrs:{icon:"paw"},on:{change:t.doRate},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}})],1)]),s("small",[t._v("Usuário do app há: "+t._s(t.calculateAge(t.selectedRequest.adopterData._createdAt)))])])])])]):t._e()],1)])])])])])},i=[],o=a("5530"),c=(a("4de4"),a("2f62")),r=a("7424"),l=a("875f"),n={mixins:[l["a"]],computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])(["user"])),{},{requests:function(){var t=this.requestsData;return this.showCancelled||(t=t.filter((function(t){return!t.cancelledAt}))),t}}),data:function(){return{requestsData:[],modalProfile:!1,modalRate:!1,showCancelled:!1,selectedRequest:{},rate:5}},mounted:function(){this.updateRequests()},methods:{approve:function(t){var e=this;this.$buefy.dialog.confirm({title:"Confirmar adoção",message:"Você tem certeza que deseja confirmar a adoção? \n                              Esteja ciente de todas as informações referentes ao adotante,\n                              ao confirmar você concorda com todos os termos firmados durante o processo de adoção\n                              do seu pet.",cancelText:"Cancelar",confirmText:"Confirmar adoção",type:"is-success",onConfirm:function(){e.$buefy.toast.open("Adoção aprovada com sucesso!"),Object(r["a"])(t).then((function(){e.updateRequests()}))}}).catch((function(){e.$buefy.toast.open({message:"Essa adoção já foi aprovada, você ainda pode cancelar essa ação!",type:"is-danger"})}))},rejection:function(t){var e=this;this.$buefy.dialog.confirm({title:"Rejeitar pedido de adoção",message:"Você tem certeza que deseja rejeitar a adoção? \n                              Esteja ciente de todas as informações referentes ao adotante,\n                              ao rejeitar você está de acordo que este adotante não é o mais apto à cuidar do seu amiguinho\n                              neste momento",cancelText:"Cancelar",confirmText:"Rejeitar adoção",type:"is-danger",onConfirm:function(){e.$buefy.toast.open("Adoção rejeitada com sucesso!"),Object(r["r"])(t).then((function(){e.updateRequests()}))}}).catch((function(){e.$buefy.toast.open({message:"Essa adoção já foi reprovada, você ainda pode cancelar essa ação",type:"is-danger"})}))},updateRequests:function(){var t=this;Object(r["t"])().then((function(e){t.requestsData=e.data,console.log(t.requestsData)}))},doRate:function(t){var e=this;Object(r["o"])(this.selectedRequest.id,t,"").then((function(){e.updateRequests(),e.$buefy.toast.open("Avaliação recebida com sucesso!"),e.modalRate=!1})).catch((function(){e.$buefy.toast.open({message:"Erro ao processar avaliação",type:"is-danger"})}))}}},d=n,p=(a("03f1"),a("2877")),u=Object(p["a"])(d,s,i,!1,null,"54b8ae44",null);e["default"]=u.exports},"9ff5":function(t,e,a){},a0a1:function(t,e,a){t.exports=a.p+"img/no-adoptions.e4b62b1c.svg"}}]);
//# sourceMappingURL=SolicitacoesRecebidas.bf4b726e.js.map