window.onload = function() {
    var count = 1;
    var flipIdExists = true;

    var bookRight = document.getElementById('book-right');
    var bookLeft = document.getElementById('book-left');
    var nextLink = document.getElementById('next-link');
    var backLink = document.getElementById('back-link');
    var moreLink = document.getElementById('more-link');



    var onBackClick = function() {
        if (count > 1) {
            /* as long as we are not on the first page */

            if (count == 14) {
                nextLink.style.display = 'block';
            }

            if (flipIdExists) {
                var flip = document.getElementById('flip');
            } else {
                /* #flip doesn't exist, so get #flip-back instead */
                var flip = document.getElementById('flip-back');
            }

            /* start the flip */
            flip.id = 'flip-back';
            flip.setAttribute('class', 'flip-on-click');

            /* replace in js so animation can rerun */
            var elm = flip;
            var newone = elm.cloneNode(true);
            elm.parentNode.replaceChild(newone, elm);

            /* decrement so we get the right count for the previous page */
            count = count-1;

            /* reassign images for the next flip */
            /* Take note that when we hit previous to flip-back, the front and back images get switched!! 
                We apply classes accordingly */
            document.getElementById('left').setAttribute('class', 'left'+count);
            document.getElementById('front').setAttribute('class', 'back'+count);
            document.getElementById('back').setAttribute('class', 'front'+count);
            document.getElementById('right').setAttribute('class', 'right'+count);


            if (count == 1) {
                backLink.style.display = 'none';
            }

            /* This boolean helps us keep track if #flip OR #flip-back exists */
            flipIdExists = false;
        }
    }


    var onNextClick = function() {

        if (count < 14) {
            /* If it is one of the 15 pages available */

            if (flipIdExists) {
                var flip = document.getElementById('flip');
            } else {
                /* #flip doesn't exist, so get #flip-back instead */
                var flip = document.getElementById('flip-back');
            }

            /*  flip to the next page */
            flip.id = 'flip';
            flip.setAttribute('class', 'flip-on-click');
            /* animation will stay on last frame so page stays on the left */

            /*  replace the DOM element so the animation can rerun in case flip is clicked again */
            var elm = flip;
            var newone = elm.cloneNode(true);
            elm.parentNode.replaceChild(newone, elm);

            /* reassign images for the next flip */
            document.getElementById('left').setAttribute('class', 'left'+count);
            document.getElementById('front').setAttribute('class', 'front'+count);
            document.getElementById('back').setAttribute('class', 'back'+count);
            document.getElementById('right').setAttribute('class', 'right'+count);

            /* The images already start out on the right count, 
            so we want to increment the count AFTER we set class attributes */
            count = count + 1;

            if (count == 2) {
                backLink.style.display = 'block';
                backLink.addEventListener('click', onBackClick);

                nextLink.style.webkitAnimationPlayState = "paused";
            }
            if (count == 14) {
                nextLink.style.display = 'none';
                moreLink.style.display = 'block';
            }

            /* You just flipped to the next page! 
               Keep track of it in this boolean so we can check to see if #flip or #flip-back 
               is present when we click either next or previous */
            flipIdExists = true;
        }
    }
  
    nextLink.addEventListener('click', onNextClick);


    $(function(){
      $.scrollIt();
    });
}