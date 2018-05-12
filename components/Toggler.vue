<template>
<div class="toggler">
  <input type="checkbox" name="checkbox1" id="checkbox1" class="ios-toggle"/>
  <label for="checkbox1" class="checkbox-label" data-off="Enable" data-on="Disable"></label>
</div>

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.toggler {
  width:60px;
}

*,*:before,*:after{
  box-sizing:border-box;
  margin:0;
  padding:0;
  transition:.25s ease-in-out;
  outline:none;
}

.ios-toggle,.ios-toggle:active{
  position:absolute;
  top:-5000px;
  height:0;
  width:0;
  opacity:0;
  border:none;
  outline:none;
}
.checkbox-label{
  display:block;
  position:relative;
  padding:10px;
  font-size:18px;
  line-height:16px;
  width:100%;
  height:36px;
  border-radius:18px;
  background:#f8f8f8;
  cursor:pointer;
}
.checkbox-label:before{
  content:'';
  display:block;
  position:absolute;
  z-index:1;
  line-height:34px;
  text-indent:40px;
  height:36px;
  width:36px;
  border-radius:100%;
  top:0px;
  left:0px;
  right:auto;
  background:white;
  box-shadow:0 3px 3px rgba(0,0,0,.2),0 0 0 2px #dddddd;
}
.checkbox-label:after{
  content:attr(data-off);
  display:block;
  position:absolute;
  z-index:0;
  top:0;
  left: 70px;
  padding:10px;
  height:100%;
  text-align:right;
  white-space:nowrap;
}
.ios-toggle:checked + .checkbox-label{
  box-shadow:inset 0 0 0 20px rgba(19,191,17,1),0 0 0 2px rgba(19,191,17,1);
}
.ios-toggle:checked + .checkbox-label:before{
  left:calc(100% - 36px);
  box-shadow:0 0 0 2px transparent,0 3px 3px rgba(0,0,0,.3);
}
.ios-toggle:checked + .checkbox-label:after{
  content:attr(data-on);
  left:70px;
}

#checkbox1 + .checkbox-label{
  box-shadow:inset 0 0 0 0px rgba(19,191,17,1),0 0 0 2px #dddddd;
}
#checkbox1:checked + .checkbox-label{
  box-shadow:inset 0 0 0 18px rgba(19,191,17,1),0 0 0 2px rgba(19,191,17,1);
}
#checkbox1:checked + .checkbox-label:after{
color:rgba(19,191,17,1);
}

</style>