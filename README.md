# Countdown JS

## Setup

Set the following IDs on their relevant elements in the HTML:

```
"cd-weeks" 		- for weeks, no maximum value
"cd-days" 		- for days, up to 6 if weeks is defined
"cd-hours" 		- for hours, up to 23 if days is defined
"cd-minutes" 	- for minutes, up to 59 if hours is defined
"cd-seconds" 	- for seconds, up to 59 if minutes is defined
```

Add all IDs up to the last one you need (if you don't need all of the values).

## How to run

Run `new Countdown(dateToCountTo)` after the document is ready. `dateToCountTo` should be a valid date. Example "10/14/2017 12:36 PM".

## On End

Listen for `cdOver` window event - triggered when the countdown is over (and do something).

----

Use countdown.html for reference.
