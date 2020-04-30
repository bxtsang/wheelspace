# Raspberry Pi Simulating Train Cabin

The following is the flow used in the Raspberry Pi which would be installed in a train station
![alt text][logo]

[logo]: ./train-flow.JPG "Logo Title Text 2"

## BeaconScanner

The BeaconScanner node scans for all bluetooth signals, necessary for our simulation using a Microbit bluetooth signal.

## Filter & Set Next Station

Due to the presence of many bluetooth emmitting devices, the code in this node filters the signal ID and uses only the signal by the corresponding microbit installed. This microbit dynamically sets the next station number the train is going to, and is simulated as a system input.

The input from the microbit is then set as a global variable *nextStation* in the Raspberry Pi.

This code can be found in __*filter_and_set_nextStation.js*__

## Get Stations Data

The __get stations data__ node makes a call to the Firebase API endpoint to retrieve the data of all the stations.
API endpoint: https://smrt-a02d5.firebaseio.com/station.json
Method: *GET*

## Get Next Station Val

This node extracts the data of the next station, previously set as a global variable *nextStation*. The value is then passed into the LED node which will trigger the LED light attached to the Raspberry Pi to light up if the value is 1, and turn it off if the value is 0.

This code can be found in __*get_nextStation_val.js*__
