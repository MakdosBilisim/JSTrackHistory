<script>

    window.onclick = function (e) {

        var node = e.target;
        while (node != undefined && node.localName != 'a') {
            node = node.parentNode;
        }

        if (node != undefined) {

            var onceki_link = document.referrer;
            var gidilecek_link = node.href;

            var gidilecek_link_domaini_bul = gidilecek_link.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
            var gidilecek_link_domain = gidilecek_link_domaini_bul && gidilecek_link_domaini_bul[1];
            var gidilecek_link_domainsiz = gidilecek_link.replace(gidilecek_link_domain, '').replace(/(^\w+:|^)\/\//, '');

            if (onceki_link.includes(gidilecek_link_domainsiz)) {
                window.history.back();
            }
            else {
                window.location.href = gidilecek_link;
            }
            return false;
        } else {
            return true;
        }
    };


    var ex = history.length;
    console.log(ex + " link gezilerek bu sayfaya ulaşıldı!.")

</script>
