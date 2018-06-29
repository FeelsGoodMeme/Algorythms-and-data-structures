
     function binarySearch( list,  item) {
        var low = 0;
        var high = list.length - 1;

       while (low <= high) {
            var mid =  Math.floor((high + low) / 2);
           var  guess = list[mid];
           if (guess == item) {
               return mid;
           }
           if (guess > item) {
               high = mid + 1;
           } else {
               low = mid + 1;
           }
       }

       return null;
   }

 
       myList = [1, 3, 5, 7, 9];

       console.log(binarySearch(myList, 5)); // 1
       console.log(binarySearch(myList, -1)); // null