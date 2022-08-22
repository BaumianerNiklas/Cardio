# ❥ Cardio

Cardio is a fun web app for drawing Cardioids and related mathematical figures with nothing but straight lines. A **Cardio**id is [what you get when following a point on a circle that is rolling around another circle of the same radius](https://en.wikipedia.org/wiki/File:Cardiod_animation.gif), or [the pattern refractured light makes in a cup](https://en.wikipedia.org/wiki/Cardioid#/media/File:Caustique.jpg), or, in this case, [the envelope of lines arranged in a circle](https://en.wikipedia.org/wiki/Cardioid#Cardioid_as_envelope_of_a_pencil_of_lines) (and many other things!). On here you'll get a Cardioid when "X Degree" and "Y Degree" (which are most definitely mathematically incorrect labels) are both equal to 2. Whenever X & Y Degree are equal, you'll get a more general form of a Cardioid, an Epicycloid. I have no idea what the mathematical term for the patterns that develop when X & Y Degree are different are, but they look cool anyway :D

I built this website because 1) watching straight lines build these patterns is mesmerizing, 2) screwing with parameters is fun, and 3) the actual drawing process is surprisingly simple. See [this section on Wikipedia](https://en.wikipedia.org/wiki/Cardioid#Cardioid_as_envelope_of_a_pencil_of_lines) for an explanation. The X and Y Degree on here just dictate how much the second point gets moved. The entire drawing logic is in [this component](src/components/Canvas.svelte) if you want to take a look at it.

## To Do

Optimize for mobile. Currently trying to figure out how to make the canvas look sharp on mobile devices without screwing up the layout of the page D:
