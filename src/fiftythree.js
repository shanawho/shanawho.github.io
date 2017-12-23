import App from 'App.js'

    
    <div class="wrapper">

	{renderThumbnail("", "wide")}

    <div class="text">
    	<p>
    		During the summer of 2015, I was a design intern 
    		on the prototyping team at <TextLink text="FiftyThree" url="fiftythree.com" />, 
    		where I worked on onboarding for Paper 3.0, the app's first iPhone release.
    	</p>

		<h4>Initial Prototyping</h4>

	    <p>We wanted to introduce small pointers at opportune times to let users discover helpful tips voluntarily. Tips lead to the Tip Center, letting people know where to find more help.</p>

	    <video class="mobile-proto" controls>
	    	<source src="../video/paper-gray.mp4" type="video/mp4"></source>
	    </video>

	    <video class="mobile-proto second" controls>
	    	<source src="../video/paper-orange.mp4" type="video/mp4"></source>
	    </video>


	    <div class="clearfix"></div>
	    <p>I built two fully interactive prototypes and tested them with new and returning users. The two prototypes differed in app entry point, pointer color, and tip design. We quickly learned that starting in the text canvas was confusing, and the pointers were unnoticeable next to the sample content.</p>


		<h4>Rapid Iteration</h4>

		<p>
			We decided to skip the pointers and directly introduce tips. I quickly iterated in between user testing sessions to build a prototype which would introduce tips at opportune moments. These tips lived directly on top of the app content, allowing users to directly interact with the content if they wished. For example, they could immediately test out the drag-to-reorder feature. See it on the left below.
		</p>

	    <video class="mobile-proto" controls>
	    	<source src="../video/paper-tip.mp4" type="video/mp4"></source>
	    </video>
	    <video class="mobile-proto second" controls>
	    	<source src="../video/paper-modal-tip.mp4" type="video/mp4"></source>
	    </video>

	    <div class="clearfix"></div>
		<p>
			However, more testing revealed that most people tapped or swiped away the tips without reading them. For the next iteration, I added a modal backdrop to make tips harder to accidentally dismiss. This design tested better than the non-modal tip, but some users still instinctively dismissed the tip pointer.
		</p>

		<h4>Tip Center Explorations</h4>
		<p>
			During user testing, we determined the tip center should be accessible from all screens. I worked on visual explorations for what it might mean to move the "?" out of the canvas tray.
		</p>

		<p>
			We decided to place the "?" mark in the top right of all views, tying it visually with the user avatar (its permanent home). I also worked on making the tip center contextual, surfacing the most relevant tips first. I prototyped both a hierarchical Tip Center (left) and a long Tip Center (right).
		</p>



	    <video class="mobile-proto" controls>
	    	<source src="../video/tip-center-hierarchy.mp4" type="video/mp4"></source>
	    </video>

	    <video class="mobile-proto second" controls>
	    	<source src="../video/tip-center-long.mp4" type="video/mp4"></source>
	    </video>


	    <div class="clearfix" />
	    <p>I also worked on visual explorations for prototypes for tip-to-tip navigation, resulting in an extensive onboarding prototyping design process and leading us to the final design which shipped shortly after I concluded my internship.</p>


		<h4>Final Design</h4>
		<p>
			Rapid prototyping allowed us to quickly test designs with real users and gain insight toward a better experience. The final onboarding design featured large tips with explicit dismissal buttons, a contextual long Tip Center, and smooth tip-to-tip gestural navigation.
		</p>


	    <figure>
	      <img src="../images/paper/paper.jpg" />
	    </figure>

		<a href="https://itunes.apple.com/us/app/paper-notes-photo-annotation/id506003812?mt=8" target="_blank" class="button">Download Paper</a>

		<h4>Credit</h4>
    	<p>
			I worked in a Javascript stack and built out an interactive onboarding experience on top of an existing prototype by <a href="https://twitter.com/presstube" target="_blank">James Paterson</a>. I also worked closely with <a href="https://twitter.com/pollybirdy" target="_blank">Paula Guntaur</a> who led design for our onboarding experience. 
		</p>

		<h4>My Summer Internship</h4>

		<p>
			I wrote a blog post about my internship experience at FiftyThree. You can see it on <a href="http://blog.fiftythree.com/posts/my-summer-internship-at-fiftythree" target="_blank">The Open Studio</a>.
		</p>
</div>


