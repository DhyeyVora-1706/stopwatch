Hello.

In this Repository the code is about a stopwatch created using Javascript.

Core Logic implemented is as following

1. displayStopWatch() : This function takes care of how data should be displayed on the page , if any of the three variables here having value in single digit which is less than 10 then it will append 0 as a pre-fix to it.

2. startStopWatch() : This function checkes first the status of stop watch whether it is running or not using isRUnning variable , if it is not running then it will start the stopwatch. If 60 seconds are completedthen we need to add 1 minute and if 60 minutes are completed then we need to add 1 hour and every second this logic will execute and display accordingly.

3. stopStopWatch() :  This function clears the interval created by startStopWatch() function and sets isRunning flaf to false as stopwatch is not running.

4. resetStopWatch() : Here first we need to clear interval to reset and we need to mark isRunning flag as 0 so that is already implemented in the stopStopWatch() function and then we will set hours,minutes and seconds to 0 and display these values.
