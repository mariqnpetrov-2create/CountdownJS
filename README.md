# Countdown JS

## Setup

Set the following IDs on their relevant elements in the HTML:

```
"cd-weeks" 		- for weeks
"cd-days" 		- for days
"cd-hours" 		- for hours
"cd-minutes" 	- for minutes
"cd-seconds" 	- for seconds
```

Add only the IDs you need (if you don't need all of the values).

## How to run

Run `new Countdown(dateToCountTo)` after the document is ready. `dateToCountTo` should be a valid date. Example "10/14/2017 12:36 PM".

## On End

Listen for `cdOver` window event - triggered when the countdown is over (and do something).

----

Use countdown.html for reference.
