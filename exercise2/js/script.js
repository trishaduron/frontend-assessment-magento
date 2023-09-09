/* Copyright (C) 2023 Trisha Duron - All Rights Reserved */

$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        const listContainer = $('#list');
        let activeItem = null;

        // Iterate through the array of objects and create list items for each object
        $.each(data, function(index, item) {
            const listItem = $('<div class="list-item"></div>');
                    listItem.html(`
                        <div class="list__header">${item.title}</div>
                        <div class="list__content">${item.content}</div>
                    `);

                listContainer.append(listItem);

                listItem.click(function() {
                    if (activeItem !== listItem) {
                        if (activeItem) {
                            activeItem.removeClass('active');
                        }

                        listItem.addClass('active');
                        activeItem = listItem;
                    } else {
                        listItem.removeClass('active');
                        activeItem = null;
                    }
                });

                // Open the first accordion on load
                if (index === 0) {
                    listItem.addClass('active');
                    activeItem = listItem;
                }
        });
    })
    .fail(function(error) {
        console.error('Error fetching JSON:', error);
    });
});