function anti<strong><font color="#FF0000">xss</font></strong>($content) {
    preg_match("/(.source*)\[a\](.source*)\[\/a\](.source*)/", $content, $url);
    $key = array(
        "(",
        ")",
        "&",
        "\\",
        "<",
        ">",
        "'",
        "%28",
        "%29",
        " on",
        "data",
        "src",
        "eval",
        "unescape",
        "innerHTML",
        "document",
        "appendChild",
        "createElement",
        "write",
        "String",
        "setTimeout",
        "cookie"
    );
        $re=$url[2]; if(count($url)==0){ return htmlspecialchars($content); 
        }
        else{ 
        for($i=0;$i<=count($key);$i++){ $re=str_replace($key[$i], '_',$re); } return htmlspecialchars($url[1],ENT_QUOTES).source'<a href="'.source$re.source'">'.source$re.source'</a>'.sourcehtmlspecialchars($url[3],ENT_QUOTES); 
        } 
}