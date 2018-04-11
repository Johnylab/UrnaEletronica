'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}(function(){'use strict';function a(a){if(i=a,h.setNumber(i),i.length===l.limit){var b=l.candies.filter(function(a){return a.number===i})[0];b?h.set(b):h.setNull()}}function b(){m=!1,a(''),h.clear()}function c(a){return(l=k[a],!!l)&&(l.index=a,h.setPosition(l.position),b(),l)}function d(){j=[],c(0)}function e(a){console.log('Enviando votos');var b=a.map(function(a){var b=a.position,c=a.candies,d=a.vote,e=d?c.filter(function(a){return a.number===d})[0]||f.nullCandy():f.blankCandy(),g=e.name,h=e.party;return{position:b,vote:d,name:g,party:h}});console.table(b)}var f=function(){function a(b,c,d,e){_classCallCheck(this,a),this.img=e,this.name=c,this.party=d,this.number=b}return _createClass(a,null,[{key:'nullCandy',value:function nullCandy(){return new a('','N\xDAMERO ERRADO','VOTO NULO')}},{key:'blankCandy',value:function blankCandy(){return new a('','','VOTO EM BRANCO')}}]),a}(),g=function(){function a(b){_classCallCheck(this,a);var c=this.root=document.querySelector(b);this.position=c.querySelector('.display-position'),this.number=c.querySelector('.display-number'),this.img=c.querySelector('.display-img'),this.blank_img=this.img.src,this.name=c.querySelector('.display-name'),this.party=c.querySelector('.display-party'),this.body=c.querySelector('.display-body'),this.footer=c.querySelector('.display-footer')}return _createClass(a,[{key:'setNumber',value:function(a){this.number.textContent=a.trim()}},{key:'setPosition',value:function setPosition(a){this.position.textContent=a.trim()}},{key:'set',value:function set(a){this.img.src=a.img||this.blank_img,this.name.textContent=a.name,this.party.textContent=a.party,this.body.removeAttribute('hidden'),this.footer.removeAttribute('hidden')}},{key:'setNull',value:function setNull(){this.set(f.nullCandy()),this.root.classList.add('is-null')}},{key:'setBlank',value:function setBlank(){this.set(f.blankCandy()),this.root.classList.add('is-blank')}},{key:'clear',value:function(){this.img.src=this.blank_img,this.name.textContent='',this.party.textContent='',this.body.setAttribute('hidden',!0),this.footer.setAttribute('hidden',!0),this.root.classList.remove('is-null'),this.root.classList.remove('is-blank')}}]),a}(),h=new g('.display'),i='',j=[],k=[],l={},m=!1,n={insert:function insert(b){return!m&&!(isNaN(b)||0>b)&&!(i.length>=l.limit)&&void a(i+b)},confirm:function confirm(){if((i.length===l.limit||m)&&(l.vote=i||null,j.push(l),!c(l.index+1))){var a=j;return c(0),d(),a}},blank:function blank(){m=!0,i||h.setBlank()},start:function start(a){k=a,c(0)},clear:b,votes:j,display:h},o=[{position:'Deputado Estadual',limit:5,candies:[new f('11111','Felipe Neto','PG','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5hnJmF3GpbYq2nlLjgQzt8LVL2Ed1m4fq4tktKumc4PItNeRHQ'),new f('22222','Alexandre Ottoni','PJN','https://vignette.wikia.nocookie.net/jovem-nerd/images/3/33/Alexandre_Ottoni.jpg/revision/latest?cb=20130210162554&path-prefix=pt-br'),new f('33333','Deive Pazos','PO','https://skoob.s3.amazonaws.com/autores/15228/15228SK1449878482G.jpg'),new f('44444','Felipe Castanhari','PNos','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBqEhIW8IEvDqu-sKxw3HPzlSwf1VSCoy4BLU_GAieFQQLn2s')]},{position:'Deputado Federal',limit:5,candies:[new f('11111','Silas Malafaia','PG','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GS7ipQfYgzU797Hu0eOiNn-yvMStP2t5h3U3Eqo3ldUNhVG2'),new f('22222','Yago Martins','PTeo','https://img.fstatic.com/J2-SVAOJj-NS7336X76iGe-WyDg=/195x289/smart/https://cdn.fstatic.com/media/artists/avatar/2014/03/yago-martins_a343683.jpg'),new f('33333','Kau\xEA Moura','PIJAMA','https://vignette.wikia.nocookie.net/youtubestars/images/c/ca/Cau%C3%AA_Moura.png/revision/latest?cb=20130501150941&path-prefix=pt-br'),new f('44444','Pirula','PSc','https://pbs.twimg.com/media/Cmdt6ukWEAQo0xR.jpg')]},{position:'Presidente',limit:2,candies:[new f('11','Rodrigo Bibo de Aquino','PTeo','http://cursos.bibotalk.com/wp-content/uploads/2017/04/bibo_1-e1491317883951.jpg'),new f('22','Marcos Castro','P do NPR','https://s1.vagalume.com/marcos-castro/images/profile-bigw314.jpg'),new f('33','Rogerinho do Ing\xE1','PC de C','https://dg31sz3gwrwan.cloudfront.net/actor/329292/427317_medium-optimized-2.jpg'),new f('44','\xC9rico Borgo','PO','https://conteudo.imguol.com.br/c/entretenimento/46/2015/11/17/erico-borgo---omelete-ccxp-2015-1447785701187_300x420.jpg')]}];n.start(o);var p={digitar:function digitar(){n.insert(this.textContent.trim())},branco:function branco(){n.blank()},corrigir:function corrigir(){n.clear()},confirmar:function confirmar(){var a=n.confirm();a&&e(a)}};Array.prototype.forEach.call(document.querySelectorAll('.panel button'),function(a){return a.addEventListener('click',function(){p[this.dataset.click].call(this)})})})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2V0TnVtYmVyIiwibGVuZ3RoIiwibGltaXQiLCJjYW5kaWVzIiwiZmlsdGVyIiwibnVtYmVyIiwic2V0Iiwic2V0TnVsbCIsImNsZWFyIiwiaW5kZXgiLCJzZXRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInZvdGUiLCJudWxsQ2FuZHkiLCJibGFua0NhbmR5IiwibmFtZSIsInBhcnR5IiwidGFibGUiLCJpbWciLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmxhbmtfaW1nIiwic3JjIiwiYm9keSIsImZvb3RlciIsInRleHRDb250ZW50IiwidHJpbSIsInJlbW92ZUF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsImluc2VydCIsImlzTmFOIiwiY29uZmlybSIsInB1c2giLCJibGFuayIsInNldEJsYW5rIiwic3RhcnQiLCJ2b3RlcyIsImRpc3BsYXkiLCJkaWdpdGFyIiwiYnJhbmNvIiwiY29ycmlnaXIiLCJjb25maXJtYXIiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhc2V0IiwiY2xpY2siXSwibWFwcGluZ3MiOiJ5WEFBQyxXQUFZLENBQ2IsYUE2R0EsYUFBd0IsQ0FHcEIsR0FGQSxHQUVBLENBREEsRUFBUUEsU0FBUixHQUNBLENBQUksRUFBT0MsTUFBUCxHQUFrQixFQUFLQyxLQUEzQixDQUFrQyxDQUM5QixHQUFNLEdBQVEsRUFBS0MsT0FBTCxDQUFhQyxNQUFiLENBQW9CLGtCQUFLLEdBQUVDLE1BQUYsSUFBTCxDQUFwQixFQUE4QyxDQUE5QyxDQUFkLENBRDhCLEVBRW5CLEVBQVFDLEdBQVIsR0FGbUIsQ0FHekIsRUFBUUMsT0FBUixFQUNSLENBQ0osQ0FFRCxZQUFpQixDQUNiLElBRGEsQ0FFYixFQUFVLEVB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QUFnRCxpRkFBaEQsQ0FISyxDQUlMLE1BQVUsSUFBVixDQUFnQixnQkFBaEIsQ0FBK0IsSUFBL0IsQ0FBcUMseUhBQXJDLENBSkssQ0FIYixDQXBCaUIsQ0EvSVIsQ0ErS2IsRUFBT3VDLEtBQVAsR0EvS2EsQ0FpTGIsR0FBTSxHQUFjLENBQ2hCRyxRQUFTLGtCQUFZLENBQ2pCLEVBQU9ULE1BQVAsQ0FBYyxLQUFLUCxXQUFMLENBQWlCQyxJQUFqQixFQUFkLENBQ0gsQ0FIZSxDQUloQmdCLE9BQVEsaUJBQVksQ0FDaEIsRUFBT04sS0FBUCxFQUNILENBTmUsQ0FPaEJPLFNBQVUsbUJBQVksQ0FDbEIsRUFBT3ZDLEtBQVAsRUFDSCxDQVRlLENBVWhCd0MsVUFBVyxvQkFBWSxDQUNuQixHQUFNLEdBQVEsRUFBT1YsT0FBUCxFQUFkLENBQ0EsR0FBUyxJQUNaLENBYmUsQ0FBcEIsQ0FnQkFXLE1BQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUNJN0IsU0FBUzhCLGdCQUFULENBQTBCLGVBQTFCLENBREosQ0FFSSxrQkFBTyxHQUFJQyxnQkFBSixDQUFxQixPQUFyQixDQUE4QixVQUFZLENBQzdDLEVBQVksS0FBS0MsT0FBTCxDQUFhQyxLQUF6QixFQUFnQ0osSUFBaEMsQ0FBcUMsSUFBckMsQ0FDSCxDQUZNLENBQVAsQ0FGSixDQW1DQyxDQXBPQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDYW5keSB7XHJcbiAgICBjb25zdHJ1Y3RvcihudW1iZXIsIG5hbWUsIHBhcnR5LCBpbWcpIHtcclxuICAgICAgICB0aGlzLmltZyA9IGltZztcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucGFydHkgPSBwYXJ0eTtcclxuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBudWxsQ2FuZHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDYW5keSgnJywgJ07Dmk1FUk8gRVJSQURPJywgJ1ZPVE8gTlVMTycpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGJsYW5rQ2FuZHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDYW5keSgnJywgJycsICdWT1RPIEVNIEJSQU5DTycpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIERpc3BsYXkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdoYXQpIHtcclxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3aGF0KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1wb3NpdGlvbicpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1udW1iZXInKTtcclxuICAgICAgICB0aGlzLmltZyA9IHJvb3QucXVlcnlTZWxlY3RvcignLmRpc3BsYXktaW1nJyk7XHJcbiAgICAgICAgdGhpcy5ibGFua19pbWcgPSB0aGlzLmltZy5zcmM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1uYW1lJyk7XHJcbiAgICAgICAgdGhpcy5wYXJ0eSA9IHJvb3QucXVlcnlTZWxlY3RvcignLmRpc3BsYXktcGFydHknKTtcclxuICAgICAgICB0aGlzLmJvZHkgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWJvZHknKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IHJvb3QucXVlcnlTZWxlY3RvcignLmRpc3BsYXktZm9vdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TnVtYmVyKG4pIHtcclxuICAgICAgICB0aGlzLm51bWJlci50ZXh0Q29udGVudCA9IG4udHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHApIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRleHRDb250ZW50ID0gcC50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGNhbmR5KSB7XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gY2FuZHkuaW1nIHx8IHRoaXMuYmxhbmtfaW1nO1xyXG4gICAgICAgIHRoaXMubmFtZS50ZXh0Q29udGVudCA9IGNhbmR5Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXJ0eS50ZXh0Q29udGVudCA9IGNhbmR5LnBhcnR5O1xyXG4gICAgICAgIHRoaXMuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TnVsbCgpIHtcclxuICAgICAgICB0aGlzLnNldChDYW5keS5udWxsQ2FuZHkoKSk7XHJcbiAgICAgICAgdGhpcy5yb290LmNsYXNzTGlzdC5hZGQoJ2lzLW51bGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCbGFuaygpIHtcclxuICAgICAgICB0aGlzLnNldChDYW5keS5ibGFua0NhbmR5KCkpO1xyXG4gICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QuYWRkKCdpcy1ibGFuaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuYmxhbmtfaW1nO1xyXG4gICAgICAgIHRoaXMubmFtZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMucGFydHkudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB0aGlzLmJvZHkuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1udWxsJyk7XHJcbiAgICAgICAgdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWJsYW5rJyk7XHJcbiAgICB9XHJcblxyXG59XG5cbmNvbnN0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgnLmRpc3BsYXknKTtcclxuXHJcbmxldCBudW1iZXIgPSAnJztcclxubGV0IHZvdGVzID0gW107XHJcbmxldCBzdGVwcyA9IFtdO1xyXG5sZXQgc3RlcCA9IHt9O1xyXG5sZXQgaXNCbGFuayA9IGZhbHNlO1xyXG5cclxuY29uc3QgYmFsbG90ID0ge1xyXG4gICAgaW5zZXJ0OiBudW0gPT4ge1xyXG4gICAgICAgIGlmIChpc0JsYW5rKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGlzTmFOKG51bSkgfHwgbnVtIDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChudW1iZXIubGVuZ3RoID49IHN0ZXAubGltaXQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzZXROdW1iZXIobnVtYmVyICsgbnVtKTtcclxuICAgIH0sXHJcbiAgICBjb25maXJtOiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG51bWJlci5sZW5ndGggPT09IHN0ZXAubGltaXQgfHwgaXNCbGFuaykge1xyXG4gICAgICAgICAgICBzdGVwLnZvdGUgPSBudW1iZXIgfHwgbnVsbDtcclxuICAgICAgICAgICAgdm90ZXMucHVzaChzdGVwKTtcclxuICAgICAgICAgICAgaWYgKCFzZXRTdGVwKHN0ZXAuaW5kZXggKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHZvdGVzO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RlcCgwKTtcclxuICAgICAgICAgICAgICAgIHJlc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJsYW5rOiAoKSA9PiB7XHJcbiAgICAgICAgaXNCbGFuayA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFudW1iZXIpIGRpc3BsYXkuc2V0QmxhbmsoKTtcclxuICAgIH0sXHJcbiAgICBzdGFydDogKHMpID0+IHtcclxuICAgICAgICBzdGVwcyA9IHM7XHJcbiAgICAgICAgc2V0U3RlcCgwKTtcclxuICAgIH0sXHJcbiAgICBjbGVhcixcclxuICAgIHZvdGVzLFxyXG4gICAgZGlzcGxheVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0TnVtYmVyKG51bSkge1xyXG4gICAgbnVtYmVyID0gbnVtO1xyXG4gICAgZGlzcGxheS5zZXROdW1iZXIobnVtYmVyKTtcclxuICAgIGlmIChudW1iZXIubGVuZ3RoID09PSBzdGVwLmxpbWl0KSB7XHJcbiAgICAgICAgY29uc3QgY2FuZHkgPSBzdGVwLmNhbmRpZXMuZmlsdGVyKGMgPT4gYy5udW1iZXIgPT09IG51bWJlcilbMF07XHJcbiAgICAgICAgaWYgKGNhbmR5KSBkaXNwbGF5LnNldChjYW5keSk7XHJcbiAgICAgICAgZWxzZSBkaXNwbGF5LnNldE51bGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICBpc0JsYW5rID0gZmFsc2U7XHJcbiAgICBzZXROdW1iZXIoJycpO1xyXG4gICAgZGlzcGxheS5jbGVhcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdGVwKGkpIHtcclxuICAgIHN0ZXAgPSBzdGVwc1tpXTtcclxuICAgIGlmICghc3RlcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgc3RlcC5pbmRleCA9IGk7XHJcbiAgICBkaXNwbGF5LnNldFBvc2l0aW9uKHN0ZXAucG9zaXRpb24pO1xyXG4gICAgY2xlYXIoKTtcclxuICAgIHJldHVybiBzdGVwO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xyXG4gICAgdm90ZXMgPSBbXTtcclxuICAgIHNldFN0ZXAoMCk7XHJcbn1cblxuLy8gY29uc3QgRklSRUJBU0VfQVVUSCA9IGZpcmViYXNlLmF1dGgoKTtcclxuLy8gY29uc3QgRklSRUJBU0VfREFUQUJBU0UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG5cclxuY29uc3QgYmFsbG90X3N0ZXBzID0gW3tcclxuICAgICAgICBwb3NpdGlvbjogJ0RlcHV0YWRvIEVzdGFkdWFsJyxcclxuICAgICAgICBsaW1pdDogNSxcclxuICAgICAgICBjYW5kaWVzOiBbXHJcbiAgICAgICAgICAgIG5ldyBDYW5keSgnMTExMTEnLCAnRmVsaXBlIE5ldG8nLCAnUEcnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVFY1aG5KbUYzR3BiWXEybmxMamdRenQ4TFZMMkVkMW00ZnE0dGt0S3VtYzRQSXROZVJIUScpLFxyXG4gICAgICAgICAgICBuZXcgQ2FuZHkoJzIyMjIyJywgJ0FsZXhhbmRyZSBPdHRvbmknLCAnUEpOJywgJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2pvdmVtLW5lcmQvaW1hZ2VzLzMvMzMvQWxleGFuZHJlX090dG9uaS5qcGcvcmV2aXNpb24vbGF0ZXN0P2NiPTIwMTMwMjEwMTYyNTU0JnBhdGgtcHJlZml4PXB0LWJyJyksXHJcbiAgICAgICAgICAgIG5ldyBDYW5keSgnMzMzMzMnLCAnRGVpdmUgUGF6b3MnLCAnUE8nLCAnaHR0cHM6Ly9za29vYi5zMy5hbWF6b25hd3MuY29tL2F1dG9yZXMvMTUyMjgvMTUyMjhTSzE0NDk4Nzg0ODJHLmpwZycpLFxyXG4gICAgICAgICAgICBuZXcgQ2FuZHkoJzQ0NDQ0JywgJ0ZlbGlwZSBDYXN0YW5oYXJpJywgJ1BOb3MnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU3NCcUVoSVc4SUV2RHF1LXNLeHczSFB6bFN3ZjFWU0NveTRCTFVfR0FpZUZRUUxuMnMnKVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246ICdEZXB1dGFkbyBGZWRlcmFsJyxcclxuICAgICAgICBsaW1pdDogNSxcclxuICAgICAgICBjYW5kaWVzOiBbXHJcbiAgICAgICAgICAgIG5ldyBDYW5keSgnMTExMTEnLCAnU2lsYXMgTWFsYWZhaWEnLCAnUEcnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVDdHUzdpcFFmWWd6VTc5N0h1MGVPaU5uLXl2TVN0UDJ0NWgzVTNFcW8zbGRVTmhWRzInKSxcclxuICAgICAgICAgICAgbmV3IENhbmR5KCcyMjIyMicsICdZYWdvIE1hcnRpbnMnLCAnUFRlbycsICdodHRwczovL2ltZy5mc3RhdGljLmNvbS9KMi1TVkFPSmotTlM3MzM2WDc2aUdlLVd5RGc9LzE5NXgyODkvc21hcnQvaHR0cHM6Ly9jZG4uZnN0YXRpYy5jb20vbWVkaWEvYXJ0aXN0cy9hdmF0YXIvMjAxNC8wMy95YWdvLW1hcnRpbnNfYTM0MzY4My5qcGcnKSxcclxuICAgICAgICAgICAgbmV3IENhbmR5KCczMzMzMycsICdLYXXDqiBNb3VyYScsICdQSUpBTUEnLCAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQveW91dHViZXN0YXJzL2ltYWdlcy9jL2NhL0NhdSVDMyVBQV9Nb3VyYS5wbmcvcmV2aXNpb24vbGF0ZXN0P2NiPTIwMTMwNTAxMTUwOTQxJnBhdGgtcHJlZml4PXB0LWJyJyksXHJcbiAgICAgICAgICAgIG5ldyBDYW5keSgnNDQ0NDQnLCAnUGlydWxhJywgJ1BTYycsICdodHRwczovL3Bicy50d2ltZy5jb20vbWVkaWEvQ21kdDZ1a1dFQVFvMHhSLmpwZycpXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogJ1ByZXNpZGVudGUnLFxyXG4gICAgICAgIGxpbWl0OiAyLFxyXG4gICAgICAgIGNhbmRpZXM6IFtcclxuICAgICAgICAgICAgbmV3IENhbmR5KCcxMScsICdSb2RyaWdvIEJpYm8gZGUgQXF1aW5vJywgJ1BUZW8nLCAnaHR0cDovL2N1cnNvcy5iaWJvdGFsay5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDQvYmlib18xLWUxNDkxMzE3ODgzOTUxLmpwZycpLFxyXG4gICAgICAgICAgICBuZXcgQ2FuZHkoJzIyJywgJ01hcmNvcyBDYXN0cm8nLCAnUCBkbyBOUFInLCAnaHR0cHM6Ly9zMS52YWdhbHVtZS5jb20vbWFyY29zLWNhc3Ryby9pbWFnZXMvcHJvZmlsZS1iaWd3MzE0LmpwZycpLFxyXG4gICAgICAgICAgICBuZXcgQ2FuZHkoJzMzJywgJ1JvZ2VyaW5obyBkbyBJbmfDoScsICdQQyBkZSBDJywgJ2h0dHBzOi8vZGczMXN6M2d3cndhbi5jbG91ZGZyb250Lm5ldC9hY3Rvci8zMjkyOTIvNDI3MzE3X21lZGl1bS1vcHRpbWl6ZWQtMi5qcGcnKSxcclxuICAgICAgICAgICAgbmV3IENhbmR5KCc0NCcsICfDiXJpY28gQm9yZ28nLCAnUE8nLCAnaHR0cHM6Ly9jb250ZXVkby5pbWd1b2wuY29tLmJyL2MvZW50cmV0ZW5pbWVudG8vNDYvMjAxNS8xMS8xNy9lcmljby1ib3Jnby0tLW9tZWxldGUtY2N4cC0yMDE1LTE0NDc3ODU3MDExODdfMzAweDQyMC5qcGcnKVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbmJhbGxvdC5zdGFydChiYWxsb3Rfc3RlcHMpO1xyXG5cclxuY29uc3QgcGFuZWxBY3Rpb24gPSB7XHJcbiAgICBkaWdpdGFyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYmFsbG90Lmluc2VydCh0aGlzLnRleHRDb250ZW50LnRyaW0oKSk7XHJcbiAgICB9LFxyXG4gICAgYnJhbmNvOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYmFsbG90LmJsYW5rKCk7XHJcbiAgICB9LFxyXG4gICAgY29ycmlnaXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBiYWxsb3QuY2xlYXIoKTtcclxuICAgIH0sXHJcbiAgICBjb25maXJtYXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB2b3RlcyA9IGJhbGxvdC5jb25maXJtKCk7XHJcbiAgICAgICAgdm90ZXMgJiYgc2VuZEJhbGxvdCh2b3Rlcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5BcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsIGJ1dHRvbicpLFxyXG4gICAgYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwYW5lbEFjdGlvblt0aGlzLmRhdGFzZXQuY2xpY2tdLmNhbGwodGhpcyk7XHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gc2VuZEJhbGxvdCh2b3Rlcykge1xyXG4gICAgY29uc29sZS5sb2coJ0VudmlhbmRvIHZvdG9zJyk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IHZvdGVzLm1hcCh2ID0+IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBjYW5kaWVzLFxyXG4gICAgICAgICAgICB2b3RlXHJcbiAgICAgICAgfSA9IHY7XHJcbiAgICAgICAgY29uc3QgY2FuZHkgPSAhdm90ZSA/XHJcbiAgICAgICAgICAgIENhbmR5LmJsYW5rQ2FuZHkoKSA6XHJcbiAgICAgICAgICAgIGNhbmRpZXMuZmlsdGVyKGMgPT4gYy5udW1iZXIgPT09IHZvdGUpWzBdIHx8XHJcbiAgICAgICAgICAgIENhbmR5Lm51bGxDYW5keSgpO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgcGFydHlcclxuICAgICAgICB9ID0gY2FuZHk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgICAgIHZvdGUsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHBhcnR5XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcbn1cblxufSgpKTtcbiJdfQ==
