$.fn.welcomer = function() {
    this.each(function() {
        var content = $(this).data('welcomer-content') || 'Say hello to welcomer.js',
            link = $(this).data('welcomer-link'),
            href = $(this).data('welcomer-href'),
            newTab = $(this).data('welcomer-new_tab') || false,
            close = $(this).data('welcomer-close') || true,
            autoclose = $(this).data('welcomer-autoclose') || false,
            turbolinks = $(this).data('welcomer-turbolinks') || false;

        closer = '<div class="welcomer-closer"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><g transform="translate(0, 0)"><polygon fill="#fff" points="10.1,4.5 8,6.6 5.9,4.5 4.5,5.9 6.6,8 4.5,10.1 5.9,11.5 8,9.4 10.1,11.5 11.5,10.1 9.4,8 11.5,5.9 "></polygon></g></svg></div>'

        $(this).prepend('<div class="welcomer welcomer-hidden"><p>' + content + '</p>' + ((link && href) ? '<a href="' + href + '"' + (newTab ? ' target="_blank"' : '') + '>' + link + '</a>' : '') + (close ? closer : '') + '</div>');

        // Appear
        if (turbolinks) {
            document.addEventListener( 'turbolinks:load', function() {
                welcomerAppear();
            });
        } else {
            $(function() {
                welcomerAppear();
            });
        };


        // Disappear
        $(this).find('.welcomer-closer').click(function() {
            welcomerDisappear();
        })

        if (autoclose) {
            welcomerAutoclose();
        };
        function welcomerAutoclose() {
            setTimeout(function() {
                welcomerDisappear();
            }, autoclose);
        };


        function welcomerAppear() {
            $(this).removeClass('welcomer-hidden');
        };

        function welcomerDisappear() {
            if ($(this).is(':hover') && autoclose) {
                welcomerAutoclose();
            } else {
                $(this).addClass('welcomer-hidden');
            };
        };
    });
};
