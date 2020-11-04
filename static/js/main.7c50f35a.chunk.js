(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},14:function(e,t,a){e.exports=a(24)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),l=a.n(r),m=(a(19),a(12)),o=a(4),s=a(5),c=a(8),d=a(7),u=(a(20),a(21),a(22),function(e){var t=e.title,a=e.description,n=e.imgUrl,r=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:n,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},a,i.a.createElement("br",null),i.a.createElement("a",{href:r},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var p=a(13),g=a(6),v=a(1),b=function(e){var t=e.fieldName,a=e.value,n=e.onChange;return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{htmlFor:t,className:"ui large label"},t[0].toUpperCase()+t.slice(1)),i.a.createElement("input",{key:t,type:"text",name:t,value:a,onChange:n,required:!0}))},f={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},M=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state=Object(v.a)({},f),e.handleChange=function(t){var a=t.target;e.setState((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},a.name,a.value))}))},e.handleSubmit=function(t){t.preventDefault();var a=Object(v.a)({},e.state);e.props.addMovie(a),e.setDefaultForm()},e.setDefaultForm=function(){e.setState(Object(v.a)({},f))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{className:"ui large form",onSubmit:this.handleSubmit,name:"newMovie",method:"post"},Object.entries(this.state).map((function(t){var a=Object(p.a)(t,2),n=a[0],r=a[1];return i.a.createElement(b,{fieldName:n,value:r,onChange:e.handleChange})})),i.a.createElement("button",{className:"ui green button",type:"submit"},"Add movie"),i.a.createElement("button",{className:"ui grey button",type:"button",onClick:this.setDefaultForm},"Clear form"))}}]),a}(n.Component),w=a(11),j=(a(23),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={movies:w},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(h,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(M,{addMovie:this.addMovie})))}}]),a}(n.Component));l.a.render(i.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7c50f35a.chunk.js.map