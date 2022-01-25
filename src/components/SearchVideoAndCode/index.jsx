import { Container } from "./style";

function RenderVideoAndCode() {
  return (
    <Container>
      <div>
        <div>
          <h3>Linear Search Code</h3>
          <p>Time Complexity: O(n)</p>
          <p>Space Complexity: O(i)</p>
          <pre>
            {`
        function linearSearch(array, targetNumber){
            for(let i = 0; i < array.length; i++)
                if (array[i] == targetNumber)
                    return array[i];
            return -1;
        }`}
          </pre>
        </div>
        <div>
          <h3>Binary Search Code</h3>
          <p>Time Complexity: O(log(n))</p>
          <p>Space Complexity: O(i)</p>
          <pre>
            {`
        function binarySearch(array, targetNumber) {
            let right = array.length - 1;
            let left = 0;
            while (left <= right){
                let middle = Math.floor((right + left) / 2)
                if(targetNumber == array[middle])
                    return middle
                else if(targetNumber > array[middle])
                    left = middle + 1
                else 
                    right = middle - 1
            }
            
            return -1
        }`}
          </pre>
        </div>
      </div>
      <section>
        <h3><a href="https://www.youtube.com/embed/o3T-FG9lomM">Explanation About Sort Algorithm</a></h3>
        <div>
          <iframe
            width="560"
            height="310"
            src="https://www.youtube.com/embed/o3T-FG9lomM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </Container>
  );
}

export default RenderVideoAndCode;
