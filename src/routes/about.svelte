<div class="w-[min(60vw,_58rem)] ml-auto mr-auto text-xl">
	<main>
		<a href="/">
			<h1 class="text-yellow-500 my-4 text-5xl">❥ Cardio</h1>
		</a>
		<a href="/">[Take me home]</a>
		<a href="https://github.com/BaumianerNiklas/Cardio">[View source on GitHub]</a>
		<p>
			Cardio is a fun web app for drawing <span class="font-bold">Cardio</span>ids and related mathematical
			figures with nothing but straight lines. A Cardioid is
			<a href="https://en.wikipedia.org/wiki/File:Cardiod_animation.gif" target="_blank"
				>what you get when following a point on a circle that is rolling around another circle of the same
				radius</a
			>, or
			<a href="https://en.wikipedia.org/wiki/Cardioid#/media/File:Caustique.jpg" target="_blank"
				>the pattern refractured light makes in a cup</a
			>, or, in this case,
			<a href="https://en.wikipedia.org/wiki/Cardioid#Cardioid_as_envelope_of_a_pencil_of_lines" target="_blank"
				>the envelope of lines arranged in a circle</a
			>
			(and many other things!). On here you'll get a Cardioid when "X Degree" and "Y Degree" (which are most definitely
			mathematically incorrect labels) are both equal to 2. Whenever X & Y Degree are equal, you'll get a more general
			form of a Cardioid, an
			<a href="https://en.wikipedia.org/wiki/Epicycloid" target="_blank">Epicycloid</a>. I have no idea what the
			mathematical term for the patterns that develop when X & Y Degree are different are, but they look cool
			anyway :D

			<br />
			<br />

			I built this website because 1) watching straight lines build these patterns is mesmerizing, 2) screwing
			with parameters is fun, and 3) the actual drawing process is surprisingly simple. See
			<a href="https://en.wikipedia.org/wiki/Cardioid#Cardioid_as_envelope_of_a_pencil_of_lines" target="_blank"
				>this section on Wikipedia</a
			>
			for an explanation. The X and Y Degree on here just dictate how much the second point gets moved. The entire
			drawing logic is in
			<a href="https://github.com/BaumianerNiklas/Cardio/tree/main/src/components/Canvas.svelte">this component</a
			> if you want to take a look at it.
		</p>
	</main>
</div>

<style>
* {
	line-height: 2.5rem;
}
a {
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
}
</style>
