$(function () {
    const sidebar = $('.main__sidebar'),
        newsBlock = $('.main__news-blocks .news-block:last-child'),
        otherNewsBlock = $('.other-news'),
        form = $('.container-contact100'),
        requisits = $('.requisits'),
        contactsHeader = $('.contacts__header');

    if ($(window).width() <= 767) {
        newsBlock.append(otherNewsBlock);
        requisits.append(form);
        sidebar.remove();
        contactsHeader.remove();
        $('.col-md-auto').removeClass("col-md-auto");
    }
})