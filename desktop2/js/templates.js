var shortcutTemp='<li style="left:{left}px;top:{top}px" shortcut="{shortcut}"><img src="{imgsrc}"><span>{title}</span><em></em></li>';var taskTemp='<li window="{num}">'+
'<b class="focus">'+
'<img src="{imgsrc}">'+
'<span>{title}</span>'+
'</b>'+
'</li>';var windowTemp='<div style="width:{width}px;height:{height}px;top:{top}px;left:{left}px;z-index:{zIndex}" class="window-container window-current" window="{num}" id="window_{num}_warp">'+
'<div style="height: 100%;" id="window_{num}_inner">'+
'<div class="title-bar">'+
'{title}<div class="title-handle"><a class="ha-min" btn="hide" href="javascript:;">最小化</a><a class="ha-max" btn="max" href="javascript:;">最大化</a><a class="ha-revert" btn="revert" href="javascript:;" style="display:none">还原</a><a class="ha-close" btn="close" href="javascript:;">关闭</a></div>'+
'</div>'+
'<div class="window-frame" id="window-frame_{num}">'+
'<div style="z-index:9000000;background:none;height:100%;position:absolute;width:100%;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;display:none"></div>'+
'<iframe frameborder="0" id="frame{num}" src="{url}"></iframe>'+
'</div>'+
'<div class="set-bar"><div class="fr">'+
'<a class="btn" id="refresh"><i class="icon ico-refresh"></i><span class="btn-con">刷新</span></a>'+
'</div></div>'+
'{resize}'+
'<div style="position:absolute;overflow:hidden;background:url(images/transparent.gif) repeat;display:block" resize="min_width"></div>'+
'<div style="position:absolute;overflow:hidden;background:url(images/transparent.gif) repeat;display:block" resize="min_height"></div>'+
'</div>'+
'</div>';var resizeTemp='<div resize="{resize_type}" style="position:absolute;overflow:hidden;background:url(images/transparent.gif) repeat;display:block;{css}"></div>';