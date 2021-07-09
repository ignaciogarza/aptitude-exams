/*
  Write a bubble sort here
  Name the function bubbleSort
  
  If you want to suspend running the unit tests, change describe to xdescribe
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
  
  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.
  
*/

var bubbleSort = (numbs) => {
  
    do {
      var swapped = false;
      for(let i = 0; i< numbs.length; i++) {
        snapshot(numbs)
        
        if(numbs[i] > numbs[i+1]) {
          var temp = numbs[i];
          numbs[i] = numbs[i+1];
          numbs[i+1] = temp;
          swapped = true;
        }
      }
    } while(swapped);
    snapshot(numbs);
  };
  
  // function bubbleSort (nums) {
    
  //   snapshot(nums)
  // }
  
  // unit tests
  // do not modify the below code
  describe('bubble sort', function() {
    it('should sort correctly', () => {
      var nums = [10,5,3,8,2,6,4,7,9,1];
      bubbleSort(nums);
      expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
      done();
    });
  });