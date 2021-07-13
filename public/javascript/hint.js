var game1 = document.getElementsByName("game1");
var game2 = document.getElementsByName("game2");
var game3 = document.getElementsByName("game3");
var game4 = document.getElementsByName("game4");

var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;
var flag6 = false;
var flag7 = false;
var flag8 = false;
var flag9 = false;

var answer1 = false;
var answer2 = false;
var answer3 = false;
var answer4 = false;

if (game1.length >= 1) {
    var SetMinute = 0;
    Time_cnt(1);
}

if (game2.length >= 1) {
    var SetMinute = 0;
    Time_cnt(2);
}

if (game3.length >= 1) {
    var SetMinute = 0;
    Time_cnt(3);
}

if (game4.length >= 1) {
    var SetMinute = 0;
    Time_cnt(4);
}

function Time_cnt(level) {
    console.log("test");
    Check_Time(level);
    var mm = window.setInterval("Check_Time(" + level + ")", 60000);
}

function Check_Time(level) {
    SetMinute += 1;
    console.log("level : " + level);
    //var Check_i = document.getElementById("Check_i");

    //var Cal_Minute = Math.floor(Math.floor(SetMinute % 3600) / 60);
    //var Cal_Second = SetMinute % 60;

    //Check_i.innerHTML = Cal_Minute + "分" + Cal_Second + "秒";
    // if (SetMinute === 5) {
    //     alert(123);
    // }

    if (level == 1) {
        if (SetMinute == 3) {
            alert("hint1 : 找到elements那一列正下方的框框，並且點擊每段文字旁邊的箭頭。仔細閱讀綠色文字(關鍵字是凱薩密碼");
            flag1 = true;
        } else if (SetMinute == 8) {
            alert("hint2 : ygneqog_vq_ewn是被加密過的密碼。請運用凱薩密碼的邏輯解開，並且輸入到密碼的欄位。帳號已經有顯示正確的帳號，不須另外破解");
            flag2 = true;
        } else if (SetMinute == 10) {
            alert("answer1 : https://youtu.be/9fFd7GpdOz4");
            answer1 = true;
        }
    } else if (level == 2) {
        if (SetMinute == 3) {
            alert("hint3 : 同樣右鍵點檢查，在elements那一列可以找到application，點擊cookie後可以看到hint的value有一串文字");
            flag3 = true;
        } else if (SetMinute == 6) {
            alert("hint4 : 打開never_gonna_give_you_up跟So_cute兩個頁面(可以右鍵新分頁也可以開完返回再開)，觀察兩個頁面的網址");
            flag4 = true;
        } else if (SetMinute == 9) {
            alert("hint5 : 兩個網址的相異處改成cookie的hint的value那行文字相似處保留，形成一個新的網址，進入那個網頁");
            flag5 = true;
        } else if (SetMinute == 10) {
            alert("answer2 : https://youtu.be/sW0rGjqmayE");
            answer2 = true;
        }
    } else if (level == 3) {
        if (SetMinute == 5) {
            alert("hint6 : 替換網址的fuck_my_life成i_love_coding");
            flag6 = true;
        } else if (SetMinute == 10) {
            alert("answer3 : https://youtu.be/YWvsl7K6Yb4");
            answer3 = true;
        }
    } else if (level == 4) {
        if (SetMinute == 2) {
            alert("hint7 : 同樣右鍵點檢查在element下面找到綠色文字");
            flag7 = true;
        } else if (SetMinute == 4) {
            alert("hint8 : 綠色文字是有關柵欄加密的解密方法");
            flag8 = true;
        } else if (SetMinute == 9) {
            alert("hint9 : 點application找到cookie，i_am_password的value的文字就是被加密過的密碼，將被加密過的密碼運用柵欄加密的邏輯破解(注意：旁邊的主要畫面很大，畫面最右邊有輸入密碼的位置)")
            flag9 = true;
        } else if (SetMinute == 10) {
            alert("answer4 : https://youtu.be/653bSdJqnsM");
            answer4 = true;
        }
    }
    console.log(SetMinute);
}

function hint(ID) {
    //var ID = document.getElementsByName("hint");
    console.log(ID);
    switch (ID) {
        case 1:
            if (flag1 == true) {
                alert("hint1 : 找到elements那一列正下方的框框，並且點擊每段文字旁邊的箭頭。仔細閱讀綠色文字(關鍵字是凱薩密碼");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 2:
            if (flag2 == true) {
                alert("hint2 : ygneqog_vq_ewn是被加密過的密碼。請運用凱薩密碼的邏輯解開，並且輸入到密碼的欄位。帳號已經有顯示正確的帳號，不須另外破解");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 3:
            if (flag3 == true) {
                alert("hint3 : 同樣右鍵點檢查，在elements那一列可以找到application，點擊cookie後可以看到hint的value有一串文字");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 4:
            if (flag4 == true) {
                alert("hint4 : 打開never_gonna_give_you_up跟So_cute兩個頁面(可以右鍵新分頁也可以開完返回再開)，觀察兩個頁面的網址");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 5:
            if (flag5 == true) {
                alert("hint5 : 兩個網址的相異處改成cookie的hint的value那行文字相似處保留，形成一個新的網址，進入那個網頁");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 6:
            if (flag6 == true) {
                alert("hint6 : 替換網址的fuck_my_life成i_love_coding");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 7:
            if (flag7 == true) {
                alert("hint7 : 同樣右鍵點檢查在element下面找到綠色文字");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 8:
            if (flag8 == true) {
                alert("hint8 : 綠色文字是有關柵欄加密的解密方法");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 9:
            if (flag9 == true) {
                alert("hint9 : 點application找到cookie，i_am_password的value的文字就是被加密過的密碼，將被加密過的密碼運用柵欄加密的邏輯破解(注意：旁邊的主要畫面很大，畫面最右邊有輸入密碼的位置)")
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 10:
            if (answer1 == true) {
                alert("answer1 : https://youtu.be/9fFd7GpdOz4");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 11:
            if (answer2 == true) {
                alert("answer2 : https://youtu.be/sW0rGjqmayE");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 12:
            if (answer3 == true) {
                alert("answer3 : https://youtu.be/YWvsl7K6Yb4");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
        case 13:
            if (answer4 == true) {
                alert("answer4 : https://youtu.be/653bSdJqnsM");
            } else {
                alert("還不能看喔～時間到自然就可以看了XD")
            }
            break;
    }
}