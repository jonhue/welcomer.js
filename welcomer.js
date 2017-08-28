$.fn.welcomer = function() {
    this.each(function() {
        var content = $(this).data('welcomer-content') || 'Say hello to Welcomer.js',
            link = $(this).data('welcomer-link'),
            href = $(this).data('welcomer-href'),
            newTab = $(this).data('welcomer-new_tab') || false,
            close = $(this).data('welcomer-close') || true,
            autoclose = $(this).data('welcomer-autoclose') || false,
            delay = $(this).data('welcomer-delay') || 1000;

        closer = '<div class="welcomer-closer"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><g transform="translate(0, 0)"><polygon fill="#fff" points="10.1,4.5 8,6.6 5.9,4.5 4.5,5.9 6.6,8 4.5,10.1 5.9,11.5 8,9.4 10.1,11.5 11.5,10.1 9.4,8 11.5,5.9 "></polygon></g></svg></div>'

        $(this).prepend('<div class="welcomer welcomer-hidden"><p>' + content + '</p>' + ((link && href) ? '<a href="' + href + '"' + (newTab ? ' target="_blank"' : '') + '>' + link + '</a>' : '') + (close ? closer : '') + '</div>');

        welcomerInit($(this).find('.welcomer'), autoclose, delay);
    });
};


function welcomerInit(welcomer, autoclose, delay) {
    setTimeout(function() {
        welcomerAppear(welcomer);
    }, delay);

    welcomer.find('.welcomer-closer, a').click(function() {
        welcomerDisappear(welcomer, autoclose);
    })
    if (autoclose) {
        welcomerAutoclose(welcomer, autoclose);
    };
};


function welcomerAutoclose(welcomer, autoclose) {
    setTimeout(function() {
        welcomerDisappear(welcomer, autoclose);
    }, autoclose);
};


function welcomerAppear(welcomer) {
    welcomer.removeClass('welcomer-hidden');
};

function welcomerDisappear(welcomer, autoclose) {
    if ( welcomer.parent().find('.welcomer:hover').length != 0 && autoclose != false ) {
        welcomerAutoclose(welcomer, autoclose);
    } else {
        welcomer.addClass('welcomer-hidden');
    };
};
