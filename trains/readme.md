# Raspberry Pi Simulating Train Cabin

The following is the flow used in the Raspberry Pi which would be installed in a train station
![alt text][logo]

[logo]: ./train-flow.JPG "Logo Title Text 2"

## BeaconScanner

The BeaconScanner node scans for all bluetooth signals, necessary for our simulation using a Microbit bluetooth signal.

## Filter & Set Next Station

Due to the presence of many bluetooth emmitting devices, the code in this node filters the signal ID and uses only the signal by the corresponding microbit installed. This microbit dynamically sets the next station number the train is going to, and is simulated as a system input.

The input from the microbit is then set as a global variable in the Raspberry Pi.

This code can be found in __*filter_and_set_nextStation.js*__

## Set Val

Once the correct signal has been filtered, the Raspberry Pi makes an API call to Firebase to update the status of the station button.
API endpoint: https://smrt-a02d5.firebaseio.com/station/1/1.json

The first **1** represents the station number, meaning station 1 in this case.
The second **1** represents the door number, either 1 for the first door or 2 for the second door.
