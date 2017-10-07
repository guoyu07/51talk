/**
 * Chivox 公共js类 初始函数
 * @author malh<malinghui@51talk.com>
 */
//添加生单词
function add_new_words(obj, content,pre_id, course_id, type) {
    if(pre_id =='' || course_id =='' || type==''){
        alert('添加失败.');return;
    }
    $.post('/ajax/addNewWord', {'content':content, 'pre_id': pre_id, 'course_id': course_id, 'type': type}, function(data) {
        $(obj).replaceWith('<a class="favo has" href="javascript:void(0)" title="生词本已添加">已添加</a>');
    });
}
$(".iknow,.jsRead"). click(function() {
    $(".iknow").parent().hide()
})
//听
function play_ref(type,row){
    if(row ==''){row =0;}
    record_url(type, row);
    $('#aiPanel .play').click();
}
//说
function record_ref(type, row){
    record_url(type, row);
    $('#aiPanel .record').click();
}
//试听全文
function listen(type, row){
    record_url(type, 0, true);
    $('.u-now').removeClass('u-now');
    $('#aiPanel .play').click();
}

//判断使用哪一种内核

function selectVoiceCore(title){
    var cType="";
    if(title.split(" ").length==1){
        cType = "en.word.score";
    }else if(title.split(" ").length>1 && title.split(" ").length<20){
        cType = "en.sent.score";
    }else if(title.split(" ").length>20) {
        cType = "en.pred.exam";
    }
    return cType;
}

//读取录音
function record_url(type,i, t){
    var i = i==''? 0 : i;
    if(type =='word'){
        var title = word_ref[i]['title'];
        var url = word_ref[i]['url'];
        var dur = 2000;
        var cType = selectVoiceCore(title);

    } else if(type =='sentence1' || type =='sentence2') {
        var title = word_ref[i][type];
        var wordNum = title.split(" ").length;//单词个数
        var url   = word_ref[i][type+'_url'];
        var dur = 1000+(600*wordNum);
        var cType = selectVoiceCore(title);

    } else if(type =='sentence'){//单独句子
        var title = sentence_ref[i]['title'];
        var wordNum = title.split(" ").length;//单词个数
        var url   = sentence_ref[i]['url'];
        var dur = 1000+(600*wordNum);
        var cType = selectVoiceCore(title);
    } else {
        var title = dialog_ref[type]['title'][i];
        var wordNum = title.split(" ").length;//单词个数
        var url   = dialog_ref[type]['url'][i];
        var dur = 1000+(600*wordNum);
        var cType = selectVoiceCore(title);
    }
    if(cType =="en.pred.exam"){
        aiPanel.setData({
            audioUrl: www_url+"/upload/efl_audio/prepar/"+url,
            row: i,
            type: type,
            talk: t,
            ctype : cType,
            params:params,
            duration: dur,
            serverParams:{
                coreType: cType,
                refText: {
                    qid:"PAPER-000004-QT-000003",
                    lm:title
                },
                result:{
                    details:{
                        raw:1,
                        sym:1
                    }
                },
                rank:100,
                precision:0.5,
                userId:snum,
                duration: dur,
                client_params:{
                    ext_subitem_rank4:0
                }
            }
        });
    }else{
        aiPanel.setData({
            audioUrl: www_url+"/upload/efl_audio/prepar/"+url,
            row: i,
            type: type,
            talk: t,
            params:params,
            duration: dur,
            serverParams:{
                userId:snum,
                coreType: cType,
                refText: title,
                result:{
                    details:{
                        raw:1,
                        sym:1
                    }
                }
            }
        });
    }

}
$(function(){
    window.aiPanel = new chivox.AiPanel({
        appKey: "14350468870000e0",
        secretKey: "55d7229b6ae9332e89596cff1f9ce042",
        data: {
            audioUrl: '../upload/efl_audio/prepar/asd.mp3',
            serverParams :{
                coreType: "en.word.score",
                refText:  "let's",
                duration: 2000
            }
        },
        onBeforePlay: function(){
            var row       = this.data.row;
            var type      = this.data.type;
            var talk      = this.data.talk;
            if(type.indexOf("talk")>=0 && row==0 && talk){
                $('.'+type+'_t_').addClass('u-now');
            }
            $('.g_0').css("display",'none');
        },
        onAfterPlay:function(){
            var type      = this.data.type;
            var row       = this.data.row;
            var talk      = this.data.talk;
            if(type.indexOf("talk")>=0 && talk){
                var len = dialog_ref[type]['title'].length;
                i=row;i++;
                row = row ==0 ? '' : row;
                $('.'+type+'_t_'+row).removeClass('u-now');
                if(i>len){
                    return false;
                }
                record_url(type,i, true);
                $('#aiPanel .play').click();
                $('.'+type+'_t_'+i).addClass('u-now');
            } else {
                var str = type+'_p';
                row = row ==0 ? '' : row;
                $('.'+str+row).html('再听一遍');
                $('.'+str+row).attr("title",'再听一遍');
                $('.'+str+row).append('<i class="icon repeat"></i>');
            }
        },
        onBeforeRecord: function(){//录音之前需要清除评分，可以在这里设置录音参数
            var type      = this.data.type;
            var row       = this.data.row;
            var li = row ==0 ? '' : row;
            $('.g_0').css("display",'none');
            setTimeout(function(){
                $('.'+type+'_'+li).html('<span class="grade g_0">正在评分...</span>');
            },1000);
        },
        onScore: function(data){//评分成功需要显示评分结果
            var resultObj = new chivox.EnSentScore(data);
            var row       = this.data.row;
            var type      = this.data.type;
            var pron      = type !='word' ? resultObj.getOverall() : resultObj.getPron(); //发音
            var _s        = '5';
            if(pron>=85 && pron<=100){
                _s = '2'
            } else if(pron>=70 && pron<=84) {
                _s = '3'
            } else if(pron>=55 && pron<=69){
                _s = '4'
            } else if(pron >= 0 && pron <= 54){
                _s = '5'
            }
            var _str = '<span class="grade g_'+_s+'"></span>';
            var obj  = type+'_';
            row = row ==0 ? '' : row;
            $('.'+obj+row).html(_str);
            $('.'+obj+'r'+row).html('再读一遍');
            $('.'+obj+'r'+row).attr("title",'再读一遍');
            $('.'+obj+'r'+row).append('<i class="icon repeat"></i>');
            if(type !='word'){
                var _title = '';
                for(var i=0; i<resultObj.getWordSize(); i++){
                    var singleWord = "";
                    if(this.data.ctype=="en.pred.exam"){
                        singleWord = resultObj.data.result.details[i].text;
                        if(singleWord.split(" ").length>1){
                            singleWord = changeCase(singleWord);
                        }
                    }else{
                        singleWord = resultObj.data.result.details[i].rawchar;

                    }
                    var _word  = i==0 ? singleWord :singleWord;
                    var _score = resultObj.getWord(i).getScore();
                    if(_score >60){
                        _title += '<font color="#009cff"> '+ _word +' </font>';
                    } else {
                        _title += '<font color="#ff6767"> '+ _word +' </font>';
                    }
                }
                var li = row==0 ?  1 : parseInt(row)+1;
                $('.'+type+'_t'+row).html(_title);
            }
            Scorelog(this,resultObj);
        },
        onScoreError: function(errorType){//评分失败的显示 "TIMEOUT", "NO_DATA", ErrorID
            var errorObj = chivox.AiStatusCode.get(errorType, "cn");
            alert(errorObj.feedback);
        }
    });
    aiPanel.Dialog.close();
    if (window.location.search == "?debug") {
        $(".debug").show();
    }
    $("#reloadButton").click(function(){
        aiPanel.params.appKey = $("#appKey").val();
        aiPanel.params.secretKey = $("#secretKey").val();
        aiPanel.Media.createRecorder();
    });
    //首字母大写
    function changeCase(str){
        var s = str;
        return s.replace(/(^|\s+)\w/,function(s){return s.toUpperCase();});
    }

    //添加日志
    function Scorelog(obj,resultObj){
        var _type = obj.data.type=='word' ? 1 :2;
        $.post('/ajax/addScorelog', {course_id:obj.data.params,type:_type,setup:JSON.stringify(obj),data:JSON.stringify(resultObj.data)}, function(data) {
        });
    }
});