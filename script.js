document.addEventListener("DOMContentLoaded", function() {
    // Array of image URLs
    const imagePaths = [
        'https://b.zmtcdn.com/data/dish_photos/19d/940d13075cd0631497f25f78021fc19d.jpg',
        'https://b.zmtcdn.com/data/dish_photos/25a/194bd5c376b4b94c8e5c52ce5a9c125a.jpg',
        'https://b.zmtcdn.com/data/dish_photos/042/1d349292cd43b4257ea0262d4c524042.jpg',
        'https://b.zmtcdn.com/data/dish_photos/114/5f7fb602ee57832c04fb4b8cb6630114.jpg',
        'https://b.zmtcdn.com/data/pictures/6/18274326/21488f46496f6717ff7d2703487398ea_featured_v2.jpg',
        'https://b.zmtcdn.com/data/pictures/2/90042/922a68bcf2d5d90b72317fcb9a173b17_featured_v2.jpg',
        'https://b.zmtcdn.com/data/dish_photos/b69/f45f5df90b12ad262e9ce72c881b5b69.jpg',
        'https://b.zmtcdn.com/data/dish_photos/e40/45918b5023b291c80944263b0a394e40.jpg',
        'https://b.zmtcdn.com/data/pictures/0/96750/fbc6d89ee2bc8b20829d9f9a8aa7cda1.jpg',
        'https://b.zmtcdn.com/data/pictures/7/90047/02fc1ae0092f62a94f6ec73ca220dd66_featured_v2.jpg',
        'https://b.zmtcdn.com/data/dish_photos/ce1/dc1235d05a6fb0d815d58581bc3c1ce1.jpg',
        'https://b.zmtcdn.com/data/pictures/7/18749517/76569e0c97ed0bd864c0243f6954f3a2_o2_featured_v2.jpg',
        'https://b.zmtcdn.com/data/dish_photos/059/a81d6444e53392dc5c0b774000fc8059.jpg',
        'https://b.zmtcdn.com/data/pictures/0/21073790/363ddcd118e66a466991cce308a866b2_o2_featured_v2.jpg',
        'https://b.zmtcdn.com/data/dish_photos/f8f/e35c8b23400e7ca42aeff42972ca0f8f.jpg',
        'https://b.zmtcdn.com/data/dish_photos/292/07ca37c0626a0ad0900c0e762e0cf292.jpg',
        'https://b.zmtcdn.com/data/dish_photos/78c/9283e738461f220777f6d5bdb7b0078c.jpg',
        'https://b.zmtcdn.com/data/pictures/7/19675617/e4683618d51d3d7e12c027e2be79954f_featured_v2.jpg',
        'https://b.zmtcdn.com/data/pictures/8/20082768/8e81be3a14199bf0426b460f1c921827_o2_featured_v2.jpg',
        'https://b.zmtcdn.com/data/pictures/6/19450636/d899d7a0004f048709f38be688444d24_o2_featured_v2.jpg',
        'https://b.zmtcdn.com/data/dish_photos/67b/ca11c2f64bd60d992ffd103e0fd2867b.jpg',
        'https://b.zmtcdn.com/data/pictures/3/96123/0e33b3eee19c71425992a489e79bc97e.jpg',
        'https://b.zmtcdn.com/data/pictures/7/20972687/4a03b244ee2a5751f73a65cd1a1bbd09_o2_featured_v2.jpg',
        'https://b.zmtcdn.com/data/pictures/7/21055787/1fd0dd40be6dc317af433fc47b480a8e_o2_featured_v2.jpg',
        'https://b.zmtcdn.com/data/pictures/5/21046085/5f34b23e96a911c85284a9e2a7101110_o2_featured_v2.jpg'
    ];

    const imageContainer = document.getElementById('imageContainer');

    imagePaths.forEach(function(path) {
        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Image';
        imageContainer.appendChild(img);
    });
});