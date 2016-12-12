<b:if cond='data:blog.pageType == &quot;item&quot;'>    
<script type='text/javascript'>
//<![CDATA[
var emoRange = "#comments p, div.emoWrap",
    putEmoAbove = "iframe#comment-editor",
    emoMessage = "Untuk memasukkan emoticon setidaknya ada satu spasi sebelum kode emoticon.";

// Emoticon bar before comment-form
$(function() {
    $(putEmoAbove)
        .before('<div style="text-align:center" class="emoWrap"> :admire: :ahaaah: :bike: :bird: :badatmosphere: :bled: :blocked: :bsod: :bye: :cheer2: :confused: :congrats: :cool: :cruch: :crying2: :dead: :depressed: :desperate: :dong: :dreaming: :dying: :embarassed: :evilsmile: :expulsion: :fallingsleep: :freezing: :full: :ghost: :goodjob: :happy: :hate: :hehe: :hellyes: :help: :hi: :hot: :hypnosis: :info: :innocent: :kick: :kicked: :lie: :lol: :lonely: :love: :nonono: :noooo: :notlistening: :objection: :oh: :payup: :pff: :pointing: :pretty: :punch: :relax: :running: :scared: :scary: :serenade: :shock2: :shy: :sigh: :silence: :sleeping: :smoking: :spa: :steal: :stoned: :stress: :studying: :super: :supersayan: :sweating: :sweetdrop: :uhuhuh: :victory: :wait: :waiting: :warning: :washing: :wew: :whaaat: :whaaat2: :whaaat3: :what: :whistling: :woa: :work: :wow: :wow2: :yawn: <br/><b>Klik untuk melihat kode!</b><br/><i><a href="http://www.downimekun.ga/p/emoticon-list-downimekun.html" rel="nofollow" target="_blank">+Klik disini untuk melihat semua code emoticon+</i></a><br/>Untuk memasukkan emoticon setidaknya ada satu spasi sebelum kode emoticon.</div>');
    var emo = function(emo, imgRep, emoKey) {
        $(emoRange)
            .each(function() {
            $(this)
                .html($(this)
                .html()
                .replace(/<br>:/g, "<br> :")
                .replace(/<br>;/g, "<br> ;")
                .replace(/<br>=/g, "<br> =")
                .replace(/<br>\^/g, "<br> ^")
                .replace(emo, " <img style='max-height:40px' src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
        });
    };
    emo(/\s:\admire\:+/g, "https://2.bp.blogspot.com/-YEFoYSZgPYc/WE0MkSgyYhI/AAAAAAAABA8/7Gwa9jG74gQAotrG6dM5du4XGaBlCMVsACEw/s1600/admire-onion-head-emoticon.gif", ":admire:");
    emo(/\s:\admire2\:+/g, "https://1.bp.blogspot.com/-m1Y-trcI730/WE0MkWAH3LI/AAAAAAAABA8/kAl9D1lWqj8NyEY5vFulaCIvA8QtEFkdACEw/s1600/admire2-onion-head-emoticon.gif", ":admire2:");
    emo(/\s:\ahaaah\:+/g, "https://2.bp.blogspot.com/-SOfeDdWnjTI/WE0Mkeg71tI/AAAAAAAABA8/LYSsVyQRbgwf4IConqWfb3bF_hnaa2HUwCEw/s1600/ahaaah-onion-head-emoticon.gif", ":ahaaah:");
	emo(/\s:\beaten\:+/g, "https://3.bp.blogspot.com/-ERwqzjkynrc/WE0MlqlxWcI/AAAAAAAABA8/d7l0t6QTkVAeAXxZrbFS0fxn1BQqt35ZQCEw/s1600/beaten-onion-head-emoticon.gif", ":beaten:");
	emo(/\s:\beg\:+/g, "https://2.bp.blogspot.com/-FoINch0JIHQ/WE0MlhJfaMI/AAAAAAAABA8/vM0dKBqq7hEcKAtBNGLHdwo2Ths6NLdyQCEw/s1600/beg-onion-head-emoticon.gif", ":beg:");
	emo(/\s:\bigeye\:+/g, "https://1.bp.blogspot.com/-UwYABQsvITc/WE0Mlw20lRI/AAAAAAAABA8/pP0xeHqWPC8MVn6Sb-6b-uzWuYHR6CcUwCEw/s1600/big-eye-onion-head-emoticon.gif", ":bigeye:");
	emo(/\s:\angel\:+/g, "https://2.bp.blogspot.com/-Ocn6WGUAMHg/WE0Mk3NpPnI/AAAAAAAABA8/oh-VYaU7a0MMcv4gEGoiwGFJBkagn9MkgCEw/s1600/angel1-onion-head-emoticon.gif", ":angel:");
	emo(/\s:\angel2\:+/g, "https://2.bp.blogspot.com/-E1uCuZuhX0k/WE0Mkw87NBI/AAAAAAAABA8/5oM1H3W6K88LSeeTYY7o7zpuUubEr11OACEw/s1600/angel2-onion-head-emoticon.gif", ":angel2:");
	emo(/\s:\bike\:+/g, "https://1.bp.blogspot.com/-uC7lgxeHir0/WE0MmAykOwI/AAAAAAAABA8/mTCIESmU_3IcKwz7glrrpJtRMj-OGTQyACEw/s1600/bike-onion-head-emoticon.gif", ":bike:");
	emo(/\s:\bird\:+/g, "https://2.bp.blogspot.com/-hM9YHc_fuR8/WE0MmSdq2tI/AAAAAAAABA8/Y3ZPAh27P3Uk_VPtrzmitrjvgwiDsbq0ACEw/s1600/bird-onion-head-emoticon.gif", ":bird:");
	emo(/\s:\badatmosphere\:+/g, "https://2.bp.blogspot.com/-8-pSIcNFx6I/WE0MlANqXYI/AAAAAAAABA8/hz8bBXdSk94TlskBzvyQTNKQn33-69zNgCEw/s1600/bad-atmosphere-onion-head-emoticon.gif", ":badatmosphere:");
	emo(/\s:\bled\:+/g, "https://3.bp.blogspot.com/-L4AY2MVUQ-c/WE0MmqSmVTI/AAAAAAAABA8/Ybi0r_p4in04t-7x2HXW1Da21-l4cA6nACEw/s1600/bled1-onion-head-emoticon.gif", ":bled:");
	emo(/\s:\bled2\:+/g, "https://3.bp.blogspot.com/-d9DZXsgzk1g/WE0Mmm3uk-I/AAAAAAAABA8/ag8_FnmQdIM4h6jXoMhqn5RDzrzzfMhYACEw/s1600/bled2-onion-head-emoticon.gif", ":bled2:");
	emo(/\s:\bleeding\:+/g, "https://1.bp.blogspot.com/-BJ2-9Rx9BnU/WE0MnFnz5oI/AAAAAAAABA8/ANUHszKGZoAMI4sd_53LnJkymidYkamagCEw/s1600/bleeding-onion-head-emoticon.gif", ":bleeding:");
	emo(/\s:\blocked\:+/g, "https://2.bp.blogspot.com/-q-cyaXZqMaM/WE0MnWZ6uqI/AAAAAAAABA8/1-kHDIO0MR0oKHwI1TrxfTXQKJqyAElPACEw/s1600/blocked-onion-head-emoticon.gif", ":blocked:");
	emo(/\s:\bsod\:+/g, "https://4.bp.blogspot.com/-F_O7o9dYW18/WE0MnVH2j0I/AAAAAAAABA8/VbQeToG0T-U82J-D_sEvlwKAO3WO33v6ACEw/s1600/bsod-onion-head-emoticon.gif", ":bsod:");
	emo(/\s:\bye\:+/g, "https://3.bp.blogspot.com/-7N0QV3A3cac/WE0MnselFbI/AAAAAAAABA8/Dg9GyvlxPuQKzfnm1OoM8gTKmJxvNjwmQCEw/s1600/bye1-onion-head-emoticon.gif", ":bye:");
	emo(/\s:\bye2\:+/g, "https://3.bp.blogspot.com/-1wR1mfVuZ1I/WE0Mn9re2iI/AAAAAAAABA8/A1QNn4gxEzIgqf3JK0E7dYRZdcXQ4HJgwCEw/s1600/bye2-onion-head-emoticon.gif", ":bye2:");
	emo(/\s:\cheer\:+/g, "https://2.bp.blogspot.com/-MMuh-TjZToE/WE0MoAq5F5I/AAAAAAAABA8/PO0gOuWeJOgTSqUTQ-ZoeHbt8BoRN7lsgCEw/s1600/cheer1-onion-head-emoticon.gif", ":cheer:");
	emo(/\s:\cheer2\:+/g, "https://1.bp.blogspot.com/-5C351zqY1-g/WE0MoUr2LtI/AAAAAAAABA8/qCVi8QopmRsNaMSjjs_Ky1oNafjJzefeACEw/s1600/cheer2-onion-head-emoticon.gif", ":cheer2:");
	emo(/\s:\cheer3\:+/g, "https://3.bp.blogspot.com/-jQ9QuP_p1uA/WE0MpK18JrI/AAAAAAAABA8/PBJ-KF5Ts_wPp42PLqS3iDiyt6l4lX9-ACEw/s1600/cheer3-onion-head-emoticon.gif", ":cheer3:");
	emo(/\s:\confused\:+/g, "https://4.bp.blogspot.com/-BFDqAYknCVQ/WE0MpThKzlI/AAAAAAAABA8/07ehlW8aniYQRobiuA2hBy0g0as0tQHMwCEw/s1600/confused-onion-head-emoticon.gif", ":confused:");
	emo(/\s:\congrats\:+/g, "https://4.bp.blogspot.com/-9a5MFlw8Ozs/WE0MpuXiGyI/AAAAAAAABA8/8yI0gVUnYw8LJ5L0UmCCaeEq2wvBYzusQCEw/s1600/congrats-onion-head-emoticon.gif", ":congrats:");
	emo(/\s:\cool\:+/g, "https://1.bp.blogspot.com/-Wlw618G0lu8/WE0Mpxkc4CI/AAAAAAAABA8/W0UhcRbHUVM8GW-eOo6BSmMXCH_7wIBzACEw/s1600/cool-onion-head-emoticon.gif", ":cool:");
	emo(/\s:\cruch\:+/g, "https://4.bp.blogspot.com/-HPsEyiP1jSs/WE0MqEBtr5I/AAAAAAAABA8/pSP2ZW-pB6IMVzgJDCZXwcbQ2iV35ciqACEw/s1600/cruch-onion-head-emoticon.gif", ":cruch:");
	emo(/\s:\crying\:+/g, "https://2.bp.blogspot.com/-GeWp6KYx63U/WE0MqIYO_nI/AAAAAAAABA8/5tgiVZ_5Poc64KqtiEBYDEz2O4dMRtbugCEw/s1600/crying1-onion-head-emoticon.gif", ":crying:");
	emo(/\s:\crying2\:+/g, "https://1.bp.blogspot.com/-3FkHyBnN21Q/WE0MqhOv36I/AAAAAAAABA8/FbTD417lnecFxlLs8FBHuCnjO0zHTcSbQCEw/s1600/crying2-onion-head-emoticon.gif", ":crying2:");
	emo(/\s:\crying3\:+/g, "https://1.bp.blogspot.com/-kWPRrRysJOg/WE0Mq4Hx8KI/AAAAAAAABA8/VuK0869qG2chCLTqIYs5gJCiZYjnqmIFwCEw/s1600/crying3-onion-head-emoticon.gif", ":crying3:");
	emo(/\s:\cute\:+/g, "https://3.bp.blogspot.com/-1j13TdgdLx8/WE0Mq5XjZiI/AAAAAAAABA8/1ZcFcskfDTMb4yJfxziYiMU27MV8e-5PQCEw/s1600/cute1-onion-head-emoticon.gif", ":cute:");
	emo(/\s:\cute2\:+/g, "https://2.bp.blogspot.com/-iIFJrcydKZ0/WE0MrSL-t7I/AAAAAAAABA8/ccP6LlWVFg0ExrGt1gqiAKS8SwLu2tqyACEw/s1600/cute2-onion-head-emoticon.gif", ":cute2:");
	emo(/\s:\dead\:+/g, "https://3.bp.blogspot.com/-tECshvhDJQU/WE0MrodE8GI/AAAAAAAABA8/UMmcLl-u-mkvaLjODSry8uJL1CiZTrvawCEw/s1600/dead-onion-head-emoticon.gif", ":dead:");
	emo(/\s:\depressed\:+/g, "https://3.bp.blogspot.com/-CLxIptJj3MY/WE0Mrs_8DiI/AAAAAAAABA8/92cr5wD4UsoAt4_PP29UpnR9utLUm7YeQCEw/s1600/depressed1-onion-head-emoticon.gif", ":depressed:");
	emo(/\s:\depressed2\:+/g, "https://2.bp.blogspot.com/-ljBMoQ5wHGc/WE0Mr_-5GAI/AAAAAAAABA8/ZIIfaDB8gsUtcIInb-c-B5wB49uBEe4RwCEw/s1600/depressed2-onion-head-emoticon.gif", ":depressed2:");
	emo(/\s:\desperate\:+/g, "https://4.bp.blogspot.com/-jTOgNUkdNos/WE0MsP5Vr3I/AAAAAAAABA8/KWETEeJ11K0g6b54ts2AUuzDOZ4SUXoNgCEw/s1600/desperate1-onion-head-emoticon.gif", ":desperate:");
	emo(/\s:\desperate2\:+/g, "https://1.bp.blogspot.com/-5a0osZgMraE/WE0MsdnfIEI/AAAAAAAABA8/9nY9XM8BY2MZyPx2Dp2gp633FDWqRKC4QCEw/s1600/desperate2-onion-head-emoticon.gif", ":desperate2:");
	emo(/\s:\dong\:+/g, "https://4.bp.blogspot.com/-5tgsnUS9WLk/WE0MspfhsWI/AAAAAAAABA8/QC8TNNgUe2QnZBgGcVPjqzZzsgat-vXtACEw/s1600/dong-onion-head-emoticon.gif", ":dong:");
	emo(/\s:\dreaming\:+/g, "https://3.bp.blogspot.com/-aiYJ8ccBD5Q/WE0MsrBf86I/AAAAAAAABA8/BQY9y2WiXZUuBTQ9-_e51qS-xCeDVp2aQCEw/s1600/dreaming-onion-head-emoticon.gif", ":dreaming:");
	emo(/\s:\dying\:+/g, "https://4.bp.blogspot.com/-IUGQKLn99DM/WE0Msz0WH5I/AAAAAAAABA8/TfiA5Laqe_01IBO5-GYi9J9-2yJLJCK0wCEw/s1600/dying-onion-head-emoticon.gif", ":dying:");
	emo(/\s:\eatenalive\:+/g, "https://3.bp.blogspot.com/-byeHr1uT1Jo/WE0MtLz74KI/AAAAAAAABBY/epAocLYS5_wJGFF8XeJmG0gfLQ8Lsx_xwCEw/s1600/eaten-alive-onion-head-emoticon.gif", ":eatenalive:");
	emo(/\s:\eatingme\:+/g, "https://1.bp.blogspot.com/--cuLmpJnXwQ/WE0MtSmuQ7I/AAAAAAAABBY/MunGgmT7xi01PYYcnxn3jA4LtC1SVya4gCEw/s1600/eating-me-onion-head-emoticon.gif", ":eatingme:");
	emo(/\s:\embarrassed\:+/g, "https://2.bp.blogspot.com/-xTcdmYkRtVc/WE0MtpfU-UI/AAAAAAAABBY/2Ak4XP5lPrgKbVy_lRs_UpW150N8PyxkgCEw/s1600/embarrassed1-onion-head-emoticon.gif", ":embarrassed:");
	emo(/\s:\embarrassed2\:+/g, "https://4.bp.blogspot.com/-D5UPZSrbMh8/WE0Mt9cUL7I/AAAAAAAABBY/BUs-M5Z2ofMWaqgeCHmPGv63Wjty_bCBwCEw/s1600/embarrassed2-onion-head-emoticon.gif", ":embarrassed2:");
	emo(/\s:\embarrassed3\:+/g, "https://3.bp.blogspot.com/-p19owowDCGQ/WE0Mt_as8hI/AAAAAAAABBY/fx2I6LlBHy4ChDTi9MKRasyEoKf9DNQ7wCEw/s1600/embarrassed3-onion-head-emoticon.gif", ":embarrassed3:");
	emo(/\s:\embarrassed4\:+/g, "https://3.bp.blogspot.com/-itkElR6PbUc/WE0MuostuDI/AAAAAAAABBY/hUhwB0xQVn06qmGNJTXnc9uHz_rnQeK-wCEw/s1600/embarrassed4-onion-head-emoticon.gif", ":embarrassed4:");
	emo(/\s:\evilsmile\:+/g, "https://4.bp.blogspot.com/-p_bgjBRcBGs/WE0Mui1AT0I/AAAAAAAABBY/wozxSGu2nhMw-1dlQW-gIT8csjott6eigCEw/s1600/evil-smile-onion-head-emoticon.gif", ":evilsmile:");
	emo(/\s:\expulsion\:+/g, "https://1.bp.blogspot.com/-3L15RQOUsdA/WE0Mu6fKgiI/AAAAAAAABBY/F4jwI6_7luI9UJ-WFXm4uhQCZP5Na2pagCEw/s1600/expulsion-onion-head-emoticon.gif", ":expulsion:");
	emo(/\s:\fallingasleep\:+/g, "https://3.bp.blogspot.com/-D2kh4ufTiSQ/WE0MvTM8qyI/AAAAAAAABBY/qe-JJcsKakI480_eesUuvJMw-CA8n23EgCEw/s1600/falling-asleep-onion-head-emoticon.gif", ":fallingasleep:");
	emo(/\s:\freezing\:+/g, "https://4.bp.blogspot.com/-0VlgrIV9P4w/WE0Mvavt7iI/AAAAAAAABBY/0JXRWy55mssBKnY8IMRE4aT0FICk1mwyQCEw/s1600/freezing-onion-head-emoticon.gif", ":freezing:");
	emo(/\s:\frozen\:+/g, "https://1.bp.blogspot.com/-caSJRId1bw0/WE0Mvkzs0II/AAAAAAAABBY/7_TA2azul7c0t6g-bW0Yh5FLzTGyVGCIACEw/s1600/frozen-onion-head-emoticon.gif", ":frozen:");
	emo(/\s:\full\:+/g, "https://1.bp.blogspot.com/-M2bd5Ptw_sU/WE0MwH4HPpI/AAAAAAAABBY/l15yw0qZQqwkbyYc6btUO7-zAW6QIqD5wCEw/s1600/full-onion-head-emoticon.gif", ":full:");
	emo(/\s:\ghost\:+/g, "https://2.bp.blogspot.com/-kqrhM7_c4RM/WE0Mwf760jI/AAAAAAAABBY/IXZT_zE70_cEMqEOWRVhHy-tL_e4eVRDQCEw/s1600/ghost-onion-head-emoticon.gif", ":ghost:");
	emo(/\s:\goodjob\:+/g, "https://4.bp.blogspot.com/-EeOoFHzii4w/WE0MwupXpnI/AAAAAAAABBY/0iJKSh1vcXcpPv9I40e7MEkkSOh8rHbIwCEw/s1600/good-job-onion-head-emoticon.gif", ":goodjob:");
	emo(/\s:\goodluck\:+/g, "https://1.bp.blogspot.com/-SfGBXwlNzLg/WE0Mwl-Ky4I/AAAAAAAABBY/E4tfGfz5sq0YbR2KODOAgNybFNjqqeYWACEw/s1600/good-luck-onion-head-emoticon.gif", ":goodluck:");
	emo(/\s:\happybirthday\:+/g, "https://4.bp.blogspot.com/-vBfnLvC66Us/WE0MxpVDdMI/AAAAAAAABBY/4pU_7BY5gtc24zHqWzSRb7M_qURDMxpsQCEw/s1600/happy-birth-day1-onion-head-emoticon.gif", ":happybirthday:");
	emo(/\s:\happy\:+/g, "https://1.bp.blogspot.com/-PM8PHPSKOG0/WE0Mxl6NIuI/AAAAAAAABBY/TvO1ttQyrMoEF3jh320iJgwfkjT3sNYCACEw/s1600/happy-onion-head-emoticon.gif", ":happy:");
	emo(/\s:\hate\:+/g, "https://2.bp.blogspot.com/-DIOjKg4zufc/WE0MxwyDNkI/AAAAAAAABBY/8Uvu8WfwtMIYOZbQRN9Dpw8Qe3RCBZUjACEw/s1600/hate-onion-head-emoticon.gif", ":hate:");
	emo(/\s:\hehe\:+/g, "https://1.bp.blogspot.com/-HxFgsVqQipc/WE0MyceyqwI/AAAAAAAABBY/w8ck11CytqcjGG2j4QlF6SFlK2xbSi1ywCEw/s1600/hehe-onion-head-emoticon.gif", ":hehe:");
	emo(/\s:\hellyes\:+/g, "https://4.bp.blogspot.com/-DSEj2TYAfXo/WE0MyR9oYKI/AAAAAAAABBY/f8Bumx_sz2wEiqkzx6V62DE3n4o7d0Y0wCEw/s1600/hell-yes-onion-head-emoticon.gif", ":hellyes:");
	emo(/\s:\help\:+/g, "https://4.bp.blogspot.com/-uvGM2XeCAVk/WE0MyqGSrNI/AAAAAAAABBY/PdFDo7pBGQ8rPNCVpHdN92DfBa8x358HwCEw/s1600/help-onion-head-emoticon.gif", ":help:");
	emo(/\s:\hi\:+/g, "https://2.bp.blogspot.com/-uU56FNlmoTI/WE0MzLoW_kI/AAAAAAAABBY/eqvvKSeuyx49hZ4iUR1AimAmlt_hRsiIgCEw/s1600/hi-onion-head-emoticon.gif", ":hi:");
	emo(/\s:\hot\:+/g, "https://4.bp.blogspot.com/-j3XeGeikTgk/WE0MzBHYewI/AAAAAAAABBY/MvD3wDKftQA72PJIBf5RhdeGLWB-f6onACEw/s1600/hot1-onion-head-emoticon.gif", ":hot:");
	emo(/\s:\hot2\:+/g, "https://4.bp.blogspot.com/-BxhHMEqXn4U/WE0MzUWratI/AAAAAAAABBY/GL-PClbfinU_z8kLn9LuZQxUrsD8NTLWwCEw/s1600/hot2-onion-head-emoticon.gif", ":hot2:");
	emo(/\s:\hypnosis\:+/g, "https://3.bp.blogspot.com/-0E_2a6Gs018/WE0MzpZ2SVI/AAAAAAAABBY/19oPwFKPbzMakp8AN3aAAeSx6wWYoagOwCEw/s1600/hypnosis-onion-head-emoticon.gif", ":hypnosis:");
	emo(/\s:\ill\:+/g, "https://1.bp.blogspot.com/-EMZJkibqs-I/WE0MzwFboRI/AAAAAAAABBY/6xox-MNworsIxurkN40qyFZGEnCuPdkSwCEw/s1600/ill-onion-head-emoticon.gif", ":ill:");
	emo(/\s:\info\:+/g, "https://3.bp.blogspot.com/-sF-jb7psz1E/WE0M0GdIH6I/AAAAAAAABBY/qSk6cEJc_m4-oYRDjWRsKoqzamNDMb7LwCEw/s1600/info-onion-head-emoticon.gif", ":info:");
	emo(/\s:\innocent\:+/g, "https://3.bp.blogspot.com/-r0s4nyN_rBY/WE0M0RaA4bI/AAAAAAAABBY/sK1CFcXnpeAaThjrUZ1dl29P0gPi4CmiACEw/s1600/innocent-onion-head-emoticon.gif", ":innocent:");
	emo(/\s:\kick\:+/g, "https://3.bp.blogspot.com/---TdhOd4Ssc/WE0M0l1E2rI/AAAAAAAABBY/H2jlYzfTBqAWqoWC-LWkLyK0Wt1SbE4MwCEw/s1600/kick-onion-head-emoticon.gif", ":kick:");
	emo(/\s:\kicked\:+/g, "https://2.bp.blogspot.com/-O9Uv47sye-g/WE0M0_GPaDI/AAAAAAAABBY/L8IK6VpUGMQBUv5R3JT1maAgklcaSfRCQCEw/s1600/kicked1-onion-head-emoticon.gif", ":kicked:");
	emo(/\s:\kicked2\:+/g, "https://4.bp.blogspot.com/-zWYLPEMe8d4/WE0M1LAOtsI/AAAAAAAABBY/VIA95N__AsA3z2_gjKLw9_3Hd3WRk6h5QCEw/s1600/kicked2-onion-head-emoticon.gif", ":kicked2:");
	emo(/\s:\lie\:+/g, "https://3.bp.blogspot.com/-NCEQvYPQxjw/WE0M1U5P9bI/AAAAAAAABBY/s3nETaDQUgcC2pf57zsjQuksbMNc42ZdQCEw/s1600/lie-onion-head-emoticon.gif", ":lie:");
	emo(/\s:\lol\:+/g, "https://4.bp.blogspot.com/-Cu67obpTQW0/WE0M1njcJ5I/AAAAAAAABBY/W_3eGdfOHj4bxML4UOFAtHArUlHb5jJ5QCEw/s1600/lol1-onion-head-emoticon.gif", ":lol:");
	emo(/\s:\lol2\:+/g, "https://4.bp.blogspot.com/-jx8WJ5igygY/WE0M1q8l-EI/AAAAAAAABBY/2AaO8YfjhLc14v0Ckm1lgo8pkfyUeyjRwCEw/s1600/lol2-onion-head-emoticon.gif", ":lol2:");
	emo(/\s:\lonely\:+/g, "https://2.bp.blogspot.com/-kPq9TWURAIY/WE0M2N2XXpI/AAAAAAAABBY/t27PZv9KQj4oyVSUDsDKFJJAeJH6rXJngCEw/s1600/lonely-onion-head-emoticon.gif", ":lonely:");
	emo(/\s:\love\:+/g, "https://1.bp.blogspot.com/-ySdUs48VKHw/WE0M2TX5xvI/AAAAAAAABBY/Hacg0aI1kucS6BPZVCjpau4-iVt0Yb6WQCEw/s1600/love-onion-head-emoticon.gif", ":love:");
	emo(/\s:\meh\:+/g, "https://4.bp.blogspot.com/-0r5ARbJe7jg/WE0M2TOoiRI/AAAAAAAABBY/OK_YsiXmM-MKWE_r_gTe4GgYEO-2bAsLwCEw/s1600/meh-onion-head-emoticon.gif", ":meh:");
	emo(/\s:\nonono\:+/g, "https://1.bp.blogspot.com/-SzQSjfCQjWg/WE0M2mPsdSI/AAAAAAAABBY/9BgGlraL-Y4LMYRy-93mo0ywNxzSsEOuQCEw/s1600/nonono-onion-head-emoticon.gif", ":nonono:");
	emo(/\s:\noooo\:+/g, "https://4.bp.blogspot.com/--07Vx1R5l_0/WE0M4pl4b7I/AAAAAAAABBY/NwM2hq7nvQMkC3lGVeh8fQbgqGlXRHoGwCEw/s1600/noooo-onion-head-emoticon.gif", ":noooo:");
	emo(/\s:\notlistening\:+/g, "https://1.bp.blogspot.com/-3A_YmNnQsVM/WE0M4m05f1I/AAAAAAAABBY/UL_rOhmSN9sRgn-MxFclml4rFTdvcC5WACEw/s1600/not-listening-onion-head-emoticon.gif", ":notlistening:");
	emo(/\s:\objection\:+/g, "https://2.bp.blogspot.com/-MsKBXLPvAAE/WE0M40-PIgI/AAAAAAAABBY/KB9nFMWVGfcoHAEW1zKUApAHYgkYxXJzACEw/s1600/objection-onion-head-emoticon.gif", ":objection:");
	emo(/\s:\oh\:+/g, "https://4.bp.blogspot.com/-zx0a7ixuTmY/WE0M5eEI_5I/AAAAAAAABBY/6HvbbTxyY-Q12ul8CZHA7sfqcZzqvA46ACEw/s1600/oh-onion-head-emoticon.gif", ":oh:");
	emo(/\s:\payup\:+/g, "https://2.bp.blogspot.com/-W7XkKJr7w9c/WE0M5y1DyhI/AAAAAAAABBY/GKPdOHBUOMAnqfHYC47BhNAGYqEVXcYxwCEw/s1600/payup-onion-head-emoticon.gif", ":payup:");
	emo(/\s:\pff\:+/g, "https://3.bp.blogspot.com/-3ap8TTIeCF4/WE0M6FYO3DI/AAAAAAAABBY/P-e8s3kdqGkovSB9ltl55mkH_f5nv7arACEw/s1600/pff1-onion-head-emoticon.gif", ":pff:");
	emo(/\s:\pff2\:+/g, "https://3.bp.blogspot.com/-B1nZBi-lvxs/WE0M6QxS3HI/AAAAAAAABBY/KMlIxG-nWG4yDD5fLnYZ7hqlrjGG9c-vgCEw/s1600/pff2-onion-head-emoticon.gif", ":pff2:");
	emo(/\s:\pointing\:+/g, "https://2.bp.blogspot.com/-KmoXIwfI43I/WE0M6uysQvI/AAAAAAAABBY/MTktHhVVP94tB6Q6AQS1sNBIWgnXx7NxACEw/s1600/pointing-onion-head-emoticon.gif", ":pointing:");
	emo(/\s:\pretty\:+/g, "https://2.bp.blogspot.com/-9mVT_P7lB-g/WE0M7MWNGaI/AAAAAAAABBY/shjmSxnV-WIKL_qJ5JGPPsef859q1omAQCEw/s1600/pretty-onion-head-emoticon.gif", ":pretty:");
	emo(/\s:\punch\:+/g, "https://2.bp.blogspot.com/-SzrzMi-OtFo/WE0M7CTyWEI/AAAAAAAABBY/cvoH-3XHFCw510LbykoaRBsoJjtt86uuACEw/s1600/punch-onion-head-emoticon.gif", ":punch:");
	emo(/\s:\pushup\:+/g, "https://3.bp.blogspot.com/-Orkr3nQEBvM/WE0M7Skfk5I/AAAAAAAABBY/j_v-f5tFh90o2LHLHLjrOyPnNKE9tJdYACEw/s1600/push-up-onion-head-emoticon.gif", ":pushup:");
	emo(/\s:\relax\:+/g, "https://2.bp.blogspot.com/-1J6cKlrGy7A/WE0M8nNO2XI/AAAAAAAABBY/2q_zNNZYv9kVBYmkIpQFjFQLYCWxPe-FgCEw/s1600/relax1-onion-head-emoticon.gif", ":relax:");
	emo(/\s:\relax2\:+/g, "https://3.bp.blogspot.com/-Jydhd5AcjT8/WE0M9gSUgGI/AAAAAAAABBY/IWMmbL25BmQeYaarD3Qq0kDTt9DKxP2SgCEw/s1600/relax2-onion-head-emoticon.gif", ":relax2:");
	emo(/\s:\robot\:+/g, "https://2.bp.blogspot.com/-pJMV52ANytk/WE0M9o9QujI/AAAAAAAABBY/FX5VRvYYwFQJLo74Lqdt1tVJKjTl7ht2gCEw/s1600/robot-onion-head-emoticon.gif", ":robot:");
	emo(/\s:\running\:+/g, "https://2.bp.blogspot.com/-zuktbtw4gTk/WE0M93Jx5qI/AAAAAAAABBY/iEfPvMZUu24x-KVxVoVoPcdWur6nd27zgCEw/s1600/running-onion-head-emoticon.gif", ":running:");
	emo(/\s:\scared\:+/g, "https://1.bp.blogspot.com/-a9lOTqWQBWY/WE0M-FxV93I/AAAAAAAABBY/_SWjZ_lf1wkzWDB5vrV2_i8yeXBA9U50wCEw/s1600/scared-onion-head-emoticon.gif", ":scared:");
	emo(/\s:\scary\:+/g, "https://4.bp.blogspot.com/-qjrftPSUUeg/WE0M_Yhn2_I/AAAAAAAABBY/feXh1OCXKN44NNmw-hmYQE3_e4YeRqQOQCEw/s1600/scary-onion-head-emoticon.gif", ":scary:");
	emo(/\s:\serenade\:+/g, "https://3.bp.blogspot.com/-6PXC2pczgVg/WE0M_w6AP_I/AAAAAAAABBY/Ch72gxhUVEwJZbHWFSAxNp-Tqq8r6Q0xwCEw/s1600/serenade-onion-head-emoticon.gif", ":serenade:");
	emo(/\s:\shock\:+/g, "https://3.bp.blogspot.com/-nI78uQks7tw/WE0NAKJ0LsI/AAAAAAAABBY/o7fYjs-iUtAxvrjOmslUCk7hJQKhv90OgCEw/s1600/shock1-onion-head-emoticon.gif", ":shock:");
	emo(/\s:\shock2\:+/g, "https://4.bp.blogspot.com/-oBr3BaSJ57g/WE0NALrHE1I/AAAAAAAABBY/t6PvLw45Ga86F_1OEK2SSsWvw0wekgI5gCEw/s1600/shock2-onion-head-emoticon.gif", ":shock2:");
	emo(/\s:\shy\:+/g, "https://2.bp.blogspot.com/-RFqarS8bSLc/WE0NAo0dINI/AAAAAAAABBY/SOBcpa8GxioeriyPvnpMbkzuY2Wb3d_uwCEw/s1600/shy-onion-head-emoticon.gif", ":shy:");
	emo(/\s:\sigh\:+/g, "https://3.bp.blogspot.com/-YsZ16ApE0jA/WE0NA3b1tdI/AAAAAAAABBY/4VmLbnj5BTAORuc721HoUya2sAsLNV-_wCEw/s1600/sigh-onion-head-emoticon.gif", ":sigh:");
	emo(/\s:\silence\:+/g, "https://4.bp.blogspot.com/-drQPZIRM5Dw/WE0NAxqNXbI/AAAAAAAABBY/hm7LCxWIGsYPJC31y3FmtTPmAxvfLOabQCEw/s1600/silence-onion-head-emoticon.gif", ":silence:");
	emo(/\s:\sleeping\:+/g, "https://2.bp.blogspot.com/-e2wF8psjBu8/WE0NDM8QDwI/AAAAAAAABBY/Dr9g29Y8Cc0sF-rJJhD8ibF6f9B0BM_2ACEw/s1600/sleeping-onion-head-emoticon.gif", ":sleeping:");
	emo(/\s:\smoking\:+/g, "https://1.bp.blogspot.com/-Pz0UsMD_NXQ/WE0NDZfsK2I/AAAAAAAABBY/H1X_c0eDfNU_GI4gVFAbtpAfiXirq9TzwCEw/s1600/smoking1-onion-head-emoticon.gif", ":smoking:");
	emo(/\s:\smoking2\:+/g, "https://3.bp.blogspot.com/-moleOXfhMu4/WE0NDctElkI/AAAAAAAABBY/ansJUxYKQj0QRTfG_vx3nNoh7hSVejKIgCEw/s1600/smoking2-onion-head-emoticon.gif", ":smoking2:");
	emo(/\s:\spa\:+/g, "https://4.bp.blogspot.com/-ZUpE6lxxjzo/WE0NEdEhWfI/AAAAAAAABBY/_ABu_UYK7XI3yvqc27A8lCtZZpquT6KswCEw/s1600/spa-onion-head-emoticon.gif", ":spa:");
	emo(/\s:\starving\:+/g, "https://2.bp.blogspot.com/-hj_qusnwJVU/WE0NEgO-i2I/AAAAAAAABBk/8jzBvhMrk-ICk8wwLwYRUVBceRF5qts3ACEw/s1600/starving-onion-head-emoticon.gif", ":starving:");
	emo(/\s:\steal\:+/g, "https://2.bp.blogspot.com/-X0SW5_IOHhY/WE0NGYpm61I/AAAAAAAABBY/-wcJEnwW7FgeVHJckrEcuwNecVtTf13YQCEw/s1600/steal-onion-head-emoticon.gif", ":steal:");
	emo(/\s:\stoned\:+/g, "https://4.bp.blogspot.com/-w8aWibeAzn8/WE0NG1q3bvI/AAAAAAAABBY/lNHYmCsBMIEnIlFxRaXxceR5g71WnirXgCEw/s1600/stoned-onion-head-emoticon.gif", ":stoned:");
	emo(/\s:\stress\:+/g, "https://3.bp.blogspot.com/-79WwX7O3D3Q/WE0NGr4JJqI/AAAAAAAABBY/8nF80sQkA487EzuDAGihn_Lfux21jy4RACEw/s1600/stress-onion-head-emoticon.gif", ":stress:");
	emo(/\s:\studying\:+/g, "https://3.bp.blogspot.com/-xtYwi6BE0Cc/WE0NG_Ks6EI/AAAAAAAABBY/WPHvRfDrLdQZ359puZKbHNyv718BgpQYwCEw/s1600/studying-onion-head-emoticon.gif", ":studying:");
	emo(/\s:\super\:+/g, "https://2.bp.blogspot.com/-GW0ZHIsWoVc/WE0NH-X1_vI/AAAAAAAABBg/12ybp8JnZOEl4ysBwkIsni3FxDx9ma-QQCEw/s1600/super-onion-head-emoticon.gif", ":super:");
	emo(/\s:\supersayan\:+/g, "https://1.bp.blogspot.com/-CgQ5rDNTSNk/WE0NIVnH29I/AAAAAAAABBg/3uHUwoTkfioZ87EpVrU0TYZMfFoi7EsuwCEw/s1600/super-sayan-onion-head-emoticon.gif", ":supersayan:");
	emo(/\s:\sweating\:+/g, "https://4.bp.blogspot.com/-11Ps9-T4Eek/WE0NIUYWgtI/AAAAAAAABBg/4sgshOm6h5kPSvaULgwMfFyaISq8RSc5ACEw/s1600/sweating-onion-head-emoticon.gif", ":sweating:");
	emo(/\s:\sweetdrop\:+/g, "https://2.bp.blogspot.com/-lAHm0kmTeQ4/WE0NIsxo6KI/AAAAAAAABBg/jYzISb4VHv8imU4RHwsNS8olpWRTWAAwQCEw/s1600/sweetdrop-onion-head-emoticon.gif", ":sweetdrop:");
	emo(/\s:\tar\:+/g, "https://4.bp.blogspot.com/-wyi_6vFS2_E/WE0NIwmmvzI/AAAAAAAABBg/LoW5WcNtHK0NFxGaOoSCXVnHkEQzvMqSACEw/s1600/tar-onion-head-emoticon.gif", ":tar:");
	emo(/\s:\uhuhuh\:+/g, "https://3.bp.blogspot.com/-CxiIbqyrsmY/WE0NJE2jkgI/AAAAAAAABBg/bSe6DymGHrslkzVxsAyGWIaUE5XmDJeNQCEw/s1600/uhuhuh-onion-head-emoticon.gif", ":uhuhuh:");
	emo(/\s:\victory\:+/g, "https://1.bp.blogspot.com/-9yT8NtIrZQY/WE0NJZHYS8I/AAAAAAAABBg/VUiAF4MYe6kM7GD3YDderIPTkDx6hbxaACEw/s1600/victory-onion-head-emoticon.gif", ":victory:");
	emo(/\s:\vomiting\:+/g, "https://3.bp.blogspot.com/-TR3jB8OAQxA/WE0NJn_FleI/AAAAAAAABBg/cRzgNLuIzQk4V_B40uxTFNN7sBHNnx76wCEw/s1600/vomiting-onion-head-emoticon.gif", ":vomiting:");
	emo(/\s:\wait\:+/g, "https://2.bp.blogspot.com/-duTG9-nnnbM/WE0NJ5KnblI/AAAAAAAABBg/4Q7H8FlCqZkA5ztAuWd7Hv8xMc5WCtBJgCEw/s1600/wait-onion-head-emoticon.gif", ":wait:");
	emo(/\s:\waiting\:+/g, "https://1.bp.blogspot.com/-i4ZeTscVxAI/WE0NJ4FqxCI/AAAAAAAABBg/OOQE6W4Gn9kbLGoIq3frPELxofsqkCgvgCEw/s1600/waiting-onion-head-emoticon.gif", ":waiting:");
	emo(/\s:\warning\:+/g, "https://4.bp.blogspot.com/-wneO-rRjJpY/WE0NKDSZIpI/AAAAAAAABBg/stgGDi0y1iQp-zSvgG7-R1_9jsIwiUs9QCEw/s1600/warning-onion-head-emoticon.gif", ":warning:");
	emo(/\s:\washing\:+/g, "https://2.bp.blogspot.com/-wk3LCgTu-7M/WE0NKcgB4JI/AAAAAAAABBg/JRYpW1f3m9AM4oFhTO2PHXolV3Gv-59ywCEw/s1600/washing-onion-head-emoticon.gif", ":washing:");
	emo(/\s:\wet\:+/g, "https://4.bp.blogspot.com/-WxDV-Ad2ppA/WE0NKT91s8I/AAAAAAAABBg/UVabnSvoelc4XYO1ZiiejCIBzAcQlk-MQCEw/s1600/wet-onion-head-emoticon.gif", ":wet:");
	emo(/\s:\wew\:+/g, "https://2.bp.blogspot.com/-KYjsC512csU/WE0NLATxgDI/AAAAAAAABBg/P-ZM8x6b9-8_ajmo4bAr02O-rn4IvwT1gCEw/s1600/wew-onion-head-emoticon.gif", ":wew:");
	emo(/\s:\whaaat\:+/g, "https://4.bp.blogspot.com/-gLiFiS77x-Y/WE0NLahXlWI/AAAAAAAABBg/A_qEt0Ed2HghMNCOXzV89SYaB3yt-OOiACEw/s1600/whaaat1-onion-head-emoticon.gif", ":whaaat:");
	emo(/\s:\whaaat2\:+/g, "https://4.bp.blogspot.com/-aNC1aDKwi7w/WE0NLYkCcjI/AAAAAAAABBg/X9wmfYXvJJAgyaY7QJrTv6xEpaZ3lmUywCEw/s1600/whaaat2-onion-head-emoticon.gif", ":whaaat2:");
	emo(/\s:\whaaat3\:+/g, "https://4.bp.blogspot.com/-Dt8iFJhuENo/WE0NL67b07I/AAAAAAAABBg/oQkrSnZht2UifcEMcNqykpA1icpmfDRcgCEw/s1600/whaaat3-onion-head-emoticon.gif", ":whaaat3:");
	emo(/\s:\what\:+/g, "https://3.bp.blogspot.com/-F4mEXosj5W8/WE0NMJgsHRI/AAAAAAAABBg/pqBobYdD7ZQikTprkIze2fB774acTuopQCEw/s1600/what-onion-head-emoticon.gif", ":what:");
	emo(/\s:\whip\:+/g, "https://1.bp.blogspot.com/--WsJnsTYCX8/WE0NMNqLmiI/AAAAAAAABBg/RwoNjCkr9WoLdJGcs_lTi0Ds0tV--RdXgCEw/s1600/whip-onion-head-emoticon.gif", ":whip:");
	emo(/\s:\whistling\:+/g, "https://1.bp.blogspot.com/-inlcPvFl24A/WE0NMpFM6gI/AAAAAAAABBg/ihuP4k4pjhMU4lA_j_eNYlhMKYYlankDQCEw/s1600/whistling-onion-head-emoticon.gif", ":whistling:");
	emo(/\s:\woa\:+/g, "https://2.bp.blogspot.com/-5eCKHvXcohk/WE0NQCMbdlI/AAAAAAAABBg/CnhSdgwSFhw4TJCsTQBxDQlgd1jrhCwYACEw/s1600/woa-onion-head-emoticon.gif", ":woa:");
	emo(/\s:\work\:+/g, "https://2.bp.blogspot.com/-HWXxx3oaG_I/WE0NQAyDHdI/AAAAAAAABBg/55qqs4gr3twtrN2hujgZCm2KEZy1J-dJwCEw/s1600/work-onion-head-emoticon.gif", ":work:");
	emo(/\s:\wow\:+/g, "https://2.bp.blogspot.com/-N9HKYcODxls/WE0NQSkW8gI/AAAAAAAABBg/bxU5RrCAfHM-KCa5tt99N3g02p_Qj0xAQCEw/s1600/wow1-onion-head-emoticon.gif", ":wow:");
	emo(/\s:\wow2\:+/g, "https://2.bp.blogspot.com/-RQ5YjNcxAm4/WE0NQ0YKUOI/AAAAAAAABBg/8L0OoBzjicIwwyknZa0BnEnr9Q894iKzACEw/s1600/wow2-onion-head-emoticon.gif", ":wow2:");
	emo(/\s:\yawn\:+/g, "https://4.bp.blogspot.com/-UmoqcWhFxe8/WE0NQ_DssYI/AAAAAAAABBg/eM3GEUCDcxgi3BKrOEvfBOgJfj4YW3H4QCEw/s1600/yawn-onion-head-emoticon.gif", ":yawn:");

    
// Show alert one times!
    $('div.emoWrap')
        .one("click", function() {
        if (emoMessage) {
            alert(emoMessage);
        }
    });
    // Click to show the code!
       $('.emo')
        .css('cursor', 'pointer')
        .live("click", function(e) {
        $('.emoKey')
            .remove();
        $(this)
            .after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />');
$('.emoKey')
            .trigger("select");
e.stopPropagation();
    });
    $('.emoKey')
        .live("click", function() {
        $(this)
            .focus()
            .select();
    });

});
//]]>
</script>
</b:if>