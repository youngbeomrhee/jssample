/**
 * Created by yblee on 2016-10-11.
 */
function doHighlight(){
  this.style.outline = '3px solid red';
};

function noHighlight(){
  this.style.outline = '1px solid red';
};

function addXArea(ele) {
  var eles = document.querySelectorAll(ele);

  for (var i = 0; i < eles.length; i++) {
    var _this = eles[i];
    var rightEnd = _this.offsetLeft + _this.offsetWidth - 20;
    var top = _this.offsetTop;
    var xArea = document.createElement('span');
    xArea.classList.add('removeArea');
    xArea.innerHTML = '<div style="background-color:silver;color:white;width:20px;height:20px;position:absolute;text-align:center;font-size:13px;z-index:1000;cursor:pointer;left:'+rightEnd+'px;top:'+top+'px;" onclick="javascript:this.parentElement.parentElement.remove();allHtmlInit()">X</div>';
    _this.appendChild(xArea);
    _this.style.outline = '1px solid red';
    _this.addEventListener('mouseover', doHighlight);
    _this.addEventListener('mouseleave', noHighlight);
  }
}

function removeXArea() {
  var eles = document.querySelectorAll('.removeArea');
  for (var i = 0; i < eles.length; i++) {
    var _this = eles[i];
    _this.remove();
  }
}

function allHtmlInit(p_eles) {
  removeXArea();
  var eles = p_eles || ['div', 'p', 'table', 'nav', 'li', 'footer'];
  for (var i = 0; i < eles.length; i++) {
    addXArea(eles[i]);
  }
};

allHtmlInit();